<!-- 11월 18일(월) 오전수업  -->

# JavaScript 기초

## 1. 객체

## 2. 배열(Array)

- 데이터 종류와 상관없이 여러개를 `순서(인덱싱)` 대로 저장하는 데이터객체

### 2.1. 배열 만드는 법

```js
// 방법1을  주로 활용 ( 배열 리터럴 )
const 배열명 = [요소1, 요소2, 요소3, ...];
// 방법 2는 강사님 경험상 많이 쓸일이 없으셧다.
// 배열 객체 생성함수로 만들기
const 배열명 = new Array(5); /// [,,,,]
// 배열을 함수를 통해서 만들 수 있음
const 새로운배열 = 기존배열.map();

```

### 2.2. 배열에 요소(각 인덱스 자리)의 값을 찾아서 사용하는 법

```js
const arr = [10, 20, "hello", function () {}, null, undefined, true];
console.log(arr[2]);
```

### 2.3. 배열도 객체라서 속성(프로퍼티)이 있어요.

```js
const obj = {속성명: 속성값, 속성명:기능  };
const obj = { property명: property값, property명: method};

// 배열도 객체라서
const arr = [];
arr.length 속성이 있어요. : 0 이라고 출력됨.
```

```js
// 배열 만들어보기
const lunchArr = ["사과", "딸기", "과자", "햄버거"];
const total = lunchArr.length;
//  lunchArr의 갯수를 담아서 출력.
console.log(total);
for (let i = 0; i < total; i++) {
  console.log(`${i} 번째의 요소는 ${lunchArr[i]}`);
}
```

### 2.4. 배열을 다루는 함수에서 원본을 `훼손하는 ` 배열함수

- push() : 배열 `끝`에 추가

```js
const lunchArr = ["사과", "딸기", "과자", "햄버거"];
lunchArr.push("커피");
console.log(lunchArr);
// 커피 추가 (원본 훼손)
//["사과", "딸기", "과자", "햄버거", 커피 ];
```

- pop() : `끝` 요소 제거 및 제거된 요소 반환

```js
const lunchArr = ["사과", "딸기", "과자", "햄버거"];
lunchArr.pop();
console.log(lunchArr);
// 햄버거 제거 (원본 훼손)
// [  "사과",  "딸기",  "과자"]
```

- unshift() : `앞` 배열 앞에 요소 추가

```js
const lunchArr = ["사과", "딸기", "과자", "햄버거"];
lunchArr.unshift("커피");
console.log(lunchArr);
// 햄버거 앞자리 추가 (원본 훼손)
// ["커피", "사과",  "딸기",  "과자", "햄버거"]
```

- shift() : `앞`에서 요소 제거

```js
const lunchArr = ["사과", "딸기", "과자", "햄버거"];
lunchArr.shift();
console.log(lunchArr);
// 햄버거 앞자리 제거 (원본 훼손)
// ["딸기",  "과자", "햄버거"]
```

- splice() : `원하는 인덱스` 부터 추가, 제거

```js
const lunchArr = ["사과", "딸기", "과자", "햄버거"];
// 1 번으로 부터 0개를 제거하고, "커피", "우유" 추가
// (원본 훼손)
lunchArr.splice(1, 0, "커피", "우유");
console.log(lunchArr);
// ['사과', '커피', '우유', '딸기', '과자', '햄버거']

// const lunchArr = ["사과", "딸기", "과자", "햄버거"];
// 1 번으로 부터 2개를 제거하고, "도너츠", "콜라" 추가
// (원본 훼손)
lunchArr.splice(1, 2, "도너츠", "콜라");
console.log(lunchArr);
// ['사과', '도너츠', '콜라', '딸기', '과자', '햄버거']

// 1번 포함 모두 다 제거
// (원본 훼손)
lunchArr.splice(1);
console.log(lunchArr);
// ['사과']
```

- sort() : 배열의 순서를 정렬하기.

```js
// sort 배열의 순서 정렬 (원본 훼손)
const lunchArr = ["사과", "딸기", "과자", "햄버거"];
lunchArr.sort();
console.log(lunchArr);
// ['과자', '딸기', '사과', '햄버거']
const enArr = ["k", "o", "r", "e", "A", "j", "p", "a", "n"];
enArr.sort();
console.log(enArr);
// ['A', 'a', 'e', 'j', 'k', 'n', 'o', 'p', 'r']
const numArr = [1, 2, 12, 25, 37, 30];
numArr.sort();
console.log(numArr);
// 앞자리가 1이라 12부터 출력시킴.
//[1, 12, 2, 25, 37, 30]

// 내림 차순으로 정렬해 보자.
numArr.sort((a, b) => b - a);
console.log(numArr);
// [37, 30, 25, 12, 2, 1]

// 올림 차순
numArr.sort((a, b) => b - a);
console.log(numArr);
[37, 30, 25, 12, 2, 1];
//  [1, 2, 12, 25, 30, 37]
```

