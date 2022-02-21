import { async } from 'regenerator-runtime';
import { API_URL, RES_PER_PAGE, KEY } from './config.js';
//import { getJSON, sendJSON } from './helpers.js';
import { AJAX } from './helpers.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};

const createRecipeObject = function (data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    ...(recipe.key && { key: recipe.key }),
  };
  //key recipe.key = We only want to add the key if there actually exists one, we can use
  //the && operator, which does short-circuiting.
  //so if recipe.key is a falsy value : nothing happens
  //but if is some value then the second part of the operator is executed and returned and
  //we can spread that object and put the values there and it would be like this:
  //key : recipe.key
};

/*This function is not going to return anything all it will do is to change our state object,
which will then contain the recipe and into which the controller will then grab and take the recipe
out of there.
So when this state object is going to get updated by loadRecipe then that state is also updated in 
the controller which imports the state 
*/
export const loadRecipe = async function (id) {
  try {
    const data = await AJAX(`${API_URL}${id}?key=${KEY}`);
    state.recipe = createRecipeObject(data);

    //NOTE:check if there is already a recipe with the same ID in the bookmarks state.
    //If it is then we will mark the current recipe. that we just loaded from the API
    //as bookmarked set to true.

    if (state.bookmarks.some(bookmark => bookmark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
  } catch (err) {
    //Temp error handling
    console.log(`${err}----ERROR-----`);
    throw err;
  }
};

//Implementing the search functionality

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;

    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);
    //console.log(data);

    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
        ...(rec.key && { key: rec.key }),
      };
    });
    //console.log(state.search.results); //59 [{...},{...},{...},{...},{...},...]
    state.search.page = 1; // this reset to page 1 when you search for another recipe.
  } catch (err) {
    console.log(`${err} -----ERROR----`);
    throw err;
  }
};

//loadSearchResults('pizza'); //{status: "success", results: 59, data: {...}}

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;

  //1 - 1 is 0 and 0 times 10 is then 0
  const start = (page - 1) * state.search.resultsPerPage; //0
  //Pages one times 10 is 10
  const end = page * state.search.resultsPerPage; //9

  return state.search.results.slice(start, end);
};

//NOTE: UPDATE SERVINGS
//{id: "5ed6604591c37cdc054bcd09"....}
////id ingredients: (10)[{...},..]
// 0 : quantity : 1, unit: "", description: "medium...."

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    //newQt = oldQt * newServings / oldServings
    // 2 * 8 / 4 = 4
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });

  //WE NEED TO UPDATE THE SERVINGS IN THE STATE
  state.recipe.servings = newServings;
};

//NOTE: STORING BOOKMARKS WITH LOCALSTORAGE

const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
  //Add bookmark
  state.bookmarks.push(recipe);

  //Mark current recipe as bookmarked
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  persistBookmarks();
};

export const deleteBookmark = function (id) {
  //Delete bookmarked
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);

  //Mark current recipe as NOT bookmarked
  if (id === state.recipe.id) state.recipe.bookmarked = false;

  persistBookmarks();
};

const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
};

init();
/*
console.log(`bookmarks`);
console.log(`bookmarks`, state.bookmarks);
*/
//funtion for debugging

const clearBookmarks = function () {
  localStorage.clear('bookmarks');
};
//clearBookmarks();

//This function eventually make a request to the API is going to be async function
//first task is gonna be take the raw imput data and transform it into the same format
//as the data that we also get out of the API.

export const uploadRecipe = async function (newRecipe) {
  //console.log(Object.entries(newRecipe)); //(12) [Array(2),Array(2),Array(2)]
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        //const ingArr = ing[1].replaceAll(' ', '').split(',');
        const ingArr = ing[1].split(',').map(el => el.trim());

        if (ingArr.length !== 3)
          throw new Error(
            'Wrong ingredient format! Please use the correct format... :)'
          );

        const [quantity, unit, description] = ingArr;
        return { quantity: quantity ? +quantity : null, unit, description };
      });

    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };

    console.log(recipe);
    //
    const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);
    //{title: "TEST", sourceUrl: "TEST", image: "TEST", publisher: "TEST", cookingTime: "23", …}
  } catch (err) {
    throw err;
  }
};
