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

    let controle = 0 

    if (controle === 0 || controle !== 0) {  
        trocaDisplayNone(informacoes);
        trocaDisplayNone(nomeSeminario);

        trocaDisplayOk(topicos);

        if (controle === 1) {
            trocaDisplayNone(informacoes);
            trocaDisplayNone(nomeSeminario);

            trocaDisplayOk(topicos);
            controle = 0;
        }

        controle = 1;
    } 
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

const voltarTopicos = () => {
    const informacoes = document.querySelector('.informacoes');
    const topicos = document.querySelector('.topicos');
    const nav = document.querySelector('.nav-site');
    const ref = document.querySelector('.referencias-final');

    if (topicos.style.display !== 'block') {
        ref.style.display = 'none';
        informacoes.style.display = 'none';
        topicos.style.display = 'inline-block';

        nav.style.display = 'block';
    }
}