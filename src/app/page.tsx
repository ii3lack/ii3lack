'use client';

import { useEffect, useState } from 'react';

/* ---------- data ---------- */

const ROLES = [
  'AI Full-Stack Engineer',
  'Python · JS/TS · Node.js',
  'Agent Engineering (WIP)',
];

const SKILLS: { group: string; icon: string; items: string[] }[] = [
  {
    group: 'AI / LLM',
    icon: '🤖',
    items: ['LLM API 集成', 'Prompt Engineering', 'Claude Code / MCP / Skills', 'Agent 应用（开发中）'],
  },
  {
    group: 'Backend',
    icon: '⚙️',
    items: ['Python', 'FastAPI', 'Node.js', 'PHP (ThinkPHP)', 'RESTful API'],
  },
  {
    group: 'Frontend',
    icon: '🎨',
    items: ['React', 'Vue', 'TypeScript', 'Next.js', 'Electron', 'Flutter', '小程序(钉钉/H5)'],
  },
  {
    group: 'Data & Infra',
    icon: '📊',
    items: ['爬虫/反爬', 'ETL', '数据仓库', 'WebSocket', '多协议通信', 'Linux 运维', 'Docker', 'CI/CD'],
  },
];

const EXPERIENCE: {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
}[] = [
  {
    company: '杭州捍尔目科技集团',
    role: '全栈开发工程师',
    period: '2023.01 — 至今',
    location: '杭州',
    points: [
      '搭建公司数字化平台技术底座（CRM / 运营报表 / 财务 OA / 数据看板），FastAPI + React/Vue 统一 H5、钉钉小程序、Electron 跨端技术栈。',
      '整合钉钉审批流、ERP 残留数据与零散文档，搭建统一数据仓库，实现运营数据实时可视。',
      '引入 Claude Code + MCP/Skills 工具链，将需求→编码→测试周期缩短至 1~2 天。',
      '对接院方 HIS 系统，推进眼科检查数据归档与院内眼科数据看板建设。',
      '结果：公司从零数字化基础到核心业务平台持续线上运行。',
    ],
  },
  {
    company: '东方通信股份有限公司',
    role: '终端软件工程师（金融事业部）',
    period: '2021.07 — 2022.12',
    location: '杭州',
    points: [
      '参与银行智能终端项目招标技术方案，负责多个项目前端设计与编码交付。',
      '两周交付低代码票据可视化工具（React + Vite + 拖拽插件 + SSR），中标三峡银行项目。',
      'TypeScript 全面重构河北交行 JS-SDK，修复长期重连缺陷，生产环境稳定运行。',
      '完成河南邮储企微对接、三峡银行业务数字化改造。',
    ],
  },
];

const PROJECTS: {
  name: string;
  stack: string[];
  desc: string;
  result: string;
  link?: string;
}[] = [
  {
    name: '渠道数据采集与分析平台',
    stack: ['Python', '浏览器自动化', 'API 重放', '数据报表'],
    desc: '在不与厂商直接对接的前提下，通过浏览器自动化获取登录态、接口重放采集多厂商订单数据，间隔性爬取规避检测，接入数据仓库。',
    result: '渠道数据报表与业务实际数据 90%+ 准确率，为运营决策提供有效支撑。',
  },
  {
    name: '院点检查数据建档系统',
    stack: ['Python', 'WebSocket', '多协议通信'],
    desc: '打通视力表、验光仪、生物测量仪等多种医疗设备（蓝牙/WiFi/网线），以平板作为中继节点采集数据，内网场景经堡垒机上报。',
    result: '实现学生视力筛查数据全流程数字化采集与建档，项目顺利交付上线。',
  },
  {
    name: '蒙眼旅人 Blind Traveler',
    stack: ['Flutter', 'Dart'],
    desc: '在校自学 Flutter，独立设计并开发一款「沙盒社交」概念移动应用，完成设计、编码与打包。',
    result: '获 NCDA 全国高校数字艺术设计大赛浙江省奖。',
    link: 'https://gitee.com/i3lack/blind_traveler',
  },
];

const AWARDS: { title: string; year: string }[] = [
  { title: '浙江省政府奖学金', year: '2021.12' },
  { title: '浙江省第十六届大学生电子商务大赛 三等奖', year: '2021.06' },
  { title: 'NCDA 全国高校数字艺术设计大赛 浙江省三等奖', year: '2021.05' },
  { title: '绍兴市大数据应用大赛 三等奖', year: '2020.09' },
  { title: '国家励志奖学金', year: '2019.12' },
];

const EXPLORING: string[] = [
  'Agent 应用开发 — 不停留在调 API，手写提示、深挖原理，开源项目进行中。',
  '工业级 Agent 架构 — 研究生产级 Agent 系统设计，已在团队提出专用 Agent 后端方案。',
  'Claude Code 生态 — OMC / MCP / Skills 工具链的工程化落地经验。',
];

const HOBBIES: string[] = ['🏀 Basketball', '🖊️ Calligraphy', '📷 Photography', '✍️ Hand-writing Prompts'];

