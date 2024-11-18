// 11월 11일 추가
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
        // 각 세부 HTML 글자 만들기(html 344-355)
        // 바껴야하는 부분들 ${}붙이고
        const tag = `
            <a href="${result[i].link}" class="card-wrap">
              <div class="card-img">
                <img src="./images/${result[i].imgpath}" alt="${result[i].cardname}" />
              </div>

              <div class="card-info">
                <h5 class="card-cate">${result[i].cardname}</h5>
                <span class="card-count">${result[i].cardno}</span>
              </div>
            </a>
       `;
        //(결과물 확인하고 주석처리시킴)
        // 모든 html 글자 하나로 합치기
        htmlCards += tag;
        // console.log("htmlCards : ", htmlCards);
      }
      //console.log("==================");
      // console.log("나오라..");
      // console.log("카드 결과 : ", htmlCards);

      // html 출력하기
      // (html343  <div class="list-card" id="cards-api">
      // id니깐 #으로 호출
      const cardsTag = document.querySelector("#cards-api");
      // console.log(cardsTag);
      cardsTag.innerHTML = htmlCards;
    })
    .catch(function () {});
});
