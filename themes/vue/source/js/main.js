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



  $(function() {
    $(".over-img")
      .mouseover(function() {

          var path = $(this).attr('src'); // "static/images/banner/blue.jpg"
          var tarr = path.split('/');      // ["static","images","banner","blue.jpg"]
          var file = tarr[tarr.length-1]; // "blue.jpg"
          var filename = file.split('.')[0];  // "blue"
          // var fileformat = file.split('.')[1];  // "jpg"

          var src = $(this).attr("src").replace(filename, filename+"-over");
          $(this).attr("src", src);
      })
      .mouseout(function() {
          var src = $(this).attr("src").replace("-over", "");
          $(this).attr("src", src);
      });
   });




  // var group = [];
  // var groupCount = 0;
  // var group_class = "preview-img";
  //
  // $(".content > img").each(function(i, item) {
  //     var $item = $(item);
  //     if($item.hasClass(group_class)) {
  //         group.push(item);
  //     };
  //
  //     if(group.length > 0 && !$item.next().hasClass(group_class)) {
  //       $(group).wrapAll("<div class='preview-image-boxes'></div>");
  //
  //       console.log(group.length);
  //       console.log(group);
  //
  //       for (var i = 0; i < group.length; i++) {
  //         $(group[i]).wrap("<div class='preview-image-box'></div>");
  //         $(group[i]).wrap("<div class='preview-image-wrapper'></div>");
  //
  //         $(".good").parent().addClass("good");
  //         $(".bad").parent().addClass("bad");
  //       }
  //
  //       group = [];
  //       groupCount++;
  //     }
  // });



  if ($(".preview-img").length > 0) {

    $(".preview-img").wrap("<div class='preview-image-boxes'></div>");

    $(".preview-img").wrap("<div class='preview-image-box'></div>");
    $(".preview-img").wrap("<div class='preview-image-wrapper'></div>");

    $("img.good").parent().addClass("good");
    $("img.good").removeClass("good");

    $("img.bad").parent().addClass("bad");
    $("img.bad").removeClass("bad");

    if ($("img.left")) {
      $("img.left").parent().parent().parent().addClass("left");
      $("img.left").removeClass("left");
    }
    if ($("img.right")) {
      $("img.right").parent().parent().parent().addClass("right");
      $("img.right").removeClass("right");
    }

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
