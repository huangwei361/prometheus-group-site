# Prometheus 普罗米修斯集团

> Making Humans Immortal, Making Humans Multi-Planetary

## 网站结构

| 路径 | 内容 |
|---|---|
| `index.html` | 集团主站：愿景、三大子公司、发展路线、资金规划、资料下载 |
| `规划.html` | 集团发展规划全文（在线阅读） |
| `2026工作计划.html` | 2026 年度执行清单，按子公司拆分到里程碑 |
| `普罗米修斯集团发展规划.docx` | 发展规划 Word 版，可打印分发 |
| `普罗米修斯集团宣传册-最终版.pdf` | 紫色系品牌宣传册 |
| `org.html` | 组织架构 |
| `pharmax/index.html` | 菲玛科技 PharmaX — AI 驱动新药研发 |
| `vitacore/index.html` | 维塔生命 VitaCore — 抗衰老化学疗法 |
| `regentech/index.html` | 瑞吉再生 RegenTech — 器官再生与类器官 |
| `cases/index.html` | 长期健康案例跟踪中心（C-001 / C-002） |
| `cases/案例跟踪工作手册.html` | 案例跟踪工作手册（组长使用） |

## 三条支柱

1. **菲玛科技 PharmaX** — AI 药物发现、抗体与生物药、细胞与基因治疗、疫苗
2. **维塔生命 VitaCore** — Senolytics 与端粒修复、线粒体修复、代谢优化
3. **瑞吉再生 RegenTech** — 干细胞治疗、基因编辑、类器官与器官再生、组织工程

## 隐私与合规

- 案例中心所有内容**已去标识化**：不含姓名、具体医院、医生姓名、原始影像与化验单。
- 病程节点使用相对时间（"约 1 年前"），不出现精确病历日期。
- 所有页面标注：**内容不构成医疗建议，所有诊疗决策由主治医师负责**。
- 集团内部保密材料（专利分析、招聘方案、供应商清单）**不在本仓库**。

## 技术说明

纯静态站点，无构建依赖，GitHub Pages 直接托管。

- 案例数据以静态 JS 文件形式加载（`cases/data/c0xx.js`），避免 `file://` 下的 JSON 跨域限制。
- 源 JSON 位于内部仓库 `group/cases/data/`，经 `build.ps1` 转换为 JS 后发布。
- 包含 `.nojekyll`，绕过 Jekyll 处理，静态文件原样输出。

---

*集团创立：2026 年 7 月 20 日*
