"use client";

import { useEffect, useState, useRef, useCallback } from "react";

/* ---------- data ---------- */

const CAPABILITIES: { title: string; desc: string }[] = [
	{
		title: "全链路交付：从需求到上线",
		desc: "在无产品、无设计、无专职运维的环境下，独立完成需求梳理 → 方案设计 → 开发 → 部署的全流程。主导验光处方自动化系统，1 周从 0 上线温岭市第一人民医院：眼科开医嘱患者的检查数据全部经系统写入东华 HIS，医院原先不具备该能力。",
	},
	{
		title: "一套业务模型，多院点规模化落地",
		desc: "从 0 搭建公司数字化应用矩阵：70+ 移动 H5、10+ 院点定制数据大屏、10 个院点小程序、Electron 验光桌面端，覆盖 CRM、渠道订单、校园筛查、OA、营销等业务线。按院点需求快速定制复制交付，支撑连锁业务扩张。",
	},
	{
		title: "跨端全栈与医疗设备集成",
		desc: "Web（Vue2 / Vue3 / React）、H5、小程序、Electron 桌面端全栈开发；后端 Python（FastAPI）/ PHP（ThinkPHP）/ Node.js。深度对接医疗外设：扫码枪、高拍仪、打印机、眼压计、电脑验光仪（Nidek / 目乐），打通设备数据采集到 HIS 的全链路。",
	},
	{
		title: "资源受限下的技术决策",
		desc: "4 人研发团队承接全公司数字化需求：通过排优先级、砍冗余、选成熟方案保证交付。AI 工具链作为工作方式加速落地（vibe coding 一周交付），核心代码坚持手写。不做过度设计，以解决问题为唯一标准。",
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
		group: "AI 工程（进行中）",
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
			"4 人研发团队核心开发，承担技术方案设计与技术方向推进，负责各院点落地对接与技术支持。",
			"主导验光处方自动化系统：独立完成 Python FastAPI SDK（扫码枪 / 高拍仪 / 打印机 / 眼压计接入）+ React 前端 + 部署脚本，1 周从 0 上线温岭市第一人民医院，眼科开医嘱患者数据全部经系统写入东华 HIS，半年内将扩展至 3 个院点。",
			"主导渠道订单数据平台：开发依视路 / 欧几里得 / Lucid / Orthok 四厂商订单对接与同步，覆盖公司 90% 渠道订单，替代人工核对。",
			"接手存在缺陷的学生艺术展项目：重写 FastAPI 后端（20+ 接口，覆盖报名 / 评审 / 奖项 / 专家 / 导出），修复小程序问题，支撑约 300 名学生报名参展（覆盖浙江全省）。",
			"独立负责邮储银行河南分行智能营销平台后台全部模块，完成与企业微信的对接。",
			"前 AI 时代从 0 搭建公司数字化应用矩阵：70+ 移动 H5、10+ 院点数据大屏、10 个小程序、Electron 验光桌面端。",
		],
	},
	{
		company: "东方通信股份有限公司（金融事业部）",
		role: "终端软件工程师",
		period: "2021.10 — 2022.12",
		points: [
			"实习期（2021.10—2022.06）负责银行自助终端应用开发与中台前端；转正后（2022.06—2022.12）独立负责邮储银行河南项目业务后台。",
			"主导银行设备通信 JS-SDK 的 TypeScript 重构：抽象读卡 / 身份证 / 摄像头 / 打印等设备模式与信道层，修复长期 WebSocket 重连缺陷，生产环境稳定运行。",
			"主导票据可视化编辑器（Electron + React）设计与核心开发：canvas 画布编辑、素材库、表格与边框系统；离职后由同事迭代为工业级版本并中标三峡银行项目。",
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
		name: "验光处方自动化处理系统",
		stack: ["Python FastAPI", "React", "设备集成", "HIS"],
		result: "温岭市第一人民医院：眼科开医嘱患者数据全部经系统写入东华 HIS，1 周从 0 到上线。",
	},
	{
		name: "渠道订单数据平台",
		stack: ["Python", "爬虫", "API 对接"],
		result: "对接依视路 / 欧几里得 / Lucid / Orthok 四厂商订单，覆盖公司 90% 渠道订单。",
	},
	{
		name: "学生艺术展览征集系统",
		stack: ["Python FastAPI", "微信小程序"],
		result: "重写后端 20+ 接口，支撑约 300 名学生报名参展（覆盖浙江全省）。",
	},
	{
		name: "票据可视化编辑器",
		stack: ["Electron", "React", "TypeScript", "canvas"],
		result: "主导设计与核心开发；离职后由同事迭代，工业级版本中标三峡银行项目。",
	},
	{
		name: "银行设备通信 JS-SDK",
		stack: ["TypeScript", "WebSocket", "设备抽象"],
		result: "抽象设备模式与信道层，修复长期重连缺陷，生产环境稳定运行。",
	},
	{
		name: "蒙眼旅人 Blind Traveler",
		stack: ["Flutter", "Dart"],
		result: "盲人互助社交 App，获 NCDA 全国高校数字艺术设计大赛浙江省三等奖（交互设计组）。",
		link: "https://gitee.com/i3lack/blind_traveler",
	},
];

const AWARDS: { title: string; year: string }[] = [
	{ title: "浙江省政府奖学金", year: "2021.12" },
	{ title: "浙江省第十六届大学生电子商务大赛 三等奖", year: "2021.06" },
	{
		title: "NCDA 全国高校数字艺术设计大赛 浙江省三等奖（交互设计组）",
		year: "2021.05",
	},
	{ title: "绍兴市大数据应用大赛 三等奖", year: "2020.09" },
	{ title: "国家励志奖学金", year: "2019.12" },
];

