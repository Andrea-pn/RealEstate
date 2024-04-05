window.addEventListener('resize', function() {
    
    var windowWidth = window.innerWidth;

  
    var header = document.querySelector('header');

   
    if (windowWidth < 768) {
        header.classList.add('mobile');
    } else {
       
        header.classList.remove('mobile');
    }
});