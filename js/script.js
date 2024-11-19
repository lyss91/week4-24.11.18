// async / await 정리
// fetch 가 promise를 작성 하지않아도 되는 것.
async function getAllData() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await res.json();
    console.log("포스트 :", data);
    res = await fetch("https://jsonplaceholder.typicode.com/albums");
    data = await res.json();
    console.log("앨범 :", data);

    res = await fetch("https://jsonplaceholder.typicode.com/users");
    data = await res.json();
    console.log("유지 :", data);
  } catch (error) {
    console.log(error);
  }
}

getAllData();
