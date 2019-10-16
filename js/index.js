 $(document).ready(function () {

     // Script de animaca do menu quando mobile
     $(".navbar-toggler").click(function () {

         $("#nav-inema").toggle("slide", {
             direction: "right"
         }, 700)
     })

     $("#nav-inema a").click(function () {
         $("#nav-inema").hide('fade')

     })
     
     
     // scroll para rolar ate alvo

     $(".scroll").click(function (event) {
         event.preventDefault();
         $('html,body').animate({
             scrollTop: $(this.hash).offset().top
         }, 600);
       
     });
 })