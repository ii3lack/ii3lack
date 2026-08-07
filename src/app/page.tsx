"use client";

import { Fragment, useEffect, useState } from "react";

/* ============================================================
 * Resume V3 — hallmark Long Document macrostructure
 * theme: warm-paper locked system (tokens.css)
 * nav: N9 edge-aligned minimal · footer: Ft4 dense colophon
 * data source of truth: this file (site / README / PDF same source)
 * ============================================================ */

/* ---------- data ---------- */

const CAPABILITIES: { title: string; desc: string }[] = [
	{
		title: "医疗设备全链路集成",
		desc: "深度对接 Nidek / 目乐电脑验光仪、眼压计、眼底相机、扫码枪、高拍仪、打印机：WebSocket 设备直连 + 局域网硬件通信（Dart shelf 接收眼底相机照片）；打通设备数据采集 → 处方 PDF → 静默打印 → 经院内 HIS 接口写入的全链路；配套企业级 Windows 离线部署（安装包 + NSSM 服务管理 + 9 章部署 SOP），数据不出院。",
	},
	{
		title: "跨端全栈开发",
		desc: "React（验光处方 / ERP 管理后台 / 票据编辑器）、Vue 3（筛查后台 / 叫号多端 / 艺术展后台）、Flutter（筛查设备端 / 社交 App）、Electron（桌面端 / 大屏）、Taro 小程序全栈；后端 Python FastAPI / PHP ThinkPHP / Node.js + MySQL / Redis 队列。",
	},
	{
		title: "从 0 到上线的独立交付",
		desc: "独立完成需求梳理 → 方案设计 → 开发 → 部署。代表：温岭眼科诊间数据对接系统（~2 周从 0 独立交付，半年扩展 3 院点）；主导多业务线应用矩阵（验光处方 / 社区筛查 / 渠道订单 ERP / 学生艺术展 / 院点叫号多端），院点级定制化交付。",
	},
	{
		title: "AI 工作流搭建与落地",
		desc: "搭建 hermes / claude code / pi 与 matt pocock skills 规划开发，chrome devtools / codegraph 等 MCP 辅助；AI 驱动交付加速（vibe coding），核心设计 / 架构 / 业务建模始终由我主导。",
	},
];

const SKILLS: { group: string; items: string[] }[] = [
	{
		group: "前端与终端",
		items: [
			"React / TypeScript",
			"Vue 3",
			"Next.js",
			"Electron",
			"小程序",
			"Flutter / Dart",
			"Vue 生态：Element Plus / Pinia / Vite",
		],
	},
	{
		group: "后端",
		items: [
			"Python / FastAPI",
			"PHP / ThinkPHP",
			"Node.js",
			"MySQL",
			"aiohttp / aiomysql",
			"gevent",
			"DrissionPage（浏览器自动化）",
		],
	},
	{
		group: "设备与系统集成",
		items: [
			"扫码枪 / 高拍仪 / 打印机",
			"眼压计 / Nidek / 目乐",
			"HIS 系统对接",
			"WebSocket 设备直连",
			"多协议（蓝牙 / WiFi / 串口）",
		],
	},
	{
		group: "数据与部署",
		items: [
			"爬虫与数据同步",
			"MySQL / SQLite",
			"Docker",
			"Linux 运维",
			"内网离线部署",
		],
	},
	{
		group: "AI 应用探索",
		items: ["手写 ReAct Agent", "Langfuse Eval", "AI API 集成"],
	},
	{
		group: "AI 工作流",
		items: ["Claude Code / Pi / Hermes", "MCP / Skills"],
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
			"4 人研发团队核心开发：技术方案设计与业务落地推进，各院点落地对接与技术支持。",
			"主导公司数字化应用矩阵：验光处方 / 社区筛查 / 学生艺术展 / 渠道订单 ERP / 院点叫号多端 / 小程序矩阵，院点级定制化交付。",
			"另交付院点叫号系统多端套件（Vue 3 + Electron，取号 / 队列 / 横竖屏大屏 / 打印，6 个子项目约 7172 行，master 标准版 + 各院点定制分支）。",
		],
	},
	{
		company: "东方通信股份有限公司（金融事业部）",
		role: "终端软件工程师",
		period: "2021.10 — 2022.12",
		points: [
			"实习期（2021.10—2022.06）负责银行自助终端应用开发与中台前端；转正后（2022.06—2022.12）独立负责邮储银行河南分行项目业务后台。",
			"实习期两个银行项目（手写无 AI）：",
			"票据可视化编辑器：设计参与 + 核心实现（素材 / 边框 / 数据模型 / UI），中标重庆三峡银行。",
			"银行设备通信 JS-SDK：参与开发，按团队规范实现设备模块 + npm 发包交付。",
		],
	},
];

