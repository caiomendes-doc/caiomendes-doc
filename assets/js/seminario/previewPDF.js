const url = '../assets/pdf/seminario5.pdf';

const pdfjsLib = window['pdfjs-dist/build/pdf'];
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';

let pdfDoc = null;
let pageNum = 1;
let pageRendering = false;
let pageNumPending = null;
const scale = 1.5;
const canvas = document.getElementById('pdf-viewer');
const ctx = canvas.getContext('2d');

function renderPage(num) {
    pageRendering = true;
    pdfDoc.getPage(num).then(page => {
        const viewport = page.getViewport({ scale: scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
            canvasContext: ctx,
            viewport: viewport
        };
        const renderTask = page.render(renderContext);

        renderTask.promise.then(() => {
            pageRendering = false;
            if (pageNumPending !== null) {
                renderPage(pageNumPending);
                pageNumPending = null;
            }
        });
    });

    document.getElementById('page-num').textContent = num;
    updateNavigationButtons();
}

function queueRenderPage(num) {
    if (pageRendering) {
        pageNumPending = num;
    } else {
        renderPage(num);
    }
}

function onPrevPage() {
    if (pageNum <= 1) {
        return;
    }
    pageNum--;
    queueRenderPage(pageNum);
}

function onNextPage() {
    if (pageNum >= pdfDoc.numPages) {
        return;
    }
    pageNum++;
    queueRenderPage(pageNum);
}

function updateNavigationButtons() {
    const prevButton = document.getElementById('prev-page');
    const nextButton = document.getElementById('next-page');

    // Mostrar ou ocultar o botão "Página Anterior"
    if (pageNum <= 1) {
        prevButton.style.backgroundColor = '#dddddd';
        prevButton.style.cursor = 'not-allowed';
        prevButton.style.color = '#000';
    } else {
        prevButton.style.cursor = 'pointer';
        prevButton.style.backgroundColor = '#5840c2';
        prevButton.style.color = '#fff';
    }

    // Mostrar ou ocultar o botão "Próxima Página"
    if (pageNum >= pdfDoc.numPages) {
        nextButton.style.backgroundColor = '#dddddd';
        nextButton.style.cursor = 'not-allowed';
        nextButton.style.color = '#000';
    } else {
        nextButton.style.cursor = 'pointer';
        nextButton.style.backgroundColor = '#5840c2';
        nextButton.style.color = '#fff';
    }
}

document.getElementById('prev-page').addEventListener('click', onPrevPage);
document.getElementById('next-page').addEventListener('click', onNextPage);

const loadingTask = pdfjsLib.getDocument(url);
loadingTask.promise.then(pdf => {
    pdfDoc = pdf;
    document.getElementById('page-count').textContent = pdf.numPages;
    renderPage(pageNum);
}, reason => {
    console.error('Erro ao carregar o PDF: ' + reason);
});
