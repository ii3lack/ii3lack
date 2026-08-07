"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import Lenis from "lenis";

/* ============================================================
 * Resume V4 — Long Document macrostructure · dark-tech theme
 * theme: deep blue-black + indigo→violet accent (restrained)
 * motion: Lenis smooth scroll + framer-motion reveals (medium)
 * nav: glass edge-aligned minimal · footer: dense colophon
 * data source of truth: ./resume-data.ts (site / README / PDF same source)
 * ============================================================ */

import {
	AWARDS,
	CAPABILITIES,
	EDUCATION,
	EXPERIENCE,
	EXPLORING,
	HOBBIES,
	PROJECTS,
	SKILLS,
} from "./resume-data";
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

/* ---------- Lenis smooth scroll (wheel-only; touch stays native) ---------- */
function useSmoothScroll() {
	const reduced = useReducedMotion();

	useEffect(() => {
		if (reduced) return;
		const lenis = new Lenis({
			autoRaf: true,
			anchors: { offset: 88 },
			smoothWheel: true,
			lerp: 0.12,
		});
		return () => lenis.destroy();
	}, [reduced]);
}

/* ---------- components ---------- */

/* No-JS-safe reveal: static export renders a plain div; motion mounts after paint. */
function Reveal({
	children,
	className,
	delay = 0,
}: {
	children: React.ReactNode;
	className?: string;
	delay?: number;
}) {
	const reduced = useReducedMotion();
	const [mounted, setMounted] = useState(false);

	useLayoutEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted || reduced) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-72px" }}
			transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
		>
			{children}
		</motion.div>
	);
}

function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 140,
		damping: 28,
		mass: 0.3,
	});
	return <motion.div className="scroll-progress" style={{ scaleX }} />;
}

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
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 10);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<nav
			className={`nav${scrolled ? " nav--scrolled" : ""}`}
			aria-label="Primary"
		>
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
			<div className="hero__orb hero__orb--a" aria-hidden="true" />
			<div className="hero__orb hero__orb--b" aria-hidden="true" />
			<Reveal>
				<p className="hero__quote">“Functions describe the world.”</p>
			</Reveal>
			<Reveal delay={0.08}>
				<h1 className="hero__title">
					AI全栈工程师 · 杭州 · 近5年 · Agent应用
				</h1>
			</Reveal>
			<Reveal delay={0.16}>
				<p className="hero__intent">
					求职意向：Agent应用工程师
				</p>
			</Reveal>
			<Reveal delay={0.24}>
				<p className="hero__sub">
					设备集成 · AI 落地 · 系统交付
				</p>
			</Reveal>
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
	bodyClass = "",
}: {
	id?: string;
	title: string;
	children: React.ReactNode;
	bodyClass?: string;
}) {
	return (
		<section id={id} className="section">
			<h2 className="section__title">{title}</h2>
			<Reveal className={`section__body${bodyClass ? ` ${bodyClass}` : ""}`}>
				{children}
			</Reveal>
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

/* ---------- page ---------- */

export default function Home() {
	useActiveNav();
	useSmoothScroll();
	const hobbies = HOBBIES.map((h) => h.label).join(" · ");

	return (
		<>
			<ScrollProgress />
			<Nav />
			<div className="shell">
				<Hero />
				<Reveal>
					<Strip />
				</Reveal>

				<Section
					id="capabilities"
					title="核心能力"
					bodyClass="section__body--grid"
				>
					{CAPABILITIES.map((c, idx) => (
						<Capability key={c.title} cap={c} index={idx} />
					))}
				</Section>

				<Section id="stack" title="技术栈" bodyClass="section__body--wide">
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

				<Section
					id="projects"
					title="项目精选"
					bodyClass="section__body--wide"
				>
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

			</>
	);
}