const PROJECTS: {
	name: string;
	subtitle: string;
	stack: string[];
	featured?: boolean;
	background: string;
	approach: string;
	result: string;
	role: string;
	link?: string;
}[] = [
	{
		name: "验光处方自动化处理系统 (HDDU)",
		subtitle: "捍尔目眼科运营系统核心模块",
		stack: [
			"Python FastAPI",
			"React",
			"Vite",
			"TypeScript",
			"WebSocket",
			"设备集成",
			"离线部署",
		],
		featured: true,
		background:
			"合作医院眼科中心信息化能力弱，缺乏对检查医嘱的信息化集成手段，验光处方数据依赖人工处理。",
		approach:
			"全栈主导交付 pnpm monorepo（代码实现 vibe coding）：apps/heu-web — React + Vite + TypeScript，4 个 workspace（手动录入 / 扫码 / 打印监控 / 眼压表单）；sdk/ — Python FastAPI，lifespan 管理 DB / 扫码监听 / 打印监控 / 浏览器资源；WebSocket 设备直连：3 个独立 hook（useCameraWs 摄像头 / useDeviceWs 设备 / useEyePressWs 眼压计），设备配置驱动注册；处方 PDF 生成 → 静默打印 → 经院内 HIS 接口写入；企业级 Windows 离线部署：6 个安装包 + 完整生命周期脚本（install / uninstall / configure / start / update-code）+ Python wheels 离线依赖 + NSSM Windows 服务管理 + 9 章部署 SOP；完整测试覆盖（sdk/tests + apps/__tests__）",
		result:
			"温岭市第一人民医院上线周期 ~2 周（核心代码 1 周多 + 集成上线 ~1 周）；半年内扩展至 3 个院点，后续稳定运行并持续维护。",
		role: "核心设计 / 架构 / 部署 / 业务建模由我主导，代码实现 vibe coding。",
	},
	{
		name: "渠道订单数据平台 (Heroeyes ERP)",
		subtitle: "捍尔目核心业务系统",
		stack: ["React", "ThinkPHP", "Python", "5 厂商对接"],
		background:
			"公司渠道订单依赖人工与多家厂商系统核对，效率低且易出错；技术对接需覆盖公司 90% 渠道订单数据。",
		approach:
			"配置驱动的订单系统设计 — ProductConfig 表（JSON 规则）驱动前端表单，换产品 / 换厂商不改前端；订单号生成策略 + 复合主键（订单号 + 左右眼）区分业务记录；UnionHospital 院点 ↔ 渠道系统多对多映射。队列异步提交 — 前端表单 → PHP 下单入口（事务写入）→ Redis 队列（ChannelCore job）→ channelCoreRequest HTTP 调用 Python 渠道服务 → 数据库更新。独立完成前后端（全部手写，未使用 AI 工具）：React 管理后台（Arco Design + Redux Toolkit + Vite + @antv/data-set）；PHP 后端（ThinkPHP 6）：5 厂商业务实现（Essilor JSON / 乐优视 Excel+OSS / Euclid / Lucid / Orthok）+ CreateOrder 下单入口（GuzzleHttp + 阿里云 OSS + ThinkPHP Queue）。早期 Python 同步爬虫（无 AI 手写）：4 厂商订单数据同步，与下单流程互补。跨人协作：4 厂商对接方案（Excel 上传）由我验证后，同事封装为 Python Flask 可调用 API。",
		result: "覆盖公司 90% 渠道订单数据的技术对接。",
		role: "业务架构 + 前后端独立开发，全部手写（本项目未使用 AI 工具）。",
	},
	{
		name: "社区筛查系统 (Heroeyes Screening)",
		subtitle: "捍尔目社区筛查业务系统（4 端协同）",
		stack: ["Flutter", "Vue 3", "Element Plus", "Python FastAPI", "AI 集成"],
		featured: true,
		background:
			"社区筛查场景，设备外勤 + 现场录入 + 后台管理 + 患者查询多角色协作。",
		approach:
			"flutter_data_device — Flutter 验光筛查设备端：完整状态管理（get + binding/controller/view 四层）；7 个独立业务 widget（眼底照 / 视力表 / 筛查方案 / 裂隙灯 / 人员列表等）；shelf HTTP server 接收便携式眼底相机局域网照片（硬件集成亮点）；集成阿里云通义千问（Qwen-max）AI 眼底图像诊断；flutter_dotenv 环境变量管理（.env.dev / .env.release）。screening-admin — Vue 3 + Element Plus + Pinia 管理后台。patient-info — Vue 3 + Vite H5，患者查询社筛结果。screening-python-backend — Python FastAPI 后端（团队负责）。",
		result:
			"完整社区筛查业务流（录入 → 上传 → AI 分析 → 记录 → 后台管理 → 患者查询）。",
		role: "主导 Flutter 设备端 + Vue 后台管理，完全 vibe coding（本项目所有代码 AI 生成）。",
	},
	{
		name: "学生艺术展览征集系统",
		subtitle: "青少年绘画作品展报名评审平台",
		stack: ["Taro 4", "Vue 3", "Element Plus", "Vite"],
		background:
			'"遇见·看见"青少年《自然与眼的对话》绘画作品展，支撑浙江全省学生报名参展。',
		approach:
			"独立完成前端全部工作：Taro 4 + Vue 3 微信小程序（20+ 个页面）：报名（区域 4 级联动 + 作品上传 + 智能作品编号 + PDF 报名回执）/ 作品展览 / 专家评审 / 奖项公示 / 优惠券 / 活动日历；Vue 3 + Element Plus 管理后台（13 个 API 模块对接）：作品审核 / 专家评审 / 奖项管理 / 数据导出 / 富文本活动编辑（桌面 + 移动双布局）。",
		result: "支撑浙江全省约 300 名学生报名参展。",
		role: "前端独立完成，AI 协作——在 AI 生成代码基础上 2-3 天完成缺陷修复、测试与上线，保障活动按期启动。",
	},
	{
		name: "票据可视化编辑器",
		subtitle: "面向银行票据的可视化低代码编辑器（实习期主导）",
		stack: ["Electron", "React", "TypeScript", "Recoil", "react-grid-layout"],
		background: "银行票据排版复杂，需要可视化拖拽编辑，减少人工排版。",
		approach:
			"设计参与 + 核心实现：主导素材系统（6 种素材组件）+ 边框系统（输入框 / 表格边框）+ 数据模型 + UI / 样式（git 提交证据）；核心参与：画布编辑（react-grid-layout 拖拽布局）；技术选型：Vue vs React、桌面 vs Web，最终 Electron + React + react-grid-layout；先做 MVP 验证 → 领导验证 → 功能优化；团队协作：状态管理架构（service 层）由资深同事设计，以更有经验的写法推动项目完成。",
		result: "中标重庆三峡银行（银行要求公司投入上线）。",
		role: "实习期技术选型 + 设计参与 + 核心功能开发，手写无 AI。",
		link: "https://gitee.com/liu11/bill-editor-electron",
	},
	{
		name: "蒙眼旅人 Blind Traveler",
		subtitle: "乌托邦主题社交 App 原型（大学时期）",
		stack: ["Flutter", "Dart", "get"],
		background:
			'小组讨论确立"乌托邦社交"理念，参加 NCDA 全国高校数字艺术设计大赛。',
		approach:
			"核心开发独立完成，共 90 个文件。完整 get 框架应用：6 个业务模块（注册 / 聊天 / 主页 / 助手 / 设置 / 启动）+ 嵌套路由 3 层（author → gender → login/register）+ DI 容器 + StorageService 异步初始化 + binding/logic/state/view 四层模块化；6 个共享 widget 复用 + liquid_swipe 引导页 + 自定义动画交互；团队协作：同组设计师负责毛玻璃 + 动画 UI 设计，我负责架构 + 全部代码实现。",
		result: "获 NCDA 全国高校数字艺术设计大赛浙江省三等奖（交互设计组）。",
		role: "核心开发独立完成；现在回看代码命名有瑕疵（早期项目，自我认知清晰）。",
		link: "https://gitee.com/i3lack/blind_traveler",
	},
];

