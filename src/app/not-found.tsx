"use client";

import { useEffect, useState } from "react";

/* ============================================================
 * 404 — dark-tech 主题的定制错误页（与主页同一套 tokens）
 * 构建后生成 out/404.html，GitHub Pages 对站点内任何 404 都回这一页。
 * 主页地址见 next.config.js 的 basePath（/ii3lack）。
 * ============================================================ */

const HOME = "/ii3lack/";
const REDIRECT_AFTER = 5; // 秒后自动返回主页

function CountdownRedirect({ home }: { home: string }) {
	const [left, setLeft] = useState(REDIRECT_AFTER);

	useEffect(() => {
		const timer = setInterval(() => {
			setLeft((n) => n - 1);
		}, 1000);
		return () => clearInterval(timer);
	}, []);

	useEffect(() => {
		if (left <= 0) {
			location.replace(home);
		}
	}, [left, home]);

	return <span className="nf-count">{left}</span>;
}

export default function NotFound() {
	return (
		<main className="nf">
			<div className="nf__glow" aria-hidden="true" />
			<div className="nf__inner">
				<p className="nf__eyebrow">
					<span aria-hidden="true" /> HTTP 404 · NOT FOUND
				</p>

				<h1 className="nf__title" aria-label="404">
					<span aria-hidden="true">4</span>
					<span aria-hidden="true">0</span>
					<span aria-hidden="true">4</span>
				</h1>

				<p className="nf__msg">
					这个页面不存在。
					<br />
					也许它从未上线，也许它只是迷路了。
				</p>

				<div className="nf__term" role="presentation">
					<span className="nf__term-line">
						$ curl {homeForTerm()}
						<span className="nf__caret" aria-hidden="true" />
					</span>
					<span className="nf__term-out">&gt; 404 — not found. redirecting to /</span>
				</div>

				<div className="nf__actions">
					<a className="nf__btn" href={HOME}>
						返回主页 <span aria-hidden="true">→</span>
					</a>
					<p className="nf__hint">
						<CountdownRedirect home={HOME} /> 秒后自动返回…
					</p>
				</div>

				<p className="nf__colophon">
					BLACK <span aria-hidden="true">·</span> AI 全栈工程师
					<span aria-hidden="true"> · </span>杭州
				</p>
			</div>

			<noscript>
				<meta httpEquiv="refresh" content="8; url=/ii3lack/" />
			</noscript>
		</main>
	);
}

/** 展示用户实际访问的路径（终端行的“假”请求地址） */
function homeForTerm(): string {
	if (typeof window === "undefined") return "/ii3lack/<path>";
	const p = window.location.pathname;
	return p.startsWith("/ii3lack") ? p : "/ii3lack/<path>";
}