/* ---------- hooks ---------- */

function useTyping(words: string[]) {
  const [text, setText] = useState('');
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    let t: ReturnType<typeof setTimeout>;
    if (!del && text === current) {
      t = setTimeout(() => setDel(true), 1600);
    } else if (del && text === '') {
      setDel(false);
      setI((v) => v + 1);
    } else {
      t = setTimeout(
        () => setText(del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)),
        del ? 45 : 90
      );
    }
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return text;
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------- components ---------- */

function Nav() {
  const links = [
    ['about', 'About'],
    ['skills', 'Skills'],
    ['experience', 'Experience'],
    ['projects', 'Projects'],
    ['awards', 'Awards'],
  ];
  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-ink-950/70 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between font-mono text-sm">
        <a href="#top" className="text-neon-green glow-green">
          black<span className="text-white/40">@</span>ii3lack<span className="caret align-middle" />
        </a>
        <div className="hidden sm:flex items-center gap-6 text-white/60">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="hover:text-neon-green transition-colors">
              {label}
            </a>
          ))}
        </div>
        <a
          href="https://github.com/ii3lack"
          target="_blank"
          rel="noreferrer"
          className="text-white/60 hover:text-neon-green transition-colors"
        >
          GitHub ↗
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  const typed = useTyping(ROLES);
  return (
    <header id="top" className="relative min-h-screen flex items-center justify-center px-5 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-neon-green/10 blur-3xl animate-float-slow" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-neon-cyan/10 blur-3xl animate-float-slower" />

      <div className="relative w-full max-w-2xl">
        {/* terminal window */}
        <div className="card scanlines relative overflow-hidden">
          <div className="flex items-center gap-2 px-4 h-9 border-b border-white/5 bg-white/[0.02]">
            <span className="term-dot bg-[#ff5f56]" />
            <span className="term-dot bg-[#ffbd2e]" />
            <span className="term-dot bg-[#27c93f]" />
            <span className="ml-3 text-xs font-mono text-white/40">~/black — zsh</span>
          </div>
          <div className="p-6 sm:p-8 font-mono text-sm sm:text-base leading-relaxed">
            <p className="text-white/50">
              <span className="text-neon-green">➜</span> <span className="text-neon-cyan">~</span> whoami
            </p>
            <p className="mt-1 text-xl sm:text-2xl text-white font-semibold">
              Black<span className="caret" />
            </p>
            <p className="mt-5 text-white/50">
              <span className="text-neon-green">➜</span> <span className="text-neon-cyan">~</span> cat role.txt
            </p>
            <p className="mt-1 text-neon-green glow-green">
              {typed}
              <span className="caret" />
            </p>
            <p className="mt-5 text-white/50">
              <span className="text-neon-green">➜</span> <span className="text-neon-cyan">~</span> location --current
            </p>
            <p className="mt-1 text-white/80">Hangzhou, Zhejiang · 浙江杭州</p>
            <p className="mt-5 text-white/50">
              <span className="text-neon-green">➜</span> <span className="text-neon-cyan">~</span> status
            </p>
            <p className="mt-1 text-white/80">
              Employed · 3+ yrs full-stack · <span className="text-neon-purple">Agent engineering (in progress)</span>
            </p>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:black524726@163.com"
            className="chip border-neon-green/40 text-neon-green hover:bg-neon-green/10"
          >
            ✉️ Email
          </a>
          <a href="https://github.com/ii3lack" target="_blank" rel="noreferrer" className="chip">
            💻 GitHub
          </a>
          <a href="#projects" className="chip">
            📁 Projects
          </a>
        </div>
      </div>
    </header>
  );
}

function SectionHead({ idx, title, sub }: { idx: string; title: string; sub: string }) {
  return (
    <div className="reveal mb-10 flex items-end justify-between gap-4 border-b border-white/5 pb-4">
      <div>
        <p className="idx">{idx}</p>
        <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
      </div>
      <p className="hidden sm:block font-mono text-xs text-white/40">{'// '}{sub}</p>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-5 py-24">
      <SectionHead idx="01." title="About" sub="关于我" />
      <div className="grid sm:grid-cols-3 gap-6">
        <div className="reveal card p-6 sm:col-span-2">
          <p className="text-white/80 leading-relaxed">
            3+ 年全栈经验，当前职责覆盖 <span className="text-neon-green">技术选型、项目推进与难点攻关</span>，
            独立完成多个业务系统的完整交付。在团队中落地{' '}
            <span className="text-neon-cyan">AI-native 工作流（Claude Code + MCP/Skills）</span>，
            显著缩短需求到交付的周期。
          </p>
          <p className="mt-4 text-white/80 leading-relaxed">
            熟悉 <span className="text-neon-purple">业务沟通 → 架构设计 → 前后端 → 数据平台 → 上线</span>{' '}
            的完整流程，能把模糊需求拆解为可执行方案。持续追踪 AI/Agent 领域，正在开发 Agent 应用开源项目。
          </p>
        </div>
        <div className="reveal card p-6 font-mono text-sm">
          <Row k="role" v="AI Full-Stack" />
          <Row k="based" v="Hangzhou" />
          <Row k="exp" v="3+ yrs" />
          <Row k="edu" v="数字媒体技术 本科" />
          <Row k="focus" v="Agent eng." />
          <Row k="status" v="Employed" last />
        </div>
      </div>
    </section>
  );
}

