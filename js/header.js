// @start 11월 19일(화) header-copy본 만들고 주석 다 날림.

$(document).ready(function () {
  // jQuery는 const를 잘 사용 안함. 호이스팅의 문제가 많이 발생.
  // header를 보관함에 담아둔다.
  var header = $(".header");
  // 스크롤 체크하기(지우고 가져온것)
  // window.onscroll = function(){} 를 밑에 $() 쓰면서 묶어준것
  $(window).on("scroll", function () {
    // const scrollPositionY = window.scrollY; 를 변형.
    var scrollPositionY = $(window).scrolTop();
    if (scrollPositionY > 0) {
      header.addClass("header-active");
    } else {
      header.removeClass("header-active");
    }
  });
});

// @start 11월 18일 마지막 시간 jQuery 수정
// 이미지 바꾸기 및 메뉴 펼침
// window.addEventListener("load", function () {
$(document).ready(function () {
  // const mobileButton = document.querySelector("#mb-menu-bt");
  var mobileButton = $("#mb-menu-bt");
  // const mobileButtonImage = document.querySelector("#mb-menu-bt img");
  var mobileButtonImage = $("#mb-menu-bt img");
  // const openIcon = "./images/icon/icon-hbr.png";
  var openIcon = "./images/icon/icon-hbr.png";
  // const closeIcon = "./images/icon/icon-close.png";
  var closeIcon = "./images/icon/icon-close.png";
  // const mobileMenuBg = document.querySelector(".bg-mb-menu");
  var mobileMenuBg = $(".bg-mb-menu");
  // const mobileMenu = document.querySelector(".mb-menu");
  var mobileMenu = $(".mb-menu");
  // mobileButton.addEventListener("click", function () {
  mobileButton.on("click", function () {
    // 내가 하고싶은 일은 이미지의 src에 담겨진 글자를 수정하겠다.
    // const imageSrc = mobileButtonImage.getAttribute("src");
    var imageSrc = mobileButtonImage.attr("src");
    // console.log(imageSrc);

    if (imageSrc == openIcon) {
      // 이미지 src 를 교체 하겠다.
      // mobileButtonImage.setAttribute("src", closeIcon);
      mobileButtonImage.attr("src", closeIcon);
      // mobileMenuBg.classList.add("bg-mb-menu-active");
      mobileMenuBg.addClass("bg-mb-menu-active");
      // mobileMenu.classList.add("mb-menu-active");
      mobileMenu.addClass("mb-menu-active");
    } else {
      // 이미지 src 를 교체 하겠다.
      // mobileButtonImage.setAttribute("src", openIcon);
      mobileButtonImage.attr("src", openIcon);
      // mobileMenuBg.classList.remove("bg-mb-menu-active");
      mobileMenuBg.removeClass("bg-mb-menu-active");
      // mobileMenu.classList.remove("mb-menu-active");
      mobileMenu.removeClass("mb-menu-active");
    }
  });
});

// 반응형 테스트
// window.addEventListener("resize", function () {
$(window).on("resize", function () {
  // const windowwidth = window.innerWidth;
  var windowWidth = $(window).width();
  if (windowwidth > 1024) {
    // mobileButtonImage.setAttribute("src", openIcon);
    mobileButtonImage.attr("src", openIcon);
    mobileMenuBg.removeClass("bg-mb-menu-active");
    mobileMenu.removeClass("mb-menu-active");
  }
  // console.log(windowwidth);
});

// @start 11월 19일(화) header-copy본 만들고 주석 다 날림.
