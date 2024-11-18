// @start 11월 18일 (월) 오후 수업
// jQuery 의 목적은 2가지
// html 및 css 제어
// 외부데이터 연동
// jQuery는 $(); 를 대신해서 사용
//  html 과 css 가 화면에 보일 준비 끝나면
//  image, font, mp3, mp4는 로딩 체크를 못함.

// 제이쿼리는 이것을 자동으로 출력하는 모드다.
// window.addEventListener("DOMContentLoaded", function(){})

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
// window.addEventListener("scroll", function () {});
// $(window).on("scroll", function () { 로(18line) 변경됨

// @end 11월 18일 (월) 오후 수업

// 11월 6일 수업 내용 + 11월 18일 소스 지움.
// 협업에서는 소스 컨밴선 중요
// window.addEventListener("load", function () {
// /*
//           1. 사용자가 스크롤바로 화면아래로 이동시
//           2. header  클래스에 하단에 라인을 생성
//           3. 사용자가 스크롤바로 화면 최상단으로 이동시
//           4. header 클래스에 하단에 라인 제거
//       */
// //    header 를 보관함에 담아둔다.
// const header = document.querySelector(".header");
// //   console.log(header);

// // 스크롤 체크하기
// window.addEventListener("scroll", function () {
// const scrollPositionY = window.scrollY;
// console.log(scrollPositionY);
// // header 에 class 추가히기
// if (scrollPositionY > 0) {
//   header.classList.add("header-active");
// } else {
//   header.classList.remove("header-active");
// }
//   });
// });
// @end 스크롤 체크하기 11월 18일 @jQuery 작업으로 스크롤 체크하기 날림

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
// @end 11월 18일 마지막 시간 jQuery로 수정

// 11월 7일(목)작업 내용
// 이미지 바꾸기 및 메뉴 펼침
// window.addEventListener("load", function () {
/**
 * 아이콘 이미지 바꾸기
 * <img src="경로" alt="" />
 * 위의 경로를 즉, html 글자수정
 * 클릭시 이미지 바꾸기(토글)
 */
// 1. 버튼 역할하는 ID 찾기
// html 모바일용 bt 67번
// const mobileButton = document.querySelector("#mb-menu-bt");
// console.log(mobileButton);
// 2. 버튼 안에 있는 이미지를 찾기
// const mobileButtonImage = document.querySelector("#mb-menu-bt img");
// console.log(mobileButtonImage);

// 3.버튼 안에 있는 이미지의 src는 무엇일까?
// <img src="./images/icon/icon-hbr.png" alt="모바일메뉴" />
// const srcString = mobileButtonImage.getAttribute("src");
// console.log(srcString);

// 4. 버튼 클릭 처리
// const openIcon = "./images/icon/icon-hbr.png";
// const closeIcon = "./images/icon/icon-close.png";

// mobileButton.addEventListener("click", function () {
//   // 내가 하고싶은 일은 이미지의 src에 담겨진 글자를 수정하겠다.
//   const imageSrc = mobileButtonImage.getAttribute("src");
//   // console.log(imageSrc);

//   if (imageSrc == openIcon) {
//     // 이미지 src 를 교체 하겠다.
//     mobileButtonImage.setAttribute("src", closeIcon);
//     mobileMenuBg.classList.add("bg-mb-menu-active");
//     mobileMenu.classList.add("mb-menu-active");
//   } else {
//     // 이미지 src 를 교체 하겠다.
//     mobileButtonImage.setAttribute("src", openIcon);
//     mobileMenuBg.classList.remove("bg-mb-menu-active");
//     mobileMenu.classList.remove("mb-menu-active");
//   }
// });

// 모바일 메뉴 관련 내용을 찾아서 이름을 주고 보관하자.
// 1. 모바일 배경
// html 42번 줄 bg-mb-menu
// const mobileMenuBg = document.querySelector(".bg-mb-menu");
// console.log(mobileMenuBg);
// 2. 모바일 메뉴
// const mobileMenu = document.querySelector(".mb-menu");
// console.log(mobileMenu);

// 반응형 테스트
// pc버전에서는 모두 다 즉, 버튼도 초기화, 모바일 메뉴도 초기화
// window.addEventListener("resize", function () {
// 웹 브라우저의 넓이를 체크한다.
// const windowwidth = window.innerWidth;
// css 코드에 반응형 작동이 1024px 부터 작동하니까.
// if (windowwidth > 1024) {
// 모바일 메뉴 버튼을 원래대로 되돌린다.
// mobileButtonImage.setAttribute("src", openIcon);
// }
// console.log(windowwidth);
// });
// });
