window.addEventListener('load', function(){

    var paginaB = document.querySelector('.paginaB');
    paginaB.addEventListener('click', function(){
        window.location.href = "/paginaB";
    });

    var paginaC = document.querySelector('.paginaC');
    paginaC.addEventListener('click', function(){
        window.location.href = "/paginaC";
    });
})