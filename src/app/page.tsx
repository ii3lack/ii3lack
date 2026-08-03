"use client";

import { useEffect, useState } from "react";

/* ============================================================
 * Resume V3 — hallmark Long Document macrostructure
 * theme: warm-paper locked system (tokens.css)
 * nav: N9 edge-aligned minimal · footer: Ft4 dense colophon
 * data source of truth: this file (site / README / PDF same source)
 * ============================================================ */

/* ---------- data ---------- */

const STATS: { value: string; label: string }[] = [
	{ value: "90%", label: "渠道订单覆盖" },
	{ value: "1 周", label: "从 0 上线温岭 HIS" },
	{ value: "70+", label: "移动 H5 交付" },
	{ value: "300", label: "学生报名参展" },
];

const CAPABILITIES: { title: string; desc: string; data: string }[] = [
	{
		title: "全链路交付：从需求到上线",
		data: "1 周从 0 上线温岭市第一人民医院",
		desc: "在无产品、无设计、无专职运维的环境下，独立完成需求梳理 → 方案设计 → 开发 → 部署的全流程。主导验光处方自动化系统：眼科开医嘱患者的检查数据全部经系统写入东华 HIS，医院原先不具备该能力。",
	},
	{
		title: "一套业务模型，多院点规模化落地",
		data: "70+ H5 · 10+ 大屏 · 10 小程序 · Electron",
		desc: "从 0 搭建公司数字化应用矩阵，覆盖 CRM、渠道订单、校园筛查、OA、营销等业务线；按院点需求快速定制复制交付，支撑连锁业务扩张。",
	},
	{
		title: "跨端全栈与医疗设备集成",
		data: "Nidek / 目乐 · 眼压计 · 扫码枪 · 高拍仪 · 打印机",
		desc: "Web（Vue2 / Vue3 / React）、H5、小程序、Electron 桌面端全栈开发；后端 Python（FastAPI）/ PHP（ThinkPHP）/ Node.js。打通 设备数据采集 → 处方 PDF → 静默打印 → 上传 HIS 的全链路。",
	},
	{
		title: "资源受限下的技术决策",
		data: "4 人团队承接全公司数字化需求",
		desc: "通过排优先级、砍冗余、选成熟方案保证交付。AI 工具链作为工作方式加速落地（vibe coding 一周交付），核心代码坚持手写，不做过度设计，以解决问题为唯一标准。",
	},
];

const SKILLS: { group: string; items: string[] }[] = [
	{
		group: "前端与终端",
		items: [
			"React / TypeScript",
			"Vue2 / Vue3",
			"Next.js",
			"Electron",
			"微信小程序 / H5",
			"数据大屏可视化",
		],
	},
	{
		group: "后端",
		items: [
			"Python / FastAPI",
			"PHP / ThinkPHP",
			"Node.js",
			"RESTful API",
			"WebSocket 服务",
		],
	},
	{
		group: "设备与系统集成",
		items: [
			"扫码枪 / 高拍仪 / 打印机",
			"眼压计 / Nidek / 目乐",
			"HIS 系统对接",
			"多协议（蓝牙 / WiFi / 串口）",
		],
	},
	{
		group: "数据与部署",
		items: [
			"MySQL / SQLite",
			"爬虫与数据同步",
			"Docker",
			"Linux 运维",
			"内网离线部署",
		],
	},
	{
		group: "AI 工程",
		items: [
			"手写 ReAct Agent",
			"Eval 评测体系",
			"Claude Code / Pi 工具链",
			"MCP / Skills",
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
			"4 人研发团队核心开发：技术方案设计与技术方向推进，负责各院点落地对接与技术支持。",
			"从 0 搭建公司数字化应用矩阵：70+ 移动 H5、10+ 院点定制数据大屏、10 个小程序、Electron 验光桌面端。",
		],
	},
	{
		company: "东方通信股份有限公司（金融事业部）",
		role: "终端软件工程师",
		period: "2021.10 — 2022.12",
		points: [
			"实习期（2021.10—2022.06）负责银行自助终端应用开发与中台前端；转正后（2022.06—2022.12）独立负责邮储银行河南分行项目业务后台全部模块。",
			"主导银行设备通信 JS-SDK 的 TypeScript 重构与票据可视化编辑器的设计与核心开发。",
		],
	},
];