function Row({ k, v, last }: { k: string; v: string; last?: boolean }) {
  return (
    <div className={`flex justify-between py-1.5 ${last ? '' : 'border-b border-white/5'}`}>
      <span className="text-white/40">{k}:</span>
      <span className="text-neon-green">{v}</span>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-5 py-24">
      <SectionHead idx="02." title="Skills" sub="技术栈" />
      <div className="grid sm:grid-cols-2 gap-5">
        {SKILLS.map((s) => (
          <div key={s.group} className="reveal card p-6">
            <h3 className="font-mono text-sm text-white/50 mb-4">
              <span className="mr-2">{s.icon}</span>
              {s.group}
            </h3>
            <div className="flex flex-wrap gap-2">
              {s.items.map((it) => (
                <span key={it} className="chip">
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-5 py-24">
      <SectionHead idx="03." title="Experience" sub="工作经历" />
      <div className="relative pl-8 border-l border-white/10">
        {EXPERIENCE.map((job) => (
          <div key={job.company} className="reveal relative mb-12 last:mb-0">
            <span className="tl-node" />
            <div className="card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">{job.company}</h3>
                <span className="font-mono text-xs text-neon-green">{job.period}</span>
              </div>
              <p className="mt-1 text-sm text-white/60">
                {job.role} · {job.location}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/75 leading-relaxed">
                {job.points.map((p, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-neon-green shrink-0">▸</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-5 py-24">
      <SectionHead idx="04." title="Projects" sub="项目精选" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((p) => (
          <div key={p.name} className="reveal card p-6 flex flex-col">
            <h3 className="font-semibold text-white">{p.name}</h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span key={s} className="font-mono text-[11px] text-neon-cyan/80">
                  {s}
                </span>
              ))}
            </div>
            <p className="mt-3 text-sm text-white/65 leading-relaxed flex-1">{p.desc}</p>
            <p className="mt-4 text-sm text-neon-green/90 border-t border-white/5 pt-3">
              <span className="font-mono text-white/40 text-xs">result → </span>
              {p.result}
            </p>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="mt-3 font-mono text-xs text-neon-cyan hover:text-neon-green transition-colors"
              >
                ↗ view source
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Awards() {
  return (
    <section id="awards" className="max-w-5xl mx-auto px-5 py-24">
      <SectionHead idx="05." title="Awards & Education" sub="获奖与教育" />
      <div className="grid sm:grid-cols-3 gap-6">
        <div className="reveal card p-6 sm:col-span-1">
          <h3 className="font-mono text-sm text-white/50">education</h3>
          <p className="mt-3 font-semibold">浙江越秀外国语学院</p>
          <p className="text-sm text-white/60">数字媒体技术 · 本科 · 网络传播学院</p>
          <p className="mt-2 font-mono text-xs text-neon-green">2018.09 — 2022.06 · 浙江绍兴</p>
        </div>
        <div className="reveal card p-6 sm:col-span-2">
          <h3 className="font-mono text-sm text-white/50 mb-4">awards</h3>
          <ul className="space-y-3">
            {AWARDS.map((a) => (
              <li key={a.title} className="flex items-center justify-between gap-3 text-sm">
                <span className="text-white/80">
                  <span className="text-neon-green mr-2">🏅</span>
                  {a.title}
                </span>
                <span className="font-mono text-xs text-white/40">{a.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="reveal mt-10 card p-6">
        <h3 className="font-mono text-sm text-white/50 mb-4">{'// currently exploring'}</h3>
        <ul className="space-y-2.5">
          {EXPLORING.map((e) => (
            <li key={e} className="flex gap-2 text-sm text-white/75 leading-relaxed">
              <span className="text-neon-purple shrink-0">→</span>
              <span>{e}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="reveal mt-6 flex flex-wrap gap-2">
        {HOBBIES.map((h) => (
          <span key={h} className="chip">
            {h}
          </span>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 mt-10">
      <div className="max-w-5xl mx-auto px-5 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-sm">
        <p className="text-white/40">
          <span className="text-neon-green">➜</span> built with Next.js · Tailwind · ☕
        </p>
        <div className="flex gap-5 text-white/60">
          <a href="mailto:black524726@163.com" className="hover:text-neon-green transition-colors">
            Email
          </a>
          <a href="https://github.com/ii3lack" target="_blank" rel="noreferrer" className="hover:text-neon-green transition-colors">
            GitHub
          </a>
          <a href="#top" className="hover:text-neon-green transition-colors">
            ↑ top
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ---------- page ---------- */

export default function Home() {
  useReveal();
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Awards />
      </main>
      <Footer />
    </>
  );
}
