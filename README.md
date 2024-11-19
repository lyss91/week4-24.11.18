<!-- 11월 19일 오후 수업 Nodejs 시작 -->

# Node.js

- 웹브라우저가 아닌 pc 에서 실행되는 자바스크립트
- 웹서버, 데이터베이스 연결, 웹서비스 개발 환경 구성 등..

## 1. 설치

### 1.1. https://nodejs.org 설치하기 (개인이 작업시)

### 1.2. NVM ( Node Version Manage) (강의에서 쓰는 Node.js)

- 여러개의 node.js 버전을 골라서 설치 및 버전을 골라서 실행
- https://github.com/coreybutler/nvm-windows/releases
  > nvm-setup.exe 파일 다운로드
- 설치 환경 확인

```
1. 터미널에서 (안되면 vscode 껏다키고 확인)
nvm -v
```

- node.js 내 pc에 설치된 목록 확인

```
nvm ls
```

- node.js 전체 목록 확인

```
nvm list available

```

- 원하는 LTS 버전 설치하기 (목록 확인후)

```
nvm install [LTS에 나오는버전]
nvm install 20.18.0
nvm install 20.12.0

설치 이후[ nvm ls ] 로 확인
```

- 버전 삭제하기

```
uninstall [LTS에 나오는버전]
uninstall 20.12.0
삭제 이후 [ nvm ls ] 로 확인
```

- 버전 사용하기

```
nvm use [LTS에 나오는버전]
nvm use 20.18.0

이후 [ nvm ls ] 로 확인
```

## 2. node.js 버전 확인하기.

```
node -v

```

## 3. npm 버전 확인하기 (Node Package Manage)

```
npm -v
```

## 4. js 프로젝트 구성

- 원하는 소스를 (https://www.npmjs.com/) 에서 다운로드 받아서 설치한다. (추후)
- 수작업으로 기본 Node.js 프로젝트를 생성해 봅시다.

### 4.1. Node.js 프로젝트 폴더 및 기본형 생성

- `08-nodejs` 폴더생성
- `cd 09-nodejs` 폴더 이동
- node.js 프로젝트 초기화
- `npm init`

### 4.2. Node.js 로 index.js 실행하기

- `index.js` 생성

```js
// 입력된 상태이므로 .
console.log("반가워 Node.js")

터미널에
node index.js 입력시 출력된다.
```

- `node index.js` 엔터
- `반가워 Node.js`
- 만약에 `index.js` 가 `src` 폴더에 배치되었다면
- `node src/index.js` 엔터

### 4.3. 매번 입력하기 어려우므로 스크립트 명령 사용하자.

- `, "dev": "node src/index.js" ` 추가 시킨것

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "node src/index.js"
  },

```

- `npm run dev` 하면 똑같이 "반가워" 출력한다.

## 5. 모듈 직접 만들어보기

- 모듈의 개념은 `파일 단위`로 `지역 스코프`를 가진다.

```
- ES6 모듈방식 <<(현재 적영되고 있는기본 방식)
- CommonJS 모듈방식
- AMD 모듈방식
- UMD 모듈방식
```

- 지금은 ES6 모듈방식을 기본으로 한다.
- `package.json 을 셋팅하지 않으면 자동으로 commonJS 모듈이 적용됨`

### 5.1. CommonJs 이해

```js
// 사용하려는 모듈을 불러들인다.
// 무조건 코드위치가 최상위에서 불러들인다.
const { say, smile } = require("./util.js");
console.log("반가워 Node.js");
// 너무 많은 기능이 있을 것이므로 원하는 것만 골라서 사용한다(관례)
// 객체 구조 분해 할당 문법을 이용한다.
// const aaa = require("./util.js") < 안좋은 케이스다.
say();
// hohoho();
smile();
```

### 5.2. ES6 모듈의 이해 (필수)

- 모듈은 `파일단위` `지역 스코프`를 가진다.
- 반드시 명시하셔야 합니다. (Node.js 를 직접 구성하신다면)
- package.json 에 명시

```
"type": "module",
```

샘플1

```js
// 11월 19일(화) 오후수업
// ES6 모듈의 이해

function say() {
  console.log("안녕하세요");
}
function hi() {
  console.log("방가워요.");
}
function smile() {
  console.log("웃어요^^.");
}

//  ES6 모듈에서 외부에 함수를 오픈시킴.
export { say, hi, smile };
```

```js
// ES6 모듈의 이해

// const { say, smile } = require("./util.js");
// import { say, smile, hohoho as hi } from "./util.js";
// hi는 기본값 (객체 구조 분해 할당)
import hi, { say, smile } from "./util.js";
//  export 만 제대로 해두면 ctrl + spaceba 면 import 쉽게 찾을 수 있다.
console.log("반가워 Node.js");
say();
// hohoho();
smilele();
yok();

// as 는 별명 붙이는것 hohoho as hi 별명이 hi
// 일단은 as 는 다음에.
```

- 샘플2

```js
// 기본값
// 11월 19일(화) 오후수업
// ES6 모듈의 이해

export function say() {
  console.log("안녕하세요");
}
export default function hi() {
  console.log("방가워요.");
}
export function smile() {
  console.log("웃어요^^.");
}
export function yok() {
  console.log("화나요.");
}

//  ES6 모듈에서 외부에 함수를 오픈시킴.
export { say, hi, smile };
```

화살표 함수 방식.

```js
export const say = () => {
  console.log("안녕하세요");
};

// hi를 변수로 먼저 선언하고 default로 export하거나, 이름 없는 함수로 export default를 사용해야 합니다.
const hi = () => {
  console.log("방가워요.");
};
export default hi;

export const smile = () => {
  console.log("웃어요^^.");
};

export const yok = () => {
  console.log("화나요.");
};
```

## 6. 타인(https://www.npmjs.com/)의 모듈 활용하기

- 미리 만들어둔 모듈을 다운로드 받아서 활용(오픈소스)
- 꼭 체크하자. `프로젝트 폴더 구조 변화` 및 `package.json 변화`
- 모듈 소스 관리는 `npm` 또는 `yarn` 으로 합니다.
- `npm -v` 설치를 확인함.

### 6.1. `npmjs.com` 에서 모듈 선택시 고려사항

- `TS (TypeScript) 마크` 붙어있는지 확인 후 최대한 활용할 것
- `weekly downloads` 20만 이상인 것 위주로 보자.
- 주기적 관리(version 관리, 2년이상 관리 안되면 고민해보자.)

### 6.2. 모듈관련 명령어

- 모듈 설치

```
npm i 모듈명
npm install 모듈명
```

-모듈 제거

```
npm uninstall 모듈명
```

- 모듈 초기 셋팅 : package-lock.json 제거, node_modules 폴더 제거

```
npm i
npm install
```
