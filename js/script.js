// ===== header part starts =====
$(window).scroll(function(){
  if($(window).scrollTop()>500){
    $('.menu-fix').addClass('fixed-menu')
    $('.dark_logo').css("display","none")
    $('.white-logo').fadeIn()
  }
  else{
    $('.menu-fix').removeClass('fixed-menu')
    $('.dark_logo').css("display","inline-block")
    $('.white-logo').fadeOut()
  }
})
// ===== header part ends =====

// ===== banner part starts =====
$(function() {
  $('.animate-rotate-1').animatedHeadline({
      animationType: 'rotate-1'
  });

});
// ===== banner part ends =====


// ===== counter-up part starts =====
$(".num").counterUp({
    delay: 10,
    time: 1000
});
// ===== counter-up part ends =====




// ===== about part starts =====
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});
// ===== about part ends =====

// ===== portfolio part starts =====
$('.portfolio-slider-01').slick({
  arrows:false,
  autoplay:true,
  autoplaySpeed:2000,
  speed:3500,
})

$('.portfolio-slider-02').slick({
  slidesToShow:3,
  prevArrow:'.prev',
  nextArrow:'.next',
  autoplay:true,
  autoplaySpeed:2000,
  speed:3500,
});
// ===== portfolio part ends =====


// ===== work-process part starts =====
$('.process-body .item1').mouseenter(function () {
  $('.item1 .upper-outer-circle').css("background", "#c6b4f0")
  $('.item1 .lower-outer-circle').css("background", "linear-gradient(90deg, #2092F5, #6122EF)")
  $('.counter1').css("color", "gray")
  $('.process-line2').css("width", "11%")
})
$('.process-body .item1').mouseleave(function () {
  $('.item1 .upper-outer-circle').css("background", "transparent")
  $('.item1 .lower-outer-circle').css("background", "transparent")
  $('.counter1').css("color", "rgb(26, 26, 26)")
  $('.process-line2').css("width", "0%")
})

$('.process-body .item2').mouseenter(function () {
  $('.item1 .upper-outer-circle').css("background", "#c6b4f0")
  $('.item1 .lower-outer-circle').css("background", "linear-gradient(90deg, #2092F5, #6122EF)")
  $('.counter1').css("color", "gray")
  $('.item2 .upper-outer-circle').css("background", "#c6b4f0")
  $('.item2 .lower-outer-circle').css("background", "linear-gradient(90deg, #2092F5, #6122EF)")
  $('.counter2').css("color", "gray")
  $('.process-line2').css("width", "37%")
})
$('.process-body .item2').mouseleave(function () {
  $('.item1 .upper-outer-circle').css("background", "transparent")
  $('.item1 .lower-outer-circle').css("background", "transparent")
  $('.counter1').css("color", "rgb(26, 26, 26)")
  $('.item2 .upper-outer-circle').css("background", "transparent")
  $('.item2 .lower-outer-circle').css("background", "transparent")
  $('.counter2').css("color", "rgb(26, 26, 26)")
  $('.process-line2').css("width", "0%")
})

$('.process-body .item3').mouseenter(function () {
  $('.item1 .upper-outer-circle').css("background", "#c6b4f0")
  $('.item1 .lower-outer-circle').css("background", "linear-gradient(90deg, #2092F5, #6122EF)")
  $('.counter1').css("color", "gray")
  $('.item2 .upper-outer-circle').css("background", "#c6b4f0")
  $('.item2 .lower-outer-circle').css("background", "linear-gradient(90deg, #2092F5, #6122EF)")
  $('.counter2').css("color", "gray")
  $('.item3 .upper-outer-circle').css("background", "#c6b4f0")
  $('.item3 .lower-outer-circle').css("background", "linear-gradient(90deg, #2092F5, #6122EF)")
  $('.counter3').css("color", "gray")
  $('.process-line2').css("width", "63%")
})
$('.process-body .item3').mouseleave(function () {
  $('.item1 .upper-outer-circle').css("background", "transparent")
  $('.item1 .lower-outer-circle').css("background", "transparent")
  $('.counter1').css("color", "rgb(26, 26, 26)")
  $('.item2 .upper-outer-circle').css("background", "transparent")
  $('.item2 .lower-outer-circle').css("background", "transparent")
  $('.counter2').css("color", "rgb(26, 26, 26)")
  $('.item3 .upper-outer-circle').css("background", "transparent")
  $('.item3 .lower-outer-circle').css("background", "transparent")
  $('.counter3').css("color", "rgb(26, 26, 26)")
  $('.process-line2').css("width", "0%")
})

$('.process-body .item4').mouseenter(function () {
  $('.item .upper-outer-circle').css("background", "#c6b4f0")
  $('.item .lower-outer-circle').css("background", "linear-gradient(90deg, #2092F5, #6122EF)")
  $('.counter').css("color", "gray")
  $('.process-line2').css("width", "100%")
})
$('.process-body .item4').mouseleave(function () {
  $('.item .upper-outer-circle').css("background", "transparent")
  $('.item .lower-outer-circle').css("background", "transparent")
  $('.counter').css("color", "rgb(26, 26, 26)")
  $('.process-line2').css("width", "0%")
})
// ===== work-process part ends =====


// ===== testimonial & skill part starts =====
$('.mix-slider').slick({
  fade:true,
  arrows:false,
  autoplay:true,
  speed:1500,
  asNavFor:'.test-lower-slider',
})

$('.test-lower-slider').slick({
  slidesToShow:5,
  centerMode:true,
  centerPadding:"0",
  autoplay:true,
  speed:1500,
  asNavFor:'.mix-slider',
  prevArrow:'.prev-button',
  nextArrow:'.next-button',
})
// ===== testimonial & skill part ends =====


$('.upper-arrow').click(function(){
  $('html,body').animate({
    scrollTop: 0
  },1000)
})