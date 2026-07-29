"use client";

import { useEffect } from "react";

/* ---------- data ---------- */

const CAPABILITIES: { title: string; desc: string }[] = [
	{
		title: "AI 工作流工程化",
		desc: "在团队中搭建 Claude Code / Pi + Superpowers（头脑风暴→TDD→Review）+ Codegraph（代码记忆）+ Chrome-MCP（前端调试）的工具链组合。用 vibe coding 快速落地设备 SDK 重构并一周交付上线；核心 Agent 代码坚持手写，基础设施用 AI 加速。",
	},
	{
		title: "Agent 核心开发（手写）",
		desc: "从零实现 ReAct 循环、Event 事件流（TurnStart → UserToken → ToolStart → ToolResult → TurnEnd → RunEnd）、session 持久化、tool calling 流式累积、路径沙箱。研读 pi-agent 源码，学习 SessionTreeEntry（Message / Compaction / BranchSummary / Custom 等十多种 entry）的树形协议设计，以及 SessionStorage 协议接口与具体存储实现解耦的架构思路。",
	},
	{
		title: "本地 SDK 架构与全栈交付",
		desc: "Python FastAPI 模块化封装扫码枪(pynput+WS)、高拍仪(SDK)、打印管理(SumatraPDF)、SQLite 持久化，中间件分层（ErrorHandler → RequestLogging → RequestID）+ WS 心跳 + 配置热加载。前端 React+TypeScript，对接 HIS 系统；部署脚本全链路（安装→卸载→配置→启动→远程更新）。",
	},
	{
		title: "资源约束下的技术决策",
		desc: "4 人团队，在需求变动、时间压缩中与领导协商功能取舍（远程升级→砍掉确保交付），推动多外部系统对接。不出于对技术的偏好做决策，而是评估时间、风险、团队能力，将模糊需求拆解为可落地的步骤。",
	},
];

const SKILLS: { group: string; items: string[] }[] = [
	{
		group: "Agent 工程",
		items: [
			"手写 ReAct 循环",
			"Session 持久化",
			"Tool Calling 流式累积",
			"Eval 评测设计",
			"MCP / Skills 工具链",
		],
	},
	{
		group: "AI 工作流",
		items: [
			"Claude Code / Pi",
			"Superpowers (Plan→Spec→TDD)",
			"Codegraph · Chrome-MCP",
			"Vibe Coding + 核心手写",
			"AI-native 开发闭环",
		],
	},
	{
		group: "后端架构",
		items: [
			"Python / FastAPI",
			"Node.js",
			"PHP (ThinkPHP)",
			"RESTful API 设计",
			"WebSocket 服务",
			"模块化 SDK 分层",
		],
	},
	{
		group: "前端 & 终端",
		items: [
			"React / TypeScript",
			"Vue",
			"Next.js",
			"Electron",
			"钉钉小程序 / H5",
			"跨端技术栈统一",
		],
	},
	{
		group: "硬件 & 外设集成",
		items: [
			"扫码枪 (pynput + WS)",
			"高拍仪 SDK 对接",
			"打印管理 / SumatraPDF",
			"多协议 (蓝牙 / WiFi / 网线)",
			"HIS 系统对接",
		],
	},
	{
		group: "数据 & 基础设施",
		items: [
			"爬虫",
			"数据迁移",
			"SQLite / MySQL",
			"Docker",
			"Linux 运维",
			"离线部署脚本",
		],
	},
];

const EXPERIENCE: {
	company: string;
	role: string;
	period: string;
	points: string[];
}[] = [
	{
		company: "杭州捍尔目科技集团",
		role: "全栈开发工程师",
		period: "2023.01 — 至今",
		points: [
			"主导数字化平台技术底座建设：CRM、运营报表、财务 OA、数据看板。",
			"整合钉钉审批流、ERP 残留数据、纸质文档等多源数据建统一数仓，报表覆盖全公司前后台业务部门。",
			"主导前端与设备对接技术选型，统一 H5 / 钉钉小程序 / Electron 跨端技术栈。",
			"带 2 人小团队，协调一线业务人员对齐内容与功能，把控各模块进度。",
		],
	},
	{
		company: "东方通信股份有限公司",
		role: "终端软件工程师（金融事业部）",
		period: "2021.07 — 2022.12",
		points: [
			"两周交付低代码票据可视化工具（React + Vite + 拖拽插件 + SSR），中标三峡银行项目。",
			"TypeScript 全面重构河北交行智能设备通信 JS-SDK，修复长期重连缺陷，生产环境稳定运行。",
		],
	},
];