const EXPLORING: string[] = [
	"study-agent — 从零手写 ReAct Agent（Python）：事件流驱动循环 + session 持久化 + 文件工具沙箱 + Langfuse Eval 体系，45 个 pytest 用例。目的不是再造框架，而是吃透 Agent 框架核心设计。（进行中）",
	"AI 工作流：hermes / claude code / pi 等 Agent 使用；matt pocock skills 等 skills 接入日常开发工作流和办公工作流；chrome devtools / codegraph 等 MCP 辅助。",
];

const AWARDS: { title: string; year: string; note?: string }[] = [
	{ title: "浙江省政府奖学金", year: "2021.12" },
	{
		title: "NCDA 全国高校数字艺术设计大赛 浙江省三等奖（交互设计组）",
		year: "2021.05",
		note: "获奖作品「蒙眼旅人」为独立完成核心开发的 Flutter 社交 App 原型。",
	},
	{ title: "浙江省第十六届大学生电子商务大赛 三等奖", year: "2021.06" },
	{ title: "绍兴市大数据应用大赛 三等奖", year: "2020.09" },
	{ title: "国家励志奖学金", year: "2019.12" },
];

const EDUCATION: {
	school: string;
	major: string;
	period: string;
	location: string;
} = {
	school: "浙江越秀外国语学院",
	major: "数字媒体技术 本科",
	period: "2018.09 — 2022.06",
	location: "浙江绍兴",
};

