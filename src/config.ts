import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";
import * as url from "node:url";

export let siteConfig: SiteConfig;
siteConfig = {
	title: "Durian's Blog",
	subtitle: "",
	lang: "zh_CN", // Language code, e.g. 'en', 'zh-CN', 'ja', etc.
	themeColor: {
		hue: 265, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: ("/bg.png"), // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		{
			src: '/icon.svg',
			theme: 'light',         // 可选：指定为浅色模式图标
			sizes: '32x32',         // 图标尺寸
		},
		// 可选：添加深色模式图标
		{
			src: '/icon.svg',
			theme: 'dark',          // 指定为深色模式图标
			sizes: '32x32',
		}
	],

};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "Minecraft服务器",
			url: "http://mc.durian.uno", // Internal links should not include the base path, as it is automatically added
			// url: "https://github.com/GODONG-DN",
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "/src/assets/durian.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "๑榴莲ฅ",
	bio: "欢迎来到我的个人网站喵😊",
	links: [
		{
			name: "Bilibili",
			icon: "fa6-brands:bilibili", // Bilibili的图标代码
			url: "https://space.bilibili.com/3493135789329055", // 替换为你的Bilibili主页链接
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/GODONG-DN", // 替换为你的GitHub主页链接
		},
	],
};


export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
