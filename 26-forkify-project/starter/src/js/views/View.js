import icons from 'url:../../img/icons.svg';

export default class View {
  constructor(parentElement, data) {
    this.parentELement = parentElement;
    this._data = data;
  }
  /**
   * Render the received object to the DOM
   * @param {Object | Object[]} data The data to be rendered (e.g. recipe)
   * @param {boolean} [render = true] If false, create markup string instead of
   * rendering to the DOM.
   * @returns {undefined | string} A markup string is returned if render = false.
   * @this {Object} View instance.
   * @todo Finish implementation.
   */

  render(data, render = true) {
    //console.log('Renderin ', data);
    // if there is no data or if there is data but that data is an array and it's empty, in this
    //both cases we want the error to be shown.
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();
    if (!render) return markup;
    this._clear();
    this.parentELement.insertAdjacentHTML('afterbegin', markup); //Insert the new markup with all the info.
  }

  update(data) {
    //if (!data || (Array.isArray(data) && data.length === 0))
    //return this.renderError();

    this._data = data;
    const newMarkup = this._generateMarkup();
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*')); //This return a nodeList with Array.from()
    const curElements = Array.from(this.parentELement.querySelectorAll('*')); //This return a nodeList

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      //console.log(curEl, newEl.isEqualNode(curEl));

      //Updates changed TEXT //this fixed the flickering in the image because the text is the only one changed or replaced.
      //This code is only executed when it contains text directly.
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        curEl.textContent = newEl.textContent;
      }

      //Updates changed ATTRIBUTES
      //THis will return an object of all the attributes changed. and we convert that object to an Array.
      //The result is an array = (2) [class, data-update-to]
      if (!newEl.isEqualNode(curEl))
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
    });
  }

  _clear() {
    // console.log('_clear');
    // console.log(this);
    // console.log(this.parentELement);
    this.parentELement.innerHTML = ''; //remove the markup that is already there.
  }

  //SPINNER ANIMATION
  renderSpinner() {
    const markup = `
            <div class="spinner">
              <svg>
                <use href="${icons}#icon-loader"></use>
              </svg>
            </div>
      `;

    this._clear();
    this.parentELement.insertAdjacentHTML('afterbegin', markup);
  }
  //Implementing error and success messages

  renderError(message = this._errorMessage) {
    const markup = `
            <div class="error">
              <div>
                <svg>
                  <use href="${icons}#icon-alert-triangle"></use>
                </svg>
              </div>
              <p>${message} </p>
            </div> 
          `;
    this._clear();
    this.parentELement.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(message = this._message) {
    const markup = `
       <div class = "message">
        <div>
         <svg>
          <use href = "${icons}#icon-smile"></use>
         </svg>
        </div>
        <p>${message}</p>
      </div> 
      `;
    this._clear();
    this.parentELement.insertAdjacentHTML('afterbegin', markup);
  }
}
