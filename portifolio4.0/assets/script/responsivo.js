
const menuResponsivo = document.getElementById("menu__responsivo"); // chama o elemento menu responsivo
const fechaMenu = document.getElementById('corpo__pagina'); // chama o elemento main para fechar o menu



menuResponsivo.addEventListener('click', () =>{ // adiciona um ouvite de eventos

    const ativaMenu = document.getElementById('menu__lista'); // chama o eelemento para adicionar a classe que ativa o menu
    ativaMenu.classList.toggle('ative__menu'); // insere a classe que ativa o menu
})

fechaMenu.addEventListener('click', () =>{ // adiciona ouvite de evento no main para fechar o menu
    
    const fechaMenu = document.getElementById('menu__lista');
    fechaMenu.classList.remove('ative__menu'); // remove a classe que ativa o menu

    
});