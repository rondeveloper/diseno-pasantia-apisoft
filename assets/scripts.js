  $(function(){

    let speed = 500;
    let autoplaySpeed = "6000";
    let thumbImg = "thumb-img";
    let toggleslider=false;
  
    let img_src, img_alt, img_srcset, img_type;
    $("." + thumbImg + " li:first-child").addClass("view");

         $("." + thumbImg + " li").on("click", function(){
        clearInterval(interval)
        $(this).addClass("view");
        $(".view").siblings().not(this).removeClass("view");
        img_src = $(this).children('img').attr("src");
        $(this).parents("." + thumbImg).prev().children('img').fadeTo(speed,0.2, function(){
          $(this).attr("src", img_src).fadeTo(speed,1);
        });
    });
   

$("." + thumbImg + " li:last-child").addClass("last");
  
    const interval = setInterval(function(){
      if($("." + thumbImg + " li.view").hasClass("last")) {
        $("." + thumbImg + " li.view").is(function(){
          $(this).removeClass("view")
          $("." + thumbImg + " li:first-child").addClass("view");
          if($("." + thumbImg + " picture").length) {
            img_src = $(".view").children("picture").children("img").attr("src");
            img_srcset = $(".view").children("picture").children("source").attr("srcset");
            img_type = $(".view").children("picture").children("source").attr("type");
            img_alt = $(".view").children("picture").children("img").attr("alt");
          } else {
            img_src = $(".view").children("img").attr("src");
            img_alt = $(".view").children("img").attr("alt");
          }
          $(this).parents("." + thumbImg).prev().children('img').fadeTo(speed,0.2, function(){
            $(this).attr({"src": img_src, "alt": img_alt}).fadeTo(speed,1);
          });
          $(this).parents("." + thumbImg).prev().children('source').fadeTo(speed,0.2, function(){
            $(this).attr({"srcset": img_srcset, "type": img_type}).fadeTo(speed,1);
          });
        });
      } else {
        $("." + thumbImg + " li.view").is(function(){
          $(this).removeClass("view")
          $(this).next().addClass("view");
          if($("." + thumbImg + " picture").length) {
            img_src = $(this).next().children("picture").children("img").attr("src");
            img_srcset = $(this).next().children("picture").children("source").attr("srcset");
            img_type = $(this).next().children("picture").children("source").attr("type");
            img_alt = $(this).next().children("picture").children("img").attr("alt");
          } else {
            img_src = $(this).next().children("img").attr("src");
            img_alt = $(this).next().children("img").attr("alt");
          }
          $(this).parents("." + thumbImg).prev().children('img').fadeTo(speed,0.2, function(){
            $(this).attr({"src": img_src, "alt": img_alt}).fadeTo(speed,1);
          });
          $(this).parents("." + thumbImg).prev().children('source').fadeTo(speed,0.2, function(){
            $(this).attr({"srcset": img_srcset, "type": img_type}).fadeTo(speed,1);
          });
        });
      }
    }, autoplaySpeed);
  
});

    