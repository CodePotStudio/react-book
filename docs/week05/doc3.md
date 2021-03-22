---
title: 코드 리팩토링 part2
sidebar_label: 코드 리팩토링 part2
id: doc3
---

## Button과 Link가 구분되어 있다.

```jsx
// pages/Landing/index.js
<Link to="/quiz">
      <Button>일론 머스크 지수 알아보기</Button>
</Link>

// pages/Result/index.js
<Link to="/">
     <Button onClick={() => setScore(0)}>테스트 다시하기</Button>
</Link>
```

Button 컴포넌트를 사용할 때, 외부 링크가 필요할 때 마다 `Link` 태그를 감싸서 사용하고 있었습니다. 이제는 외부 link 필요 여부를 props로 받아 손쉽게 외부 링크와 연결되는 버튼을 만들어 보도록 하겠습니다.

## Link를 포함하는 Button 만들기

Button에서 to props를 받고, to props 존재 여부에 따라 Link를 감싸주는 버튼을 만들어 보도록 하겠습니다.

### style이 추가된 Link 컴포넌트 만들기

```jsx
// components/Button/index.js
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
	width: 100%;
`;
```

`styled Component`의 `styled` 함수에는 컴포넌트 넣어주면 스타일을 덮어 씌울 수 있는 기능이 있습니다. 그래서 위 의 코드처럼 `react-router-dom`의 `Link` 컴포넌트를 가져와 제가 원하는 스타일을 추가 해주었습니다. `width:100%` 를 추가하였습니다. 이유는 % 단위의 경우 사이즈의 영향을 받습니다. 그러므로 `Link`가 추가됨에 따라 `Button`은 `Link`의 사이즈에 영향을 받는데, 이를 방지하기 위해 `width:100%`를 넣어 주었습니다.

### to 존재 여부에 따른 Button 컴포넌트 변화주기

```jsx
// components/Button/index.js
const Button = ({ to, onClick, children }) =>
	to ? (
		<StyledLink to={to}>
			<StyledButton onClick={onClick}>{children}</StyledButton>
		</StyledLink>
	) : (
		<StyledButton onClick={onClick}>{children}</StyledButton>
	);
export default Button;
```

`props`에서 비구조 할당으로 `to`, `onClick`, `chlidren`을 꺼내왔습니다. 그리고 삼항 연산자로 `to Props`가 있는 경우, `StyledLink`로 감싸주고, 없는 경우 `StyledButton`을 그대로 `return` 하도록 컴포넌트를 변경했습니다.

### Button 컴포넌트 전체 코드

```jsx
// components/Button/index.js
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
	width: 100%;
`;

const StyledButton = styled.button`
  font-size: ${(props) => (props.fontSize === "big" ? "32px" : "16px")};
	color: #ffffff;
  background-color: ${(props) => props.theme.primaryColor100};
	border-radius: 5px;
	border: 0px;
	height: 56px;
	padding: 4px;
	margin: 4px 0px;
	cursor: pointer;
	width: 100%;
	outline: none;
	font-weight: 700;
	&:hover {
    background-color: ${(props) => props.theme.primaryColor80};
	}
}
`;

const Button = ({ to, onClick, children }) =>
	to ? (
		<StyledLink to={to}>
			<StyledButton onClick={onClick}>{children}</StyledButton>
		</StyledLink>
	) : (
		<StyledButton onClick={onClick}>{children}</StyledButton>
	);
export default Button;
```

### Button 사용하는 곳에서 코드 바꿔주기

이제 `Button`을 다 만들었으니, `Button`을 사용하는 곳의 코드들을 바꿔주도록 하겠습니다.

```jsx
//pages/Landing/index.js
...
<Button to="/quiz">일론 머스크 지수 알아보기</Button>
...

// pages/Result/index.js
...
<Button onClick={() => setScore(0)} to="/">
				테스트 다시하기
</Button>
...
```

`Button` 컴포넌트의 리팩토링을 마쳤으니, 다시 실행해 보도록 하겠습니다.

![./doc3_assets/Kapture_2021-03-08_at_23.57.58.gif](./doc3_assets/Kapture_2021-03-08_at_23.57.58.gif)

정상적으로 작동하는 것을 알 수 있습니다!!

## Container에 flex 속성 넣어주기

```jsx
//components/Container/index.js
...
const ContainerWrapper = styled.div`
	...
	display: flex;
	flex-direction: column;
	...
`;
...
```

`ContainerWrapper`에 `display` 속성을 `flex`로 변경해 주었습니다. 이는 앞으로 `Container` 내부에 아이템을 배치할 때 좀 더 용이하게 하기 위해 위와 같이 변경 하였습니다. 그리고 `flex` 내부에서 아이템을 쌓는 방향을 `column`으로 두어 아래 방향으로 아이템이 쌓이도록 추가해주었습니다.

다시 실행해 보도록 하겠습니다.

![./doc3_assets/Kapture_2021-03-08_at_23.57.58.gif](./doc3_assets/Kapture_2021-03-08_at_23.57.58.gif)

## 전체 코드 살펴보기

- 깃허브에서 전체 코드 보기 -> [바로가기](https://github.com/CodePotStudio/starter-quiz-app/tree/week05-02)

## Somthing More!!!

반드시 공부해야 하는 건 아니지만, 도움이 될 만한 자료들을 공유하고 있습니다.

- button tag 안에 a 태그를 넣으면 안됩니다 ([링크](https://stackoverflow.com/questions/6393827/can-i-nest-a-button-element-inside-an-a-using-html5))
- flex 익혀보기 ([링크](https://studiomeal.com/archives/197))
  - flex는 내용이 많으나, 한번만 정리하면 정말 큰 도움이 됩니다.
