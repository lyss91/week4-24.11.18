// 11월 15일(금) 오후수업
// 객체
// function Student(age, member) {
class Student {
  constructor(_age, _member) {
    this.age = age;
    this.member = member;
  }
  // 메소드 추가
  // this.say = function () {};
  say() {}
  // this.cry () => {};
  cry() {}
  // ts.hi () => {};
  hi() {}
}

// 아럼 하면 안되요. 용도를 잘못 생각하고 코딩한것.
// Student(10, true);
// 함수만 보아도 new 를 사용하려는 용도임을 앎.
new Student(15, true);
