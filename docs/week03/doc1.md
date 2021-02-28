---
title: import와 export
sidebar_label: import와 export
id: doc1
---

`React`를 개발하다보면 파일이 커지면 언젠가 파일을 여러 개로 분리해야 할 때가 옵니다. 만약 `App.js` 파일 하나의 코드가 천줄, 만줄이라고 하면 코드를 파악하느라 시간을 다쓰게 되어 코드를 수정하기가 많이 어려워 집니다. 그래서 저희는 앞으로 지속적으로 컴포넌트 단위로 코드를 분리할 것이고, 그 것을 하기에 앞서 알아야될 기본 지식에 대해서 먼저 간단히 설명하고 넘어 가도록 하겠습니다.

## 모듈

앞으로 `React`의 파일을 여러 개로 나누게 될 것인데, 이 때 분리된 파일의 이름을 모듈(`module`)이라고 부릅니다. 모듈 내에는 함수, 변수 등등 우리가 코드에서 사용하는 모든 것들이 있을 수 있습니다.

또한 모듈 내에 있는 값들을 외부로 내보내고, 다른 모듈에서 해당 모듈의 값들을 불러오기도 가능합니다.

이것을 `export`(내보내기), `import`(가져오기)라고 부릅니다.

아마 눈치 빠르신 분들은 `import`를 이미 보셨을 겁니다.

```jsx
// App.js
import { useState } from "react";
```

우리가 만들었던 `App.js` 를 보면 위와 같은 코드가 있는 것을 보셨을 겁니다. 이 의미는 `react.js` 모듈에서 `useState` 이름을 가진 변수 혹은 함수를 가져온다는 뜻입니다.

아마 `react.js`는 이렇게 생겼을꺼에요.

```jsx
// react.js
export function useState(...){
	...
}
```

`useState` 함수를 선언해주고, 해당 함수 앞에 `export` 예약어를 붙여주었습니다. 이로 인해 다른 파일에서 손쉽게 `useState`에 접근할 수 있습니다.

## 모듈 내보내기 / 가져오기

### 내보내기

모듈을 내보내는 방법은 어렵지 않습니다. 내보내길 원하는 함수나 변수 앞에 `export`를 아래와 같이 붙여주면 됩니다.

```jsx
// sample1.js
export const fruits = ["사과", "감", "배"];
export function sayHello() {
	console.log("hello");
}
export const sayHi = () => console.log("hi");
```

하나씩 `export`를 붙여주는게 번거롭다면 아래와 같이도 할 수 있습니다.

```jsx
// sample2.js
const fruits = ["사과", "감", "배"];
function sayHello() {
	console.log("hello");
}
const sayHi = () => console.log("hi");

export { fruits, sayHello, sayHi };
```

`sample1.js`와 `sample2.js`는 동일한 방식으로 작동합니다.

### 가져오기

`sample1.js`에서 변수와 함수를 가져와 보도록 하겠습니다.

```jsx
// sampleImport.js
import { fruits, sayHello, sayHi } from "sample1.js";
```

필요로 하는 함수를 `import {...}` 괄호 안에 넣어 주면 됩니다. 그리고 `from` 뒤에는 실제 파일이 존재하는 경로를 입력해 줍니다. 지금은 예시로 `sample1.js` 만을 넣어 주었습니다. 뿐만 아니라 파일 확장자(`.js`, `.css` , ...)은 제거해도 문제 없이 작동합니다.

```jsx
// sampleImport.js
import { fruits, sayHello, sayHi } from "sample1";
```

만약에 가져온 함수나 변수의 이름을 바꾸고 싶다면 어떻게 해야 할까요?

그 때는 아래와 같이 `as` 라는 예약어를 사용하면 됩니다.

```jsx
// sampleImport.js
import { fruits as fruitsName, sayHello, sayHi } from "sample1";

console.log(fruitsName);
// '사과', '감', '배'
```

`sample1`에 있는 `fruits`의 변수는 변경하지 않고, `sampleImport.js`에서 위와 같이 파일 이름을 변경하여 사용할 수 있습니다.

### export default

내보내는 방법 중에는 default 문법이 있습니다. 이는 해당 모듈에서 이 함수나 변수를 기본으로 내보내겠다는 뜻인데, 아래 코드를 통해서 좀 더 자세히 설명해보도록 하겠습니다.

