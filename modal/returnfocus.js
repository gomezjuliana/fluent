var lastFocus;

function modalShow () {
  lastFocus = document.activeElement;
}

function modalClose () {
  lastFocus.focus(); // place focus on the saved element
}

