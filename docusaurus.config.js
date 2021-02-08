module.exports = {
	title: "{React 개발에서 배포까지}",
	tagline: "8주 만에 나만의 성향 테스트 만들기",
	url: "https://your-docusaurus-test-site.com",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "code pot,", // Usually your GitHub org/user name.
	projectName: "code-pot/react-class", // Usually your repo name.
	themeConfig: {
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
				{
					href: "https://github.com/CodePotStudio/React-Class-001",
					label: "GitHub",
					position: "right",
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
					editUrl:
						"https://github.com/facebook/docusaurus/edit/master/website/",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl:
						"https://github.com/facebook/docusaurus/edit/master/website/blog/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],
};
