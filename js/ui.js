document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

$('#textarea1').val('Novo Texto');
  M.textareaAutoResize($('#textarea1'));
