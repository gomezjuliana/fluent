function modalClose ( e ) {
  if ( !e.keyCode || e.keyCode === 27 ) {
    // code to close modal goes here
  }
}

document.addEventListener('keydown', modalClose);
