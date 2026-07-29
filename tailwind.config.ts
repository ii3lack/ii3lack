import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				mono: [
					"var(--font-jbmono)",
					"JetBrains Mono",
					"IBM Plex Mono",
					"ui-monospace",
					"PingFang SC",
					"Hiragino Sans GB",
					"Microsoft YaHei",
					"Noto Sans CJK SC",
					"monospace",
				],
			},
		},
	},
	plugins: [],
};
export default config;
