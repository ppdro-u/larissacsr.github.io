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
            desenhaCard(change.doc.data(), change.doc.id);
            console.log(change.doc.data());
        }
        if (change.type === 'removed') {
            // remover da pagina tambem
        }
    });
});

// adicionar nova sobremesa
const form = document.querySelector('form');
form.addEventListener('submit', evt => {
    evt.preventDefault();
    var  teste = document.getElementById("fileButton").files[0].path;
    console.log(teste);

    const sobremesa = {
        nome: form.sobremesaTitulo.value,
        descricao: form.sobremesaDescricao.value,
        link: form.sobremesaLink.value,
        endereco_imagem: teste
    };

    db.collection('sobremesas').add(sobremesa)
        .catch(err => console.log(err));

    //reseta o formulario
    form.sobremesaTitulo.value = '';
    form.sobremesaDescricao.value = '';
    form.sobremesaLink.value = '';
    form.sobremesaArquivo.value = '';

});