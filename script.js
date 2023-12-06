// Função para carregar conteúdo na página principal
function loadContent(page) {
    const mainContent = document.querySelector('main');
    // Lógica para carregar conteúdo com base na página
    // Exemplo: mainContent.innerHTML = '<p>Conteúdo da página principal</p>';
}

// Exemplo de manipulação do DOM para aumentar o tamanho da fonte
function increaseFontSize() {
    const mainContent = document.querySelector('main');
    const currentSize = window.getComputedStyle(mainContent).fontSize;
    const newSize = (parseFloat(currentSize) * 1.2) + 'px';
    mainContent.style.fontSize = newSize;
}

// Exemplo de animação ao passar o mouse sobre um elemento
function animateOnHover(element) {
    element.addEventListener('mouseover', () => {
        element.style.transform = 'scale(1.1)';
        element.style.transition = 'transform 0.3s ease';
    });

    element.addEventListener('mouseout', () => {
        element.style.transform = 'scale(1)';
    });
}

// Chame as funções de manipulação do DOM conforme necessário
document.addEventListener('DOMContentLoaded', () => {
    // Exemplo: loadContent('home');
    // Exemplo: animateOnHover(document.querySelector('.hover-element'));
});