const HOBBIES: { icon: string; label: string }[] = [
	{ icon: "🏀", label: "篮球" },
	{ icon: "🖊️", label: "书法" },
	{ icon: "📷", label: "摄影" },
];

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
			<h1 className="hero__title">
				AI 全栈工程师 · 杭州 · 近 5 年 · 医疗信息化交付 + AI 应用探索
			</h1>
			<p className="hero__intent">求职意向：AI 应用工程师 / AI 全栈工程师</p>
			<p className="hero__sub">
				医疗信息化交付 + AI 应用探索 · 从需求到上线 · 从设备到 HIS
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
				<p className="strip__value">近 5 年</p>
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

function Capability({
	cap,
	index,
}: {
	cap: (typeof CAPABILITIES)[0];
	index: number;
}) {
	return (
		<article className="cap">
			<div className="cap__head">
				<span className="cap__num">
					{(index + 1).toString().padStart(2, "0")}
				</span>
				<div className="cap__head-text">
					<h3 className="cap__name">{cap.title}</h3>
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
			{proj.subtitle && <p className="proj__sub">{proj.subtitle}</p>}
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
			{proj.role && (
				<p className="proj__row">
					<span className="proj__label">角色</span>
					<span className="proj__text">{proj.role}</span>
				</p>
			)}
		</article>
	);
}

/* ---------- print-only curated resume (2 A4 pages) ---------- */

function PrintResume() {
	return (
		<div className="print-resume">
			<header className="pr__head">
				<p className="pr__title">
					Black · AI 全栈工程师 · 杭州 · 近 5 年 · 医疗信息化交付 + AI 应用探索
				</p>
				<p className="pr__intent">求职意向：AI 应用工程师 / AI 全栈工程师</p>
				<p className="pr__contact">
					邮箱 black524726@163.com · GitHub github.com/ii3lack · 在线简历
					ii3lack.github.io/ii3lack
				</p>
			</header>

			<section className="pr__sec">
				<h2 className="pr__h2">核心能力</h2>
				{CAPABILITIES.map((cap) => (
					<p key={cap.title} className="pr__item">
						<strong>{cap.title}</strong> — {cap.desc}
					</p>
				))}
			</section>

			<section className="pr__sec">
				<h2 className="pr__h2">技术栈</h2>
				{SKILLS.map((group) => (
					<p key={group.group} className="pr__line">
						{group.group}：{group.items.join(" · ")}
					</p>
				))}
			</section>

			<section className="pr__sec">
				<h2 className="pr__h2">工作经历</h2>
				{EXPERIENCE.map((job) => (
					<Fragment key={job.company}>
						<p className="pr__job">
							{job.company} · {job.role} · {job.period}
						</p>
						<ul className="pr__ul">
							{job.points.map((point, idx) => (
								<li key={idx}>{point}</li>
							))}
						</ul>
					</Fragment>
				))}
			</section>

			<section className="pr__sec pr__sec--page2">
				<h2 className="pr__h2">项目精选</h2>
				{PROJECTS.map((proj) => (
					<p
						key={proj.name}
						className={`pr__proj ${proj.featured ? "pr__proj--star" : ""}`}
					>
						<strong>{proj.name}</strong>（{proj.stack.join(" · ")}）
						<br />
						{proj.subtitle}
						<br />
						背景：{proj.background}
						<br />
						做法：{proj.approach}
						<br />
						结果：{proj.result}
						<br />
						角色：{proj.role}
					</p>
				))}
			</section>

			<section className="pr__sec">
				<h2 className="pr__h2">探索 · 教育 · 获奖</h2>
				<p className="pr__line">AI 应用探索：{EXPLORING[0]}</p>
				<p className="pr__line">{EXPLORING[1]}</p>
				<p className="pr__line">
					{EDUCATION.school} · {EDUCATION.major} · {EDUCATION.period} ·{" "}
					{EDUCATION.location}
				</p>
				<p className="pr__line">
					{AWARDS.map((a) =>
						a.note ? `${a.title} — ${a.note.replace(/。$/, "")}` : a.title,
					).join(" · ")}
				</p>
			</section>
		</div>
	);
}

/* ---------- page ---------- */

export default function Home() {
	useActiveNav();
	const hobbies = HOBBIES.map((h) => h.label).join(
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
					<p className="edu">
						{EDUCATION.school} · {EDUCATION.major}
					</p>
					<p className="edu edu--meta">
						{EDUCATION.period} · {EDUCATION.location}
					</p>
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
