window.addEventListener('load', function(){
    var paginaA = document.querySelector('.paginaA');
    paginaA.addEventListener('click', function(){
        window.location.href = "/paginaA";
    });

    var paginaB = document.querySelector('.paginaB');
    paginaB.addEventListener('click', function(){
        window.location.href = "/paginaB";
    });

})