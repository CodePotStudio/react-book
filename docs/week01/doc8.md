---
title: Wrap-Up
sidebar_label: Wrap-Up
id: doc8
---

## 여전히 부족한 점

### 코드의 반복이 많다

`React`는 컴포넌트 단위로 재사용을 하여 코드를 간결하게 만들 수 있다고 하였습니다. 그런데 지금껏 만든 저희 코드는 아래와 같이 여전히 중복이 많습니다. 그래서 다음 파트에서는 아래 `button`을 컴포넌트 단위로 만들어 관리 해보도록 하겠습니다.

```jsx
//app.js
...
<button onClick={handleClick} value="스페이스 엑스">
	스페이스 엑스
</button>
<button onClick={handleClick} value="테슬라">
	테슬라
</button>
<button onClick={handleClick} value="보링 컴퍼니">
	보링 컴퍼니
</button>
<button onClick={handleClick} value="솔라시티">
	솔라시티
</button>
...
```

### 한 문제만 푸는게 가능하다.

![8-01](./assets/8-01.gif)
성향 조사를 만드려면 여러 문제를 풀 수 있어야 하는데, 지금은 한 문제만 가능합니다. 다음 챕터에서는 여러 문제를 효과적으로 다루는 방법에 대해서도 알아 보도록 하겠습니다.

### 페이지가 하나 뿐이다.

지금은 퀴즈를 푸는 페이지 밖에 없는데, 다음 시간에는 랜딩 페이지와 결과 페이지를 만들고, 그 페이지를 자유롭게 이동 시켜 보도록 하겠습니다.

## 1주차 과제 (이번주 일요일 자정까지)

### 꼭! 해야만 하는 과제

- **다시 한 번 처음부터 따라 해보고, 어려운 점 공유하기**

  1-7번까지의 과정을 그대로 따라해보고, 그 것에 대한 생각을 정리하여 code-pot github에 PR을 보내 주세요. (PR 하는 방법 → [링크](https://www.notion.so/github-99f6aafafb9d431b93c96b608de71f95))

### 더! 공부해보고 싶으면 하는 과제

- **자신만의 스타일의 퀴즈를 구성해 보세요**

  제가 제공해 드린 style이 아닌 자신만의 방식으로 quiz를 구성해 보세요.

  그리고 자신 만의 github repository를 만들어 코드를 올려 주세요
  그리고 저에게 알려주시면 코드 리뷰를 해드리도록 하겠습니다.

  예시) [꽃 성향 테스트](https://lu42.co.kr/campaign/flowergarden/mbti) , [연애 능력치 테스트](http://16types.glam.am/intro), [나와 맞는 명품 브랜드 테스트](https://cleardin.com/brand), [나와 맞는 투자자 찾기](https://usaant.kr)

- **Typescript 적용 해보기**

  지금까지의 코드를 typescript로 바꿔 보세요.

  마찬가지로 github repository를 만들어 코드를 올려 주세요.

  그리고 저에게 알려주시면 코드 리뷰를 해드리도록 하겠습니다.

  참고 자료 → [https://react.vlpt.us/using-typescript/02-ts-react-basic.html](https://react.vlpt.us/using-typescript/02-ts-react-basic.html)

  :::note **typescript가 뭐냐구요?**
  javascript가 유연한 타입으로 인해 발생하는 문제들을 효과적으로 해결해 주는 javascript 확장 언어에요
  요즘 javascript를 사용하는 대부분의 회사에서 typescript를 사용하고 있는 만큼, 필수인 언어가 되었습니다.
  :::
