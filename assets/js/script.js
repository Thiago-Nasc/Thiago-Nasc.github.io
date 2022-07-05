// criando função para selecionar item
function selecionarItem(item) {

    // recuperando divs
    const div_selected = document.querySelector('#selected');
    const skills = document.querySelector('#skills');
    const projects = document.querySelector('#projects'); 

    if(item == 1) {
        div_selected.style.left = '1rem';
        projects.style.opacity = '0';
        setTimeout(() => {
            projects.style.display = 'none';
            skills.style.display = 'grid';
            skills.style.opacity = '1';
        },500);

    } else {
        div_selected.style.left = '12rem';
        skills.style.opacity = '0';
        projects.style.opacity = '0';
        setTimeout(() => {
            skills.style.display = 'none';
            projects.style.display = 'grid';
            projects.style.opacity = '1';
        },500);
    }
};

function abrirProjeto(n) {
    if (n == 1) {
        window.location.href = 'https://github.com/Thiago-Nasc/Dictionary';
    } else if (n == 2) {
        window.location.href = 'https://github.com/Thiago-Nasc/Personal-Budget';
    } else if (n == 3) {
        window.location.href = 'https://github.com/Thiago-Nasc/Calculator';
    } else if (n == 4) {
        window.location.href = 'https://github.com/Thiago-Nasc/Music-Library';
    } else if (n == 5) {
        window.location.href = 'https://github.com/Thiago-Nasc/Kill-Mosquito';
    } else if (n == 6) {
        window.location.href = 'https://github.com/Thiago-Nasc/Portfolio';
    }
}