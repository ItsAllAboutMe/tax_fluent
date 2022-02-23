
$(document).ready(function () {

    // RANDOM BACKGROUND IMAGE
    
    var totalBGs = 5;
var rnd = Math.floor(Math.random() * totalBGs);
    $(".main").css({ backgroundImage: "url(images/img_" + rnd + ".jpg)"});


    // PAGE SCROLLING AFTER CLICKING HEADER LINKS

    $('.header-list li:first-child').on('click', function(){
        $('html, body').animate({ scrollTop:$('body').offset().top}, 'slow'); 
    });

    $('.header-list li:nth-child(2)').on('click', function(){
        $('html, body').animate({scrollTop:$('.services').offset().top}, 'slow');
    });

    $('.header-list li:last-child').on('click', function(){
        $('html, body').animate({scrollTop:$('.contact').offset().top}, 'slow');
    });



  });


//   current year for footer


  const year = new Date().getFullYear();

  document.getElementById("ft-year").innerHTML = year;