const PROJECTS: {
	name: string;
	stack: string[];
	result: string;
	link?: string;
}[] = [
	{
		name: "渠道数据采集与分析平台",
		stack: ["Python", "浏览器自动化", "API 重放"],
		result: "渠道数据报表与业务实际数据 90%+ 准确率。",
	},
	{
		name: "院点检查数据建档系统",
		stack: ["Python", "WebSocket", "多协议通信"],
		result: "打通多种医疗设备，全流程数字化建档。",
	},
	{
		name: "蒙眼旅人 Blind Traveler",
		stack: ["Flutter", "Dart"],
		result: "获 NCDA 全国高校数字艺术设计大赛浙江省三等奖（交互设计组）。",
		link: "https://gitee.com/i3lack/blind_traveler",
	},
];

const AWARDS: { title: string; year: string }[] = [
	{ title: "浙江省政府奖学金", year: "2021.12" },
	{ title: "浙江省第十六届大学生电子商务大赛 三等奖", year: "2021.06" },
	{ title: "NCDA 全国高校数字艺术设计大赛 浙江省三等奖（交互设计组）", year: "2021.05" },
	{ title: "绍兴市大数据应用大赛 三等奖", year: "2020.09" },
	{ title: "国家励志奖学金", year: "2019.12" },
];

const EXPLORING: string[] = [
	"手写 Agent Core — 从零实现 ReAct 循环 + session 持久化 + tool calling 累积 + 路径沙箱。研读 pi-agent 工业级源码，学习将 session 设计为 Entry+Leaf 指针管理的树形协议，逐步向协议化抽象演进。",
	"Eval 驱动开发 — 为 Agent 系统设计可量化的评测体系，验证工具调用正确率与 session 恢复可靠性。",
	"视觉创作 Agent 应用 — 计划在学习 Agent 架构模式后，基于成熟框架构建面向摄影/视觉创作领域的工业级生成式 Agent。",
];

const HOBBIES: string[] = ["🏀 篮球", "🖊️ 书法", "📷 摄影"];

/* ---------- hooks ---------- */

