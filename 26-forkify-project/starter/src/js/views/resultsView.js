import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';

/*The spinner is inheriting that method so that renderSpinner method from its parent class. */
class ResultsView extends View {
  _errorMessage = `No recipes found for your query! Please try again`;
  _message = '';

  constructor() {
    super(document.querySelector('.results'));
  }

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