const PROJECTS: {
	name: string;
	stack: string[];
	featured?: boolean;
	background: string;
	approach: string;
	result: string;
	link?: string;
}[] = [
	{
		name: "验光处方自动化处理系统",
		stack: ["Python FastAPI", "React", "设备集成", "HIS"],
		featured: true,
		background:
			"医院原先不具备把眼科检查数据自动写入 HIS 的能力，开医嘱患者的处方数据依赖人工处理。",
		approach:
			"独立完成 Python FastAPI SDK（扫码枪 / 高拍仪 / 打印机 / 眼压计 / Nidek、目乐电脑验光仪接入）+ React 19 前端；支持手动录入 / 扫码识别 / 打印目录监控三种工作模式；处方 PDF 生成 → 静默打印 → 经院内 SOAP WebService 写入东华 HIS；内网离线部署，数据不出院。",
		result:
			"1 周从 0 上线温岭市第一人民医院，眼科开医嘱患者数据全部经系统写入东华 HIS；半年内将扩展至 3 个院点。",
	},
	{
		name: "渠道订单数据平台",
		stack: ["React", "ThinkPHP", "Python", "API 对接"],
		background:
			"公司渠道订单依赖人工与多家厂商系统核对，效率低且易出错。",
		approach:
			"自研订单系统（React 前端 + ThinkPHP 后台 + Python 订单核心服务）：实现依视路（Odoo JSON-RPC + 验证码 OCR）、欧泰科（开放 API）、欧几里得 / Lucid（接口反代 + Excel 上传）四厂商订单对接，状态机回写全链路。",
		result: "覆盖公司 90% 渠道订单，替代人工核对。",
	},
	{
		name: "学生艺术展览征集系统",
		stack: ["Taro 小程序", "Vue3 管理后台", "FastAPI"],
		background: "接手存在缺陷的项目，需在期限内保障上线。",
		approach:
			"负责管理后台（Vue3 / Element Plus）与小程序前端（Taro 4 / Vue3）开发，限期修复报名提交、作品编号等关键缺陷。",
		result: "按期上线，支撑浙江全省约 300 名学生报名参展。",
	},
	{
		name: "票据可视化编辑器",
		stack: ["Electron", "React", "TypeScript", "canvas"],
		background: "面向银行票据的可视化低代码编辑器。",
		approach: "主导设计与核心开发：canvas 画布编辑、素材库、表格与边框系统。",
		result: "离职后由同事迭代为工业级版本并中标。",
		link: "https://gitee.com/liu11/bill-editor-electron",
	},
	{
		name: "银行设备通信 JS-SDK",
		stack: ["TypeScript", "WebSocket", "设备抽象"],
		background: "银行自助终端设备（读卡 / 身份证 / 摄像头 / 打印）与页面层通信。",
		approach:
			"主导 TypeScript 重构：8 类设备配置驱动注册 + WebSocket 信道层（自动重连），统一设备事件协议。",
		result: "修复长期 WebSocket 重连缺陷，生产环境稳定运行。",
		link: "https://gitee.com/i3lack/vite-jssdk",
	},
	{
		name: "蒙眼旅人 Blind Traveler",
		stack: ["Flutter", "Dart"],
		background: "大学时期独立开发的乌托邦概念社交 App（类 Soul）。",
		approach: "独立完成代码开发与打包，同学负责 UI/UX 交互设计。",
		result: "获 NCDA 全国高校数字艺术设计大赛浙江省三等奖（交互设计组）。",
		link: "https://gitee.com/i3lack/blind_traveler",
	},
];

