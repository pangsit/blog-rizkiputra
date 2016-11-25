$( document ).ready(function() {

   var floatObject = $('.floating');
   function floating() {
       floatObject.animate({top:'+=20'}, 1000);
       floatObject.animate({top:'-=20'}, 1000, floating);
   }

   floating();

});
