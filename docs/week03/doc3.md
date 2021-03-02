---
title: 컴포넌트에 스타일 입히기
sidebar_label: 컴포넌트에 스타일 입히기
id: doc3
---

`Button` 컴포넌트를 성공적으로 분리했으므로, 이제 해당 컴포넌트에 스타일도 같이 옮겨 보도록 하겠습니다.

## CSS에 class btn 추가하기

지금까지는 `button` 태그에 바로 스타일을 적용해서 사용했는데, 이는 다른 곳에서 `button` 태그를 사용할 경우 같은 디자인으로만 사용해야 하는 문제점이 있습니다.

그래서 `class`를 통해서 스타일을 관리하는 형태로 먼저 바꿔 보도록 하겠습니다.

```css
 /* App.css */
 /* button -> .answer (answer 클래스를 가진 태그에만 적용되도록 CSS 변경) */
...
.answer {
	font-size: 16px;
	color: #ffffff;
	background-color: #7362ff;
	border-radius: 5px;
	border: 0px;
	height: 56px;
	padding: 4px;
	margin: 4px;
	cursor: pointer;
	width: 100%;
	outline: none;
	font-weight: 700;
}
.answer:hover {
    background-color: #a99fee;
}
...
```

```jsx
// Components/Button/index.js
import React from "react";
import "./Button.css";

const Button = (props) => (
	<button className="answer" onClick={props.onClick}>
		{props.text}
	</button>
);
export default Button;
```

다시 실행해 보도록 하겠습니다.

실행을 하고 콘솔 창을 켜 코드를 보면 아래와 같이 `answer` 클래스가 `button` 태그에 적용된 것을 볼 수 있습니다.

![2-08.png](./assets/2-08.png)

## Button 컴포넌트에 CSS 파일 적용하기

우선 `Button.css` 파일을 하나 생성합니다.

이 곳에 `App.css`에서 `Button`에 해당하는 CSS 코드들을 가져와 붙여 넣기합니다.

```css
/* components/Button/Button.css */
.answer {
	font-size: 16px;
	color: #ffffff;
	background-color: #7362ff;
	border-radius: 5px;
	border: 0px;
	height: 56px;
	padding: 4px;
	margin: 4px;
	cursor: pointer;
	width: 100%;
	outline: none;
	font-weight: 700;
}
.answer:hover {
	background-color: #a99fee;
}
```

그리고 `App.css`에서는 해당 코드들을 지워 줍니다.

```css
/* App.css */
body {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
		"Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
		"Helvetica Neue", sans-serif;
}

.container {
	display: flex;
	justify-content: center;
	align-items: center;
}

.app {
	width: 400px;
	margin-top: 72px;
}

.result-header {
	font-size: 64px;
	font-weight: bold;
	margin-bottom: 8px;
	text-align: center;
}

.result-score {
	font-size: 192px;
	margin: 40px;
	text-align: center;
	color: #7362ff;
}

.question-section {
	margin-bottom: 16px;
}

.question-header {
	font-size: 16px;
	font-weight: bold;
	margin-bottom: 8px;
}

.question-text {
	font-size: 20px;
	margin-bottom: 8px;
}

.answer-section {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 8px;
}
```

그리고 `Button` 컴포넌트에서 `Button.css` 파일을 `import` 해줍니다.

```jsx
// components/Button/index.js

import React from "react";
import "./Button.css";

const Button = (props) => (
	<button className="answer" onClick={props.onClick}>
		{props.text}
	</button>
);
export default Button;
```

그리고 재실행 해보도록 하겠습니다.

![2-06.png](./assets/2-06.png)

정상적으로 화면이 잘 나오고, 클래스와 `CSS`도 잘 적용된 것을 알 수 있습니다.

그런데 여기에는 문제가 하나 있습니다. 컴포넌트 별로 클래스 이름이 고유하지 않기 때문에 다른 컴포넌트에서 `.answer`에 적용될 스타일을 마음대로 변경할 수 있습니다.

```css
/* App.css */
...
.answer {
	text-align: right;
}
...
```

예를 들어, 누군가가 실수를 하여 `App.css`에서 `.answer`에 위와 같은 `style`을 적용하면 `Button` 컴포넌트도 그대로 영향을 받아 아래와 같이 스타일이 변경됩니다.

![2-07.png](./assets/2-07.png)

이는 코드가 많아지고, 협업 하는 사람이 많으면 많을수록 문제가 될 수 있습니다. 이러한 문제를 해결하기 위해 `BEM Convention` 같은 것을 만들어 지키려고 하지만 사람의 모든 실수를 막기는 어렵습니다. 그래서 `React`에서는 다양한 방법으로 이 문제를 해결하는데 다음 파트에서 좀 더 자세히 알아 보도록 하겠습니다.

## 전체 코드 살펴보기

- 깃허브에서 전체 코드 보기 -> [바로가기](https://github.com/CodePotStudio/starter-quiz-app/tree/week03-03)

## Somthing More!!!

반드시 공부해야 하는 건 아니지만, 도움이 될 만한 자료들을 공유하고 있습니다.

- BEM Convention에 대해서 더 알아보기 ([링크](https://medium.com/witinweb/css-%EB%B0%A9%EB%B2%95%EB%A1%A0-1-bem-block-element-modifier-1c03034e65a1))
