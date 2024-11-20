// 11월 12일 난 SLIDE 강사님 DATA
// html 138   <div class="swiper-wrapper" id="main-api">
// 11월 11일 작업
// @start 4-46 11월 11일 슬라이드 api 작업
window.addEventListener("load", function () {
  // api 주소 :  /apis/main.json  리퀘스트하세요.
  const MAIN_SLIDE_URL = "/apis/main.json";
  // DATA (SLIDE) 호출
  fetch(MAIN_SLIDE_URL)
    .then(function (response) {
      // console.log("슬라이드 :", response);

      const result = response.json();
      return result;
    })
    .then(function (result) {
      // console.log("슬라이드 결과 : ", result);
      // HTML 만들기 (강사님 htmlVisual , 난 htmlSlide)
      // main-slide 사진부분 사진 4개 (html 141 - 159)

      let htmlSlide = "";
      // 변경 : 4 라는 숫자를 result.length 즉 길이(5)로 바꿨다.
      for (let i = 0; i < result.length; i++) {
        // 각 세부 html 글자 만들기
        // 변경 : 지금의 내용은 문법이 아닙니다.
        // 변경 : 지금 변경되는 내용은 프로그래머가 생각을 표현하고 문제 해결시도
        const tag = `
        <div class="swiper-slide" data-pc="${result[i].pc}" data-mb="${result[i].mb}">
            <a href="${result[i].url}">
              <img src="./images/${result[i].pic}" alt="${result[i].title}" />
              <!-- 추가 부분 -->
              <div class="title">${result[i].title}</div>
            </a>
          </div>
        `;
        // console.log("htmlSlide : ", htmlSlide);
        // 모든 html 글자 하나로 합치기 (let 으로 명명해준 애를 활용)
        htmlSlide += tag;
      }
      //   console.log(htmlNews);
      // html 출력하기 id니깐 #으로 호출
      // (html138 <div class="swiper-wrapper"  id="main-api">
      const slideTag = document.querySelector("#main-api");
      // console.log(slideTag);
      slideTag.innerHTML = htmlSlide;
      // @end 4-46 11월 11일 슬라이드 api 작업

      // @start 47-97 11월 12일 추가된 작업

      const slideList = document.querySelectorAll(
        ".visual-slide .swiper-wrapper .swiper-slide"
      );
      // console.log("innerHtml 이후 ", slideList);

      // 키핑
      slideList.forEach(function (aaa) {
        // console.log(aaa);
      });

      // 추가  : 현재 PC 화면인지 아니지를 먼저 구분합니다.
      // 추가 : 현재 어떤 상태인지를 먼저 저장해 둡니다.
      // 추가 : 우리는 document.querySelect 로
      // .visual-slide .swiper-wrapper .swiper-slide 를 찾을 수 있을까요?

      let windowState = "PC";
      // 윈도우 너비 파악
      const windowWidth = window.innerWidth;
      // 조건에 따라서 버전 확인
      if (windowWidth > 1024) {
        if (windowState != "PC") {
          windowState = "PC";
          // console.log("PC 버전");
        }
      } else {
        if (windowState != "MB") {
          windowState = "MB";
          // console.log("MB 버전");
        }
      }
      // console.log(windowState);

      window.addEventListener("resize", function () {
        // 윈도우 너비 파악
        const windowWidth = window.innerWidth;
        // 조건에 따라서 버전 확인
        if (windowWidth > 1024) {
          if (windowState != "PC") {
            windowState = "PC";
            // console.log("PC 버전");
          }
        } else {
          if (windowState != "MB") {
            windowState = "MB";
            // console.log("MB 버전");
          }
        }
      });
      // @end 47-97 11월 12일 추가된 작업

      //  @start 99 - 128 11월 7/8 작업
      const visualSlideSW = new Swiper(".visual-slide", {
        loop: true,
        pagination: {
          el: " .visual-slide .swiper-pagination",
          // 클릭이 가능하게 해줘
          clickable: true,
        },
        // 사진 자동재생,움직이는 것
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        speed: 1000,
      });
      // 개발자 추가 작업 : 마우스 가 Enter 가 되면 (마우스 걸치면)
      const visaulSide = document.querySelector(".visual-slide");
      // console.log(visaulSide);

      visaulSide.addEventListener("mouseenter", function () {
        // console.log("오버");
        visualSlideSW.autoplay.stop();
      });

      visaulSide.addEventListener("mouseleave", function () {
        // console.log("아웃");
        visualSlideSW.autoplay.start();
      });
    })
    //  @end 99 - 128 11월 7/8 작업

    .catch(function () {});
});
// @end 11월 11일 슬라이드 api 작업

// 11월 7일(목) 작업 html 104라인
// 11월 8일(금) 작업 html 126라인
// 카카오 블로그 사진안에 슬라이드 .... 나오게 하는 작업
