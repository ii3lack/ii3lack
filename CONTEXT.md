# CONTEXT — ii3lack 简历站点领域词表

> 由 improve-codebase-architecture / domain-modeling 维护。
> **唯一内容基准：README.md**——站点展示与 PDF 打印版必须与 README 逐字一致；改内容先改 README，再同步站点。

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

- **数据层**（`page.tsx` 顶部常量）：唯一内容层，站点组件与 PrintResume 的共同来源。
- **PrintResume 投影层**：2 页 A4 打印视图 = 数据层的纯投影——消费同一批常量，不再硬编码内容；只保留少量打印重塑（`items.join(" · ")`、获奖行压缩）。改内容只改常量，两端自动同步。
- **EDUCATION 常量**：教育信息唯一来源（Home 获奖区 + PrintResume 共同消费）。

## 已知决策

- spec（`.scratch/resume-sync-site/`）决定"不加新数据文件"——候选 2（数据抽成独立模块）与之冲突，未执行。
- 打印版文本允许与屏幕略有差异（用户："不管 PDF 打印"）；"恰好 2 页 A4" 不变量未复核。
- 本地包管理器为 bun（`bun run build`）；CI workflow 仍用 pnpm（迁移未提交前 CI 正常）。
