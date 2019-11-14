// habilitar dados offline
db.enablePersistence()
    .catch(function(err) {
        if (err.code == 'failed-precondition') {
            // provavelmente multiplas abas abertas ao mesmo tempo
            console.log('Persistencia de dados falhou');
        } else if (err.code == 'unimplemented') {
            // browser nao suporta
            console.log('Persistencia nao disponivel');
        }
    });

// real-time listener que verifica as mudanças que ocorrem
db.collection('sobremesas').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
            renderRecipe(change.doc.data(), change.doc.id);
        }
        if (change.type === 'removed') {
            // remover da pagina tambem
        }
    });
});


<div id="side-form" class="sidenav side-form">
    <form class="adiciona-sobremesa container section">
      <h6 >Nova Sobremesa</h6>
      <div class="divider"></div>
      <div class="input-field">
        <input placeholder="ex. Brownie com Doce de leite" id="sobremesa-titulo" type="text" class="validate">
        <label for="sobremesa-titulo">Título da Sobremesa</label>
      </div>
      <div class="input-field">
        <input placeholder="Massa de chocolate meio-amargo e doce de leite argentino" id="sobremesa-descricao" type="text" class="validate">
        <label for="sobremesa-descricao">Descrição da Sobremesa</label>
      </div>
      <div class="input-field">
        <input placeholder="Coloque aqui um link que fale da sobremesa" id="sobremesa-link" type="text" class="validate">
        <label for="sobremesa-link">Link da Sobremesa</label>
      </div>
      <div class="input-field center">
        <button class="btn-small">Add</button>
      </div>
    </form>
  </div>



// adicionar nova receita
const form = document.querySelector('form');
form.addEventListener('submit', evt => {
    evt.preventDefault();
    const sobremesa = {
        nome: form.sobremesa-titulo.value,
        descricao: form.sobremesa-descricao.value,
        link: form.sobremesa-link.value,
        endereco_imagem: 'teste.com',
    };

    db.collection('sobremesas').add(recipe)
        .catch(err => console.log(err));

    //reseta o formulario
    form.sobremesa-titulo.value = '';
    form.sobremesa-descricao.value = '';
    form.sobremesa-link.value = '';

});