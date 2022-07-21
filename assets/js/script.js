// criando função para selecionar item
function selecionarItem(item) {
    // recuperando divs
    var div_selected = document.querySelector('#selected');
    var skills = document.querySelector('#skills');
    var projects = document.querySelector('#projects');
    if (item == 1) {
        div_selected.style.left = '1rem';
        projects.style.opacity = '0';
        setTimeout(function () {
            projects.style.display = 'none';
            skills.style.display = 'grid';
            skills.style.opacity = '1';
        }, 500);
    }
    else {
        div_selected.style.left = '12rem';
        skills.style.opacity = '0';
        projects.style.opacity = '0';
        setTimeout(function () {
            skills.style.display = 'none';
            projects.style.display = 'grid';
            projects.style.opacity = '1';
        }, 500);
    }
}
;
function abrirProjeto(n) {
    switch (n) {
    }
    if (n == 1) {
        window.location.href = 'https://github.com/Thiago-Nasc/attendance-list';
    }
    else if (n == 2) {
        window.location.href = 'https://github.com/Thiago-Nasc/secret-word';
    }
    else if (n == 3) {
        window.location.href = 'https://github.com/Thiago-Nasc/dictionary';
    }
    else if (n == 4) {
        window.location.href = 'https://github.com/Thiago-Nasc/personal-budget';
    }
    else if (n == 5) {
        window.location.href = 'https://github.com/Thiago-Nasc/calculator';
    }
    else if (n == 6) {
        window.location.href = 'https://github.com/Thiago-Nasc/portfolio';
    }
}
function exibirProfileName() {
    var profileName = document.querySelector('#profile-name');
    var arrayLetras = profileName.innerHTML.split('');
    profileName.innerHTML = '';
    arrayLetras.map(function (item, indice) {
        setTimeout(function () {
            profileName.innerHTML += item;
        }, 120 * indice);
    });
}
;
exibirProfileName();
