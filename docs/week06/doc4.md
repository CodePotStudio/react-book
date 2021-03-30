---

title: 소셜 공유 버튼 컨테이너 만들기
sidebar_label: 소셜 공유버튼 컨테이너 만들기
id: doc4

---

결과 페이지를 만들었으니, 이 페이지를 다른 사람에게 공유할 수 있게끔 소셜 공유 버튼을 만들어 보겠습니다.

## Result 페이지에 SocialButtonSection 만들기

각 버튼을 만들기 전에 4가지 버튼(현재 URL 복사, Facebook, twitter, kakao)가 들어갈 컴포넌트부터 만들어 보도록 하겠습니다.

```jsx
// components/SocialButtonGroup/index.js
import styled from "styled-components";

// 버튼별로 40px을 확보하고, 각 영역 간에는 8px의 간격을 둠.
const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 48px);
	grid-column-gap: 8px;
	justify-content: center;
	margin-bottom: 16px;
`;

const SocialButtonGroup = () => {
	return (
		<GridContainer>
			<button>1</button>
			<button>2</button>
			<button>3</button>
			<button>4</button>
		</GridContainer>
	);
};

export default SocialButtonGroup;
```

```jsx
// components/index.js
...
export { default as SocialButtonGroup } from "components/SocialButtonGroup";
```

```jsx
//components/ResultSection/index.js

...
import { SocialButtonGroup } from "components";
...

const ResultSection = ({ cCode }) => (
	<>
		...
		<SocialButtonGroup></SocialButtonGroup>
		...
	</>
);
export default ResultSection;
```

각 버튼 별로 40px을 확보하고, 버튼 간에는 gap을 8px을 주었습니다. 그리고 전체 버튼 그룹을 정중앙에 배치시켰습니다.

우리가 원하는대로 영역이 잘 나뉘어졌는데, 실행하여 확인 해보도록 하겠습니다.

![./doc4_assets/Screen_Shot_2021-03-30_at_12.01.57_AM.png](./doc4_assets/Screen_Shot_2021-03-30_at_12.01.57_AM.png)

버튼 간 간격 8px 뿐만 아니라 정중앙에 정상적으로 잘 배치된 것을 알 수 있습니다.

## 전체 코드 살펴보기

- 깃허브에서 전체 코드 보기 -> [바로가기](https://github.com/CodePotStudio/starter-quiz-app/tree/week06-03)

## Somthing More!!!

반드시 공부해야 하는 건 아니지만, 도움이 될 만한 자료들을 공유하고 있습니다.

- CSS Grid 공부하기 ([링크](https://studiomeal.com/archives/533))