const EXPLORING: string[] = [
	"study-agent — 从零手写 ReAct Agent：事件流驱动循环、session 持久化、文件工具沙箱、Eval 评测体系（45 个测试）。目的不是再造一个框架，而是把 Agent 框架的核心设计真正吃透。（进行中）",
	"dry-light — 计划在掌握 Agent 架构模式后，基于成熟框架构建面向摄影 / 视觉创作领域的生成式 Agent 应用。",
];

const HOBBIES: string[] = ["🏀 篮球", "🖊️ 书法", "📷 摄影"];

/* ---------- hooks ---------- */

function useRevealHero() {
	useEffect(() => {
		const els = document.querySelectorAll(".hero .reveal");
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

function useScrollProgress() {
	useEffect(() => {
		const bar = document.querySelector(".scroll-progress__bar") as HTMLElement;
		if (!bar) return;

		const update = () => {
			const scrollTop = window.scrollY;
			const docHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			const progress = docHeight > 0 ? scrollTop / docHeight : 0;
			bar.style.transform = `scaleX(${progress})`;
		};

		window.addEventListener("scroll", update, { passive: true });
		update();
		return () => window.removeEventListener("scroll", update);
	}, []);
}

function useNavScroll() {
	useEffect(() => {
		const nav = document.querySelector(".nav-masthead") as HTMLElement;
		if (!nav) return;

		const update = () => {
			if (window.scrollY > 50) {
				nav.classList.add("is-scrolled");
			} else {
				nav.classList.remove("is-scrolled");
			}
		};

		window.addEventListener("scroll", update, { passive: true });
		update();
		return () => window.removeEventListener("scroll", update);
	}, []);
}

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

function useTimelineDots() {
	useEffect(() => {
		const jobs = document.querySelectorAll(".xjob");
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) {
						e.target.classList.add("is-visible");
					}
				});
			},
			{ threshold: 0.3 },
		);

		jobs.forEach((j) => observer.observe(j));
		return () => observer.disconnect();
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
	const active = useActiveNav();

	return (
		<nav className="nav-masthead" aria-label="Primary">
			<div className="scroll-progress">
				<div className="scroll-progress__bar" />
			</div>
			<div className="nav-masthead__inner">
				<a className="nav-masthead__wordmark" href="#top">
					BLACK
				</a>
				<ul className="nav-masthead__links">
					{NAV_LINKS.map(([id, label]) => (
						<li key={id}>
							<a href={`#${id}`} className={active === id ? "is-active" : ""}>
								{label}
							</a>
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
				AI 全栈工程师 · 杭州 · 4 年+ 经验
			</h1>
			<p
				className="hero__sub reveal"
				style={{ "--i": 3 } as React.CSSProperties}
			>
				4 年+ 医疗信息化全栈交付 · 从需求到上线
			</p>
			<a
				className="hero__cta reveal"
				style={{ "--i": 4 } as React.CSSProperties}
				href="mailto:black524726@163.com"
			>
				联系
				<span className="hero__cta-icon">→</span>
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
				<p className="strip__value">技术负责人</p>
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
	title,
	children,
}: {
	id?: string;
	title: string;
	children: React.ReactNode;
}) {
	return (
		<section id={id} className="section">
			<div className="section__head">
				<h2 className="section__title">{title}</h2>
			</div>
			{children}
		</section>
	);
}

function CapabilityAccordion({
	cap,
	index,
}: {
	cap: (typeof CAPABILITIES)[0];
	index: number;
}) {
	const [isOpen, setIsOpen] = useState(false);
	const contentRef = useRef<HTMLDivElement>(null);

	return (
		<div className={`cap ${isOpen ? "is-open" : ""}`}>
			<div
				className="cap__header"
				onClick={() => setIsOpen(!isOpen)}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						setIsOpen(!isOpen);
					}
				}}
				role="button"
				tabIndex={0}
				aria-expanded={isOpen}
			>
				<span className="cap__num">
					{(index + 1).toString().padStart(2, "0")}
				</span>
				<h3 className="cap__name">{cap.title}</h3>
				<span className="cap__toggle">+</span>
			</div>
			<div className="cap__body" ref={contentRef}>
				<p className="cap__desc">{cap.desc}</p>
			</div>
		</div>
	);
}

/* ---------- page ---------- */

export default function Home() {
	useRevealHero();
	useScrollProgress();
	useNavScroll();
	useTimelineDots();
	const hobbies = HOBBIES.map((h) => h.split(" ").slice(1).join(" ")).join(
		" · ",
	);

	return (
		<>
			<Nav />
			<div className="shell">
				<Hero />
				<Strip />

				<Section id="capabilities" title="核心能力">
					{CAPABILITIES.map((c, idx) => (
						<CapabilityAccordion key={c.title} cap={c} index={idx} />
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
					<div className="projects-grid">
						{PROJECTS.map((p) => (
							<div key={p.name} className="proj">
								<h3 className="proj__name">
									{p.name}
									{p.link && (
										<a
											href={p.link}
											target="_blank"
											rel="noreferrer"
											className="proj__arrow"
										>
											↗
										</a>
									)}
								</h3>
								<p className="proj__stack">{p.stack.join(" · ")}</p>
								<p className="proj__result">
									<span className="proj__result-arrow">→</span> {p.result}
								</p>
							</div>
						))}
					</div>
				</Section>

				<Section id="exploring" title="正在探索">
					{EXPLORING.map((e) => (
						<p key={e} className="xitem">
							<span className="xitem__arrow">→</span> {e}
						</p>
					))}
				</Section>

				<Section id="awards" title="获奖与教育">
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