```jsx
// fruits.js
export default fruitNames = ["사과", "감", "배"];
```

```jsx
// fruitsImport.js
import fruitNames from "fruits";
```

위와 같이 `default`로 내보내기를 하게 되면 `import`할 때 `{}` 없이 `import`가 가능합니다.

## 퀴즈 데이터 분리하기

이제 `App.js`에 있는 `quizzes` 변수를 외부 모듈로 분리해보도록 하겠습니다.

```jsx
// constants.js
const QUIZZES = [
	{
		id: 1,
		question: "일론 머스크의 우주 탐사 기업 이름은?",
		answers: [
			{ text: "스페이스 엑스", isCorrect: true },
			{ text: "테슬라", isCorrect: false },
			{ text: "보링 컴퍼니", isCorrect: false },
			{ text: "솔라시티", isCorrect: false },
		],
	},
	{
		id: 2,
		question: "일론 머스크의 고향은 어디일까요?",
		answers: [
			{ text: "미국 캘리포니아", isCorrect: false },
			{ text: "남아프리카 공화국 프리토리아", isCorrect: true },
			{ text: "캐나다 벤쿠버", isCorrect: false },
			{ text: "호주 시드니", isCorrect: false },
		],
	},
	{
		id: 3,
		question: "일론 머스크가 창업한 페이팔 전신 기업의 이름은?",
		answers: [
			{ text: "Zip2 Corporation", isCorrect: false },
			{ text: "Alpha Exploration co.", isCorrect: false },
			{ text: "X.com", isCorrect: true },
			{ text: "Everything CO.", isCorrect: false },
		],
	},
];

export { QUIZZES };
```

위와 같이 `QUIZZES` 변수를 하나 만들고, `export` 문법을 통해 밖으로 내보내 줍니다. `export default` 문법을 사용하지 않은 이유는 앞으로 여러 변수들을 `constants.js`에서 사용할 것이기 때문에 `export` 문법을 통해서 내보내 주었습니다. 또한 변수 이름을 대문자로 바꾸었는데, 이는 전체 어플리케이션에서 변하지 않는 값은 `js`에서 주로 대문자로 표현하기에 대문자로 바꾸어 주었습니다.

```jsx
// app.js
...
import { QUIZZES } from "./constants";

function App() {
	...
	const convertedScore = Math.floor((score / QUIZZES.length) * 100);
	...
	return (
		<div className="container">
			{showResult ? (
				<div className="app">
					<h1 className="result-header">당신의 점수는?</h1>
					<p className="result-score">{convertedScore}</p>
				</div>
			) : (
				<div className="app">
					<div className="question-section">
						<h1 className="question-header">
							<span>{QUIZZES[currentNo].id}</span>/{QUIZZES.length}
						</h1>
						<div className="question-text">{QUIZZES[currentNo].question}</div>
					</div>
					<div className="answer-section">
						{QUIZZES[currentNo].answers.map((answer) => (
							<button
								value={answer.text}
								onClick={() => handleClick(answer.isCorrect)}
							>
								{answer.text}
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
```

위 코드에서 보면 가져오기를 할 때, `from ./constants` 를 해주었는데 이는 실제 `constants.js` 파일이 `App.js` 파일과 같은 경로에 있다는 것을 의미합니다. (좀 더 자세한 내용은 아래 Something More에 있는 내용을 읽어 보시는 것을 추천드립니다) 그리고 `quzzies`에서 이름이 `QUIZZES`로 바뀌었기 때문에, `JSX` 내에서도 변수 이름을 `QUIZZES`로 변경해 주었습니다.

## 전체 코드 살펴보기

- 깃허브에서 전체 코드 보기 -> [바로가기](https://github.com/CodePotStudio/starter-quiz-app/tree/week03-01)

## Somthing More!!!

반드시 공부해야 하는 건 아니지만, 도움이 될 만한 자료들을 공유하고 있습니다.

- 모듈에 대해서 더 자세히 공부하기 ([링크](https://ko.javascript.info/modules-intro))
- 모듈 내보내고 가져오기에 대해 더 자세히 공부하기([링크](https://ko.javascript.info/import-export))
- ./의 의미에 대해서 자세히 공부하기([링크](https://wrkbr.tistory.com/645))
