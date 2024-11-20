// 11월 7일(목) 작업 html 379라인

// 11월 11일(목) html 416라인 <div class="mb-card-slide" id="mb-cs-wrap">
// 화면이 작아졌을 때 밑에 가로로 카드슬라이드 나오는 영역임
window.addEventListener("load", function () {
  // api 주소 : /apis/card.json 리퀘스트하세요.
  const CARDS_DATA_URL = "/apis/cards.json";
  // 연산처리 : html 만들기
  fetch(CARDS_DATA_URL)
    .then(function (response) {
      // console.log("카드 :", response);
      const result = response.json();
      return result;
    })
    .then(function (result) {
      // console.log("카드 결과 : ", result);
      //   HTML 만들기
      let htmlCards = "";
      for (let i = 0; i < 5; i++) {
        // 각 세부 HTML 글자 만들기(html 416-474)
        // 공통된 작업으로 바껴야하는 부분들 ${}붙이고
        const tag = `
          <div class="swiper-slide">
              <!--@Start card -->
              <a href="${result[i].link}" class="card-wrap">
                <div class="card-img">
                  <img src="./images/${result[i].imgpath}" alt="${result[i].cardname}" />
                </div>

                <div class="card-info">
                  <h5 class="card-cate">${result[i].cardname}</h5>
                  <span class="card-count">${result[i].cardno}</span>
                </div>
              </a>
              <!--@End card -->
            </div>
     `;
        // 모든 html 글자 하나로 합치기
        htmlCards += tag;
        // console.log("htmlCards : ", htmlCards);
      }

      // html 출력하기 id니깐 #으로 호출
      // (html417 <div class="swiper-wrapper"  id="mb-cs-wrap">
      const cardsTag = document.querySelector("#mb-cs-wrap");
      // console.log(cardsTag);
      cardsTag.innerHTML = htmlCards;

      const cardSlide = new Swiper(".mb-card-slide-wrap", {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
      });
    })

    .catch(function () {});
});
// main-slide.css 85줄 .mb-card-slide-wrap
// 작업 완료 후bc 지우기!
