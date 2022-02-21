import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';

/*The spinner is inheriting that method so that renderSpinner method from its parent class. */
class bookmarksView extends View {
  _errorMessage = `No bookmarks yet. Find a nice recipe and bookmark it :>`;
  _message = '';

  constructor() {
    super(document.querySelector('.bookmarks__list'));
  }

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new bookmarksView();
