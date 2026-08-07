import type { Metadata } from "next";
import "@fontsource/fraunces/300.css";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/700.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-sans/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/600.css";
import "@fontsource/jetbrains-mono/700.css";
import "./globals.css";
import "./print.css";

export const metadata: Metadata = {
	metadataBase: new URL("https://ii3lack.github.io/ii3lack"),
	title:
		"Black · AI 全栈工程师 · 杭州 · 近 5 年 · 医疗信息化交付 + AI 应用探索",
	description:
		"Black — AI 全栈工程师，坐标杭州。近 5 年医疗信息化交付 + AI 应用探索，求职方向：AI 应用工程师 / AI 全栈工程师。",
	keywords: [
		"Black",
		"AI 全栈工程师",
		"Python",
		"TypeScript",
		"Flutter",
		"Agent",
		"杭州",
		"全栈工程师",
	],
	authors: [{ name: "Black", url: "https://github.com/ii3lack" }],
	openGraph: {
		title:
			"Black · AI 全栈工程师 · 杭州 · 近 5 年 · 医疗信息化交付 + AI 应用探索",
		description:
			"AI 全栈工程师 · 杭州 · 近 5 年 · 医疗信息化交付 + AI 应用探索 · 求职意向：AI 应用工程师 / AI 全栈工程师",
		type: "website",
		url: "https://ii3lack.github.io/ii3lack",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="zh-CN">
			<body>{children}</body>
		</html>
	);
}
