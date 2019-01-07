var logo = document.getElementById('logo-text');

if (logo) {
  var typewriter = new Typewriter(logo, {
      loop: false
  });

  typewriter.pauseFor(2500).typeString('Hello 2019 !')
      .pauseFor(2500)
  		.deleteAll()
      .typeString('ByteDance.Design')
      .pauseFor(2500)
  		.deleteChars(7)
      .pauseFor(2500)
  		.deleteChars(5)
      .pauseFor(2000)
      .typeString('Design')
      .pauseFor(2500)
      .start();
}



$(document).ready(function(){

  if ($(".preview-img").length>0) {

    $(".preview-img").wrap("<div class='preview-image-boxes'></div>");
    $(".preview-img").wrap("<div class='preview-image-box'></div>");
    $(".preview-img").wrap("<div class='preview-image-wrapper'></div>");


    $(".good").parent().addClass("good");
    $(".bad").parent().addClass("bad");

    $('.preview-img').each(function (index, value) {
      var imgalt = $(this).attr("alt");
      var imgdescription = $(this).attr("description");

      if (imgdescription.length > 0) {
        $(this).parent().after("<div class='preview-image-description'>" + imgdescription + "</div>");
      };

      if (imgalt.length > 0) {
        $(this).parent().after("<div class='preview-image-title'>" + imgalt + "</div>");
      };

    });

    // var imgalt = $(".preview-img").attr("alt");
    // var imgdescription = $(".preview-img").attr("description");
    //
    // $(".preview-image-wrapper").after("<div class='preview-image-description'>" + imgdescription + "</div>");
    // $(".preview-image-wrapper").after("<div class='preview-image-title'>" + imgalt + "</div>");

  }

});