- reverse() : `역순` 정렬

```js
const numArr = [1, 2, 12, 25, 37, 30];
// 원본 훼손
numArr.reverse();
console.log(numArr);
// [30, 37, 25, 12, 2, 1]
```

- fill() : 요소에 값을 채운다.

```js
const numArr = [1, 2, 12, 25, 37, 30];
// 원본 훼손
// numArr.fill(0);
console.log(numArr);
// [0, 0, 0, 0, 0, 0]
// 값 1 을 채워라
// 인덱스 3번으로 부터
// 인덱스 5번 전까지
numArr.fill(1, 3, 5);
console.log(numArr);
// [1, 2, 12, 1, 1, 30]
```

- flat() : `배열을 평탄화` 사용합니다.
  : flat 을 위한 별도의 라이브러가 존재합니다.
  : react 에서 모듈을 설치해서 사용합니다.

```js
const numArr = [1, 2, 3, ["a", "b", "c"], 8, 9];
// flat(배열의 단계)
const result = numArr.flat(1);
console.log(result);
// [1, 2, 3, 'a', 'b', 'c', 8, 9]
const num2Arr = [1, 2, [3, [4, [5, 6]]], 100];
const result2 = num2Arr.flat(1);
console.log(result2);
// [1, 2, 3, Array(2), 100]
const result3 = result2.flat(1);
console.log(result3);
// [1, 2, 3, 4, Array(2), 100]
const result4 = result3.flat(1);
console.log(result4);
// [1, 2, 3, 4, 5, 6, 100]
```

### 2.5. 배열을 다루는 함수에서 원본을 `훼손하지 않고(복사본) 새로운 배열 을 만들어 주는 함수`

- `데이터 불변성(immutability)` 유지하셨나요?

### 2.5.1 map() (매우매우 중요)

- `map() 매우중요` 가치가 있고, 자주활용
- 원본 배열의 요소에

```js
const originArr = ["홍길동", "고길동", "김수한무"];
const copyArr = originArr.map(function (item, index, arr) {
  // console.log(`item : ${item}, index: ${index}`);
  const tag = `<div class="user-info">${item}</div>`;
  console.log(tag);
  // 리턴해야 배열이 담깁니다.
  return tag;
});

console.log(`원본 originArr : ${originArr}`);
console.log(`복제본 copyArr : ${copyArr}`);
// function 빼고 화살표함수로 표시한것
const copyArrowArr = originArr.map((item, index) => {
  return `<a href="${index}">${item}</a>`;
});
console.log(`복제본 copyArrowArr : ${copyArrowArr}`);
```

### 2.5.2 filter()

- 조건에 참인 것만 모아서 배열 리턴
- 자주 사용은 합니다.

```js
const originArr = ["홍길동", "고길동", "김수한무"];

const filterArr = originArr.filter((item, index, arr) => {
  // true 면
  return item === "고길동";
});
console.log(filterArr);

const filterArrResult = originArr.map((item, index, arr) => {
  // true 면
  return item === "고길동" ? "회원인증됨" : "일반멤버";
});
console.log(filterArrResult);
```

```js
const memberHong = {
  age: 10,
  name: "홍길동",
  role: "GUEST",
};
const memberKim = {
  age: 18,
  name: "김수한무",
  role: "MEMBER",
};
const memberPark = {
  age: 25,
  name: "박둘리",
  role: "ADMIN",
};

const originArr = [memberHong, memberKim, memberPark];

const result = originArr.filter((item, index) => {
  // return item.role === "ADMIN";
  return item.age <= 20;
});
console.log(result);
```

### 2.5.3. slice ()

- 배열의 일부를 복사한다.

```js
const numArr = [1, "a", "b", 4];
// 시작인덱스(1)로 부터 도착인덱스(3) 미만 요소 출력.
const nowArr = numArr.slice(1, 3);

console.log(numArr);
console.log(nowArr); // ['a', 'b' ] 가 출력됨
```

<!-- 11월 18일(금) 오후수업 -->

### 2.5.4 concat();

- 배열을 `합쳐서` 하나의 배열을 리턴.

```js
const numArr1 = [1, "a", "b", 4];
const numArr2 = [8, 100];
const result = numArr1.concat(numArr2);
console.log(result);
// [1, 'a', 'b', 4, 8, 100]
```

### 2.5.5. reduce()

- 배열의 요소를 탐색하면서 누적 연산함.
- 누적된 결과를 출력함.

```js
const numArr1 = [1, 2, 3, 4];
// 문법이 좀 다릅니다.
// 보통은 ===> (iteml, index, arr)
// const total = numArr1,reduce(함수, 초기값)
const total = numArr1.reduce((acc, cur) => {
  console.log("acc : ", acc);
  console.log("cur : ", cur);
  return acc + cur;
}, 0);

console.log("total : ", total);
```

