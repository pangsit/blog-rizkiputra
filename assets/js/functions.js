$( document ).ready(function() {

    var floatObject = $('.floating');
    function floating() {
       floatObject.animate({top:'+=20'}, 1000);
       floatObject.animate({top:'-=20'}, 1000, floating);
    }

    floating();
    
    $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, function(){
        window.location.hash = hash;
      });
    }
  });
});