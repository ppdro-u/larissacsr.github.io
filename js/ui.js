const sobremesas = document.querySelector('.sobremesas');

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

// $('#textarea1').val('Novo Texto');
// M.textareaAutoResize($('#textarea1'));

const renderRecipe = (data, id) => {

    const html = `
  <div class="col s12 m6 l3 sobremesa" data-id="${id}">
	    <div class="card" style="background-color: #A59C94FF;">
		    <div class="card-image sobremesa-imagem">
	            <img src="../img/cup_cake-512.png">
	            <span class="card-title sobremesa-titulo">"${data.nome}"</span>
	        </div>
	        <div class="card-content sobremesa-descricao">
	            <p>"${data.descricao}"</p>
	        </div>
	        <div class="card-action">
		        <a style="color: #AE0E36FF;" class="sobremesa-link" href="${data.link}">Saiba mais</a>
	        </div>
	        <div class="sobremesa-deletar">
                <i class="material-icons" data-id="${id}">delete_outline</i>
            </div>
	    </div>
   </div>`;
    sobremesas.innerHTML += html;

};