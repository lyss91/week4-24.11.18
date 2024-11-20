// @start 11월 19일 slide-logocopy 만들고 주석 다 날림.
// @start 11월 18일 마지막 수업 jQuery 수정
$(document).ready(function () {
  var LOGO_DATA_URL = "/apis/logodata.json";

  $.ajax({
    url: LOGO_DATA_URL,
    method: "GET",
    datatype: "json",
    success: function (result) {
      var logoHtml = "";

      for (var i = 0; i < result.length; i++) {
        var data = "";
        data += "<div class=`swiper-slide`>";
        data += "<img src=";
        data += "/images/etc/";
        data += result[i].imgUrl;
        data += " alt=";
        data += result[i].desc;
        data += "/>";
        data += "</div>";

        // `<div class="swiper-slide"><img src="/images/etc/${result[i].imgUrl}" alt="${result[i].desc}"/></div>`;

        logoHtml += data;
      }

      // console.log(logoHtml);

      // 3. 생성된 HTML을 원하는 곳에 배치 (11월11일 34~ HTML65line)
      // const headerLogoTag = document.querySelector(
      var headerLogoTag = $(".header-logo-motion .swiper-wrapper");
      // console.log(headerLogoTag);
      // headerLogoTag.innerHTML = logoHtml;
      headerLogoTag.html = logoHtml;

      // 11월 18일 작업 완료

      // 4. swiper 생성 및 실행
      // @start blog <> 블로그 변화 하는것 작업
      const headerLogo = new Swiper(".header-logo-motion", {
        loop: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        // effect: "fade",만 입력시, 겹쳐서 지저분해 진다.
        effect: "fade",
        // swipe API 참고 해서
        fadeEffect: {
          crossFade: true,
        },
        // fadeEffect: {crossFade: true,}, 입력시 깔끔해짐.
        // @end blog <> 블로그 변화 하는것 작업
      });
      // @start 11월 12일 추가 59 - 71
      // 추가 1:  먼저 멈춘다.
      headerLogo.autoplay.stop();
      // 추가2 : 마우스 오버 되면 다시 플레이
      headerLogoTag.addEventListener("mouseenter", function () {
        headerLogo.autoplay.start();
      });
      // 추가 3: 마우스 아웃 되면 멈춤 및 첫 슬라이드로 이동
      headerLogoTag.addEventListener("mouseleave", function () {
        headerLogo.autoplay.stop();
        headerLogo.slideToLoop(0); // 무조건 첫 슬라이드로 가라.
      });
    },
    error: function () {},
  });
});
// @end 11월 18일 마지막 수업 jQuery 수정

// @start  11월 19일 오전수업 jQuery 수정

// 11월 8일 (금) html 62-93
window.addEventListener("load", function () {
  //  @start api 주소 : json 주소가 어디니?
  //   json 파일 URL 주는 것
  const LOGO_DATA_URL = "/apis/logodata.json";
  //   인테넛에서 json파일 찾는 방법
  //   http://127.0.0.1:5500/apis/logodata.json

  // API를 통한 데이터 불러오기
  //   ----request:리퀘스트
  //   API를 통해 불러들여진 결과물
  //   ----response: 리스판스

  //   this.fetch(LOGO_DATA_URL). then(성공했을때).catch(에러가 났을때);
  fetch(LOGO_DATA_URL)
    .then(function (response) {
      //   console.log(response);
      const result = response.json();
      //   console.log(result);
      return result;
    })
    .then(function (result) {
      // 1. json 뜯기
      // console.log(result);
      // 2. 반복해서 HTML 태그를 생성
      let logoHtml = "";
      for (let i = 0; i < result.length; i++) {
        const data = `<div class="swiper-slide"><img src="/images/etc/${result[i].imgUrl}" alt="${result[i].desc}"/></div>`;

        logoHtml += data;
      }

      // console.log(logoHtml);

      // 3. 생성된 HTML을 원하는 곳에 배치 (11월11일 34~ HTML65line)
      const headerLogoTag = document.querySelector(
        ".header-logo-motion .swiper-wrapper"
      );
      // console.log(headerLogoTag);
      headerLogoTag.innerHTML = logoHtml;

      // 4. swiper 생성 및 실행
      // @start blog <> 블로그 변화 하는것 작업
      const headerLogo = new Swiper(".header-logo-motion", {
        loop: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        // effect: "fade",만 입력시, 겹쳐서 지저분해 진다.
        effect: "fade",
        // swipe API 참고 해서
        fadeEffect: {
          crossFade: true,
        },
        // fadeEffect: {crossFade: true,}, 입력시 깔끔해짐.
        // @end blog <> 블로그 변화 하는것 작업
      });
      // @start 11월 12일 추가 59 - 71
      // 추가 1:  먼저 멈춘다.
      headerLogo.autoplay.stop();
      // 추가2 : 마우스 오버 되면 다시 플레이
      headerLogoTag.addEventListener("mouseenter", function () {
        headerLogo.autoplay.start();
      });
      // 추가 3: 마우스 아웃 되면 멈춤 및 첫 슬라이드로 이동
      headerLogoTag.addEventListener("mouseleave", function () {
        headerLogo.autoplay.stop();
        headerLogo.slideToLoop(0); // 무조건 첫 슬라이드로 가라.
      });

      // @end 11월 12일 추가
    })
    .catch(function (error) {
      console.log(error);
    });
});
