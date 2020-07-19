$(document).ready(function(){
    /*
    1- Eventos iniciais - primeito primeiro contato com a aplicação
    */


    // 1- Eventos iniciais - primeito primeiro contato com a aplicação
    var state = {};
    console.log(sessionStorage.getItem('teste'));
    if(sessionStorage.getItem('teste') === null || sessionStorage.getItem('teste') === 0){
        setTimeout(function(){
            var notification = document.querySelector('.mdl-js-snackbar');
            notification.MaterialSnackbar.showSnackbar(
                {
                    message: 'Explore this Multiverse...',
                    timeout: 3000,
                    actionText: 'Undo'
                }
            );
        }, 1000);
      sessionStorage.setItem('teste',1);
    
    }
    anime({
        targets: '.arrow',
        easing: 'linear',
        translateY: 10,
        direction: 'alternate',
        loop: true
      });


})