function useRevealOnce() {
	useEffect(() => {
		const els = document.querySelectorAll(".reveal");
		const io = new IntersectionObserver(
			(entries) =>
				entries.forEach((e) => {
					if (e.isIntersecting) {
						e.target.classList.add("in");
						io.unobserve(e.target);
					}
				}),
			{ threshold: 0.08 },
		);
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);
}

/* ---------- components ---------- */

const NAV_LINKS: [string, string][] = [
	["capabilities", "能力"],
	["stack", "技术栈"],
	["experience", "经历"],
	["projects", "项目"],
	["awards", "获奖"],
	["exploring", "探索"],
];

function Nav() {
	return (
		<nav className="nav-masthead" aria-label="Primary">
			<div className="nav-masthead__inner">
				<a className="nav-masthead__wordmark" href="#top">
					BLACK
				</a>
				<ul className="nav-masthead__links">
					{NAV_LINKS.map(([id, label]) => (
						<li key={id}>
							<a href={`#${id}`}>{label}</a>
						</li>
					))}
				</ul>
				<a className="nav-masthead__cta" href="mailto:black524726@163.com">
					邮箱 →
				</a>
			</div>
		</nav>
	);
}

function Hero() {
	return (
		<header id="top" className="hero">
			<p
				className="hero__quote reveal"
				style={{ "--i": 0 } as React.CSSProperties}
			>
				&ldquo;Functions describe the world.&rdquo;
			</p>
			<p
				className="hero__attribution reveal"
				style={{ "--i": 1 } as React.CSSProperties}
			>
				Thomas A. Garrity
			</p>
			<h1
				className="hero__title reveal"
				style={{ "--i": 2 } as React.CSSProperties}
			>
				AI 全栈工程师 · 杭州 · 4 年经验
			</h1>
			<p
				className="hero__sub reveal"
				style={{ "--i": 3 } as React.CSSProperties}
			>
				目标：技术负责人 / Agent 应用开发 / AI 全栈工程师
			</p>
			<a
				className="hero__cta reveal"
				style={{ "--i": 4 } as React.CSSProperties}
				href="mailto:black524726@163.com"
			>
				联系
			</a>
		</header>
	);
}

function Strip() {
	return (
		<div className="strip reveal" style={{ "--i": 5 } as React.CSSProperties}>
			<div className="strip__col">
				<p className="strip__label">状态</p>
				<p className="strip__value">在职</p>
				<p className="strip__label" style={{ marginTop: "var(--space-lg)" }}>
					坐标
				</p>
				<p className="strip__value">浙江杭州</p>
				<p className="strip__label" style={{ marginTop: "var(--space-lg)" }}>
					年限
				</p>
				<p className="strip__value">4 年全栈</p>
				<p className="strip__label" style={{ marginTop: "var(--space-lg)" }}>
					目标
				</p>
				<p className="strip__value">
					技术负责人 / Agent 应用开发
					<br />
					AI 全栈工程师
				</p>
			</div>
			<div className="strip__col">
				<p className="strip__label">联系</p>
				<a className="clink" href="mailto:black524726@163.com">
					<span className="clink__label">邮箱</span>
					<span className="clink__value">black524726@163.com</span>
				</a>
				<a
					className="clink"
					href="https://github.com/ii3lack"
					target="_blank"
					rel="noreferrer"
				>
					<span className="clink__label">GitHub</span>
					<span className="clink__value">ii3lack ↗</span>
				</a>
				<a
					className="clink"
					href="https://ii3lack.github.io/ii3lack"
					target="_blank"
					rel="noreferrer"
				>
					<span className="clink__label">在线简历</span>
					<span className="clink__value">ii3lack.github.io ↗</span>
				</a>
			</div>
		</div>
	);
}

function Section({
	id,
	num,
	title,
	children,
}: {
	id?: string;
	num: string;
	title: string;
	children: React.ReactNode;
}) {
	return (
		<section id={id} className="section reveal">
			<div className="section__head">
				<span className="section__num">{num}</span>
				<h2 className="section__title">{title}</h2>
			</div>
			{children}
		</section>
	);
}

/* ---------- page ---------- */

export default function Home() {
	useRevealOnce();
	const hobbies = HOBBIES.map((h) => h.split(" ").slice(1).join(" ")).join(
		" · ",
	);

	return (
		<>
			<Nav />
			<div className="shell">
				<Hero />
				<Strip />

				<Section id="capabilities" num="01" title="核心能力">
					{CAPABILITIES.map((c, idx) => (
						<div key={c.title} className="cap">
							<p className="cap__num">{(idx + 1).toString().padStart(2, "0")}</p>
							<h3 className="cap__name">{c.title}</h3>
							<p className="cap__desc">{c.desc}</p>
						</div>
					))}
				</Section>

				<Section id="stack" num="02" title="技术栈">
					{SKILLS.map((s) => (
						<div key={s.group} className="sgroup">
							<p className="sgroup__label">{s.group}</p>
							<p className="sgroup__items">{s.items.join(" · ")}</p>
						</div>
					))}
				</Section>

				<Section id="experience" num="03" title="工作经历">
					{EXPERIENCE.map((job) => (
						<div key={job.company} className="xjob">
							<p className="xjob__period">{job.period}</p>
							<h3 className="xjob__company">{job.company}</h3>
							<p className="xjob__role">{job.role}</p>
							<ul className="xjob__points">
								{job.points.map((p, idx) => (
									<li key={idx}>{p}</li>
								))}
							</ul>
						</div>
					))}
				</Section>

				<Section id="projects" num="04" title="项目精选">
					{PROJECTS.map((p) => (
						<div key={p.name} className="proj">
							<h3 className="proj__name">
								{p.name}
								{p.link && (
									<>
										{" "}
										<a
											href={p.link}
											target="_blank"
											rel="noreferrer"
											className="proj__arrow"
										>
											↗
										</a>
									</>
								)}
							</h3>
							<p className="proj__stack">{p.stack.join(" · ")}</p>
							<p className="proj__result">
								<span className="proj__arrow">→</span> {p.result}
							</p>
						</div>
					))}
				</Section>

				<Section id="exploring" num="05" title="正在探索">
					{EXPLORING.map((e) => (
						<p key={e} className="xitem">
							<span className="xitem__arrow">→</span> {e}
						</p>
					))}
				</Section>

				<Section id="awards" num="06" title="获奖与教育">
					<p className="edu">浙江越秀外国语学院 · 数字媒体技术 本科</p>
					<p className="edu" style={{ marginTop: "0.125rem" }}>
						2018.09 — 2022.06 · 浙江绍兴
					</p>
					<div className="awards">
						{AWARDS.map((a) => (
							<div key={a.title} className="award">
								<span className="award__year">{a.year}</span>
								<span className="award__title">{a.title}</span>
							</div>
						))}
					</div>
				</Section>

				<footer className="footer">
					<div className="footer__meta">
						<span>black · {hobbies} · © 2026</span>
						<span>
							<a href="mailto:black524726@163.com">邮箱</a>
							{" · "}
							<a
								href="https://github.com/ii3lack"
								target="_blank"
								rel="noreferrer"
							>
								GitHub
							</a>
							{" · Next.js · Fraunces + JetBrains Mono"}
						</span>
					</div>
				</footer>
			</div>
		</>
	);
}
