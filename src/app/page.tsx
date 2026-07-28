'use client';

import { useEffect, useState } from 'react';

/* ---------- data ---------- */

const ROLES = [
  'AI 全栈工程师',
  '技术负责人 / 架构师方向',
  'Agent 工程实践中',
];

const CAPABILITIES: { title: string; desc: string }[] = [
  {
    title: '技术决策与选型',
    desc: '主导前端与公司设备对接技术选型，坚持自研路线，参与关键技术问题研讨决策。',
  },
  {
    title: '全栈架构',
    desc: '搭建 FastAPI + React/Vue 全栈模板，统一 H5、钉钉小程序、Electron 跨端技术栈。',
  },
  {
    title: '0→1 交付与迭代',
    desc: '主导多个业务系统从核心功能雏形到持续线上运行；带 2 人小团队，协调一线业务对齐内容与功能。',
  },
  {
    title: '数据平台建设',
    desc: '整合多源异构数据搭建统一数仓，报表覆盖全公司前后台业务部门。',
  },
  {
    title: 'AI 工程实践',
    desc: '深度使用 Claude Code + MCP/Skills 进行 AI-native 开发，向同事推荐并持续追踪 AI/Agent 前沿。',
  },
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
    items: ['React', 'Vue', 'TypeScript', 'Next.js', 'Electron', '小程序(钉钉/H5)'],
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
  points: string[];
}[] = [
  {
    company: '杭州捍尔目科技集团',
    role: '全栈开发工程师',
    period: '2023.01 — 至今',
    points: [
      '主导数字化平台技术底座建设：CRM、运营报表、财务 OA、数据看板。',
      '整合钉钉审批流、ERP 残留数据、纸质文档等多源数据建统一数仓，报表覆盖全公司前后台业务部门。',
      '主导前端与设备对接技术选型，统一 H5 / 钉钉小程序 / Electron 跨端技术栈。',
      '带 2 人小团队，协调一线业务人员对齐内容与功能，把控各模块进度。',
    ],
  },
  {
    company: '东方通信股份有限公司',
    role: '终端软件工程师（金融事业部）',
    period: '2021.07 — 2022.12',
    points: [
      '两周交付低代码票据可视化工具（React + Vite + 拖拽插件 + SSR），中标三峡银行项目。',
      'TypeScript 全面重构河北交行智能设备通信 JS-SDK，修复长期重连缺陷，生产环境稳定运行。',
    ],
  },
];

const PROJECTS: { name: string; stack: string[]; result: string; link?: string }[] = [
  {
    name: '渠道数据采集与分析平台',
    stack: ['Python', '浏览器自动化', 'API 重放'],
    result: '渠道数据报表与业务实际数据 90%+ 准确率。',
  },
  {
    name: '院点检查数据建档系统',
    stack: ['Python', 'WebSocket', '多协议通信'],
    result: '打通多种医疗设备，全流程数字化建档。',
  },
  {
    name: '蒙眼旅人 Blind Traveler',
    stack: ['Flutter', 'Dart'],
    result: '获 NCDA 全国高校数字艺术设计大赛浙江省奖。',
    link: 'https://gitee.com/i3lack/blind_traveler',
  },
];

const AWARDS: { title: string; year: string }[] = [
  { title: '浙江省政府奖学金', year: '2021.12' },
  { title: '浙江省第十六届大学生电子商务大赛 三等奖', year: '2021.06' },
  { title: 'NCDA 全国高校数字艺术设计大赛 浙江省奖', year: '2021.05' },
  { title: '绍兴市大数据应用大赛 三等奖', year: '2020.09' },
  { title: '国家励志奖学金', year: '2019.12' },
];

const EXPLORING: string[] = [
  'Agent 应用开发 — 不止于调用 LLM API，深入提示工程与 Agent 运行原理，开源项目开发中。',
  '生产级 Agent 架构 — 研究工业级 Agent 系统的工程化设计。',
  'AI 工作流工具链 — Claude Code + OMC / MCP / Skills 的实际工程落地。',
];

const HOBBIES: string[] = ['🏀 篮球', '🖊️ 书法', '📷 摄影', '✍️ 手写提示词'];

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
  const links: [string, string][] = [
    ['capabilities', '能力'],
    ['stack', '技术栈'],
    ['experience', '经历'],
    ['projects', '项目'],
    ['awards', '获奖'],
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
              在职 · 3 年以上全栈 · <span className="text-neon-purple">目标：技术负责人 / 架构师 / AI 方向</span>
            </p>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:black524726@163.com"
            className="chip border-neon-green/40 text-neon-green hover:bg-neon-green/10"
          >
            ✉️ 邮箱
          </a>
          <a href="https://github.com/ii3lack" target="_blank" rel="noreferrer" className="chip">
            💻 GitHub
          </a>
          <a href="#capabilities" className="chip">
            📁 核心能力
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

function Capabilities() {
  return (
    <section id="capabilities" className="max-w-5xl mx-auto px-5 py-24">
      <SectionHead idx="01." title="核心能力" sub="Capabilities" />
      <p className="reveal mb-8 text-white/70 leading-relaxed">
        全栈工程师出身，主导技术选型与多业务系统 0→1 交付，目标向{' '}
        <span className="text-neon-green">技术负责人 / 架构师 / AI 方向</span> 发展。
      </p>
      <div className="grid sm:grid-cols-2 gap-5">
        {CAPABILITIES.map((c) => (
          <div key={c.title} className="reveal card p-6">
            <h3 className="font-semibold text-neon-green mb-2">{c.title}</h3>
            <p className="text-sm text-white/70 leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="stack" className="max-w-5xl mx-auto px-5 py-24">
      <SectionHead idx="02." title="技术栈" sub="Tech Stack" />
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
      <SectionHead idx="03." title="经历锚点" sub="Experience" />
      <div className="relative pl-8 border-l border-white/10">
        {EXPERIENCE.map((job) => (
          <div key={job.company} className="reveal relative mb-12 last:mb-0">
            <span className="tl-node" />
            <div className="card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">{job.company}</h3>
                <span className="font-mono text-xs text-neon-green">{job.period}</span>
              </div>
              <p className="mt-1 text-sm text-white/60">{job.role}</p>
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
      <SectionHead idx="04." title="项目亮点" sub="Projects" />
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
            <p className="mt-4 text-sm text-neon-green/90 border-t border-white/5 pt-3 flex-1">
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
      <SectionHead idx="05." title="获奖与教育" sub="Awards & Education" />
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
        <h3 className="font-mono text-sm text-white/50 mb-4">{'// 正在探索'}</h3>
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
            邮箱
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
        <Capabilities />
        <Skills />
        <Experience />
        <Projects />
        <Awards />
      </main>
      <Footer />
    </>
  );
}
