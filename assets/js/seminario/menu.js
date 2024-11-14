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

const referenciaFinal = () => {
    const referencia = document.querySelector('.referencias-final');
    const informacoes = document.querySelector('.informacoes');
    const topicos = document.querySelector('.topicos');
    const nav = document.querySelector('.nav-site');

    if (referencia.style.display === 'none' || referencia.style.display === '') {
        referencia.style.display = 'block';
        informacoes.style.display = 'none';
        topicos.style.display = 'none';
        nav.style.display = 'none';
    }
}