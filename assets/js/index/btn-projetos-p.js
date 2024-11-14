// Autor: Caio Mendes
// Data: 11/11/2024
// Data-finalizado: --/--/----
// Versão: 0.1

// Descrição: Funções para a área de projetos
const apagarConteudo = (displayNone) => {
    const conteudoDesejado = document.querySelector(displayNone);
    conteudoDesejado.style.display = 'none';
}

// Função para selecionar o display
const selectDisplay = (classDesejada) => {
    const display = document.querySelector(classDesejada);
    return display.style.display;
}

// Função para verificar se o conteúdo está visível
const verificarDisplay = (valorDisplay) => {
    const verificacao = selectDisplay(valorDisplay);

    if ((verificacao != 'none') || (verificacao != '')) {
        console.log('true, é diferente de none');
        return true;
    } else {
        console.log('false, é igual a none');
        return false;
    }
}

// Função para criar divs
function criarDiv(classe, seletorPai) {
    const div = document.createElement('div');
    div.className = classe;
    
    const pai = document.querySelector(seletorPai);
    pai.appendChild(div);

    // Aplicar estilos se for um card
    if (classe === 'cards-projetos') {
        aplicarEstilosCard(div);
    }
}

// Função para criar tags desejadas
function criarTagDesejada(tag, seletorPai, texto, classe) {
    const elemento = document.createElement(tag);
    if (classe) {
        elemento.className = classe;
    }
    elemento.textContent = texto;
    
    const pai = document.querySelector(seletorPai);
    pai.appendChild(elemento);
}

// Função fixa document.style
function editeStyle(seletor) {
    return document.querySelector(seletor).style;
}

//--------------------------------------------------------------
// Área de projetos
//--------------------------------------------------------------

// Textos para a área de projetos
const textosP = {
    texto_projetos: `Nesta área você encontrará os projetos que desenvolvi ao longo do tempo.
    A maioria dos projetos são voltados para a área de desenvolvimento web, mas também há projetos
    voltados para a área de desenvolvimento back-end.`,
}

// Função para a área de projetos

const areaProjetos = () => {
    
    // Object com as classes das páginas
    const classPagina = {
        projetos: '.projetos-e-desenvolvimento',
        sobreMim: '.sobre-mim',
        projetos_e_exercicios: '.exercicios',
        dadosEx: '.text-exercicios',
        title_exercicios: '.title-exercicios',
        h2_exercicios: '.style-h2',
    }

    // Verificar se o conteúdo está visível
    const projetosDisplay = verificarDisplay(classPagina.projetos);
    const sobreMimDisplay = verificarDisplay(classPagina.sobreMim);
    const dadosExDisplay = verificarDisplay(classPagina.dadosEx);

    if (projetosDisplay && sobreMimDisplay && dadosExDisplay) {
        // Apagar conteúdo
        apagarConteudo(classPagina.projetos);
        apagarConteudo(classPagina.sobreMim);
        apagarConteudo(classPagina.dadosEx);

        // Edição do h2
        const alterarH2 = document.querySelector(classPagina.h2_exercicios);
        alterarH2.style.marginTop = '1em';
        alterarH2.style.fontSize = '2em';

        //-----------------------------------------------------------------------------------
        // Adicionando conteúdo
        //-----------------------------------------------------------------------------------

        // Criar conteúdo desejado para a área de projetos
        criarDiv('texto-projetos', classPagina.projetos_e_exercicios);
        criarTagDesejada('p', '.texto-projetos', textosP.texto_projetos, '');

        // Criar cards para os projetos
        criarDiv('base-cards-projetos', classPagina.projetos_e_exercicios);
        criarDiv('cards-projetos', '.base-cards-projetos');
        criarDiv('cards-projetos', '.base-cards-projetos');
        criarDiv('cards-projetos', '.base-cards-projetos');

        // Edição da base-cards-projetos
        editeStyle('.base-cards-projetos').marginTop = '1em';
        editeStyle('.base-cards-projetos').justifyContent = 'space-around';

        // Edição dos cards-projetos
        editeStyle('.cards-projetos').height = '10em';
        editeStyle('.cards-projetos').width = '10em';
        editeStyle('.cards-projetos').backgroundColor = '#fff';
        editeStyle('.cards-projetos').borderRadius = '1em';
        editeStyle('.cards-projetos').boxShadow = '.2em .2em .5em #0000001a';

                
    }
}

function salvarEstilosCard() {
    const estilosCard = {
        height: '10em',
        width: '10em',
        backgroundColor: '#fff',
        borderRadius: '1em',
        boxShadow: '.2em .2em .5em #0000001a'
    };
    localStorage.setItem('cardStyles', JSON.stringify(estilosCard));
    return estilosCard;
}

function aplicarEstilosCard(card) {
    const estilos = JSON.parse(localStorage.getItem('cardStyles')) || salvarEstilosCard();
    Object.assign(card.style, estilos);
}

function adicionarProjetos() {
    const classPagina = {
        projetos_e_exercicios: '.projetos-e-exercicios'
    };

    const textosP = {
        texto_projetos: 'Texto sobre os projetos'
    };

    criarTagDesejada('p', '.texto-projetos', textosP.texto_projetos, '');

    // Verificar se a base-cards-projetos já existe
    let baseCardsProjetos = document.querySelector('.base-cards-projetos');
    if (!baseCardsProjetos) {
        criarDiv('base-cards-projetos', classPagina.projetos_e_exercicios);
        baseCardsProjetos = document.querySelector('.base-cards-projetos');
        
        // Aplicar estilos à base
        baseCardsProjetos.style.marginTop = '1em';
        baseCardsProjetos.style.justifyContent = 'space-around';
        baseCardsProjetos.style.display = 'flex';
        baseCardsProjetos.style.flexWrap = 'wrap';
        baseCardsProjetos.style.gap = '1em';
    }

    // Criar cards para os projetos
    for (let i = 0; i < 3; i++) {
        criarDiv('cards-projetos', '.base-cards-projetos');
    }
}

// Inicializar estilos dos cards
salvarEstilosCard();

// Executar quando a página carregar
document.addEventListener('DOMContentLoaded', adicionarProjetos);
