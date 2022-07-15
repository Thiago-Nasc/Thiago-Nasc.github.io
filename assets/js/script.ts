// types globais
type Obj = HTMLElement | null;

// criando função para selecionar item
function selecionarItem(item: number) {


    // recuperando divs
    const div_selected: Obj = document.querySelector('#selected');
    const skills: Obj = document.querySelector('#skills');
    const projects: Obj = document.querySelector('#projects'); 

    if(item == 1) {
        div_selected!.style.left = '1rem';
        projects!.style.opacity = '0';
        setTimeout(() => {
            projects!.style.display = 'none';
            skills!.style.display = 'grid';
            skills!.style.opacity = '1';
        },500);

    } else {
        div_selected!.style.left = '12rem';
        skills!.style.opacity = '0';
        projects!.style!.opacity = '0';
        setTimeout(() => {
            skills!.style.display = 'none';
            projects!.style.display = 'grid';
            projects!.style.opacity = '1';
        },500);
    }
};

function abrirProjeto(n: number) {

    switch(n) {}
    if (n == 1) {
        window.location.href = 'https://github.com/Thiago-Nasc/attendance-list';
    } else if (n == 2) {
        window.location.href = 'https://github.com/Thiago-Nasc/dictionary';
    } else if (n == 3) {
        window.location.href = 'https://github.com/Thiago-Nasc/personal-budget';
    } else if (n == 4) {
        window.location.href = 'https://github.com/Thiago-Nasc/calculator';
    } else if (n == 5) {
        window.location.href = 'https://github.com/Thiago-Nasc/kill-mosquito';
    } else if (n == 6) {
        window.location.href = 'https://github.com/Thiago-Nasc/portfolio';
    }
}

function exibirProfileName() {
    let profileName: Obj = document.querySelector('#profile-name');
    let arrayLetras: string[] = profileName!.innerHTML.split('');
    profileName!.innerHTML = '';
    
    arrayLetras.map((item, indice) => {
        setTimeout(() => {
            profileName!.innerHTML += item;
        }, 120 * indice);
    });
};  

exibirProfileName();