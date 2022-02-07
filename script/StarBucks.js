(function($, window, document, undefined){

    class StarBucks {
        init(){
          this.header();
          this.section1();
          this.section2Notice(); 
          this.section2Slide();   
          this.section4();
          this.section5();
          this.section6();
          this.section7();
          this.section8();
          this.goTop();
          this.quickMenu();
        }
        header(){
                  const bergerBtn = $('.berger-btn');
                  const mobileNav = $('#mobileNav');
                  const mobileContainer =  $('.mobile-container');
                  const mobileClose =  $('.mobile-close');
                  const mobileContainerLia =  $('.mobile-container li a');
                  const mobileContainerLiaNoneSub =  $('.mobile-container li a.none-sub');
                  const findBtn =  $('.find-btn');
                  const findBox =  $('.find-box');
                  const mainBtn =  $('.main-btn');
                  const nav =  $('#nav');
                  const sub =  $('.sub');

                  //모바일 버튼 이벤트
                  bergerBtn.on({
                    click: function(){
                        mobileNav.addClass('addMobile');
                        mobileContainer.stop().animate({left:0}, 400);
                    }
                  });

                  mobileClose.on({
                    click: function(){
                        mobileContainer.stop().animate({left:110+'%'}, 400, function(){
                            mobileNav.removeClass('addMobile');
                        });                  
                    }
                  });

                  mobileContainerLia.on({
                      click: function(){                    
                        $(this).toggleClass('addMobile');
                        $(this).next('div').slideToggle(300);
                        mobileContainerLiaNoneSub.removeClass('addMobile');
                      }
                  });

                  //통합검색 버튼 클릭 이벤트
                  findBtn.on({
                      click: function(){
                          findBox.toggleClass('addInput');
                      }
                  });

                  //네비게이션 : 메인메뉴의 마우스 이벤트
                  mainBtn.on({
                      mouseenter: function(){
                        mainBtn.removeClass('addCurrent');
                        $(this).addClass('addCurrent');
                        sub.stop().slideUp(0);
                        $(this).next().stop().slideDown(600,'easeOutExpo');
                      },
                      focusin: function(){
                        mainBtn.removeClass('addCurrent');
                        $(this).addClass('addCurrent');
                        sub.stop().slideUp(0);
                        $(this).next().stop().slideDown(600,'easeOutExpo');
                      }
                  });

                  nav.on({
                      mouseleave: function(){
                        mainBtn.removeClass('addCurrent');
                        sub.stop().slideUp(600,'easeOutExpo');
                      }
                  });


        }
        section1(){
            //애니메이션 페이드 인효과
            const img = $('.img');
            function ani(){
              img.eq(0).stop().animate({opacity:1},600, function(){
                img.eq(1).stop().animate({opacity:1},600, function(){
                  img.eq(2).stop().animate({opacity:1},600, function(){
                    img.eq(3).stop().animate({opacity:1},600, function(){
                      img.eq(4).stop().animate({opacity:1},600);
                    });
                  });
                });
              });
            }
            setTimeout(ani, 600);
        }
        section2Notice(){
            let cnt = 0;
            const notice = $('.notice');
            // 1. 메인 슬라이드 함수
            function mainSlide(){
                notice                   .css({zIndex:1}).stop().animate({top:24},0);
                notice.eq(cnt==0?4:cnt-1).css({zIndex:2}).stop().animate({top: 0},0);
                notice.eq(cnt)           .css({zIndex:3}).stop().animate({top:24},0).animate({top:0},1000);
            }

            // 2. 다음 카운트 함수
            function nextCount(){
                cnt++;  
                if(cnt>4){cnt=0}
                mainSlide();
            }

            // 3. 자동타이머 함수(셋인터발)
            function autoTimer(){
                setInterval(nextCount, 3000);
            }

            setTimeout(autoTimer, 100);
        }
        section2Slide(){
            const $window = $(window);
            let cnt = 0;
            let setId = null;
            let winW = $window.innerWidth()*0.9;    
            const slideID = $('#slide');
            const slide = $('.slide');
            const slideWrap = $('.slide-wrap');
            const pageBtn = $('.page-btn');
            const playBtn = $('.play-btn');
            const nextBtn = $('.next-btn');
            const prevBtn = $('.prev-btn');
            const promotionBtn = $('.promotion-btn');

                  // 반응형
                  function resizeFn(){

                      if( $window.innerWidth()<=819 ){
                        winW = $window.innerWidth()*0.9;
                      }
                      else{ 
                        winW = 819;
                      }
                      
                      slide.css({width: winW });
                      slideWrap.stop().animate({left:-winW*cnt}, 0);
                  }
                  resizeFn();

                  $window.resize(()=>{
                      resizeFn();
                  });

                 //   1. 메인슬라이드함수
                function mainSlide(){
                  slideWrap.stop().animate({left:-winW*cnt}, 500, function(){
                      if(cnt>2){cnt=0}
                      if(cnt<0){cnt=2}
                      slideWrap.stop().animate({left:-winW*cnt}, 0);
                      slide.removeClass('addCurrent');        
                      slide.eq(cnt+1).addClass('addCurrent');  
                  })
                  pageEvent();
                }

                function nextCount(){
                  cnt++;
                  mainSlide();
                }
                function prevCount(){
                  cnt--;
                  mainSlide();
                }

                function autoTimer(){
                  setId = setInterval(nextCount, 3000);
                }
              
                function pageEvent(){
                  pageBtn                 .children().attr('src','./images/main_prom_off.png')
                  pageBtn.eq(cnt==3?0:cnt).children().attr('src','./images/main_prom_on.png')

                }
                //배열 반복처리
                pageBtn.each(function(idx){
                    $(this).on({
                      click: function(e){
                        e.preventDefault();
                        cnt = idx;
                        mainSlide();
                        stopFn() 
                      }
                    });
                });

                function stopFn(){
                  playBtn.children().attr('src','./images/main_prom_play.png');
                  playBtn.removeClass('on'); 
                  // 슬라이드정지
                  clearInterval(setId);
                }
                function playFn(){
                  playBtn.children().attr('src','./images/main_prom_stop.png');
                  playBtn.addClass('on');  
                  // 슬라이드플레이
                  autoTimer();
                }


                playBtn.on({
                  click: function(e){
                    e.preventDefault();
                        if( $(this).hasClass('on') ){ 
                          stopFn();
                        }
                        else{
                          playFn();
                        }
                  }
                });
                nextBtn.on({
                  click: function(e){
                    e.preventDefault();
                    stopFn(); // 정지
                    nextCount();
                  }
                });

                //7-2. 이전화살버튼 클릭 이벤트
                prevBtn.on({
                  click: function(e){
                    e.preventDefault();
                    stopFn(); // 정지
                    prevCount();
                  }
                });

                promotionBtn.on({
                  click: function(e){
                    e.preventDefault();

                    if( $(this).hasClass('close')  ){ //오픈
                      slideID.stop().slideDown(600);
                      $(this).removeClass('close');
                      playFn();
                    }
                    else{ //닫기 close
                      slideID.stop().slideUp(600);
                      $(this).addClass('close');
                      //정지
                      stopFn();
                      cnt=0;
                      mainSlide(); //처음으로 초기화
                    }
                    
                  }
                });

                // 슬라이드 랩 박스 위에 마우스 올라가면 슬라이드 정지
                slideWrap.on({
                  mouseenter: function(e){
                    e.preventDefault();
                    stopFn();
                  },
                  mouseleave: function(e){
                    e.preventDefault();
                    playFn();
                  }
                });
        }
        section4(){
            const $window = $(window);
            const section4 = $('#section4');

            $window.scroll(()=>{
                if( $window.scrollTop() == 0 ){
                  section4.removeClass('addAni');
                }
                if( $window.scrollTop() > 500 ){
                  section4.addClass('addAni');
                }
            });

        }
        section5(){
            const $window = $(window);
            const section3 = $('#section3');
            const section5 = $('#section5');
            let sec3Top = section3.offset().top-200;

            $window.scroll(()=>{
                if( $window.scrollTop() == 0 ){
                  section5.removeClass('addFadein');
                }
                if( $window.scrollTop() >= sec3Top ){
                  section5.addClass('addFadein');
                }
            });

        }
        section6(){
            const $window = $(window);
            const section4 = $('#section4');
            const section6 = $('#section6');
            let sec4Top = section4.offset().top;


            $window.scroll(()=>{
                if( $window.scrollTop() == 0 ){
                  section6.removeClass('addAni')
                }
                if( $window.scrollTop() >= sec4Top ){
                  section6.addClass('addAni')
                }
            });

        }
        section7(){
          const $window = $(window);
          const section6 = $('#section6');
          const section7 = $('#section7');
          let sec6Top = section6.offset().top-200;

            $window.scroll(()=>{
                if( $window.scrollTop() == 0 ){
                    section7.removeClass('addFade')
                }
                if( $window.scrollTop() >= sec6Top ){
                    section7.addClass('addFade')
                }
            });

        }
        section8(){
          const $window = $(window);
          const section6 = $('#section6');
          const section8 = $('#section8');
          const section8Left = $('#section8 .left');
          let   sec6Top = section6.offset().top+200;
          let   leftW=null;
          let   leftH=null;

            $window.scroll(()=>{
                if( $window.scrollTop() == 0 ){
                  section8.removeClass('addAni')
                }
                if( $window.scrollTop() >= sec6Top ){
                  section8.addClass('addAni')
                }
            });

            function leftResize(){
              let winW = $window.innerWidth();          
                  if( winW <= 960 ){    // 창너비가 
                    leftW = winW * 0.38125;                 
                    leftH = leftW * 0.85246; //높이 = 너비*비율(85.246%)
                  }
                  else{
                    leftW = 366;
                    leftH = 312;
                  }
                  section8Left.css({ width:leftW, height:leftH });

            }
            leftResize();

            $window.resize(()=>{
              leftResize();
            });

        }
        goTop(){
            const $window = $(window);
            const goTop = $('.go-top');
            const goTopBtn = $('.go-top-btn');
            const htmlBody = $('html, body');

                  goTop.stop().fadeOut(1000);

                  $window.scroll(()=>{
                      if( $window.scrollTop() >=100 ){
                        goTop.stop().fadeIn(1000);
                      }
                      else{
                        goTop.stop().fadeOut(1000);
                      }
                  });

                  goTopBtn.on({
                    click: function(){
                        htmlBody.animate({scrollTop:0}, 600);
                    }
                  });

        }
        quickMenu(){
          const $window = $(window);
          const quickMenu = $('.quick-menu');        
          let   quicTop1 = ($(window).height() - 96)/2; 
          let   quicTop2 = 150;  

          function quickMenuFn(){
                  quickMenu.stop().animate({top: $(window).scrollTop() + quicTop2 }, 300, "easeOutExpo");
                }                               
                quickMenuFn(); //로딩시

                $window.scroll(()=>{
                    quickMenuFn();
                });
        }
    }

    const  newStarBucks = new StarBucks();
           newStarBucks.init();


})(jQuery, window, document);