var m = document.getElementById('modal_window'),
    p = document.getElementById('page');

// Remember that <div id="page"> surrounds the whole document,
// so aria-hidden="true" can be applied to it when the modal opens.

function swap () {
  p.parentNode.insertBefore(m, p);
}

swap();

