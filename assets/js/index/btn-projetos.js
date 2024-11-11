apagarConteudo = (displayNone) => {
    const conteudoDesejado = document.querySelector(displayNone);
    conteudoDesejado.style.display = 'none';
}

areaProjetos = () => {
    
    // Apagar conteúdo da página
    projetos = '.projetos-e-desenvolvimento';
    sobreMim = '.sobre-mim';
    dadosEx = '.text-exercicios';

    apagarConteudo(projetos);
    apagarConteudo(sobreMim);
    apagarConteudo(dadosEx);

    // Adicionado estilo h2
    const titulo = document.querySelector('.title-exercicios');
    titulo.style.marginTop = '2em';
    titulo.style.fontSize = '1.4em';
    titulo.style.textContent = "Projetos e Desenvolvimento";
}

