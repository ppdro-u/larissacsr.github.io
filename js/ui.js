// essa funcao seleciona o row (que esta no index)
// para depois desenhar todos os cards la
const sobremesas = document.querySelector('.sobremesas');

document.addEventListener('DOMContentLoaded', function() {
	// menus laterais 
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {edge:'left'});

	// formulario para adicionar sobremesa
	const forms = document.querySelectorAll('.side-form');
	var instances2 = M.Sidenav.init(forms, {edge:'right'});
});

//funcao para desenhar o card da receita na tela
//id, nome, descricao, link, endereco_imagem
const desenhaCard = (data, id) => {

    const html = `
  <div class="col s12 m6 l3 pesquisa_emprego" data-id="${id}">
	    <div class="card" style="background-color: #A59C94FF;">
		    <div class="card-image pesquisa_emprego-imagem">
	            <img src="images/${data.endereco_imagem}">
	            <span class="card-title pesquisa_emprego-titulo">"${data.nome}"</span>
	        </div>
	        <div class="card-content pesquisa_emprego-descricao">
	            <p>"${data.pesquisa_emprego}"</p>
	        </div>
	        <div class="card-action">
		        <a style="color: #AE0E36FF;" class="sobremesa-link" href="${data.link}">Saiba mais</a>
	        </div>
	        <div class="Pesquisas feitas">
                <i class="material-icons" data-id="${id}">delete_outline</i>
            </div>
	    </div>
   </div>`;
    sobremesas.innerHTML += html;

};
