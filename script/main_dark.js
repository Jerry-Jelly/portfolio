$(document).ready(function(){




// ** 어바웃미 - 레이어팝업창
    $('.ab_layer').hide();

    $('.workingon').click(function(){
      $('.ab_layer').fadeIn();
    });
    $('.ab_layer .fas:nth-child(3)').click(function(){
      $('.ab_layer').fadeOut();
    });



    $('.ab_layer li img:last-child').insertBefore('.ab_layer li img:first-child');
    $('.ab_layer li > span').css('margin-left','-550px');

// ** 왼쪽으로 움직이기
    function moveLeft(){
      $('.ab_layer > ul span').animate({'margin-left':'-1100px'},700,function(){
        $('.ab_layer li img:first-child').insertAfter('.ab_layer li img:last-child');
        $('.ab_layer > ul span').css('margin-left','-550px');
      })
    }
    $('.ab_layer > .fas:first-child').click(function(){
      moveLeft();
    });



// ** 오른쪽으로 움직이기
    function moveRight(){
      $('.ab_layer > ul span').animate({'margin-left':'550px'},700,function(){
        $('.ab_layer li img:last-child').insertBefore('.ab_layer li img:first-child');
        $('.ab_layer > ul span').css('margin-left','0px');
      })
    }
    $('.ab_layer > .fas:nth-child(2)').click(function(){
      moveRight();
    });










    //사용자가 휠 스크롤 동작을 하면 아래 내용이 실행된다.
    $(window).scroll(function(){
      let sPos = $(this).scrollTop(); 
      // scrollTop(세로스크롤) 위치값을 변수에 저장한다. 
      //   (ps: scrollLeft(가로스크롤) )
      //   $('.status').text(sPos); 
      //출력

      if(sPos>=900){
        $('.me').fadeIn();
        $('.major').animate({'opacity':'1'},500);
        $('.workingon').animate({'opacity':'1'},1000);
        $('.prize').animate({'opacity':'1'},1500);
        $('.mind').animate({'opacity':'1'},2000);
      }

      if(sPos>=1200){
        $('aside').css({'display':'block'});
      }else if(sPos<1200){
        $('aside').css({'display':'none'});
      }

      if(sPos>=2000){
        $('.sk_con_left p:nth-child(2)').animate({'opacity':'1'});
        $('.sk_con_left p:nth-child(3)').animate({'opacity':'1'}, 500);
        $('.sk_con_left p:nth-child(4)').animate({'opacity':'1'}, 1000);
        $('.sk_con_left p:nth-child(5)').animate({'opacity':'1'}, 1500);
        $('.sk_con_left p:nth-child(6)').animate({'opacity':'1'}, 2000);
        $('.sk_con_left p:nth-child(7)').animate({'opacity':'1'}, 2500);
        $('.sk_con_left > p:last-child').animate({'opacity':'1'}, 3000);

        $('.bar01').animate({'width':'392px'}, 2500, 'easeOutExpo');
        $('.score01').animate({'opacity':'1'}, 2500);

        $('.bar02').animate({'width':'369px'}, 2500, 'easeOutExpo');
        $('.score02').animate({'opacity':'1'}, 3500);

        $('.bar03').animate({'width':'239px'}, 2500, 'easeOutExpo');
        $('.score03').animate({'opacity':'1'}, 4000);

        $('.bar04').animate({'width':'351px'}, 2500, 'easeOutExpo');
        $('.score04').animate({'opacity':'1'}, 4500);

        $('.bar05').animate({'width':'338px'}, 2500, 'easeOutExpo');
        $('.score05').animate({'opacity':'1'}, 5000);

        $('.bar06').animate({'width':'430px'}, 2500, 'easeOutExpo');
        $('.score06').animate({'opacity':'1'}, 5000);
      }
      
      if(sPos>=2500){
        $('.banner #designer').animate({'left':'0px'},1000);
        $('.banner #txt01').animate({'opacity':'1'},3000);
        $('.banner #txt02').animate({'opacity':'1'},4000);
        $('.banner #txt03').animate({'opacity':'1'},5000);
        $('.banner #txt04').animate({'opacity':'1'},6000);
      }

    });

    $('.modal > ul a').click(function(){
        $('.modal').fadeOut();
    });










    // ** 푸터 카톡 QR코드
    $('.qr_code').hide();
    $('.icon > a:last-child').mouseover(function(){
      $('.qr_code').stop().fadeIn();
    });
    $('.icon > a:last-child').mouseleave(function(){
      $('.qr_code').stop().fadeOut();
    });

  });