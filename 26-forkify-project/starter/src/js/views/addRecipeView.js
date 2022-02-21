import View from './View.js';
import icons from 'url:../../img/icons.svg';

class AddRecipeView extends View {
  parentELement = document.querySelector('.upload');

  _message = 'Recipe was successfully uploaded :)';
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    //super(document.querySelector('.upload'));
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this.parentELement.addEventListener('submit', function (e) {
      e.preventDefault();
      // new FormData() que need to pass an element that is a form in this case is this
      //keyword , because we are inside of a handler function and so this points to this.
      //parentElement which is of course the upload form.
      //Now this here will then return a weird object that we can not used , but we can spread
      //that object into an array.
      const dataArr = [...new FormData(this)];
      //entries to an object
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
