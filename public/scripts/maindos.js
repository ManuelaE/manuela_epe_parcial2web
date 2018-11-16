window.addEventListener('load', function(){
    var paginaA = document.querySelector('.paginaA');
    paginaA.addEventListener('click', function(){
        window.location.href = "/paginaA";
    });

    var paginaC = document.querySelector('.paginaC');
    paginaC.addEventListener('click', function(){
        window.location.href = "/paginaC";
    });
})