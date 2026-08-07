# CONTEXT — ii3lack 简历站点领域词表

> 由 improve-codebase-architecture / domain-modeling 维护。
> **唯一内容基准：README.md**——站点展示必须与 README 逐字一致；改内容先改 README，再同步站点。

## 领域词（简历域）

| 词 | 含义 | 数据常量 |
| --- | --- | --- |
| 核心能力 | 4 条能力主张（医疗设备全链路集成 / 跨端全栈开发 / 从 0 到上线的独立交付 / AI 工作流搭建与落地） | `CAPABILITIES`（title + desc） |
| 技术栈 | 6 组技能标签（前端与终端 / 后端 / 设备与系统集成 / 数据与部署 / AI 应用探索 / AI 工作流） | `SKILLS`（group + items） |
| 工作经历 | 杭州捍尔目 + 东方通信（实习期两项目：票据编辑器 / JS-SDK） | `EXPERIENCE`（company/role/period/points） |
| 项目精选 | 6 个项目：验光处方 HDDU（⭐）/ 渠道订单 ERP / 社区筛查（⭐）/ 学生艺术展 / 票据编辑器 / 蒙眼旅人 | `PROJECTS`（name/subtitle/stack/featured/background/approach/result/role/link） |
| 正在探索 | study-agent（AI 应用探索）+ AI 工作流 3 项 | `EXPLORING` |
| 获奖与教育 | 5 项奖学金/奖项 + 教育信息 | `AWARDS` / `EDUCATION` |

## 架构词（/codebase-design 词汇）

- **数据层**（`page.tsx` 顶部常量）：唯一内容层，站点组件的共同来源。
- **EDUCATION 常量**：教育信息唯一来源。

## 已知决策

- spec 的"不加新数据文件"决策已重开（2026-08-07）：数据层现为独立模块 `src/app/resume-data.ts`（仍是单一数据层，README 为唯一内容基准）；`page.tsx` 只负责渲染。
- 字体已自托管（`@fontsource/fraunces` + `ibm-plex-sans` + `jetbrains-mono`），构建零网络拉取（解决 Google Fonts 离线超时）。

- 包管理器已从 pnpm 迁到 bun（2026-08-07）：本地与 CI 均为 `bun install --frozen-lockfile` + `bun run build`；`bun.lock` 为唯一锁文件。
