$( document ).ready(function() {

   var baloon = $('.baloon');
   function runIt() {
       baloon.animate({top:'+=20'}, 1000);
       baloon.animate({top:'-=20'}, 1000, runIt);
   }

   runIt();

});
