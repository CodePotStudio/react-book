---
title: 모던 Javascript 빠르게 훓어보기
sidebar_label: 모던 Javascript 빠르게 훓어보기
id: doc1
---

## 화살표 함수

**화살표 함수는 일반 함수와 기능은 같으면서도 코드를 좀 더 간결하게 쓸 수 있도록 도와 줍니다.** 그럼 아래 예제를 통해 일반 함수와 화살표 함수의 특징을 알아보도록 하겠습니다.

```jsx
// sum 함수 만들기 with 일반 함수
function sum(a, b) {
	return a + b;
}

// function 사용하기
sum(1, 2);
```

위에서 만든 `sum` 함수는 `a`와 `b`를 변수로 받고, 두 값을 합쳐 외부로 반환해주는 역할을 합니다. 이를 화살표 함수로 바꿔보면 아래와 같습니다.

```jsx
// sum 함수 만들기 with 화살표 함수
const sum = (a, b) => {
	return a + b;
};

// function 사용하기
sum(1, 2);
```

`function` 명령어가 화살표(⇒)로 바뀌었고, `const` 명령어를 통해 `sum` 변수에 함수를 담아주었습니다.

뿐만 아니라 함 수 내에서 바로 return을 하는 경우, 아래와 같이 코드를 추가적으로 축약해줄 수 있습니다.

```jsx
// 바로 return 하는 경우 return 생략하기
const sum = (a, b) => a + b;
```

이 처럼 일반 함수 대비 확실히 코드가 간결해 진 것을 알 수 있습니다.

### 한 단계 더 코드를 간결하게 만들기

```jsx
const square = n => n * n;
```

위와 같이 숫자를 받아서 제곱을 해주는 함수를 하나 만들었습니다. 위와같이 매개변수가 하나 일 때는 아래와 같이 소괄호 조차도 빼줄 수 있습니다.

```jsx
const square = (n) => n * n;
square(10);
```

위 코드는 앞으로 많은 곳에서 사용되니 꼭 알아 두시는 것을 권장 드립니다.

## 구조 분해 할당

구조 분해 할당은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식입니다.

### 객체 구조 분해 할당

```jsx
const people = {
	name: "codepot",
	address: "seoul",
};

const name = people.name; // people['name']
const address = people.address; // people['address']
console.log(name, address);
// codepot seoul
```

일반적으로 객체 내에 있는 변수 값들을 외부로 꺼내려고 하면 위와 같이 `.` 혹은 `[]` 로 프라퍼티의 이름으로 접근하여 값을 가져왔습니다. 하지만 이 과정에서 people을 여러번 중복하여 쓰게 되고, 가져와야하는 프라퍼티가 많아 질수록 코드의 중복이 많아 집니다.

```jsx
const people = {
	name: "codepot",
	address: "seoul",
};

const { name, address } = people;
console.log(name, address);
// codepot seoul
```

맨 위에서 사용하던 두줄의 코드를 위와 같이 한줄로 바꾸었습니다. 코드가 한결 간결해 진 것을 알 수 있습니다. 만약 프라퍼티가 추가된다면 어떻게 해야 할까요?

```jsx
const people = {
	name: "codepot",
	address: "seoul",
	detailAddress: "gangnam",
};

const { name, address, detailAddress } = people;
consolt.log(name, address, detailAddress);
// codepot seoul gangnam
```

기존과 마찬가지로 위와 같이 중괄호 안에 객체의 추가된 프라퍼티를 넣어 주면 됩니다. 주의할 사항으로는 **반드시 객체 내에 있는 프라퍼티 명을 사용**해주어야 합니다. 그렇지 않으면 에러가 발생합니다!!!

객체에서 **정의된 이름이 마음에 안들어 변경하고 싶을 때**는 어떻게 해야 할까요?

```jsx
const people = {
	name: "codepot",
	address: "seoul",
	detailAddress: "gangnam",
};

// const peopleName = people.name;
const { name: peopleName } = people;
console.log(peopleName);
// codepot
```

`:새로운 변수명` 처럼 중괄호 안에 변경하고 싶은 프라퍼티 옆에 `:` 과 함께 새로운 변수명 넣어주면 됩니다.

### 배열 비구조 할당

비구조 할당은 배열에서도 사용할 수 있습니다.

```jsx
const fruits = ["사과", "감"];

// const firstFruit = Fruits[0];
// const secondFruit = Fruits[1];

const [firstFruit, secondFruit] = fruits;
console.log(firstFruit, secondFruit);
```

객체 비구조 할당과 다른 점은 `{}` 가 아닌, `[]` 를 활용한다는 점과 배열은 객체와 달리 프라퍼티의 이름이 없기 때문에 배열에 순서에 맞추어 변수에 값이 할당 됩니다.

## Somthing More!!!

반드시 공부해야 하는 건 아니지만, 도움이 될 만한 자료들을 공유하고 있습니다.

- [Javascript에서 객체란 무엇인가?](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Basics)
