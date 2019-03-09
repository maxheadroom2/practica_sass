// en este documento solo se encontrara las funciones de inicio de los componentes de materializecss

// Iniciar collpasibles de materialize

document.addEventListener('DOMContentLoaded', function collapsibles() {
  var elems = document.querySelectorAll('.collapsible');
  var instanciaColl = M.Collapsible.init(elems, {
    accordion: true
  });
});

// iniciar el nav izquierdo

var elem = document.querySelector('.sidenav');
var instanciaNav = new M.Sidenav(elem);

(function naV ($) {
  $(function naV () {
    $('.sidenav').sidenav();
  }); // end of document ready
})(jQuery); // end of jQuery name space
