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