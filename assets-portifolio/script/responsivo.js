
const menuResponsivo = document.getElementById("menu__responsivo");
const fechaMenu = document.getElementById('fecha_menu_responsivo');



menuResponsivo.addEventListener('click', () =>{

    const ativaMenu = document.getElementById('menu_nav');
    ativaMenu.classList.toggle('ative');

    menuResponsivo.classList.toggle('ative2');
})

fechaMenu.addEventListener('click', () =>{
    
    const fechaMenu = document.getElementById('menu_nav');
    fechaMenu.classList.remove('ative');

    menuResponsivo.classList.remove('ative2');
    
});