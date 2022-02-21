class SearchView {
  _parentEl = document.querySelector('.search');

  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler(); //this handler function should be the control searchResults function.
    });
  }
}

export default new SearchView();

/*This class is not going to render anything all we want is to get the query and eventually to also
listen for the click event on the button*/
