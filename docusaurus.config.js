module.exports = {
	title: "My Site",
	tagline: "The tagline of my site",
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
				{ to: "blog", label: "커리큘럼", position: "left" },
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
			copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
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