const EXPLORING: string[] = [
	"study-agent — 从零手写 ReAct Agent：事件流驱动循环、session 持久化、文件工具沙箱、Eval 评测体系（45 个测试）。目的不是再造一个框架，而是把 Agent 框架的核心设计真正吃透。（进行中）",
	"dry-light — 面向摄影 / 视觉创作领域的生成式 Agent 应用。（计划中）",
];

const AI_BRIDGE =
	"AI 工具链把全栈交付提速（vibe coding 一周上线）；study-agent 以手写 ReAct + eval 体系验证 AI 应用工程能力。";

const AWARDS: { title: string; year: string; note?: string }[] = [
	{ title: "浙江省政府奖学金", year: "2021.12" },
	{
		title: "NCDA 全国高校数字艺术设计大赛 浙江省三等奖（交互设计组）",
		year: "2021.05",
		note: "获奖作品「蒙眼旅人」为独立开发的 Flutter 概念 App。",
	},
	{ title: "浙江省第十六届大学生电子商务大赛 三等奖", year: "2021.06" },
	{ title: "绍兴市大数据应用大赛 三等奖", year: "2020.09" },
	{ title: "国家励志奖学金", year: "2019.12" },
];

const HOBBIES: string[] = ["🏀 篮球", "🖊️ 书法", "📷 摄影"];

/* ---------- hooks ---------- */

function useActiveNav() {
	const [active, setActive] = useState("top");

	useEffect(() => {
		const sections = document.querySelectorAll("section[id]");
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActive(entry.target.id);
					}
				});
			},
			{ rootMargin: "-20% 0px -70% 0px" },
		);

		sections.forEach((s) => observer.observe(s));
		return () => observer.disconnect();
	}, []);

	return active;
}

/* ---------- components ---------- */

const NAV_LINKS: [string, string][] = [
	["capabilities", "能力"],
	["stack", "技术栈"],
	["experience", "经历"],
	["projects", "项目"],
	["exploring", "探索"],
	["awards", "获奖"],
];

function Nav() {
	const active = useActiveNav();
	const [open, setOpen] = useState(false);

	return (
		<nav className="nav" aria-label="Primary">
			<div className="nav__inner">
				<a className="nav__wordmark" href="#top" onClick={() => setOpen(false)}>
					BLACK
				</a>
				<ul className={`nav__links ${open ? "is-open" : ""}`}>
					{NAV_LINKS.map(([id, label]) => (
						<li key={id}>
							<a
								href={`#${id}`}
								className={active === id ? "is-active" : ""}
								onClick={() => setOpen(false)}
							>
								{label}
							</a>
						</li>
					))}
				</ul>
				<button
					type="button"
					className="nav__toggle"
					aria-expanded={open}
					aria-label="菜单"
					onClick={() => setOpen(!open)}
				>
					<span />
					<span />
				</button>
				<a className="nav__cta" href="mailto:black524726@163.com">
					邮箱 →
				</a>
			</div>
		</nav>
	);
}

function Hero() {
	return (
		<header id="top" className="hero">
			<p className="hero__quote">“Functions describe the world.”</p>
			<h1 className="hero__title">AI 全栈工程师 · 杭州 · 4 年+ 经验</h1>
			<p className="hero__intent">
				求职意向：AI 应用工程师 / AI 全栈工程师
			</p>
			<p className="hero__sub">
				4 年+ 医疗信息化全栈交付 · 从需求到上线 · 从设备到 HIS
			</p>
		</header>
	);
}

