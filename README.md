<!-- 11월 15일(금) 오후수업  -->
<!-- @start branch 3week-js3  -->

# javaScript 기초

## 1. 객체

### 1.1. 가장 간단한 객체 만드는 법

- 우리는 `명칭을 약속`합니다.
- 무조건 `객체리터럴` 이라고 읽어야 합니다.
- 다음 형식은 무조건 명칭을 지켜주세요.

```js
const 객체 = {
  객체키명1: 객체키값1,
  객체키명2: 객체키값2,
};
```

- 만약 `1 개의 객체`를 `생성하는 리터럴`이라면 `카멜케이스`로 이름짓기

```js
const person = {
  nickName: "홍길동",
  age: 15,
  member: false,
};
```

- 주의 할 것은 만약 `여러 개의 객체`를 `생성하는 함수`라면 `파스칼케이스`로 이름짓기
- `생성자함수 new` 공식명칭이 있다.

```js
function Person() {
  this.nickName = "홍길동";
  this.age = 15;
  this.member = false;
}
```

-응용 예시

```js
// 11월 15일(금) 오후수업
// 객체
const student_1 = {
  age: 20,
  member: false,
};

student_1.age;
student_1.member;

const student_2 = {
  age: 20,
  member: false,
};
student_2.age;
student_2.member;
const student_3 = {
  age: 20,
  member: false,
};
student_3.age;
student_3.member;

// 참 힘들어요. ㅠㅠ
function Student(_age, _member) {
  // 여기서 this 는 윈도우를 나타낸다.
  this.age = _age;
  this.member = _member;
  console.log(this);
}
Student(10, true);
// new 를 추가하면 12, false 로 객체를 생성하여 출력한다.
const student_4 = new Student(12, false);
console.log(student_4);
```

### 1.2 객체에 기능 추가하기

- `메소드 -method`, `행위 - behavior` 라고 합니다.

#### 1.2.1. 객체 `리터럴`

```js
// 11월 15일(금) 오후수업
// 객체
const student_1 = {
  age: 15,
  member: true,
  say: function () {
    // 누가 실행했니? 통과
    // student_1 가 실행함 say();
    console.log(this.age); // 15
  },
  cry: () => {
    // this는 윈도우의 member를 찾음, 화살표함수라서.
    // 화살표의 this window를 나타내서 undefined 를 나타낸다.
    console.log(this.member); //undefined
  },
  hi() {
    // 왜 정상이지?? 메소드 축약형, 추가된 새로운 문법
    // 정상적으로 실행.
    console.log(this);
  },
};
student_1.say();
student_1.cry();
student_1.hi();
```

#### 1.2.1. `객체의 인스턴스 생성자 함수 (new 활용)`

```js
function Student(age, member) {
  this.age = age;
  this.member = member;
  this.say = function () {};
  this.agecry = () => {};
  this.hi = () => {};
}
// 아래처럼 하면 안되요. 용도를 잘못 생각하고 코딩한것.
// Student(10, true);
// 함수만 보아도 new 를 사용하려는 용도임을 앎.
new Student(15, true);
```
# week4-24.11.18
