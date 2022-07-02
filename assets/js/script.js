// criando função para selecionar item
function selecionarItem(item) {

    // recuperando divs
    const div_selected = document.querySelector('#selected');
    const skills = document.querySelector('#skills');
    const projects = document.querySelector('#projects'); 

    if(item == 1) {
        div_selected.style.left = '1rem';
        projects.style.opacity = '0';
        skills.style.opacity = '1';
        skills.style.width = '100%';
        projects.style.width = '0';

    } else {
        div_selected.style.left = '12rem';
        skills.style.opacity = '0';
        skills.style.width = '0';
        projects.style.opacity = '1';
        projects.style.width = '100%';
    }
};

function abrirProjeto(n) {
    if (n == 1) {
        window.location.href = 'https://github.com/Thiago-Nasc/game-mata-mosquito';
    } else if (n == 2) {
        window.location.href = 'https://github.com/Thiago-Nasc/app-orcamento-pessoal';
    } else if (n == 3) {
        window.location.href = 'https://github.com/Thiago-Nasc/calculator';
    } else if (n == 4) {
        window.location.href = 'https://github.com/Thiago-Nasc/Music-Library-Page';
    }
};