### 2.5.6. join();

- 문자열로 배열을 연결한 결과를 만든다.

```js
const numArr1 = [1, 2, 3, 4];
// 기본은, 연결된 글자
const result = numArr1.join();
// console.log("result : ", result);
console.log(`typeof ${typeof result}, ${result}`);
// 결과는 string
// typeof string, 1#2#3#4
```

### 2.5.7. indexOf();

- 찾는 요소가 몇번째 인덱스 인지를 파악

```js
const numArr1 = [1, 2, 3, 4];
// 기본은, 연결된 글자
const result = numArr1.indexOf(3);
// 3이 있는 위치를 찾아내는 것
// console.log("result : ", result);
console.log(`typeof ${typeof result}, ${result}`);
// 결과는 typeof number, 인덱스 2를 출력할 것이다.
// 못찾으면 -1 이 나올것이다.
```

### 2.5.8 includes();

- 요소가 포함되었는지 아닌지

```js
const numArr1 = [1, 2, 3, 4];
// 기본은, 연결된 글자
const result = numArr1.includes(3);
// 3이 있는지 없는지 찾아내는 것
console.log(`typeof ${typeof result}, ${result}`);
// 결과는 boolean 참거짓 , true 가 나올것이다.
```

## 3. 객체 즉 {} 와 배열 []에 필수 이해

### 3.1. 반복문

- 배열 : forEach, For, for of, map, [for in 권장X]

```js
const numArr = [1, 2, 3, 4];

// 배열에서 요소에 접근하는 전통적 방식
console.log("for 구문");
for (let i = 0; i < numArr.length; i++) {
  console.log(numArr[i]);
}

// 방법1
console.log("forEach 구문");
// 다음 버전
// numArr.forEach((item, index, arr) => {})
numArr.forEach((item) => {
  console.log(item);
});
//  방법1 end

// 방법 2
console.log("for of 구문");
// 최신(for of 문)
for (const item of numArr) {
  console.log(item);
}
//  방법2 end

// 방법3 (for in 은 참조용. 최대한 배열에서는 쓰지말자. 되도 쓰지말자.)
console.log("for  in 구문");
const strArr = ["a", "b", "c"];
for (const item in strArr) {
  console.log(strArr[item]);
}
//  방법3 end

// 방법 4 map
numArr.map((item) => {
  console.log(item);
});

//  방법4 end
```

- 객체 : for in 추천

```js
const person = {
  age: 10,
  nickName: "hong",
  isMember: false,
};
person.hi = "반가워";

// for in 구문 (객체 속성 반복 구문)
for (item in person) {
  console.log(item); // 속성명
  console.log(person[item]); // 속성값
}
// 위에 for in 을 추천

// 나는 [값만] 출력하고 싶다. (추천하지 않습니다만...)
console.log("Object.value ==== ");
Object.values(person).forEach((key) => {
  console.log(key);
});

// 나는 [이름만] 출력하고 싶다. (추천하지 않습니다만...)
console.log("Object.keys ====");
Object.keys(person).forEach((key) => {
  console.log(key);
});

// 나는 [이름과 값]을 출력하고 싶다. (추천하지 않습니다만...)
console.log("Object.entries ====");
Object.entries(person).forEach((key, value) => {
  console.log(key, value);
});
```

- 정리

```
배열 : for, forEach, map
객체 : for...in
```

### 3.2. 값 추출하여 보관

- 배열

```js
const arr = ["사과", "딸기", "바나나"];
// const apple = arr[0];
// const straw = arr[1];
// const banana = arr[2];
// 위에 3개를 단순화 시킨 Spread ... 문법 작성 한것.
const [apple, straw, banana] = [...arr];
console.log(apple, straw, banana);
// Spread 문법으로 배열 합치기
const newArrOld = ["감자", arr[0], arr[1], arr[2], "고구마", "상추"];
const newArr = ["감자", ...arr, "고구마", "상추"];
console.log(newArr);

// Rest 파라메터 문법
function go(a, b, ...rest) {
  // a 는 1
  // b 는 2,
  // rest ===> [3,4,5,6,7]
}
go(1, 2, 3, 4, 5, 6, 7);
```

-객체

```js
// const person = {
//   age: 10,
//   nickName: "홍길동",
// };

// const a = person.age;
// const b = person.nickName;
// 객체의 구조를 분해해서 할당한다.
//  객체 구조 분해 할당
// (1) const { a: age, b: nickName } = person;
// (2) const { age: age, nickName: nickName } = person;
// (3) const { age, nickName } = person;
// 객체 축약형으로 3번째 껄로 작성하게 된다.
const { age, nickName } = {
  age: 10,
  nickName: "홍길동",
};
// 여기 에서도 더 축약해서 위에 const person 객체를 { } 안에 넣어서 간략하게 작성한다.
//  end
```
