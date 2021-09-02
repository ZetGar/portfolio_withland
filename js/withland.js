$(function(){
  const $slide = $('.mn_slide');
  const $thmbs = $('.mn_pagination li>a');

  let nowIdx=Math.floor(Math.random()*4);
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

  $(window).on('load',function(){
    clearInterval(intervalKey);

    moveFn();

    intervalKey=setInterval(()=>{
      if(nowIdx<4){
        nowIdx++;
      }else{
        nowIdx=0;
      }
      moveFn();
    },2000);
  });

 
});