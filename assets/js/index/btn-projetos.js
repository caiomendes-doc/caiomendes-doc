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
const criarDiv = (classDiv, classPai) => {
    const novaDiv = document.createElement('div');
    novaDiv.className = classDiv; // classe da div
    document.querySelector(classPai).appendChild(novaDiv); // pai da div
}

// Função para criar tags desejadas
const criarTagDesejada = (tipoTag, classPai, textoDesejado, classTag) => {
    const novaTag = document.createElement(tipoTag);

    if (classTag !== '') {
        novaTag.className = classTag;
    }

    if(textoDesejado !== '') {
        novaTag.textContent = textoDesejado;
    }

    document.querySelector(classPai).appendChild(novaTag);
}

// Função fixa document.style
const editeStyle = (classSelect) => {
    return document.querySelector(classSelect).style;
}

// Teste stylesheets
const styleSheetEdit = (edicaoDesejada) => {
    return document.styleSheets[0].cssRules[edicaoDesejada].style;
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

        // Edição da base-cards-projetos
        editeStyle('.base-cards-projetos').display = 'flex';
        editeStyle('.base-cards-projetos').marginTop = '1em';
        editeStyle('.base-cards-projetos').justifyContent = 'space-around';

        // Edição dos cards-projetos
        criarTagDesejada('p', '.cards-projetos', 'Projeto 1', 'titulo-projeto-1');
        criarTagDesejada('span', '.titulo-projeto-1', 'eco', 'material-symbols-outlined');
        editeStyle('.cards-projetos').height = '10em';
        editeStyle('.cards-projetos').width = '10em';
        editeStyle('.cards-projetos').backgroundColor = '#fff';
        editeStyle('.cards-projetos').borderRadius = '1em';
        editeStyle('.cards-projetos').boxShadow = '.2em .2em .5em #0000001a';

        styleSheetEdit('.cards-projetos').display = 'flex';

                
    }
}

