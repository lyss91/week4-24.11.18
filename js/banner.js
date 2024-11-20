// html 233 배너 banner
window.addEventListener("load", function () {
  const BANNER_DATA_URL = "/apis/banner.json";
  fetch(BANNER_DATA_URL)
    .then(function (response) {
      //   console.log("배너 :", response);
      const result = response.json();
      return result;
    })
    .then(function (result) {
      console.log(result);
      let htmlBanner = "";
      // 배너는 사진1개 고정이지만 1개 더 슬라이드 본다는 전제로 i < 2
      for (let i = 0; i < 2; i++) {
        const tag = `
            <div class="swiper-slide">
                <a href="${result[i].link}" >
                    <img src="./images/${result[i].imgpath}" alt="${result[i].title}" />
                </a>
            </div>
         `;

        htmlBanner += tag;
      }

      const BannerTag = document.querySelector("#banner-api");
      BannerTag.innerHTML = htmlBanner;

      // swipe 추가하기 전 // html 233 배너 banner
      // swipe 추가 (html 138 참고)
      /* <div class="swiper visual-slide"> */
      /* <div class="swiper-wrapper" id="main-api"> */

      const BannerSlide = new Swiper(".banner-slide", {
        // slidesPerView: 4,
        // spaceBetween: 20,
        loop: true,
      });
    })
    .catch(function () {});
});
