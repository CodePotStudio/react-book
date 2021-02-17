module.exports = {
	title: "{React 개발에서 배포까지}",
	tagline: "8주 만에 나만의 성향 테스트 만들기",
	url: "https://react.codepot.kr",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	url: "https://react.codepot.kr", // Url to your site with no trailing slash
	baseUrl: "/",
	projectName: "Code Pot React Class",
	organizationName: "CodePot Company",
	projectName: "react-book", // Usually your repo name.
	themeConfig: {
		image: "img/og_image.png",
		navbar: {
			logo: {
				alt: "My Site Logo",
				src: "img/black-logo.svg",
			},
			items: [
				{
					to: "docs/",
					activeBasePath: "docs",
					label: "수업자료",
					position: "left",
				},
			],
		},
		footer: {
			style: "dark",
			copyright: `Copyright © ${new Date().getFullYear()} Code Pot, Built with Docusaurus.`,
		},
	},
	presets: [
		[
			"@docusaurus/preset-classic",
			{
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					editUrl: "https://github.com/CodePotStudio/react-book/edit/master/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],
};
