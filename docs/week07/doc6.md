---
title: netlify에서 도메인 붙이기
sidebar_label: netlify에서 도메인 붙이기
id: doc6
---

## 도메인 구입하기

도메인은 원하는 사이트 어디에서 구매하셔도 상관 없습니다. 주로 해외는 godaddy, 국내는 gabia를 활용합니다.

## netlify에 도메인 등록하기

![./doc6_assets/Screen_Shot_2021-04-06_at_1.36.15_PM.png](./doc6_assets/Screen_Shot_2021-04-06_at_1.36.15_PM.png)

netlify 메인 페이지에 접속하여 Domain settings 버튼을 클릭해 줍니다.

![./doc6_assets/Screen_Shot_2021-04-06_at_11.58.01_AM.png](./doc6_assets/Screen_Shot_2021-04-06_at_11.58.01_AM.png)

Yes, add domain 버튼을 클릭합니다.

![./doc6_assets/Screen_Shot_2021-04-06_at_1.38.13_PM.png](./doc6_assets/Screen_Shot_2021-04-06_at_1.38.13_PM.png)

위와 같이 에러가 나면 check DNS configuration을 눌러 확인합니다.

![./doc6_assets/Screen_Shot_2021-04-06_at_1.39.33_PM.png](./doc6_assets/Screen_Shot_2021-04-06_at_1.39.33_PM.png)

각자의 도메인 구입 사이트에서 위와 같은 주소로 CNAME을 추가해 주어야 한다고 합니다.

이 설정의 의미는 **우리가 구매한 도메인으로 접근 했을 때, 우리가 배포한 netlify App과 연결**해 주는 것입니다.

저는 가비아에서 도메인을 구매했으니, 가비아로 가서 셋팅을 해보도록 하겠습니다.

![./doc6_assets/Screen_Shot_2021-04-06_at_1.45.51_PM.png](./doc6_assets/Screen_Shot_2021-04-06_at_1.45.51_PM.png)

DNS 관리 → DNS 레코드 수정으로 이동하여 위와 같이 레코드를 추가하여 줍니다.

![./doc6_assets/Screen_Shot_2021-04-06_at_1.49.14_PM.png](./doc6_assets/Screen_Shot_2021-04-06_at_1.49.14_PM.png)

두번째 에러도 클릭하여 확인합니다.

![./doc6_assets/Screen_Shot_2021-04-06_at_1.49.07_PM.png](./doc6_assets/Screen_Shot_2021-04-06_at_1.49.07_PM.png)

그리고 위 설명에 맞추어 레코드를 추가하여 줍니다.

이제 마지막으로 도메인에 접속해 보도록 하겠습니다.

![./doc6_assets/Screen_Shot_2021-04-06_at_2.49.41_PM.png](./doc6_assets/Screen_Shot_2021-04-06_at_2.49.41_PM.png)

도메인과 정상적으로 잘 연결된 것을 확인 할 수 있습니다. 👏👏👏

## Somthing More!!!

반드시 공부해야 하는 건 아니지만, 도움이 될 만한 자료들을 공유하고 있습니다.

- CNAME과 A record의 차이 ([링크](https://twpower.github.io/40-difference-between-cname-and-a-record))
