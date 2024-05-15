let contagem = 0

function abrirSidebar() {
 let sidebar = document.querySelector('.sidebar-content');
 let sidebarIcon = document.querySelector('.sidebar')
 console.log (contagem)


if (contagem == 0) {
    sidebar.style.transform = 'translate(0%)';
    sidebar.style.display = 'block';
    sidebarIcon.style.transform = 'translate(-100%) rotateY(180deg)';

    contagem++
}

else {
    sidebar.style.transform = 'translate(100%)';
    sidebar.style.display = 'none';
    sidebarIcon.style.transform = 'translate(100%)'
    
    contagem--
}
}