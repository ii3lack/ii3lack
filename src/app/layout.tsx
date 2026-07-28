import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	metadataBase: new URL("https://ii3lack.github.io/ii3lack"),
	title: "Black · AI 全栈工程师",
	description:
		"Black — AI 全栈工程师，坐标杭州。Python · JS/TS · Node.js · Agent 工程实践中。",
	keywords: [
		"Black",
		"AI 全栈工程师",
		"Python",
		"TypeScript",
		"Agent",
		"杭州",
		"全栈工程师",
	],
	authors: [{ name: "Black", url: "https://github.com/ii3lack" }],
	openGraph: {
		title: "Black · AI 全栈工程师",
		description: "AI 全栈工程师 · 杭州 · 3 年以上全栈 · Agent 工程实践中",
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
			<body className="font-sans antialiased">{children}</body>
		</html>
	);
}
