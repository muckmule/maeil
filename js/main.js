$(function(){
    //탭메뉴
    
    var i = 0;
    $(".category>li").click(function(){
        $(".con>li").removeClass('on');
        $(this).addClass('on');

        i = $(this).index();//1
        console.log(i)

        $(".tabcon").hide()
        $(".tabcon").eq(i).show();
        return false;
    })



  //슬라이드
  function slide(){
      $(".slide ul").animate({left:"-1200px"},1000,function(){
          $(".slide ul").append($(".slide ul li").first())
          $(".slide ul").css({left:0})
      })
  }

  setInterval(slide, 2000)

  
  //메뉴
  $("nav>ul>li").mouseenter(function(){
      $(".sub, .menuBg").stop().slideDown();
  })
  $("nav>ul>li").mouseleave(function(){
      $(".sub, .menuBg").stop().slideUp();
  })

  //메뉴 키보드이벤트
  $("nav>ul>li>a").focusin(function(){
      $(this).parent("li").addClass("on")
      $(".sub, .menuBg").slideDown();
  })
  $("nav li li:last-child").focusout(function(){
      $("nav li").removeClass("on")
  })
  $("nav li:last-child li:last-child").focusout(function(){
      $(".sub, .menuBg").slideUp();
  })


  
})