function Strip() {
	return (
		<div className="strip">
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
				<p className="strip__value">AI 应用工程师 / AI 全栈工程师</p>
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

function Stats() {
	return (
		<div className="stats" aria-label="关键数据">
			{STATS.map((s) => (
				<div key={s.label} className="stat">
					<p className="stat__value">{s.value}</p>
					<p className="stat__label">{s.label}</p>
				</div>
			))}
		</div>
	);
}

function Section({
	id,
	title,
	children,
}: {
	id?: string;
	title: string;
	children: React.ReactNode;
}) {
	return (
		<section id={id} className="section">
			<h2 className="section__title">{title}</h2>
			<div className="section__body">{children}</div>
		</section>
	);
}

function Capability({ cap, index }: { cap: (typeof CAPABILITIES)[0]; index: number }) {
	return (
		<article className="cap">
			<div className="cap__head">
				<span className="cap__num">
					{(index + 1).toString().padStart(2, "0")}
				</span>
				<div className="cap__head-text">
					<h3 className="cap__name">{cap.title}</h3>
					<p className="cap__data">{cap.data}</p>
				</div>
			</div>
			<p className="cap__desc">{cap.desc}</p>
		</article>
	);
}

function Project({ proj }: { proj: (typeof PROJECTS)[0] }) {
	return (
		<article className={`proj ${proj.featured ? "proj--featured" : ""}`}>
			<h3 className="proj__name">
				{proj.name}
				{proj.link && (
					<a
						href={proj.link}
						target="_blank"
						rel="noreferrer"
						className="proj__arrow"
					>
						↗
					</a>
				)}
			</h3>
			<p className="proj__stack">{proj.stack.join(" · ")}</p>
			<p className="proj__row">
				<span className="proj__label">背景</span>
				<span className="proj__text">{proj.background}</span>
			</p>
			<p className="proj__row">
				<span className="proj__label">做法</span>
				<span className="proj__text">{proj.approach}</span>
			</p>
			<p className="proj__row">
				<span className="proj__label">结果</span>
				<span className="proj__text">{proj.result}</span>
			</p>
		</article>
	);
}

/* ---------- print-only curated resume (2 A4 pages) ---------- */

function PrintResume() {
	return (
		<div className="print-resume">
			<header className="pr__head">
				<p className="pr__title">Black · AI 全栈工程师 · 杭州 · 4 年+ 经验</p>
				<p className="pr__intent">求职意向：AI 应用工程师 / AI 全栈工程师</p>
				<p className="pr__contact">
					邮箱 black524726@163.com · GitHub github.com/ii3lack · 在线简历
					ii3lack.github.io/ii3lack
				</p>
			</header>

			<section className="pr__sec">
				<h2 className="pr__h2">关键数据</h2>
				<p className="pr__stats">
					90% 渠道订单覆盖 · 1 周从 0 上线温岭 HIS · 70+ 移动 H5 交付 ·
					300 学生报名参展
				</p>
			</section>

			<section className="pr__sec">
				<h2 className="pr__h2">核心能力</h2>
				<p className="pr__item">
					<strong>全链路交付</strong> — 无产品/设计/运维环境下独立完成
					需求→方案→开发→部署；验光处方系统 1 周从 0 上线温岭市第一人民医院，
					眼科开医嘱患者数据全部写入东华 HIS。
				</p>
				<p className="pr__item">
					<strong>一套模型多院点落地</strong> — 从 0 搭建数字化应用矩阵：
					70+ 移动 H5、10+ 大屏、10 小程序、Electron 验光桌面端，覆盖 CRM、
					渠道订单、校园筛查、OA、营销。
				</p>
				<p className="pr__item">
					<strong>跨端全栈与设备集成</strong> — Web/H5/小程序/Electron
					全栈；后端 Python（FastAPI）/ PHP（ThinkPHP）/ Node.js；深度对接
					Nidek / 目乐、眼压计、扫码枪、高拍仪、打印机，打通设备采集→处方
					PDF→静默打印→上传 HIS 全链路。
				</p>
				<p className="pr__item">
					<strong>资源受限下的技术决策</strong> — 4 人团队承接全公司数字化
					需求，排优先级、砍冗余、选成熟方案；AI 工具链加速落地，核心代码
					坚持手写。
				</p>
			</section>

			<section className="pr__sec">
				<h2 className="pr__h2">技术栈</h2>
				<p className="pr__line">
					前端/终端：React · TypeScript · Vue2/3 · Next.js · Electron ·
					小程序/H5 · 数据大屏
				</p>
				<p className="pr__line">
					后端：Python/FastAPI · PHP/ThinkPHP · Node.js · RESTful ·
					WebSocket
				</p>
				<p className="pr__line">
					设备集成：扫码枪/高拍仪/打印机 · 眼压计/Nidek/目乐 · HIS 对接 ·
					蓝牙/WiFi/串口
				</p>
				<p className="pr__line">
					数据部署：MySQL/SQLite · 爬虫 · Docker · Linux · 内网离线部署
				</p>
				<p className="pr__line">
					AI 工程：手写 ReAct Agent · Eval 评测 · Claude Code / Pi 工具链 ·
					MCP / Skills
				</p>
			</section>

			<section className="pr__sec">
				<h2 className="pr__h2">工作经历</h2>
				<p className="pr__job">
					杭州捍尔目科技集团 · 全栈开发工程师 · 2023.01 — 至今
				</p>
				<ul className="pr__ul">
					<li>4 人研发团队核心开发：技术方案设计与技术方向推进，院点落地对接。</li>
					<li>
						从 0 搭建数字化应用矩阵：70+ 移动 H5、10+ 大屏、10 小程序、
						Electron 桌面端。
					</li>
				</ul>
				<p className="pr__job">
					东方通信（金融事业部）· 终端软件工程师 · 2021.10 — 2022.12
					（实习 → 转正）
				</p>
				<ul className="pr__ul">
					<li>转正期独立负责邮储银行河南分行项目业务后台全部模块。</li>
					<li>
						主导银行设备通信 JS-SDK 的 TypeScript 重构与票据编辑器核心开发。
					</li>
				</ul>
			</section>

			<section className="pr__sec pr__sec--page2">
				<h2 className="pr__h2">项目精选</h2>
				<p className="pr__proj pr__proj--star">
					<strong>验光处方自动化处理系统</strong>
					（Python FastAPI · React · 设备集成 · HIS）<br />
					背景：医院原先不具备把眼科检查数据自动写入 HIS 的能力。做法：独立完成
					设备接入 SDK（扫码枪/高拍仪/打印机/眼压计/Nidek、目乐）+ React 前端，
					处方 PDF 生成→静默打印→经院内 SOAP WebService 写入东华 HIS，内网离线
					部署。结果：1 周从 0 上线温岭市第一人民医院，眼科开医嘱患者数据全部经
					系统写入 HIS，半年内扩展至 3 个院点。
				</p>
				<p className="pr__proj">
					<strong>渠道订单数据平台</strong>（React · ThinkPHP · Python）—
					自研订单系统，依视路（Odoo JSON-RPC + 验证码 OCR）、欧泰科（开放
					API）、欧几里得 / Lucid（接口反代 + Excel 上传）四厂商对接，覆盖
					公司 90% 渠道订单，替代人工核对。
				</p>
				<p className="pr__proj">
					<strong>学生艺术展览征集系统</strong>（Taro 小程序 · Vue3 · FastAPI）
					— 负责管理后台与小程序开发，限期修复报名提交、作品编号等关键缺陷，
					支撑浙江全省约 300 名学生报名参展。
				</p>
				<p className="pr__proj">
					<strong>票据可视化编辑器</strong>（Electron · React · canvas）—
					主导设计与核心开发；离职后由同事迭代为工业级版本并中标。
				</p>
				<p className="pr__proj">
					<strong>银行设备通信 JS-SDK</strong>（TypeScript · WebSocket）—
					8 类设备配置驱动注册 + 信道层自动重连，修复长期重连缺陷，生产稳定
					运行。
				</p>
				<p className="pr__proj">
					<strong>蒙眼旅人 Blind Traveler</strong>（Flutter · Dart）—
					大学时期开发的类 Soul 概念社交 App，NCDA 全国高校数字艺术设计大赛
					浙江省三等奖。
				</p>
			</section>

			<section className="pr__sec">
				<h2 className="pr__h2">探索 · 教育 · 获奖</h2>
				<p className="pr__line">
					study-agent（手写 ReAct · 45 tests · github.com/ii3lack/study-agent）
					· dry-light（计划中）
				</p>
				<p className="pr__line">
					浙江越秀外国语学院 · 数字媒体技术本科 · 2018.09 — 2022.06
				</p>
				<p className="pr__line">
					浙江省政府奖学金 · NCDA 浙江省三等奖（蒙眼旅人）· 电商大赛三等奖 ·
					大数据大赛三等奖 · 国家励志奖学金
				</p>
			</section>
		</div>
	);
}

/* ---------- page ---------- */

export default function Home() {
	useActiveNav();
	const hobbies = HOBBIES.map((h) => h.split(" ").slice(1).join(" ")).join(
		" · ",
	);

	return (
		<>
			<Nav />
			<div className="shell">
				<Hero />
				<Strip />
				<Stats />

				<Section id="capabilities" title="核心能力">
					{CAPABILITIES.map((c, idx) => (
						<Capability key={c.title} cap={c} index={idx} />
					))}
				</Section>

				<Section id="stack" title="技术栈">
					{SKILLS.map((s) => (
						<div key={s.group} className="sgroup">
							<p className="sgroup__label">{s.group}</p>
							<div className="sgroup__items">
								{s.items.map((item) => (
									<span key={item} className="sgroup__tag">
										{item}
									</span>
								))}
							</div>
						</div>
					))}
				</Section>

				<Section id="experience" title="工作经历">
					<div className="timeline">
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
					</div>
				</Section>

				<Section id="projects" title="项目精选">
					<div className="projects">
						{PROJECTS.map((p) => (
							<Project key={p.name} proj={p} />
						))}
					</div>
				</Section>

				<Section id="exploring" title="正在探索">
					<p className="bridge">{AI_BRIDGE}</p>
					{EXPLORING.map((e) => (
						<p key={e} className="xitem">
							<span className="xitem__arrow">→</span> {e}
						</p>
					))}
					<p className="xitem xitem--link">
						<span className="xitem__arrow">→</span>{" "}
						<a href="https://github.com/ii3lack/study-agent">
							github.com/ii3lack/study-agent ↗
						</a>
					</p>
				</Section>

				<Section id="awards" title="教育 · 获奖">
					<p className="edu">浙江越秀外国语学院 · 数字媒体技术 本科</p>
					<p className="edu edu--meta">2018.09 — 2022.06 · 浙江绍兴</p>
					<div className="awards">
						{AWARDS.map((a) => (
							<div key={a.title} className="award">
								<span className="award__year">{a.year}</span>
								<div className="award__text">
									<span className="award__title">{a.title}</span>
									{a.note && <span className="award__note">{a.note}</span>}
								</div>
							</div>
						))}
					</div>
				</Section>
			</div>

			<footer className="footer">
				<div className="footer__colophon">
					<p className="footer__line">
						Black · {hobbies} · 医疗信息化全栈交付 · ©{" "}
						{new Date().getFullYear()}
					</p>
					<p className="footer__line footer__line--meta">
						构建：Next.js · Fraunces + IBM Plex Sans + JetBrains Mono · 暖纸系统
					</p>
					<p className="footer__line footer__line--links">
						<a href="mailto:black524726@163.com">邮箱</a> ·{" "}
						<a
							href="https://github.com/ii3lack"
							target="_blank"
							rel="noreferrer"
						>
							GitHub
						</a>{" "}
						·{" "}
						<a
							href="https://ii3lack.github.io/ii3lack"
							target="_blank"
							rel="noreferrer"
						>
							在线简历
						</a>
					</p>
				</div>
			</footer>

			<PrintResume />
		</>
	);
}
