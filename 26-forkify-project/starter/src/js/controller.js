import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

import 'core-js/stable'; //this is for pollyfilling everything else.
import 'regenerator-runtime/runtime'; //is for pollyfilling async await
import { async } from 'regenerator-runtime';

/*
if (module.hot) {
  module.hot.accept();
}*/

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    //console.log(id);

    if (!id) return; // if we don't have id so, return and appear the message for searching a recipe.
    recipeView.renderSpinner();

    //0. Update results view to mark selected search result.
    resultsView.update(model.getSearchResultsPage());
    //1. Updating bookmarks view
    bookmarksView.update(model.state.bookmarks);

    //2. Loading recipe
    await model.loadRecipe(id);
    /*This loadRecipe is a async function and is going to return a promise.
    We need to await that promise before we can move on in the next step in the execution of
    this async function.*/
    const { recipe } = model.state;

    //3. Rendering recipe.

    recipeView.render(model.state.recipe);

    const imageUrl = new URL('../img/recipe-01.jpg', import.meta.url);
  } catch (err) {
    recipeView.renderError();
    console.log(err);
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    //1. Get search query
    const query = searchView.getQuery();
    if (!query) return;

    //2.Load search results
    await model.loadSearchResults(query); //this doesn't return anything only manipulate the state.
    //3. Render results
    // resultsView.render(model.state.search.results);

    resultsView.render(model.getSearchResultsPage(1));
    //console.log(this._parentELement);
    //4. Render initial pagination buttons.
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};
//controlSearchResults();

const controlPagination = function (goToPage) {
  //1. Render NEW results
  resultsView.render(model.getSearchResultsPage(goToPage));
  //2. Render NEW pagination buttons.
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  //Update the recipe servings (in state)
  model.updateServings(newServings);

  //Update the recipe view
  //recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  //1) ADD REMOVE BOOKMARK
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  //2) UPDATE RECIPE VIEW
  recipeView.update(model.state.recipe);

  //3) RENDER BOOKMARKS
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  //console.log(newRecipe);
  try {
    //Show loading spinner
    addRecipeView.renderSpinner();

    //Upload the new recipe data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    //Render recipe
    recipeView.render(model.state.recipe);

    //Success Message
    addRecipeView.renderMessage();

    //Render bookmark view = we want to add a new element.
    bookmarksView.render(model.state.bookmarks);

    //Change ID in URL
    //We can call the pushState method and this will basically allow us to change the URL
    //without reloading the page.
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    //Close form window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error(err);
    addRecipeView.renderError(err.message);
  }
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};

init();

// window.addEventListener('hashchange', controlRecipes); //run the controlRecipes whenever that hashchanges.
// window.addEventListener('load', controlRecipes); //When you wanna change the page with the same URL

/*
EVENT HANDLER IN MVC : PUBLISHER-SUBCRIBER PATTERN: 
In the publisher subscriber pattern we have a publisher which is some code that knows when to react
 In this case that's going to be the addHandlerRender function because it will contain the addEvent-
 Listener method, it will know when to react to the event, in the other hand we have a subscriber 
 which is code that actually wants to react. So the solution is that we can now subscribe to the pu-
 blisher by passing into subcriber function  as an argument.
 As we call addHendlerRender(), we pass in our controlRecipes function as an argument, essentially 
 we subscribe controlRecipes to addHandlerRender at this point, the two functions are basically finally
 connected .
 Now addHandlerRender listens for events using the addEventListener method as always and then as soon 
 as the event actually happens the controlRecipes function will be called as the callback function of 
 addEventListener.
 */
