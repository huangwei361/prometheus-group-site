window.CASE_DATA = window.CASE_DATA || {};
window.CASE_DATA['c002'] = {
    "id":  "c002",
    "code":  "C-002",
    "title":  "高血脂长期跟踪与控制：把一次化验变成一条时间轴",
    "subtitle":  "血脂异常 + 动脉粥样硬化风险分层 + 长期用药依从性",
    "status":  "ongoing",
    "statusLabel":  "跟踪中",
    "updated":  "2026-11-18",
    "owner":  "菲玛科技",
    "support":  [
                    "维塔生命"
                ],
    "tags":  [
                 "心血管",
                 "代谢",
                 "长期用药管理",
                 "慢病共管"
             ],
    "profile":  [
                    {
                        "k":  "编号",
                        "v":  "C-002"
                    },
                    {
                        "k":  "年龄段",
                        "v":  "中年（50-65）"
                    },
                    {
                        "k":  "性别",
                        "v":  "男"
                    },
                    {
                        "k":  "主诊断",
                        "v":  "血脂异常（分型待复核）"
                    },
                    {
                        "k":  "病程",
                        "v":  "多年体检发现血脂偏高，长期未系统干预"
                    },
                    {
                        "k":  "当前用药",
                        "v":  "待确认（他汀类使用与耐受情况需核实）"
                    },
                    {
                        "k":  "核心问题",
                        "v":  "指标有了但没有时间轴；血脂与整体心血管风险缺少统一评估；用药是否长期坚持缺少记录"
                    }
                ],
    "summary":  "高血脂是最典型的\"看得见、却管不住\"的慢病。本案例不追求找新药，而是解决三个现实问题：①把散落的单次化验变成可比较的时间序列 ②把血脂放进完整的风险盘子里看（血压、血糖、吸烟、年龄，而不是只看一个 LDL 数字） ③把\"医生说了但没人记录\"的用药依从性变成可核查的数据。它是菲玛科技 AI 决策系统最成熟、最容易落地的第一个真实场景。",
    "disclaimer":  "本页面为健康管理公开案例，已去标识化（无姓名、无具体医院、无原始化验单）。内容不构成医疗建议，所有诊疗决策由主治医师负责。",
    "diagnostic_gaps":  [
                            {
                                "item":  "是原发性高胆固醇血症，还是继发性？",
                                "why":  "甲减、糖尿病、肾病、胆汁淤积都会升高血脂；不查根源，只压数字是治标",
                                "status":  "todo"
                            },
                            {
                                "item":  "是否合并家族性高胆固醇血症？",
                                "why":  "早发冠心病家族史 + LDL 极高等，提示需专科评估与更早用药",
                                "status":  "todo"
                            },
                            {
                                "item":  "是否合并糖尿病或糖前期？",
                                "why":  "血糖与血脂共同决定心血管风险，常被漏查",
                                "status":  "todo"
                            },
                            {
                                "item":  "肝功能与甲状腺功能基线",
                                "why":  "他汀类与甲功异常均需先有基线，才能判断后续变化",
                                "status":  "todo"
                            },
                            {
                                "item":  "吸烟、饮酒、饮食与运动习惯基线",
                                "why":  "这是唯一不需要药就能改的部分，也是所有降脂效果的放大器",
                                "status":  "todo"
                            },
                            {
                                "item":  "心脑血管风险正式分层（ASCVD 10 年风险）",
                                "why":  "决定目标 LDL 是\"越低越好\"还是\"达标即可\"",
                                "status":  "todo"
                            },
                            {
                                "item":  "是否已有颈动脉斑块 / 冠脉钙化",
                                "why":  "有亚临床动脉粥样硬化时，目标值和干预强度都要提高",
                                "status":  "todo"
                            },
                            {
                                "item":  "他汀不耐受史与肌酶（CK）基线",
                                "why":  "老年人、合并肝肾问题时，决定换药还是减量",
                                "status":  "todo"
                            }
                        ],
    "plain":  {
                  "conclusion":  "这个案例目前还停在\"没数据\"阶段——血脂数一项都没建档，所以现在谈用药、谈达标都为时过早，先把一次像样的基线测出来。",
                  "advice":  [
                                 "先建基线：一次抽血查血脂四项（含低密度脂蛋白胆固醇），同一家医院固定下来复查",
                                 "把风险盘面补齐：血压、空腹血糖、糖化血红蛋白、吸烟、腰围，算出 10 年心血管风险分",
                                 "生活方式三件不花钱的事立刻开始：戒烟、减重 5–10%、每周 150 分钟中等强度运动",
                                 "查一下是不是\"继发\"的：甲功、肝肾功能、血糖——不找根源，只压数字是治标",
                                 "开始记\"实际服药天数占比\"：降脂药效果不好，八成是吃不够，不是药不行"
                             ],
                  "note":  "为什么先测数据再谈用药：低密度脂蛋白胆固醇的目标值不是固定数字，要按整体风险分层来定；没有风险分，就不知道该降到多少、该用多强的药。"
              },
    "metric_groups":  [
                          {
                              "name":  "血脂核心四项 Lipid Panel",
                              "note":  "只有连续三次以上的同一家实验室结果，才谈得上\"趋势\"",
                              "metrics":  [
                                              {
                                                  "name":  "总胆固醇 TC",
                                                  "unit":  "mmol/L",
                                                  "baseline":  "待填",
                                                  "current":  "待填",
                                                  "target":  "\u003c 4.5",
                                                  "freq":  "3月",
                                                  "trend":  "flat"
                                              },
                                              {
                                                  "name":  "甘油三酯 TG",
                                                  "unit":  "mmol/L",
                                                  "baseline":  "待填",
                                                  "current":  "待填",
                                                  "target":  "\u003c 1.7",
                                                  "freq":  "3月",
                                                  "trend":  "flat"
                                              },
                                              {
                                                  "name":  "LDL-C 低密度脂蛋白胆固醇",
                                                  "unit":  "mmol/L",
                                                  "baseline":  "待填",
                                                  "current":  "待填",
                                                  "target":  "\u003c 2.6（高危\u003c1.8，极高危\u003c1.4）",
                                                  "freq":  "3月",
                                                  "trend":  "flat",
                                                  "star":  true
                                              },
                                              {
                                                  "name":  "HDL-C 高密度脂蛋白胆固醇",
                                                  "unit":  "mmol/L",
                                                  "baseline":  "待填",
                                                  "current":  "待填",
                                                  "target":  "\u003e 1.0",
                                                  "freq":  "3月",
                                                  "trend":  "flat"
                                              },
                                              {
                                                  "name":  "非高密度脂蛋白胆固醇 Non-HDL-C",
                                                  "unit":  "mmol/L",
                                                  "baseline":  "待填",
                                                  "current":  "待填",
                                                  "target":  "\u003c 4.1",
                                                  "freq":  "3月",
                                                  "trend":  "flat"
                                              },
                                              {
                                                  "name":  "Lp(a) 脂蛋白(a)",
                                                  "unit":  "nmol/L",
                                                  "baseline":  "待测",
                                                  "current":  "待测",
                                                  "target":  "\u003c 125",
                                                  "freq":  "一次性",
                                                  "trend":  "flat",
                                                  "star":  true
                                              }
                                          ],
                              "plain":  {
                                            "conclusion":  "血脂到底多高还没拿到数，达标与否无从谈起。",
                                            "advice":  "先抽一次血脂四项；记住只有同一家实验室的连续结果才谈得上\"趋势\"，换医院换方法不能直接比。"
                                        }
                          },
                          {
                              "name":  "风险因子盘面 Risk Factor Profile",
                              "note":  "血脂不能单看，必须放进完整风险里",
                              "metrics":  [
                                              {
                                                  "name":  "收缩压 / 舒张压 Systolic/Diastolic BP",
                                                  "unit":  "mmHg",
                                                  "baseline":  "待填",
                                                  "current":  "待填",
                                                  "target":  "\u003c 140/90（理想\u003c130/80）",
                                                  "freq":  "每次随访",
                                                  "trend":  "flat"
                                              },
                                              {
                                                  "name":  "空腹血糖 Fasting Glucose",
                                                  "unit":  "mmol/L",
                                                  "baseline":  "待填",
                                                  "current":  "待填",
                                                  "target":  "\u003c 6.1",
                                                  "freq":  "3月",
                                                  "trend":  "flat"
                                              },
                                              {
                                                  "name":  "糖化血红蛋白 HbA1c",
                                                  "unit":  "%",
                                                  "baseline":  "待测",
                                                  "current":  "待测",
                                                  "target":  "\u003c 7.0",
                                                  "freq":  "3月",
                                                  "trend":  "flat"
                                              },
                                              {
                                                  "name":  "体重指数 / 腰围 BMI / Waist Circumference",
                                                  "unit":  "kg/m² / cm",
                                                  "baseline":  "待填",
                                                  "current":  "待填",
                                                  "target":  "BMI\u003c24，腰围\u003c90",
                                                  "freq":  "3月",
                                                  "trend":  "flat"
                                              },
                                              {
                                                  "name":  "吸烟状态 Smoking Status",
                                                  "unit":  "—",
                                                  "baseline":  "待填",
                                                  "current":  "待填",
                                                  "target":  "完全戒烟",
                                                  "freq":  "持续",
                                                  "trend":  "flat"
                                              },
                                              {
                                                  "name":  "10 年动脉粥样硬化性心血管病风险 10-Year ASCVD Risk",
                                                  "unit":  "%",
                                                  "baseline":  "待算",
                                                  "current":  "待算",
                                                  "target":  "分层依据",
                                                  "freq":  "每年",
                                                  "trend":  "flat",
                                                  "star":  true
                                              }
                                          ],
                              "plain":  {
                                            "conclusion":  "只看血脂会误判——同样的血脂数字，吸烟、高血压、糖尿病的人风险完全不同。",
                                            "advice":  "补血压、空腹血糖、糖化血红蛋白、吸烟状态与腰围，算出 10 年动脉粥样硬化性心血管病风险分，这决定目标值定在哪。"
                                        }
                          },
                          {
                              "name":  "用药与依从性 Medication \u0026 Adherence",
                              "note":  "药开了不等于药吃了，这是血脂管理最大的漏损",
                              "metrics":  [
                                              {
                                                  "name":  "他汀类药名与剂量 Statin Name \u0026 Dose",
                                                  "unit":  "—",
                                                  "baseline":  "待确认",
                                                  "current":  "待确认",
                                                  "target":  "按风险分层达标",
                                                  "freq":  "每次随访",
                                                  "trend":  "flat",
                                                  "star":  true
                                              },
                                              {
                                                  "name":  "实际服药天数占比 Actual Medication Adherence Rate (MPR)",
                                                  "unit":  "%",
                                                  "baseline":  "待填",
                                                  "current":  "待填",
                                                  "target":  "\u003e 80%",
                                                  "freq":  "每月自记",
                                                  "trend":  "flat",
                                                  "star":  true
                                              },
                                              {
                                                  "name":  "漏服/停药原因记录 Missed-Dose Reason Log",
                                                  "unit":  "—",
                                                  "baseline":  "待填",
                                                  "current":  "待填",
                                                  "target":  "无",
                                                  "freq":  "每次随访",
                                                  "trend":  "flat"
                                              },
                                              {
                                                  "name":  "他汀相关肌痛 CK",
                                                  "unit":  "U/L",
                                                  "baseline":  "待测",
                                                  "current":  "待测",
                                                  "target":  "正常",
                                                  "freq":  "用药前基线 + 出现症状时",
                                                  "trend":  "flat"
                                              },
                                              {
                                                  "name":  "肝功能 ALT/AST",
                                                  "unit":  "U/L",
                                                  "baseline":  "待测",
                                                  "current":  "待测",
                                                  "target":  "\u003c 40",
                                                  "freq":  "3月 + 增量期",
                                                  "trend":  "flat"
                                              },
                                              {
                                                  "name":  "依从性提醒机制 Adherence Reminder System",
                                                  "unit":  "—",
                                                  "baseline":  "无",
                                                  "current":  "计划引入",
                                                  "target":  "AI 提醒 + 家属协同",
                                                  "freq":  "持续",
                                                  "trend":  "up"
                                              }
                                          ],
                              "plain":  {
                                            "conclusion":  "降脂药最大的问题通常不是没效果，而是吃不够、吃停当。",
                                            "advice":  "先量\"该吃却没吃\"的比例；用家庭药盒加手机提醒，别靠记性；每次随访记录漏服原因。"
                                        }
                          },
                          {
                              "name":  "生活方式基线 Lifestyle Baseline",
                              "note":  "唯一不用吃药就能改、却最常被跳过的一块",
                              "metrics":  [
                                              {
                                                  "name":  "每日步数 / 中等强度运动 Daily Steps / Moderate-Vigorous Activity (MVPA)",
                                                  "unit":  "步 / 分钟",
                                                  "baseline":  "待填",
                                                  "current":  "待填",
                                                  "target":  "≥ 7000 步，≥ 150 分钟/周",
                                                  "freq":  "持续",
                                                  "trend":  "flat"
                                              },
                                              {
                                                  "name":  "体重 Body Weight",
                                                  "unit":  "kg",
                                                  "baseline":  "待填",
                                                  "current":  "待填",
                                                  "target":  "减重 5-10%",
                                                  "freq":  "每月",
                                                  "trend":  "flat"
                                              },
                                              {
                                                  "name":  "膳食结构（饱和脂肪/膳食纤维）Dietary Pattern (Saturated Fat / Fiber)",
                                                  "unit":  "—",
                                                  "baseline":  "待填",
                                                  "current":  "待填",
                                                  "target":  "饱和脂肪\u003c10% 热量",
                                                  "freq":  "3月",
                                                  "trend":  "flat"
                                              },
                                              {
                                                  "name":  "饮酒量 Alcohol Intake",
                                                  "unit":  "g/日",
                                                  "baseline":  "待填",
                                                  "current":  "待填",
                                                  "target":  "男性\u003c25g/日",
                                                  "freq":  "每季度",
                                                  "trend":  "flat"
                                              },
                                              {
                                                  "name":  "睡眠时长 Sleep Duration",
                                                  "unit":  "h",
                                                  "baseline":  "待填",
                                                  "current":  "待填",
                                                  "target":  "7-8h",
                                                  "freq":  "持续",
                                                  "trend":  "flat"
                                              }
                                          ],
                              "plain":  {
                                            "conclusion":  "这是唯一不花钱也能真降脂的一档，而且能把所有降脂药的效果放大。",
                                            "advice":  "先做三件零成本的事：戒烟、减重 5–10%、每周 150 分钟快走；膳食纤维拉起来、饱和脂肪压下去。"
                                        }
                          },
                          {
                              "name":  "亚临床动脉粥样硬化 Subclinical Atherosclerosis",
                              "note":  "有斑块则目标值和干预强度整体上调",
                              "metrics":  [
                                              {
                                                  "name":  "颈动脉超声 IMT / 斑块",
                                                  "unit":  "mm",
                                                  "baseline":  "待测",
                                                  "current":  "待测",
                                                  "target":  "无进展",
                                                  "freq":  "每年",
                                                  "trend":  "flat"
                                              },
                                              {
                                                  "name":  "冠脉钙化评分 CAC",
                                                  "unit":  "分",
                                                  "baseline":  "待测",
                                                  "current":  "待测",
                                                  "target":  "0",
                                                  "freq":  "必要时",
                                                  "trend":  "flat"
                                              },
                                              {
                                                  "name":  "踝肱指数 ABI",
                                                  "unit":  "—",
                                                  "baseline":  "待测",
                                                  "current":  "待测",
                                                  "target":  "\u003e 0.9",
                                                  "freq":  "必要时",
                                                  "trend":  "flat"
                                              }
                                          ],
                              "plain":  {
                                            "conclusion":  "血管里有没有斑块还没查过；风险高的人早查早受益。",
                                            "advice":  "做颈动脉超声与心踝脉搏指数（反映血管硬度）；中高危人群建议做，有斑块时目标值要降得更低。"
                                        }
                          }
                      ],
    "pathway":  [
                    {
                        "stage":  "0 风险分层 Risk Stratification",
                        "plan":  "补齐 8 项诊断盲点（继发因素、家族史、血糖、甲状腺、肝肾、吸烟饮食、ASCVD 分层、斑块筛查、他汀不耐受）",
                        "trigger":  "立即执行",
                        "status":  "todo",
                        "owner":  "菲玛科技 + 主诊医师"
                    },
                    {
                        "stage":  "1 生活方式打底 Lifestyle Foundation",
                        "plan":  "先做零成本的三件事：戒烟、减重 5-10%、每周 150 分钟中等强度运动、膳食纤维与饱和脂肪调整",
                        "trigger":  "与阶段 0 同步",
                        "status":  "todo",
                        "owner":  "患者 + 家属"
                    },
                    {
                        "stage":  "2 标准降脂 Standard Lipid-Lowering",
                        "plan":  "按风险分层启动他汀类（阿托伐他汀/瑞舒伐他汀等），以 LDL-C 达标为目标而非固定剂量",
                        "trigger":  "分层完成后",
                        "status":  "todo",
                        "owner":  "主诊医师"
                    },
                    {
                        "stage":  "3 强化降脂 Intensive Lipid-Lowering",
                        "plan":  "加用依折麦布（机制不同，可叠加）；必要时加 PCSK9 抑制剂",
                        "trigger":  "他汀单药未达标或不耐受",
                        "status":  "todo",
                        "owner":  "主诊医师"
                    },
                    {
                        "stage":  "4 不耐受处理 Intolerance Management",
                        "plan":  "调整为隔日给药、换水溶性他汀或非他汀类，并同步排查肌痛其他原因",
                        "trigger":  "出现肌痛或 CK 升高",
                        "status":  "todo",
                        "owner":  "主诊医师"
                    },
                    {
                        "stage":  "5 依从性工程 Adherence Engineering",
                        "plan":  "AI 用药提醒 + 漏服归因分析 + 家庭药盒 + 定期复诊衔接",
                        "trigger":  "与阶段 2 同步",
                        "status":  "todo",
                        "owner":  "菲玛科技"
                    },
                    {
                        "stage":  "6 并行抗衰 Parallel Longevity Track",
                        "plan":  "评估长期 mRNA 系统更新干预对血管内皮与代谢稳态的潜在作用（临床前）",
                        "trigger":  "主病情稳定后",
                        "status":  "todo",
                        "owner":  "维塔生命"
                    }
                ],
    "timeline":  [
                     {
                         "date":  "多年前",
                         "title":  "体检发现血脂偏高",
                         "detail":  "多次体检提示血脂异常，当时未做系统评估与持续干预"
                     },
                     {
                         "date":  "近期",
                         "title":  "指标复查",
                         "detail":  "血脂指标再次升高，需要判断是原发性还是继发，以及整体风险分层"
                     },
                     {
                         "date":  "2026-11-18",
                         "title":  "建立长期跟踪档案",
                         "detail":  "完成诊断盲点清单、指标体系、治疗阶梯、依从性机制与分工；网站案例页上线"
                     }
                 ],
    "followup":  [
                     {
                         "item":  "血脂四项 Lipid Panel",
                         "freq":  "初始治疗后 4-6 周，稳定后每 3 月",
                         "note":  "调整剂量后必须提前复查"
                     },
                     {
                         "item":  "肝功能 + 肌酸激酶 Liver Function + CK",
                         "freq":  "每 3 月，增量期加密",
                         "note":  "他汀安全性的两条底线"
                     },
                     {
                         "item":  "血压、体重、步数 BP, Weight, Steps",
                         "freq":  "持续记录",
                         "note":  "生活方式干预的唯一证据"
                     },
                     {
                         "item":  "实际服药天数 Actual Medication Days",
                         "freq":  "每月",
                         "note":  "依从性是达标率的直接解释变量"
                     },
                     {
                         "item":  "年度风险复评 Annual Risk Re-assessment",
                         "freq":  "每年",
                         "note":  "重新计算 ASCVD 风险并调整目标值"
                     }
                 ],
    "ai_role":  [
                    {
                        "item":  "数据归集",
                        "detail":  "把体检报告、化验单、处方、购药记录统一成一条时间轴"
                    },
                    {
                        "item":  "趋势判读",
                        "detail":  "自动计算变化率与达标偏离，识别\"看医生前\"的关键问题"
                    },
                    {
                        "item":  "漏服归因",
                        "detail":  "把漏服与副作用、复诊间隔、节假日等因素关联，找出真实原因"
                    },
                    {
                        "item":  "提醒与干预",
                        "detail":  "按复诊窗口、复查窗口、用药节点主动推送"
                    },
                    {
                        "item":  "风险复评",
                        "detail":  "随指标变化自动更新风险分层与目标值建议（供医师参考，不替代决策）"
                    }
                ],
    "notes":  "本案例是菲玛科技 AI 平台的首个落地样板：数据源最标准、指标定义最统一、结局最可量化（LDL-C 达标率）。"
};

