<!--  11월 19일(월) 오전 수업 -->

# 비동기(Asynchronous)

- `비동기`란 오랜 시간이 걸리는 작업
- 예) 서버에 데이터를 요청, 또는 파일을 읽을 때, 쓸때 등
- `비동기`처리는 시간이 많이 걸리는 작업중 `다른일도 같이 처리`하도록 진행하는 것

## 1. 비동기의 종류

- XHR (Xml Http Request)
- Callback
- Promise
- async / await
- 백엔드 API 샘플 사이트 (https://jsonplaceholder.typicode.com/)

## 1.1. XHR (Xml Http Request)

- 서버와 통신하는 작업
- `Request` : 서버에 자료를 요청하는 것
- `Response` : 요청된 자료로 반환된 결과
- 지금은 자주 사용하지 않습니다.
- xhr.status === 200 (정상적 자료 Response)
- xhr.status === 400 ( 단위면 사용자, 우리가 잘못된 값으로 Request;)
- xhr.status === 404 (우리, 사용자의 잘못 없는 페이지다.)
- xhr.status === 500 (이면 서버가 오류 또는 컴퓨터 꺼졋다.)

````js
// @start 11월 19일 (화) 오전수업
/**
 * getPost 함수는 백엔드 서버에 등록된 글 가져오기
 *
 * 사용법
 * ```javascript
 * getPosts()
 */
// 함수정의
// 요청을 실행할 함수
function getPosts() {
  // 1. xhr 1개 만듬.
  const xhr = new XMLHttpRequest(); //Xhr 한개 만듬.

  // 2. 백엔드에서 알려준 주소로 요청을 실행할 함수.
  // xhr.open("백엔드에서 정해주는주소")
  xhr.open("https://jsonplaceholder.typicode.com/posts");

  //  3. 웹 브라우저로 요청을 보낸다
  xhr.send();

  // 4. 요청이 결과를 처리하는 함수
  xhr.onload = function () {
    console.log("요청이 된 경우 결과 : ", xhr);
    if (xhr.readyState === 200) {
      // 200은 자료가 정상적으로 왔다 의미.
      // 처리가 완료 되었다면 [readystate값]에서 4가 출력됨, DONE을 의미한다.
      console.log(xhr.responseText);
    } else if (xhr.status === 404) {
      console.log("없는 페이지 입니다.");
    } else if (xhr.status === 505) {
      console.log("서버가 꺼져 입니다.");
    }
  };
}
// 함수 호출
getPosts();

//  방법들
//  GET
//  POST
//  PUT
//  DELETE
````

### 1.2 callback 함수로 처리하기

- 비동기 작업이 종료시 처리할 함수를 전달하여 처리

#### 콜백함수 적용 전

```js
// @start 콜백함수 적용 안한 방법
// 서버에서 데이터 가져오기
function getPosts() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      //할일 : [포트스들]을 html 태그로 만들고 화면에 배치
    } else {
      console.log("서버에러", xhr.status);
    }
  };
}

function getAlbums() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/albums");
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      //할일 : [앨범데이터]를 html 태그로 만들고 화면에 배치
    } else {
      console.log("서버에러", xhr.status);
    }
  };
}
function getTodos() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      //할일 : [할일데이터]를 html 태그로 만들고 화면에 배치
    } else {
      console.log("서버에러", xhr.status);
    }
  };
}

// 위에 같이 여러번 작업을 안하기 위해서 call back 함수 쓰는것
//  코드가 많고, 오타 위험도 높다.
// @end 콜백함수 적용 안한 방법
```

#### 콜백함수 적용 후

```js
// @start 콜백함수 적용한 방법
function getData(apiString = "", callBack = function () {}) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/" + apiString);
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      callBack(xhr.responseText);
    } else {
      console.log(apiString + "에러에요", xhr.status);
    }
  };
}

function todoParse(data) {
  console.log("할일 데이터 처리 했습니다.", data);
}
function albumParse(data) {
  console.log("앨범 데이터 처리 했습니다.", data);
}
function postsParse(data) {
  console.log("포스트 데이터 처리 했습니다.", data);
}
// function memberParse() {
//   console.log("멤버 데이터 처리 했습니다.");
// }
// member 없어서 오류 날것이다. users 로 되어있다.
function memberParse(data) {
  console.log("유저 데이터 처리 했습니다.", data);
}

getData("todos", todoParse);
getData("albums", albumParse);
getData("posts", postsParse);
// getData("member", memberParse);
getData("users", memberParse);
// @end 콜백함수 적용한 방법
```

#### 1.2.1. 콜백 지옥(hell) 경험

- 함수의 요청을 여러분의 머릿속에 관리하셔야 합니다. (단점)
- 순서보정을 못받아서 무한 들여쓰기 지옥에 빠진다.

```js
function getData(apiString = "", callBack = function () {}) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/" + apiString);
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      callBack(xhr.responseText);
    } else {
      console.log(apiString + "에러에요", xhr.status);
    }
  };
}
function todosParse(data) {
  console.log("할일 데이터 처리 했습니다.", data);
  getData("albums", albumsParse);
}
function albumsParse(data) {
  console.log("앨범 데이터 처리 했습니다.", data);
  getData("posts", postsParse);
}
function postsParse(data) {
  console.log("포스트 데이터 처리 했습니다.", data);
  getData("users", memberParse);
}
function memberParse(data) {
  console.log("멤버 데이터 처리 했습니다.", data);
}

getData("todos", todosParse);
// getData("albums", albumsParse);
// getData("posts", postsParse);
// getData("users", memberParse);
```

### 1.3. Promise (약속)

- 서버 연동이 끝날 때 원하는 콜백함수를 실행한다.
- 비동기 작업이 완료되면 결과를 알려주는 방식이다.

#### 1.3.1. Promise 는 2개의 콜백함수를 파라멘터로 전달받음.

- resolve 콜백함수 : 정상적인 결과가 있을 때,
- reject 콜백함수 : 비정상적, 즉, 에러가 있을 경우

#### 1.3.2. Promise 는 3개의 상태가 있습니다.

- Pending : 결과 대기중...
- Resolved : 성공됨!
- Rejected : 실패함!

```js
// @start 11월 19일 (화) 오전수업

// @start 콜백함수 적용 안한 방법
// 서버에서 데이터 가져오기

// @start promise ()
function getData(apiString = "") {
  // 약속의 결과를 돌려 받는다.
  // 왜? new Promise 라고?
  // promise 로 만들어진 결과는 성공, 실패 에 대한 결과가 담겼다.
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/" + apiString);
    xhr.send();
    xhr.onload = function () {
      if (xhr.status === 200) {
        // callBack(xhr.responseText);
        resolve(xhr.responseText);
      } else {
        // console.log(apiString + "에러에요", xhr.status);
        reject(apiString + "에러에요", xhr.status);
      }
    };
  });
}

function todosParse(data) {
  console.log("할일 데이터 처리 했습니다.", data);
}
function albumsParse(data) {
  console.log("앨범 데이터 처리 했습니다.", data);
}
function postsParse(data) {
  console.log("포스트 데이터 처리 했습니다.", data);
}
// function memberParse() {
//   console.log("멤버 데이터 처리 했습니다.");
// }
// member 없어서 오류 날것이다. users 로 되어있다.
function memberParse(data) {
  console.log("유저 데이터 처리 했습니다.", data);
}

getData("todos")
  .then((data) => {
    todosParse(data);
    return getData("albums");
  })
  .then((data) => {
    albumsParse(data);
    return getData("posts");
  })
  .then((data) => {
    postsParse(data);
    return getData("users");
  })
  .then((data) => {
    memberParse(data);
  })
  .catch((error) => {
    console.log(error);
  });

// // getData("albums");
// getData("posts");
// // getData("member", memberParse);
// getData("users");

// @end promise
```

### 1.4. async / await

- 적극 추천
- function 앞에 반드시 `async` 키워드 작성
- function 안쪽에 `try catch` 작성권장

```js
// async / await 는 Promise를 반환 출력 & 정리하여 활용하는 것.
// const gogo = async() => {}

function getData(apiString = "") {
  // 약속의 결과를 돌려받는다.
  // 왜 new Promise 라고 한 것은
  // promise 로 만들어진 결과는 성공, 실패 에 대한 결과가 담겼다.
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/" + apiString);
    xhr.send();
    xhr.onload = function () {
      if (xhr.status === 200) {
        //   callBack(xhr.responseText);
        resolve(xhr.responseText);
      } else {
        // console.log(apiString + "에러에요", xhr.status);
        reject(apiString + "에러에요", xhr.status);
      }
    };
  });
}

function todosParse(data) {
  console.log("할일 데이터 처리 했습니다.", data);
}
function albumsParse(data) {
  console.log("앨범 데이터 처리 했습니다.", data);
}
function postsParse(data) {
  console.log("포스트 데이터 처리 했습니다.", data);
}
function memberParse(data) {
  console.log("멤버 데이터 처리 했습니다.", data);
}

// 순차적 Promise 실행하기
// @start async / await
// 함수 앞에 async 를 붙여 주고 await 활용
async function getAllData() {
  try {
    const tododata = await getData("todos");
    todoParase(todosdata);
    const albumsdata = await getData("albums");
    albumsParase(albumsdata);

    const postsdata = await getData("posts");
    postsParase(postsdata);

    const usersdata = await getData("users");
    memberParse(usersdata);
  } catch (error) {
    console.log(error);
  }
}

getAllData();
```

## 2. 활용 외부 API 연동코드

```js
// async / await 정리
async function getAllData() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log("포스트 :", res.json());
    res = await fetch("https://jsonplaceholder.typicode.com/albums");
    console.log("앨범 :", res.json());

    res = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log("유지 :", res.json());
  } catch (error) {
    console.log(error);
  }
}
```
