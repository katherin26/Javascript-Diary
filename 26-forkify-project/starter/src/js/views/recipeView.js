/*The view is going to be a class and in this case called RecipeView ,later we will also have a parent
class called View which will contain a couple of methods that all the views should inherit.
We want each view to have a couple of private methods  and properties and so classes makes this 
really easy . One of them is going to be the parentElement
*/

import View from './View.js';
import icons from 'url:../../img/icons.svg';
//console.log(icons); //http://localhost:1234/icons.c097e590.svg
import { Fraction } from 'fractional'; //any libraries or any packages that we import from npm we don't
//even have to specify any path, this librarie change the numbers to 1/2 for example.
//console.log(Fraction); //:{Fraction: f} //f(numerator,denominator)

class RecipeView extends View {
  _errorMessage = `No recipes found for your query! Please try again`;
  _message = '';
  _imageUrl = new URL('../../img/recipe-01.jpg', import.meta.url);

  constructor() {
    super(document.querySelector('.recipe'));
  }

  /*Each view will render different HTML And we will simply have a method that generates that HTML
  so that the render method can then render that HTML 
  #generateMarkup : this is going to be a private method 
  */

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }

  addHandlerUpdateServings(handler) {
    this.parentELement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--update-servings');
      if (!btn) return;
      //NOTE: btn.dataset.updateTo
      //updateTo = Has camelcase because when there is a dash in the property name.
      // (data-update-to) then that will be converted to camelcase notation like this.
      const { updateTo } = btn.dataset;
      if (+updateTo > 0) handler(+updateTo); // + = because in {updateTo} is a string and we need to convert that to number with +.
    });
  }

  addHandlerAddBookmark(handler) {
    this.parentELement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--bookmark');
      if (!btn) return;
      handler();
    });
  }

  _generateMarkup() {
    return `
    <figure class="recipe__fig">
    <img src= "${this._imageUrl}" alt="${
      this._data.title
    }" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${this._data.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${icons}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${
        this._data.cookingTime
      }</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${icons}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${
        this._data.servings
      }</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--update-servings" data-update-to = "${
          this._data.servings - 1
        }">
          <svg>
            <use href="${icons}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--update-servings" data-update-to = "${
          this._data.servings + 1
        }">
          <svg>
            <use href="${icons}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated ${this._data.key ? '' : 'hidden'}">
      <svg>
      <use href="${icons}#icon-user"></use>
    </div>
    <button class="btn--round btn--bookmark">
      <svg class="">
        <use href="${icons}#icon-bookmark${
      this._data.bookmarked ? '-fill' : ''
    }"></use>
      </svg>
    </button>
  </div>

  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
     
  
    ${this._data.ingredients.map(this._generateMarkupIngredient).join('')}
  </div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This  this.#data was carefully designed and tested by
      <span class="recipe__publisher">${
        this._data.publisher
      }</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${this._data.sourceUrl}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="src/img/icons.svg#icon-arrow-right"></use>
      </svg>
    </a>
  </div>
    `;
  }

  _generateMarkupIngredient(ing) {
    return `
    <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="src/img/icons.svg#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${
        ing.quantity ? new Fraction(ing.quantity).toString() : ''
      }</div>
      <div class="recipe__description">
        <span class="recipe__unit">${ing.unit}</span>
        ${ing.description}
      </div>
    </li>
    `;
  }
}

export default new RecipeView();
