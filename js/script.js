// const person = {
//   age: 10,
//   nickName: "홍길동",
// };

// const a = person.age;
// const b = person.nickName
// 객체의 구조를 분해해서 할당한다.
//  객체 구조 분해 할당
// (1) const { a: age, b: nickName } = person;
// (2) const { age: age, nickName: nickName } = person;
// (3) const { age, nickName } = person;
// 객체 축약형으로 (3)번째 껄로 작성하게 된다.
const { age, nickName } = {
  age: 10,
  nickName: "홍길동",
};
// 여기 에서도 더 축약해서 위에 const person 객체를 { } 안에 넣어서 간략하게 작성한다.
//  end
