$(function(){

  // 메인슬라이드
  const $slide = $('.mn_slide');
  const $thmbs = $('.mn_pagination li>a');

  let nowIdx=0;
  let intervalKey;
  
  const moveFn=function(){
    $thmbs.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

    $slide.stop().animate({left: -1200*nowIdx},'easeInOutCubic');
  }

  $thmbs.on('click', function(evt){
    evt.preventDefault();

    $(this).parent().addClass('on').siblings().removeClass('on');

    nowIdx = $thmbs.index(this);

    moveFn();
  });

    // 스튜디오
    const $btnslide = $('.bu_container>li');
    const fadeFn = function(){
  
      $btnslide.stop().fadeOut(1000).removeClass('on');
      $btnslide.eq(nowIdx).stop().fadeIn(2000).addClass('on');
  
      $btnslide.eq(nowIdx).addClass('on').siblings().removeClass('on');
    };
  
   

  $(window).on('load', function(){
    clearInterval(intervalKey);

    moveFn();

    intervalKey=setInterval(()=>{
      if(nowIdx<4){
        nowIdx++;
      }else{
        nowIdx=0;
      }
      moveFn();
      fadeFn();
    },2000);
  });


  


  // 매거진
  const $mzPagination = $('.wt_zine>ul>li>a');
  const $mzContainer = $('.wt_zine>ol>li');

  $mzPagination.on('click',function(evt){
    evt.preventDefault();

    nowIdx = $mzPagination.index(this);
    $mzPagination.parent().eq(nowIdx).addClass('on').siblings().removeClass('on');

    $mzContainer.eq(nowIdx).fadeIn().siblings().fadeOut();
  });

  // 분양뉴스
  const $newsBtn = $('.newsbtn');
  const $news = $('.news');

  $newsBtn.on('click', function(evt){
    evt.preventDefault();

    $(this).toggleClass('on');

    if($newsBtn.hasClass('on')){
      $newsBtn.text('닫기');
      $news.stop().slideDown();
    } else{
      $newsBtn.text('분양 뉴스');
      $news.stop().slideUp();
    }
  });
 
});