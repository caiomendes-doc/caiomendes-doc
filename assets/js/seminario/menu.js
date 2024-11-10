function trocaDisplayNone (displayDesejado) {
    let displayT = document.querySelector(displayDesejado);

    if (displayT.style.display === 'flex' || displayT.style.display === '') {
        displayT.style.display = 'none';
    }
}

function trocaDisplayOk (displayDesejado) {
    let displayT = document.querySelector(displayDesejado);

    if (displayT.style.display === 'none' || displayT.style.display === '') {
        displayT.style.display = 'inline-block';
    }
}

function trocarInformacoesTela () {
    const nomeSeminario = '.nome-seminario';
    const informacoes = '.informacoes';
    const topicos = '.topicos';

    trocaDisplayNone(informacoes);
    trocaDisplayNone(nomeSeminario);

    trocaDisplayOk(topicos);
}
