function onClick_adicionar_paragrafo(){
    let elemento_paragrafo = document.createElement('p');
    elemento_paragrafo.textContent = 'Novo conteúdo de texto';
    document.body.appendChild(elemento_paragrafo);
}