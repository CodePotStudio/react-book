import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
	{
		title: "2주마다 지속적으로 배포하기",
		imageUrl: "img/undraw_docusaurus_mountain.svg",
		description: (
			<>
				개발을 할 때 가장 중요한 것은 빠르게 실행하고, 그 속에서 개선점을 파악해
				새로운 코드를 제품에 적용하는 과정입니다. 그래서 이 번 클래스는 2주마다
				실제로 배포를 하며, 개선점을 찾아 나가려고 합니다.
			</>
		),
	},
	{
		title: "현업에서 실제로 많이 쓰는 기술로 배우기",
		imageUrl: "img/undraw_docusaurus_tree.svg",
		description: (
			<>
				React 개발에서 배포까지 클래스는 현업에서 실제로 가장 많이 사용하는
				React를 바탕으로 수업을 진행합니다. 뿐만 아니라, Styled-Component,
				git/github, jest, storybook 가장 최신의 트렌드도 다룹니다.
			</>
		),
	},
	{
		title: "자신만의 프로젝트 만들기",
		imageUrl: "img/undraw_docusaurus_react.svg",
		description: (
			<>
        8주가 지나면 자신만의 성향 테스트를 만들 수 있습니다. 튜터가 끝까지 책임지고, 자신만의 성향 테스트를 만들어 갈 수 있도록 이끌어 드리겠습니다. 
			</>
		),
	},
];

function Feature({ imageUrl, title, description }) {
	const imgUrl = useBaseUrl(imageUrl);
	return (
		<div className={clsx("col col--4", styles.feature)}>
			{imgUrl && (
				<div className="text--center">
					<img className={styles.featureImage} src={imgUrl} alt={title} />
				</div>
			)}
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
}

function Home() {
	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;
	return (
		<Layout
			title={`Hello from ${siteConfig.title}`}
			description="Description will go into a meta tag in <head />"
		>
			<header className={clsx("hero hero--primary", styles.heroBanner)}>
				<div className="container">
					<h1 className="hero__title">{siteConfig.title}</h1>
					<p className="hero__subtitle">{siteConfig.tagline}</p>
					<div className={styles.buttons}>
						<Link
							className={clsx(
								"button button--outline button--secondary button--lg",
								styles.getStarted
							)}
							to={useBaseUrl("docs/")}
						>
							바로 시작하기
						</Link>
					</div>
				</div>
			</header>
			<main>
				{features && features.length > 0 && (
					<section className={styles.features}>
						<div className="container">
							<div className="row">
								{features.map((props, idx) => (
									<Feature key={idx} {...props} />
								))}
							</div>
						</div>
					</section>
				)}
			</main>
		</Layout>
	);
}

export default Home;
