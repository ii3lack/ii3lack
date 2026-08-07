import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./print.css";

const display = Fraunces({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	display: "swap",
	variable: "--font-display",
});

const body = IBM_Plex_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
	variable: "--font-body",
});

const mono = JetBrains_Mono({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
	variable: "--font-mono",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://ii3lack.github.io/ii3lack"),
	title: "Black · AI 全栈工程师 · 杭州 · 近 5 年 · 医疗信息化交付 + AI 应用探索",
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
		title: "Black · AI 全栈工程师 · 杭州 · 近 5 年 · 医疗信息化交付 + AI 应用探索",
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
		<html
			lang="zh-CN"
			className={`${display.variable} ${body.variable} ${mono.variable}`}
		>
			<body>{children}</body>
		</html>
	);
}
