/* =====================================================================
   chapters.js —— 全站唯一数据源
   四个页面（目录总页 / 视频页 / 做题本 / 错题本）都读取这个文件自动生成内容。

   ★ 以后加新章节，只需在下方 CHAPTERS 数组里加一个 {...} 章节对象即可，
     四个页面全部自动更新，无需改动任何 HTML。

   ── 数据结构说明（灵活版：章节数、知识点数、每档题数均不限）──
   每个章节 = {
     name:   "章节名（唯一，会用于Tab、卡片、错题分组、网址参数）",
     desc:   "章节一句话简介（显示在卡片和做题本上）",
     topics: [                       // 知识点数组，几个知识点就写几个
       {
         name:  "知识点名",
         video: "videos/视频文件名.mp4",   // 视频统一放 videos/ 文件夹
         quiz:  {                    // ① 自测题（给"视频页"用，点击看答案）
           easy:   [ {stem, options:[4个], answer:正确项索引0~3, note:"可选解析"} , ... ],
           mid:    [ ... ],
           hard:   [ ... ]
         },
         practice: {                 // ② 练习题（给"做题本"用，判分、答错入错题本）
           easy:   [ {stem, options, answer, note} , ... ],   // 未来可由API生成
           mid:    [ ... ],
           hard:   [ ... ]
         }
       },
       ...更多知识点
     ]
   }
   注：quiz 与 practice 是两批独立题目，可完全不同。
   ===================================================================== */

const CHAPTERS = [

  /* ================= 章节一：集合 ================= */
  {
    name: "集合",
    desc: "涵盖：表示方法、基本关系、基本运算。",
    topics: [
      {
        name: "集合及其表示方法",
        video: "videos/集合表示法.mp4",
        quiz: {
          easy: [
            {stem:"设 A={1,2,3,4}，下列正确的是？", options:["5∈A","3∈A","0∈A","6∈A"], answer:1},
            {stem:"表示实数集的符号是？", options:["N","Z","Q","R"], answer:3},
            {stem:"小于10的正偶数组成的集合是？", options:["{2,4,6,8}","{0,2,4,6,8}","{2,4,6,8,10}","{1,2,3,4}"], answer:0}
          ],
          mid: [
            {stem:"集合 {x|x²=4, x∈R} 用列举法表示为？", options:["{2}","{-2,2}","{4}","{-4,4}"], answer:1},
            {stem:"下列与集合 {-1,1} 相等的是？", options:["{x|x²=1}","{x|x=1}","{x|x>0}","{x|x²=-1}"], answer:0},
            {stem:"用描述法表示不等式 x>3 的解集？", options:["{x>3}","{x|x>3}","{3}","(3,+∞)"], answer:1}
          ],
          hard: [
            {stem:"若 3∈{1,m,m²−m+1}，m 的值不可能是？", options:["3","2","-1","0"], answer:3, note:"m=0会与元素1重复，违反互异性"},
            {stem:"集合 {x|ax=1} 恰有一个元素，则 a 满足？", options:["a=0","a≠0","a=1","任意a"], answer:1},
            {stem:"已知 {x|x²+ax+b=0}={2}，则 a+b=？", options:["0","-4","4","2"], answer:0, note:"重根x=2：a=-4,b=4,a+b=0"}
          ]
        },
        practice: {
          easy: [
            {stem:"下列元素属于集合 {a,b,c} 的是？", options:["d","b","e","f"], answer:1},
            {stem:"空集用哪个符号表示？", options:["0","{0}","∅","{}的相反"], answer:2},
            {stem:"表示正整数集的符号是？", options:["N","N*","Z","Q"], answer:1}
          ],
          mid: [
            {stem:"集合 {x|1<x<5, x∈Z} 用列举法为？", options:["{2,3,4}","{1,2,3,4,5}","{2,3,4,5}","{1,2,3,4}"], answer:0},
            {stem:"下列表示同一集合的是？", options:["{1,2}与{2,1}","{1}与1","{0}与∅","{a}与a"], answer:0},
            {stem:"集合 {x|x²=−1, x∈R} 是？", options:["{1}","{-1,1}","∅","R"], answer:2}
          ],
          hard: [
            {stem:"若集合 {1,a,a²} 中 a 的取值不能为？", options:["2","-1","0","1"], answer:3, note:"a=1会重复"},
            {stem:"集合 {x|kx²−2x+1=0} 只有一个元素，k=？", options:["0","1","0或1","任意"], answer:2, note:"k=0一次方程；k=1判别式为0"},
            {stem:"已知 A={x|x²−px+q=0}={1,2}，p+q=？", options:["5","3","−1","2"], answer:0, note:"p=3,q=2"}
          ]
        }
      },
      {
        name: "集合的基本关系",
        video: "videos/集合基本关系.mp4",
        quiz: {
          easy: [
            {stem:"集合 A={a,b,c} 的子集个数是？", options:["6","7","8","9"], answer:2},
            {stem:"下列关系正确的是？", options:["1⊆{1,2}","{1}∈{1,2}","{1}⊆{1,2}","1∉{1,2}"], answer:2},
            {stem:"空集是任何集合的？", options:["元素","真子集","子集","补集"], answer:2}
          ],
          mid: [
            {stem:"集合 {1,2,3} 的真子集个数是？", options:["6","7","8","9"], answer:1},
            {stem:"若 A⊆B 且 B⊆A，则？", options:["A∈B","A=B","A⊊B","A≠B"], answer:1},
            {stem:"∅ 与 {∅} 的关系是？", options:["相等","∅∈{∅}","∅∉{∅}","{∅}⊆∅"], answer:1}
          ],
          hard: [
            {stem:"若 {1,2}⊆A⊆{1,2,3,4}，满足条件的 A 有几个？", options:["2","3","4","8"], answer:2},
            {stem:"已知 A⊆{1,2,3} 且 A 含元素1，这样的 A 有几个？", options:["2","3","4","8"], answer:2, note:"含1，其余2元素自由：2²=4"},
            {stem:"若 B={x|x²−1=0}，A⊆B，则 A 的个数是？", options:["2","3","4","8"], answer:2, note:"B={-1,1}，子集4个"}
          ]
        },
        practice: {
          easy: [
            {stem:"集合 {a,b} 的子集个数是？", options:["2","3","4","5"], answer:2},
            {stem:"下列一定成立的是？", options:["∅⊆A","A∈∅","A⊊A","∅=0"], answer:0},
            {stem:"若 A={1,2,3}，则 {1,2} 是 A 的？", options:["元素","真子集","补集","并集"], answer:1}
          ],
          mid: [
            {stem:"集合 {x|x²=4} 的所有子集个数是？", options:["2","3","4","8"], answer:2, note:"{-2,2}"},
            {stem:"下列错误的是？", options:["∅⊆{1}","{1}⊆{1,2}","{1,2}⊆{1}","1∈{1,2}"], answer:2},
            {stem:"含 4 个元素的集合，其真子集个数为？", options:["15","16","8","14"], answer:0, note:"2⁴−1=15"}
          ],
          hard: [
            {stem:"若 {a}⊆{1,2}，则 a 的取值有几种？", options:["1","2","3","4"], answer:1},
            {stem:"满足 {1}⊊A⊆{1,2,3} 的 A 有几个？", options:["2","3","4","6"], answer:1, note:"含1且非仅{1}：{1,2}{1,3}{1,2,3}"},
            {stem:"若集合 A 满足 A⊆{1,2,3,4} 且 A∩{1,2}={1}，A 有几个？", options:["2","4","6","8"], answer:1, note:"含1不含2，3、4自由：4个"}
          ]
        }
      },
      {
        name: "集合的基本运算",
        video: "videos/集合基本运算.mp4",
        quiz: {
          easy: [
            {stem:"A={1,2,3}，B={2,3,4}，A∩B=？", options:["{1}","{2,3}","{4}","{1,2,3,4}"], answer:1},
            {stem:"A={1,2}，B={3,4}，A∪B=？", options:["∅","{1,2}","{3,4}","{1,2,3,4}"], answer:3},
            {stem:"交集的运算对应的关键词是？", options:["或","且","非","并"], answer:1}
          ],
          mid: [
            {stem:"全集U={1,2,3,4,5}，A={1,2,3}，∁ᵤA=？", options:["{4,5}","{1,2,3}","{1,2,3,4,5}","∅"], answer:0},
            {stem:"A={x|x>1}，B={x|x<3}，A∩B=？", options:["{x|x>1}","{x|1<x<3}","{x|x<3}","∅"], answer:1},
            {stem:"A∪∅ 等于？", options:["∅","A","U","{0}"], answer:1}
          ],
          hard: [
            {stem:"全集U={1,2,3,4,5,6}，A={1,2,3}，B={2,3,4}，(∁ᵤA)∩B=？", options:["{4}","{4,5}","{5,6}","{4,5,6}"], answer:0},
            {stem:"A={x|x≤a}，B={x|x≥1}，若A∩B≠∅，则a满足？", options:["a>1","a≥1","a<1","a≤1"], answer:1},
            {stem:"已知A∪B={1,2,3}，A∩B={2}，A={1,2}，则B=？", options:["{2,3}","{2}","{3}","{1,2,3}"], answer:0}
          ]
        },
        practice: {
          easy: [
            {stem:"A={1,2,3,4}，B={3,4,5}，A∩B=？", options:["{3,4}","{5}","{1,2}","{1,2,3,4,5}"], answer:0},
            {stem:"并集运算对应的关键词是？", options:["且","或","非","交"], answer:1},
            {stem:"A={1,2}，A∪A=？", options:["∅","{1}","{1,2}","{2}"], answer:2}
          ],
          mid: [
            {stem:"U={1,2,3,4}，A={2,4}，∁ᵤA=？", options:["{1,3}","{2,4}","{1,2,3,4}","∅"], answer:0},
            {stem:"A={x|x≥2}，B={x|x≤2}，A∩B=？", options:["∅","{2}","R","{x|x≠2}"], answer:1},
            {stem:"A={1,2,3}，B={2,3,4,5}，A∪B 的元素个数？", options:["3","4","5","6"], answer:2}
          ],
          hard: [
            {stem:"U=R，A={x|x>0}，B={x|x<1}，(∁ᵤA)∩B=？", options:["{x|x≤0}","{x|0<x<1}","{x|x<1}","∅"], answer:0},
            {stem:"若 A∩B=A，则 A 与 B 的关系是？", options:["A⊆B","B⊆A","A=B","A∩B=∅"], answer:0},
            {stem:"已知 A={x|a<x<a+1}，B={x|1<x<3}，A⊆B，则a范围？", options:["1≤a≤2","1<a<2","1≤a<2","1<a≤2"], answer:0, note:"a≥1且a+1≤3"}
          ]
        }
      }
    ]
  },

  /* ================= 章节二：常用逻辑用语 ================= */
  {
    name: "常用逻辑用语",
    desc: "涵盖：命题与量词、命题的否定、充分与必要条件。",
    topics: [
      {
        name: "命题与量词",
        video: "videos/命题与量词.mp4",
        quiz: {
          easy: [
            {stem:"下列是命题的是？", options:["请安静","x>3吗","5是质数","多美啊"], answer:2},
            {stem:"符号 ∀ 表示？", options:["存在","任意","属于","包含"], answer:1},
            {stem:"“存在一个偶数是质数”是哪类命题？", options:["全称命题","存在命题","都不是","不是命题"], answer:1}
          ],
          mid: [
            {stem:"“所有实数的平方非负”的真假？", options:["真","假","不确定","不是命题"], answer:0},
            {stem:"“有的三角形是等边三角形”用哪个符号？", options:["∀","∃","∈","⊆"], answer:1},
            {stem:"下列全称命题为假的是？", options:["∀x,x²≥0","∀x,x+1>x","∀x,2x>x","任意矩形对角线相等"], answer:2, note:"x=0时2x>x不成立"}
          ],
          hard: [
            {stem:"若“∀x∈R,x²+2x+m>0”为真，则m？", options:["m>1","m≥1","m>0","m<1"], answer:0, note:"Δ<0"},
            {stem:"“∃x∈R,x²−x+a=0”为真，则a？", options:["a≤1/4","a<1/4","a≥1/4","a>1/4"], answer:0, note:"Δ≥0"},
            {stem:"“∀x∈[1,2],x²−a≥0”为真，则a？", options:["a≤1","a≤4","a≥4","a≥1"], answer:0, note:"a≤最小值1"}
          ]
        },
        practice: {
          easy: [
            {stem:"下列不是命题的是？", options:["3>2","1是质数","x+1=0吗","0是偶数"], answer:2},
            {stem:"符号 ∃ 表示？", options:["任意","存在","属于","不等"], answer:1},
            {stem:"“所有偶数都能被2整除”是？", options:["假命题","存在命题","全称命题","疑问句"], answer:2}
          ],
          mid: [
            {stem:"“存在实数x使x²=−1”的真假？", options:["真","假","不确定","不是命题"], answer:1},
            {stem:"“任意x∈R,x²>0”的真假？", options:["真","假","不确定","不是命题"], answer:1, note:"x=0时不成立"},
            {stem:"“至少有一个”属于哪种量词？", options:["全称量词","存在量词","否定词","连接词"], answer:1}
          ],
          hard: [
            {stem:"若“∃x∈R,x²+2x+m=0”为真，则m？", options:["m≤1","m<1","m≥1","m>1"], answer:0, note:"Δ=4−4m≥0"},
            {stem:"“∀x>0,x+1/x≥a”恒成立，a的最大值？", options:["1","2","3","4"], answer:1, note:"x+1/x最小值2"},
            {stem:"“∀x∈R,ax²+2x+1>0”恒成立，a范围？", options:["a>1","a≥1","a>0","0<a<1"], answer:0, note:"a>0且Δ<0"}
          ]
        }
      },
      {
        name: "命题的否定",
        video: "videos/命题的否定.mp4",
        quiz: {
          easy: [
            {stem:"“∀x,p(x)”的否定是？", options:["∀x,¬p(x)","∃x,p(x)","∃x,¬p(x)","∀x,p(x)"], answer:2},
            {stem:"“所有猫都是黑色”的否定？", options:["所有猫都不黑","存在一只猫不黑","存在黑猫","没有黑猫"], answer:1},
            {stem:"“x>0”的否定是？", options:["x<0","x≤0","x≥0","x≠0"], answer:1}
          ],
          mid: [
            {stem:"“∃x,x²<0”的否定是？", options:["∃x,x²≥0","∀x,x²<0","∀x,x²≥0","∀x,x²>0"], answer:2},
            {stem:"“存在x使2x+1=0”的否定？", options:["∀x,2x+1≠0","∀x,2x+1=0","∃x,2x+1≠0","不存在"], answer:0},
            {stem:"“∀x,x²+1>0”的否定是？", options:["∃x,x²+1<0","∃x,x²+1≤0","∀x,x²+1≤0","∃x,x²+1>0"], answer:1}
          ],
          hard: [
            {stem:"“∀x>0,x²−ax+1≥0”的否定是？", options:["∃x>0,x²−ax+1<0","∀x>0,…<0","∃x≤0,…<0","∃x>0,…≤0"], answer:0},
            {stem:"“∀x,|x|+x²≥0”的否定是？", options:["∃x,|x|+x²<0","∀x,…<0","∃x,…≤0","∀x,…>0"], answer:0},
            {stem:"“∃x,sinx+cosx=2”的否定及真假？", options:["∀x,≠2，真","∀x,≠2，假","∃x,≠2，真","都不对"], answer:0, note:"最大值√2<2"}
          ]
        },
        practice: {
          easy: [
            {stem:"“x≥5”的否定是？", options:["x>5","x<5","x≤5","x≠5"], answer:1},
            {stem:"“∃x,p(x)”的否定是？", options:["∃x,¬p(x)","∀x,¬p(x)","∀x,p(x)","∃x,p(x)"], answer:1},
            {stem:"“所有学生都及格”的否定？", options:["所有学生都不及格","存在学生不及格","存在学生及格","没人及格"], answer:1}
          ],
          mid: [
            {stem:"“∀x,x²−1≥0”的否定是？", options:["∃x,x²−1<0","∀x,x²−1<0","∃x,x²−1≤0","∀x,x²−1>0"], answer:0},
            {stem:"“a=b”的否定是？", options:["a>b","a<b","a≠b","a=−b"], answer:2},
            {stem:"“∃x∈R,x=x+1”的否定的真假？", options:["真","假","不确定","不是命题"], answer:0, note:"否定∀x,x≠x+1为真"}
          ],
          hard: [
            {stem:"“∀x∈R,ax²+2≥0”的否定是？", options:["∃x,ax²+2<0","∀x,ax²+2<0","∃x,ax²+2≤0","∀x,ax²+2>0"], answer:0},
            {stem:"若“∃x,x²+2x+a<0”的否定为真，a的范围？", options:["a≥1","a>1","a≤1","a<1"], answer:0, note:"否定∀x,…≥0为真需Δ≤0"},
            {stem:"命题p:∀x>0,lnx<x。¬p为？", options:["∃x>0,lnx≥x","∀x>0,lnx≥x","∃x≤0,lnx<x","∀x>0,lnx>x"], answer:0}
          ]
        }
      },
      {
        name: "充分条件与必要条件",
        video: "videos/充分条件与必要条件.mp4",
        quiz: {
          easy: [
            {stem:"p⇒q且q⇏p，则p是q的？", options:["充分不必要","必要不充分","充要","既不充分也不必要"], answer:0},
            {stem:"“x=2”是“x²=4”的什么条件？", options:["充分不必要","必要不充分","充要","都不是"], answer:0},
            {stem:"p⇔q说明p是q的？", options:["充分","必要","充要","无关"], answer:2}
          ],
          mid: [
            {stem:"“x>3”是“x>1”的？", options:["充分不必要","必要不充分","充要","都不是"], answer:0},
            {stem:"“两三角形全等”是“面积相等”的？", options:["充分不必要","必要不充分","充要","都不是"], answer:0},
            {stem:"设A⊊B，“x∈A”是“x∈B”的？", options:["充分不必要","必要不充分","充要","无法确定"], answer:0}
          ],
          hard: [
            {stem:"“|x−1|<2”是“x<3”的？", options:["充分不必要","必要不充分","充要","都不是"], answer:0, note:"−1<x<3⊆x<3"},
            {stem:"若“x>a”是“x>2”的充分不必要条件，则a？", options:["a≥2","a>2","a≤2","a<2"], answer:1},
            {stem:"“x²−3x+2=0”是“x=1”的？", options:["充分不必要","必要不充分","充要","都不是"], answer:1, note:"x=1或2，故必要不充分"}
          ]
        },
        practice: {
          easy: [
            {stem:"若q是p的必要条件，则？", options:["p⇒q","q⇒p","p⇔q","都不是"], answer:0},
            {stem:"“x=0”是“xy=0”的？", options:["充分不必要","必要不充分","充要","都不是"], answer:0},
            {stem:"充要条件用符号表示为？", options:["⇒","⇐","⇔","∈"], answer:2}
          ],
          mid: [
            {stem:"“x>2”是“x>0”的？", options:["充分不必要","必要不充分","充要","都不是"], answer:0},
            {stem:"“四边形是正方形”是“四边形是矩形”的？", options:["充分不必要","必要不充分","充要","都不是"], answer:0},
            {stem:"“a=0”是“ab=0”的？", options:["充分不必要","必要不充分","充要","都不是"], answer:0}
          ],
          hard: [
            {stem:"若“x<m”是“x<1”的必要不充分条件，m范围？", options:["m>1","m≥1","m<1","m≤1"], answer:0, note:"{x<1}⊊{x<m}需m>1"},
            {stem:"“x²>1”是“x>1”的？", options:["充分不必要","必要不充分","充要","都不是"], answer:1, note:"x>1或x<−1"},
            {stem:"设p:1≤x≤3，q:m≤x≤m+3，若p是q的充分条件，则m的取值范围是？", options:["0≤m≤1","m≤0","m≥1","1≤m≤3"], answer:0, note:"需[1,3]⊆[m,m+3]，即m≤1且m+3≥3，得0≤m≤1"}
           ]
        }
      }
    ]
  },

  /* ================= 章节三：等式 ================= */
  {
    name: "等式",
    desc: "涵盖：等式性质与方程解集、一元二次方程与韦达定理、方程组解集。",
    topics: [
      {
        name: "等式的性质与方程的解集",
        video: "videos/等式性质与解集.mp4",
        quiz: {
          easy: [
            {stem:"方程 2x−6=0 的解集是？", options:["{2}","{3}","{6}","∅"], answer:1},
            {stem:"方程 x+1=x+2 的解集是？", options:["{1}","{0}","∅","R"], answer:2},
            {stem:"由 a=b，下列一定成立的是？", options:["a/c=b/c","a+c=b+c","a²=b³","a−c=b+c"], answer:1}
          ],
          mid: [
            {stem:"方程 x²=9 的解集是？", options:["{3}","{−3}","{−3,3}","{9}"], answer:2},
            {stem:"方程 mx=6 当 m=0 时解集是？", options:["{6}","∅","R","{0}"], answer:1},
            {stem:"等式两边除以同一数仍成立的前提？", options:["该数为正","为整数","该数不为零","无条件"], answer:2}
          ],
          hard: [
            {stem:"方程 (x−1)(x−2)=0 的解集是？", options:["{1}","{2}","{1,2}","∅"], answer:2},
            {stem:"方程 ax=a 解集为 R 时，a=？", options:["a=1","a=0","a≠0","任意"], answer:1, note:"0·x=0对任意x成立"},
            {stem:"方程 |x|=3 的解集是？", options:["{3}","{−3}","{−3,3}","∅"], answer:2}
          ]
        },
        practice: {
          easy: [
            {stem:"方程 3x=12 的解集是？", options:["{3}","{4}","{12}","{9}"], answer:1},
            {stem:"方程 x−5=0 的解集是？", options:["{−5}","{5}","{0}","∅"], answer:1},
            {stem:"“移项”依据的是等式的？", options:["加减性质","乘除性质","传递性","对称性"], answer:0}
          ],
          mid: [
            {stem:"方程 x²=0 的解集是？", options:["{0}","∅","{−0,0}","R"], answer:0},
            {stem:"方程 0·x=5 的解集是？", options:["{5}","{0}","∅","R"], answer:2},
            {stem:"方程 (x+3)(x−1)=0 的解集是？", options:["{−3,1}","{3,−1}","{−3}","{1}"], answer:0}
          ],
          hard: [
            {stem:"方程 x²=2x 的解集是？", options:["{2}","{0,2}","{0}","∅"], answer:1, note:"x²−2x=0→x(x−2)=0"},
            {stem:"关于x的方程 (a−1)x=2 无解，则 a=？", options:["a=1","a=2","a≠1","a=0"], answer:0, note:"a=1时0·x=2无解"},
            {stem:"方程 |x−1|=2 的解集是？", options:["{3}","{−1}","{−1,3}","∅"], answer:2}
          ]
        }
      },
      {
        name: "一元二次方程的解集及其根与系数的关系",
        video: "videos/一元二次方程与韦达定理.mp4",
        quiz: {
          easy: [
            {stem:"方程 x²−5x+6=0 的两根之和为？", options:["5","−5","6","−6"], answer:0},
            {stem:"ax²+bx+c=0 的判别式是？", options:["b²+4ac","b²−4ac","b−4ac","2b−4ac"], answer:1},
            {stem:"方程 x²−5x+6=0 的两根之积为？", options:["5","6","−6","1"], answer:1}
          ],
          mid: [
            {stem:"方程 x²+2x−3=0 的解集是？", options:["{1,−3}","{−1,3}","{1,3}","{−1,−3}"], answer:0},
            {stem:"方程 x²+bx+c=0 两根为2和3，则b、c为？", options:["b=5,c=6","b=−5,c=6","b=−5,c=−6","b=5,c=−6"], answer:1, note:"和=5→b=−5，积=6→c=6"},
            {stem:"方程 2x²−4x+2=0 的Δ及实根？", options:["Δ=0两个相等实根","Δ>0两个不等","Δ<0无实根","Δ=8"], answer:0}
          ],
          hard: [
            {stem:"方程 x²−3x+m=0 无实根，则m范围？", options:["m>9/4","m<9/4","m≥9/4","m≤9/4"], answer:0, note:"Δ=9−4m<0"},
            {stem:"x₁,x₂是x²−4x+1=0的两根，x₁²+x₂²=？", options:["14","16","18","12"], answer:0, note:"(x₁+x₂)²−2x₁x₂=16−2"},
            {stem:"方程 x²−(k+1)x+k=0 两根互为倒数，k=？", options:["1","−1","0","±1"], answer:0, note:"两根积=k=1"}
          ]
        },
        practice: {
          easy: [
            {stem:"方程 x²−7x+12=0 的两根之和？", options:["7","−7","12","5"], answer:0},
            {stem:"当Δ=0时，一元二次方程有？", options:["两不等根","两相等根","无实根","无数根"], answer:1},
            {stem:"方程 x²−x−2=0 的两根之积？", options:["−2","2","1","−1"], answer:0}
          ],
          mid: [
            {stem:"方程 x²−4x+3=0 的解集是？", options:["{1,3}","{−1,−3}","{1,−3}","{3}"], answer:0},
            {stem:"当Δ<0时，方程的解集是？", options:["单元素集","双元素集","∅","R"], answer:2},
            {stem:"方程 x²+px+6=0 一根为2，则p=？", options:["−5","5","−3","3"], answer:0, note:"4+2p+6=0"}
          ],
          hard: [
            {stem:"方程 x²−2x+k=0 有两个不等实根，k范围？", options:["k<1","k>1","k≤1","k≥1"], answer:0, note:"Δ=4−4k>0"},
            {stem:"x₁,x₂是x²+3x−2=0两根，1/x₁+1/x₂=？", options:["3/2","−3/2","−2/3","2/3"], answer:0, note:"(x₁+x₂)/(x₁x₂)=−3/−2=3/2"},
            {stem:"方程 x²−mx+m=0 两根均为正，m范围？", options:["m≥4","m>4","0<m<4","m>0"], answer:0, note:"和m>0,积m>0,Δ=m²−4m≥0→m≥4"}
          ]
        }
      },
      {
        name: "方程组的解集",
        video: "videos/方程组的解集.mp4",
        quiz: {
          easy: [
            {stem:"方程组 x+y=5、x−y=1 的解集是？", options:["{(3,2)}","{(2,3)}","{(3,−2)}","∅"], answer:0},
            {stem:"二元一次方程组的解通常写成？", options:["一个数","有序数对","单个元素","分数"], answer:1},
            {stem:"解二元一次方程组的两种常用方法？", options:["配方与开方","代入与加减消元","因式分解与公式","图象与列表"], answer:1}
          ],
          mid: [
            {stem:"方程组 2x+y=7、x=2 的解集是？", options:["{(2,3)}","{(3,2)}","{(2,5)}","{(2,7)}"], answer:0, note:"x=2代入得y=3"},
            {stem:"方程组有唯一解，对应两直线？", options:["平行","重合","相交于一点","垂直"], answer:2},
            {stem:"两方程表示同一直线，解集是？", options:["空集","一个元素","无穷多解","两个元素"], answer:2}
          ],
          hard: [
            {stem:"方程组 x+y=4、2x+2y=8 的解集是？", options:["{(2,2)}","空集","无穷多解","{(4,0)}"], answer:2, note:"两式同解"},
            {stem:"方程组 x+y=3、x+y=5 的解集是？", options:["{(3,5)}","∅","R","{(4,−1)}"], answer:1, note:"矛盾，平行无解"},
            {stem:"方程组 x+y=5、xy=6 的解集是？", options:["{(2,3)}","{(3,2)}","{(2,3),(3,2)}","∅"], answer:2, note:"两根为2、3"}
          ]
        },
        practice: {
          easy: [
            {stem:"方程组 x=3、y=4 的解集是？", options:["{(3,4)}","{(4,3)}","{3,4}","∅"], answer:0},
            {stem:"代入消元法的第一步通常是？", options:["两式相加","用一个未知数表示另一个","两式相乘","画图"], answer:1},
            {stem:"方程组 x+y=2、x−y=0 的解集是？", options:["{(1,1)}","{(2,0)}","{(0,2)}","∅"], answer:0}
          ],
          mid: [
            {stem:"方程组 x+2y=5、x=1 的解集是？", options:["{(1,2)}","{(2,1)}","{(1,5)}","{(1,3)}"], answer:0, note:"1+2y=5→y=2"},
            {stem:"方程组无解对应两直线？", options:["相交","重合","平行","垂直"], answer:2},
            {stem:"方程组 2x−y=1、4x−2y=2 的解集是？", options:["唯一解","无穷多解","∅","{(1,1)}"], answer:1, note:"两式同解"}
          ],
          hard: [
            {stem:"方程组 x+y=1、x²+y²=25 的解集元素个数？", options:["0","1","2","无穷"], answer:2, note:"化为一元二次Δ>0，两组解"},
            {stem:"方程组 ax+y=1、x+y=2 无解，则a=？", options:["1","−1","0","2"], answer:0, note:"a=1时两直线平行"},
            {stem:"方程组 x−y=2、xy=3 的解集是？", options:["{(3,1)}","{(−1,−3)}","{(3,1),(−1,−3)}","∅"], answer:2, note:"x=y+2代入得y²+2y−3=0"}
          ]
        }
      }
    ]
  }

  ,
  /* ================= 章节四：不等式 ================= */
  {
    name: "不等式",
    desc: "涵盖：不等式及其性质、不等式的解集、一元二次不等式解法、均值不等式。",
    topics: [
      {
        name: "不等式及其性质",
        video: "videos/不等式及其性质.mp4",
        quiz: {
          easy: [
            {stem:"若 a>b，则下列一定成立的是？", options:["a+2>b+2","a−2<b−2","2a<2b","−a>−b"], answer:0},
            {stem:"若 a>b 且 c>0，则？", options:["ac<bc","ac>bc","ac=bc","无法确定"], answer:1},
            {stem:"若 a>b，c<0，则？", options:["ac>bc","ac<bc","ac=bc","a+c>b+c不成立"], answer:1}
          ],
          mid: [
            {stem:"若 a>b>0，则下列一定成立的是？", options:["1/a>1/b","1/a<1/b","a²<b²","−a>−b"], answer:1, note:"正数取倒数反向"},
            {stem:"若 a>b，c>d，则一定有？", options:["a−c>b−d","a+c>b+d","ac>bd","a/c>b/d"], answer:1, note:"同向不等式可相加"},
            {stem:"若 a>b>0，c>d>0，则？", options:["ac>bd","ac<bd","a−c>b−d","a/c>b/d"], answer:0, note:"同向正数不等式可相乘"}
          ],
          hard: [
            {stem:"若 a<b<0，则下列成立的是？", options:["a²<b²","a²>b²","1/a<1/b","|a|<|b|"], answer:1, note:"两负数，绝对值大的平方大"},
            {stem:"已知 −1<a<3，1<b<2，则 a−b 的范围是？", options:["(−3,2)","(−2,3)","(−3,1)","(−2,2)"], answer:0, note:"a−b∈(−1−2, 3−1)=(−3,2)"},
            {stem:"已知 1<a<4，2<b<8，则 a/b 的范围是？", options:["(1/8,2)","(1/4,2)","(1/8,4)","(1/2,2)"], answer:0, note:"1/b∈(1/8,1/2)，a/b∈(1/8,2)"}
          ]
        },
        practice: {
          easy: [
            {stem:"若 a>b，则 a−5 与 b−5 的大小关系是？", options:["a−5>b−5","a−5<b−5","a−5=b−5","不确定"], answer:0},
            {stem:"若 a<b 且 c>0，则 ac 与 bc？", options:["ac>bc","ac<bc","ac=bc","不确定"], answer:1},
            {stem:"不等式两边同乘一个负数，不等号方向？", options:["不变","改变","消失","变等号"], answer:1}
          ],
          mid: [
            {stem:"若 a>b，则下列不一定成立的是？", options:["a+c>b+c","a−c>b−c","ac>bc","a>b−1"], answer:2, note:"c的正负未知"},
            {stem:"若 0<a<b，则下列成立的是？", options:["a²>b²","1/a>1/b","√a>√b","a>b"], answer:1, note:"正数取倒数反向"},
            {stem:"已知 2<a<5，1<b<3，则 a+b 的范围是？", options:["(3,8)","(1,5)","(3,5)","(2,8)"], answer:0, note:"a+b∈(2+1,5+3)"}
          ],
          hard: [
            {stem:"若 a>b>0，则下列一定成立的是？", options:["a/b>1","b/a>1","a/b<1","a/b=1"], answer:0, note:"分子大于分母，且均正"},
            {stem:"已知 −2<a<1，−1<b<4，则 a−b 的范围是？", options:["(−6,2)","(−3,5)","(−6,5)","(−3,2)"], answer:0, note:"−b∈(−4,1)，a−b∈(−6,2)"},
            {stem:"若 a>b，1/a>1/b，则 a、b 的符号情况是？", options:["a>0>b","a>b>0","b>a>0","a<b<0"], answer:0, note:"异号时正数倒数大于负数倒数"}
          ]
        }
      },
      {
        name: "不等式的解集",
        video: "videos/不等式的解集.mp4",
        quiz: {
          easy: [
            {stem:"不等式 x−3>0 的解集是？", options:["{x|x>3}","{x|x<3}","{x|x>−3}","{x|x=3}"], answer:0},
            {stem:"不等式 2x<8 的解集是？", options:["{x|x<4}","{x|x>4}","{x|x<8}","{x|x>8}"], answer:0},
            {stem:"不等式 −x>2 的解集是？", options:["{x|x>2}","{x|x<−2}","{x|x>−2}","{x|x<2}"], answer:1, note:"两边乘−1变向"}
          ],
          mid: [
            {stem:"不等式 2x−1≥3 的解集是？", options:["{x|x≥2}","{x|x≤2}","{x|x≥1}","{x|x>2}"], answer:0},
            {stem:"不等式组 x>1 且 x<4 的解集是？", options:["{x|1<x<4}","{x|x>1}","{x|x<4}","∅"], answer:0},
            {stem:"不等式 −2x+1<5 的解集是？", options:["{x|x>−2}","{x|x<−2}","{x|x>2}","{x|x<2}"], answer:0, note:"−2x<4，x>−2"}
          ],
          hard: [
            {stem:"不等式 |x|<3 的解集是？", options:["{x|x<3}","{x|−3<x<3}","{x|x>3}","{x|x<−3或x>3}"], answer:1},
            {stem:"不等式 |x−1|>2 的解集是？", options:["{x|−1<x<3}","{x|x<−1或x>3}","{x|x>3}","{x|x<−1}"], answer:1, note:"x−1>2或x−1<−2"},
            {stem:"不等式组 x+1>0 且 3−x>0 的解集是？", options:["{x|−1<x<3}","{x|x>−1}","{x|x<3}","∅"], answer:0, note:"x>−1且x<3"}
          ]
        },
        practice: {
          easy: [
            {stem:"不等式 x+2>5 的解集是？", options:["{x|x>3}","{x|x<3}","{x|x>7}","{x|x>5}"], answer:0},
            {stem:"不等式 3x≤9 的解集是？", options:["{x|x≤3}","{x|x≥3}","{x|x≤9}","{x|x<3}"], answer:0},
            {stem:"不等式 −2x>6 的解集是？", options:["{x|x>−3}","{x|x<−3}","{x|x>3}","{x|x<3}"], answer:1, note:"除以−2变向"}
          ],
          mid: [
            {stem:"不等式 3x+2<11 的解集是？", options:["{x|x<3}","{x|x>3}","{x|x<11}","{x|x<9}"], answer:0},
            {stem:"不等式组 x≥0 且 x≤5 的解集是？", options:["{x|0≤x≤5}","{x|x≥0}","{x|x≤5}","∅"], answer:0},
            {stem:"不等式 4−x≥1 的解集是？", options:["{x|x≤3}","{x|x≥3}","{x|x≤4}","{x|x<3}"], answer:0, note:"−x≥−3，x≤3"}
          ],
          hard: [
            {stem:"不等式 |x|≥2 的解集是？", options:["{x|−2≤x≤2}","{x|x≤−2或x≥2}","{x|x≥2}","{x|x≤2}"], answer:1},
            {stem:"不等式 |2x−1|<3 的解集是？", options:["{x|−1<x<2}","{x|x<2}","{x|x>−1}","{x|x<−1或x>2}"], answer:0, note:"−3<2x−1<3，−1<x<2"},
            {stem:"不等式组 2x−1>0 且 x−3<0 的解集是？", options:["{x|1/2<x<3}","{x|x>1/2}","{x|x<3}","∅"], answer:0, note:"x>1/2且x<3"}
          ]
        }
      },
      {
        name: "一元二次不等式的解法",
        video: "videos/一元二次不等式的解法.mp4",
        quiz: {
          easy: [
            {stem:"不等式 (x−1)(x−2)>0 的解集是？", options:["{x|x<1或x>2}","{x|1<x<2}","{x|x>2}","{x|x<1}"], answer:0},
            {stem:"不等式 x²−4<0 的解集是？", options:["{x|−2<x<2}","{x|x<−2或x>2}","{x|x<2}","{x|x>−2}"], answer:0},
            {stem:"不等式 x²>0 的解集是？", options:["R","{x|x≠0}","{x|x>0}","∅"], answer:1, note:"除x=0外均成立"}
          ],
          mid: [
            {stem:"不等式 x²−5x+6≤0 的解集是？", options:["{x|2≤x≤3}","{x|x≤2或x≥3}","{x|x≤3}","{x|x≥2}"], answer:0, note:"根为2、3，开口向上取中间"},
            {stem:"不等式 x²−3x>0 的解集是？", options:["{x|0<x<3}","{x|x<0或x>3}","{x|x>3}","{x|x<0}"], answer:1, note:"x(x−3)>0"},
            {stem:"不等式 −x²+4x−3>0 的解集是？", options:["{x|1<x<3}","{x|x<1或x>3}","{x|x>3}","∅"], answer:0, note:"化为x²−4x+3<0，根1、3"}
          ],
          hard: [
            {stem:"不等式 x²−2x+1>0 的解集是？", options:["R","{x|x≠1}","{x|x>1}","∅"], answer:1, note:"(x−1)²>0，除x=1外成立"},
            {stem:"不等式 x²+x+1>0 的解集是？", options:["R","{x|x≠0}","∅","{x|x>0}"], answer:0, note:"Δ<0且开口向上，恒成立"},
            {stem:"不等式 x²−2x−3≥0 的解集是？", options:["{x|−1≤x≤3}","{x|x≤−1或x≥3}","{x|x≥3}","{x|x≤−1}"], answer:1, note:"根−1、3，取两侧"}
          ]
        },
        practice: {
          easy: [
            {stem:"不等式 (x+1)(x−3)<0 的解集是？", options:["{x|−1<x<3}","{x|x<−1或x>3}","{x|x>3}","{x|x<−1}"], answer:0},
            {stem:"不等式 x²−9>0 的解集是？", options:["{x|x<−3或x>3}","{x|−3<x<3}","{x|x>3}","{x|x<3}"], answer:0},
            {stem:"不等式 x²≤0 的解集是？", options:["{0}","∅","R","{x|x≥0}"], answer:0, note:"仅x=0满足"}
          ],
          mid: [
            {stem:"不等式 x²−x−6<0 的解集是？", options:["{x|−2<x<3}","{x|x<−2或x>3}","{x|x<3}","{x|x>−2}"], answer:0, note:"根−2、3，取中间"},
            {stem:"不等式 x²+2x≥0 的解集是？", options:["{x|x≤−2或x≥0}","{x|−2≤x≤0}","{x|x≥0}","R"], answer:0, note:"x(x+2)≥0"},
            {stem:"不等式 2x²−3x−2>0 的解集是？", options:["{x|x<−1/2或x>2}","{x|−1/2<x<2}","{x|x>2}","{x|x<2}"], answer:0, note:"(2x+1)(x−2)>0"}
          ],
          hard: [
            {stem:"不等式 −x²+2x−1≥0 的解集是？", options:["{1}","R","∅","{x|x≠1}"], answer:0, note:"−(x−1)²≥0仅x=1"},
            {stem:"不等式 x²−4x+5>0 的解集是？", options:["R","∅","{x|x≠2}","{x|x>2}"], answer:0, note:"Δ<0，开口向上恒成立"},
            {stem:"若不等式 x²+bx+c<0 的解集为 {x|1<x<4}，则 b+c=？", options:["−1","1","3","−5"], answer:0, note:"根1、4：b=−5,c=4,b+c=−1"}
          ]
        }
      },
      {
        name: "均值不等式及其应用",
        video: "videos/均值不等式及其应用.mp4",
        quiz: {
          easy: [
            {stem:"均值不等式 a+b≥2√(ab) 成立的前提是？", options:["a、b为实数","a、b>0","a、b<0","a≠b"], answer:1},
            {stem:"当 a>0 时，a+1/a 的最小值是？", options:["1","2","0","4"], answer:1, note:"a=1时取等"},
            {stem:"a+b≥2√(ab) 中等号成立的条件是？", options:["a=b","a>b","a<b","ab=1"], answer:0}
          ],
          mid: [
            {stem:"当 x>0 时，x+4/x 的最小值是？", options:["2","4","6","8"], answer:1, note:"2√(x·4/x)=4，x=2取等"},
            {stem:"若 a>0，b>0 且 a+b=4，则 ab 的最大值是？", options:["2","4","8","16"], answer:1, note:"ab≤(a+b)²/4=4，a=b=2"},
            {stem:"当 x>1 时，x+1/(x−1) 的最小值是？", options:["2","3","4","1"], answer:1, note:"(x−1)+1/(x−1)+1≥2+1=3"}
          ],
          hard: [
            {stem:"若 x>0，y>0 且 x+y=1，则 1/x+1/y 的最小值是？", options:["2","4","6","8"], answer:1, note:"(1/x+1/y)(x+y)≥4"},
            {stem:"若 a>0，b>0，且 2a+b=1，则 1/a+2/b 的最小值是？", options:["4","6","8","9"], answer:2, note:"(1/a+2/b)(2a+b)=4+b/a+4a/b≥8"},
            {stem:"当 x>0 时，x/(x²+4) 的最大值是？", options:["1/2","1/4","1/8","4"], answer:1, note:"x+4/x≥4，故x/(x²+4)=1/(x+4/x)≤1/4"}
          ]
        },
        practice: {
          easy: [
            {stem:"均值不等式中，√(ab) 称为 a、b 的？", options:["算术平均数","几何平均数","调和平均数","平方平均数"], answer:1},
            {stem:"当 a>0 时，a+9/a 取最小值时 a=？", options:["1","3","9","6"], answer:1, note:"a=√9=3"},
            {stem:"(a+b)/2 与 √(ab)（a,b>0）的大小关系是？", options:["前者≥后者","前者≤后者","相等","不确定"], answer:0}
          ],
          mid: [
            {stem:"当 x>0 时，x+16/x 的最小值是？", options:["4","8","16","2"], answer:1, note:"2√16=8，x=4取等"},
            {stem:"若 a、b>0 且 ab=9，则 a+b 的最小值是？", options:["3","6","9","18"], answer:1, note:"a+b≥2√9=6"},
            {stem:"当 x>2 时，x+4/(x−2) 的最小值是？", options:["4","6","8","2"], answer:1, note:"(x−2)+4/(x−2)+2≥4+2=6"}
          ],
          hard: [
            {stem:"若 x>0，y>0 且 xy=4，则 x+4y 的最小值是？", options:["4","8","16","2"], answer:1, note:"x+4y≥2√(4xy)=2√16=8"},
            {stem:"若 a>0，b>0，a+2b=2，则 ab 的最大值是？", options:["1/2","1","2","1/4"], answer:0, note:"2=a+2b≥2√(2ab)，ab≤1/2"},
            {stem:"若 x>0，y>0 且 1/x+9/y=1，则 x+y 的最小值是？", options:["12","16","10","8"], answer:1, note:"(x+y)(1/x+9/y)=10+y/x+9x/y≥16"}
          ]
        }
      }
    ]
  }

  ,
  /* ================= 章节五：函数的概念和性质 ================= */
  {
    name: "函数的概念和性质",
    desc: "涵盖：函数及其表示方法、函数的单调性、函数的奇偶性。",
    topics: [
      {
        name: "函数及其表示方法",
        video: "videos/函数及其表示方法.mp4",
        quiz: {
          easy: [
            {stem:"下列图象中，能表示 y 是 x 的函数的是？", options:["一个 x 对应两个 y","竖直线","任意竖线只交图象一次","圆"], answer:2, note:"函数要求每个x只对应一个y"},
            {stem:"函数三要素是？", options:["定义域、值域、对应关系","自变量、因变量、图象","解析式、表格、图象","定义域、解析式、单调性"], answer:0},
            {stem:"表示函数的三种常用方法是？", options:["解析法、列表法、图象法","代入法、消元法、配方法","描述法、列举法、图示法","加法、减法、乘法"], answer:0}
          ],
          mid: [
            {stem:"函数 f(x)=1/(x−2) 的定义域是？", options:["{x|x≠2}","{x|x>2}","R","{x|x≠0}"], answer:0, note:"分母不为0"},
            {stem:"函数 f(x)=√(x−1) 的定义域是？", options:["{x|x≥1}","{x|x>1}","{x|x≤1}","R"], answer:0, note:"被开方数非负"},
            {stem:"已知 f(x)=2x+1，则 f(3)=？", options:["5","6","7","8"], answer:2, note:"2×3+1=7"}
          ],
          hard: [
            {stem:"已知 f(x)=x²−1，则 f(x+1)=？", options:["x²","x²+2x","x²−2x","x²+2x+2"], answer:1, note:"(x+1)²−1=x²+2x"},
            {stem:"函数 f(x)=√(x+2)/(x−1) 的定义域是？", options:["{x|x≥−2且x≠1}","{x|x≥−2}","{x|x≠1}","{x|x>−2}"], answer:0, note:"x+2≥0且x−1≠0"},
            {stem:"已知 f(x)=2x−3，若 f(a)=5，则 a=？", options:["3","4","5","2"], answer:1, note:"2a−3=5→a=4"}
          ]
        },
        practice: {
          easy: [
            {stem:"函数 y=f(x) 中，x 叫作？", options:["因变量","自变量","常量","函数值"], answer:1},
            {stem:"函数 f(x)=3x 的定义域是？", options:["R","{x|x>0}","{x|x≠0}","{x|x≥0}"], answer:0},
            {stem:"已知 f(x)=x+5，则 f(0)=？", options:["0","5","−5","1"], answer:1}
          ],
          mid: [
            {stem:"函数 f(x)=1/x 的定义域是？", options:["R","{x|x≠0}","{x|x>0}","{x|x≥0}"], answer:1, note:"分母不为0"},
            {stem:"函数 f(x)=√(4−x) 的定义域是？", options:["{x|x≤4}","{x|x≥4}","{x|x<4}","R"], answer:0, note:"4−x≥0"},
            {stem:"已知 f(x)=x²+1，则 f(−2)=？", options:["3","5","−3","4"], answer:1, note:"(−2)²+1=5"}
          ],
          hard: [
            {stem:"已知 f(x)=3x−2，则 f(2x)=？", options:["6x−2","6x−4","3x−4","6x−2x"], answer:0, note:"3·(2x)−2=6x−2"},
            {stem:"函数 f(x)=1/√(x−3) 的定义域是？", options:["{x|x>3}","{x|x≥3}","{x|x≠3}","{x|x<3}"], answer:0, note:"x−3>0（开方且作分母）"},
            {stem:"已知 f(x+1)=x²，则 f(x)=？", options:["x²−1","(x−1)²","x²+1","(x+1)²"], answer:1, note:"令t=x+1，则x=t−1，f(t)=(t−1)²"}
          ]
        }
      },
      {
        name: "函数的单调性",
        video: "videos/函数的单调性.mp4",
        quiz: {
          easy: [
            {stem:"函数 f(x)=2x+1 在 R 上是？", options:["增函数","减函数","先增后减","常函数"], answer:0, note:"一次项系数为正"},
            {stem:"函数 f(x)=−x+3 在 R 上是？", options:["增函数","减函数","先减后增","常函数"], answer:1, note:"一次项系数为负"},
            {stem:"增函数的图象从左到右是？", options:["上升的","下降的","水平的","先升后降"], answer:0}
          ],
          mid: [
            {stem:"函数 f(x)=x² 在 (−∞,0) 上是？", options:["增函数","减函数","常函数","无单调性"], answer:1, note:"抛物线左半支下降"},
            {stem:"函数 f(x)=1/x 在 (0,+∞) 上是？", options:["增函数","减函数","常函数","先增后减"], answer:1},
            {stem:"函数 f(x)=x²−2x 的单调递增区间是？", options:["(−∞,1)","(1,+∞)","(−∞,0)","R"], answer:1, note:"对称轴x=1，右侧递增"}
          ],
          hard: [
            {stem:"若 f(x)=x²−2ax 在 [1,+∞) 上单调递增，则 a 的范围是？", options:["a≤1","a≥1","a<1","a>1"], answer:0, note:"对称轴x=a≤1"},
            {stem:"已知 f(x) 在 R 上是增函数，且 f(a)>f(b)，则？", options:["a>b","a<b","a=b","无法确定"], answer:0, note:"增函数保序"},
            {stem:"函数 f(x)=−x²+4x−1 的单调递减区间是？", options:["(−∞,2)","(2,+∞)","(−∞,4)","R"], answer:1, note:"开口向下，对称轴x=2，右侧递减"}
          ]
        },
        practice: {
          easy: [
            {stem:"减函数的图象从左到右是？", options:["上升的","下降的","水平的","波动的"], answer:1},
            {stem:"函数 f(x)=5x 在 R 上是？", options:["增函数","减函数","常函数","无单调性"], answer:0},
            {stem:"函数 f(x)=−2x+1 在 R 上是？", options:["增函数","减函数","常函数","先增后减"], answer:1}
          ],
          mid: [
            {stem:"函数 f(x)=x² 在 (0,+∞) 上是？", options:["增函数","减函数","常函数","无单调性"], answer:0},
            {stem:"函数 f(x)=x²+2x 的单调递减区间是？", options:["(−∞,−1)","(−1,+∞)","(−∞,0)","R"], answer:0, note:"对称轴x=−1，左侧递减"},
            {stem:"函数 f(x)=3/x 在 (−∞,0) 上是？", options:["增函数","减函数","常函数","无单调性"], answer:1}
          ],
          hard: [
            {stem:"若 f(x)=x²+2ax 在 [2,+∞) 上单调递增，则 a 的范围是？", options:["a≥−2","a≤−2","a≥2","a≤2"], answer:0, note:"对称轴x=−a≤2→a≥−2"},
            {stem:"已知 f(x) 在 R 上是减函数，f(2)与f(3)的大小？", options:["f(2)>f(3)","f(2)<f(3)","f(2)=f(3)","不确定"], answer:0, note:"减函数：自变量大函数值小"},
            {stem:"函数 f(x)=−x²+2x 的单调递增区间是？", options:["(−∞,1)","(1,+∞)","(−∞,0)","R"], answer:0, note:"开口向下，对称轴x=1，左侧递增"}
          ]
        }
      },
      {
        name: "函数的奇偶性",
        video: "videos/函数的奇偶性.mp4",
        quiz: {
          easy: [
            {stem:"偶函数满足的关系是？", options:["f(−x)=f(x)","f(−x)=−f(x)","f(x)=0","f(x)=x"], answer:0},
            {stem:"奇函数满足的关系是？", options:["f(−x)=f(x)","f(−x)=−f(x)","f(x)=x²","f(0)=1"], answer:1},
            {stem:"偶函数的图象关于什么对称？", options:["原点","y 轴","x 轴","直线 y=x"], answer:1}
          ],
          mid: [
            {stem:"函数 f(x)=x² 是？", options:["奇函数","偶函数","既奇又偶","非奇非偶"], answer:1, note:"f(−x)=x²=f(x)"},
            {stem:"函数 f(x)=x³ 是？", options:["奇函数","偶函数","既奇又偶","非奇非偶"], answer:0, note:"f(−x)=−x³=−f(x)"},
            {stem:"奇函数的图象关于什么对称？", options:["y 轴","x 轴","原点","直线 x=1"], answer:2}
          ],
          hard: [
            {stem:"若 f(x) 是奇函数且在 x=0 有定义，则 f(0)=？", options:["1","0","−1","不确定"], answer:1, note:"f(0)=−f(0)→f(0)=0"},
            {stem:"函数 f(x)=x²+x 是？", options:["奇函数","偶函数","非奇非偶","既奇又偶"], answer:2, note:"f(−x)=x²−x，既不等于f(x)也不等于−f(x)"},
            {stem:"已知 f(x) 是偶函数，且 f(2)=5，则 f(−2)=？", options:["5","−5","0","2"], answer:0, note:"偶函数f(−2)=f(2)=5"}
          ]
        },
        practice: {
          easy: [
            {stem:"奇函数的图象关于什么对称？", options:["y 轴","原点","x 轴","直线 y=x"], answer:1},
            {stem:"函数 f(x)=x 是？", options:["奇函数","偶函数","非奇非偶","常函数"], answer:0},
            {stem:"判断奇偶性的前提是定义域关于什么对称？", options:["y 轴","原点","x 轴","任意点"], answer:1, note:"定义域须关于原点对称"}
          ],
          mid: [
            {stem:"函数 f(x)=|x| 是？", options:["奇函数","偶函数","非奇非偶","既奇又偶"], answer:1, note:"f(−x)=|−x|=|x|=f(x)"},
            {stem:"函数 f(x)=1/x 是？", options:["奇函数","偶函数","非奇非偶","常函数"], answer:0, note:"f(−x)=−1/x=−f(x)"},
            {stem:"已知 f(x) 是奇函数，f(3)=2，则 f(−3)=？", options:["2","−2","0","3"], answer:1, note:"奇函数f(−3)=−f(3)=−2"}
          ],
          hard: [
            {stem:"函数 f(x)=x²+1 是？", options:["奇函数","偶函数","非奇非偶","既奇又偶"], answer:1, note:"f(−x)=x²+1=f(x)"},
            {stem:"函数 f(x)=x+1 是？", options:["奇函数","偶函数","非奇非偶","常函数"], answer:2, note:"f(−x)=−x+1，既不等于f(x)也不等于−f(x)"},
            {stem:"若 f(x)=ax³+bx 是奇函数，则下列一定成立的是？", options:["它本就是奇函数","需a=0","需b=0","需a=b"], answer:0, note:"x³与x都是奇函数，其组合仍为奇函数"}
          ]
        }
      }
    ]
  }

 ,
  /* ================= 章节六：函数的应用 ================= */
   {
    name: "函数的应用",
    desc: "涵盖：函数与方程、不等式的关系，函数的实际应用，数学建模。",
    topics: [
      {
        name: "函数与方程、不等式之间的关系",
        video: "videos/函数与方程、不等式之间的关系.mp4",
        quiz: {
          easy: [
            {stem:"函数 f(x)=x²−2x−3 的零点是？", options:["x=1和x=3","x=−1和x=3","x=−1和x=−3","x=1和x=−3"], answer:1},
            {stem:"方程 f(x)=0 的根，对应函数 y=f(x) 图象上的？", options:["最高点","与y轴的交点","与x轴的交点","对称中心"], answer:2},
            {stem:"函数的零点是指使函数值等于多少的自变量？", options:["1","0","−1","最大值"], answer:1}
          ],
          mid: [
            {stem:"不等式 f(x)>0 的解集，对应函数图象？", options:["在x轴上方部分对应的x取值","在x轴下方部分对应的x取值","在y轴右侧部分","的最高点"], answer:0},
            {stem:"已知 f(x)=x²−4，则不等式 f(x)<0 的解集为？", options:["{x|x<−2或x>2}","{x|−2<x<2}","{x|x<2}","{x|x>−2}"], answer:1},
            {stem:"函数 f(x)=x²−5x+6 的零点是？", options:["2和3","−2和−3","1和6","2和−3"], answer:0}
          ],
          hard: [
            {stem:"函数 f(x)=x³−3x+1 在区间 (0,1) 内零点的个数为？", options:["0个","1个","2个","3个"], answer:1},
            {stem:"若函数 f(x)=2ˣ+x−4 的零点在区间 (k,k+1)（k∈Z）内，则 k=？", options:["0","1","2","3"], answer:1, note:"f(1)=−1<0,f(2)=2>0"},
            {stem:"函数 f(x)=lnx+x−3 的零点所在区间是？", options:["(1,2)","(2,3)","(3,4)","(0,1)"], answer:1, note:"f(2)<0,f(3)>0"}
          ]
        },
        practice: {
          easy: [
            {stem:"函数 f(x)=x²−1 的零点是？", options:["x=±1","x=1","x=−1","x=0"], answer:0},
            {stem:"解不等式 x−2>0 的解集是？", options:["{x|x>2}","{x|x<2}","{x|x>−2}","{x|x=2}"], answer:0},
            {stem:"函数图象与x轴的交点横坐标叫作函数的？", options:["顶点","零点","截距","最值"], answer:1}
          ],
          mid: [
            {stem:"解不等式 x²−x−6>0 的解集是？", options:["{x|x<−2或x>3}","{x|−2<x<3}","{x|x>3}","{x|x<−2}"], answer:0, note:"(x−3)(x+2)>0"},
            {stem:"函数 f(x)=x²−4x+3 的零点是？", options:["1和3","−1和−3","1和−3","2和3"], answer:0},
            {stem:"不等式 f(x)<0 的解集对应图象？", options:["x轴下方部分对应的x","x轴上方部分对应的x","y轴左侧","最低点"], answer:0}
          ],
          hard: [
            {stem:"判断 f(x)=lnx+x−3 在 (2,3) 内是否有零点？", options:["有唯一零点","无零点","有两个零点","无法判断"], answer:0, note:"f(2)<0,f(3)>0且单调递增"},
            {stem:"若 f(x)=x²−2ax+1 在 (0,2) 内恰有一个零点，a的范围主区间为？", options:["a>5/4","a<5/4","a=5/4","a>2"], answer:0, note:"f(0)·f(2)<0"},
            {stem:"方程 2ˣ=−x+4 的根所在区间是？", options:["(1,2)","(0,1)","(2,3)","(−1,0)"], answer:0, note:"等价于2ˣ+x−4=0"}
          ]
        }
      },
      {
        name: "函数的应用（一）",
        video: "videos/函数的应用（一）.mp4",
        quiz: {
          easy: [
            {stem:"某商品单价8元，买x件的总价y（元）与x的关系式为？", options:["y=8+x","y=8x","y=8/x","y=x/8"], answer:1},
            {stem:"用一次函数 y=kx+b 描述实际问题时，k表示？", options:["初始值","变化的快慢（变化率）","最大值","自变量"], answer:1},
            {stem:"求最大利润问题通常用哪种函数模型？", options:["一次函数","二次函数","反比例函数","常函数"], answer:1}
          ],
          mid: [
            {stem:"某工厂利润 W=−2x²+40x−150（x为产量），使利润最大的产量x为？", options:["5","10","15","20"], answer:1, note:"对称轴x=10"},
            {stem:"分段计费问题（如水电阶梯价）通常用哪种模型？", options:["正比例函数","分段函数","指数函数","对数函数"], answer:1},
            {stem:"匀速变化的实际问题通常用哪种模型？", options:["一次函数","二次函数","指数函数","分段函数"], answer:0}
          ],
          hard: [
            {stem:"细菌数量每小时翻一倍，初始100个，t小时后数量N的模型为？", options:["N=100+2t","N=100·2ᵗ","N=100t²","N=200t"], answer:1},
            {stem:"选择函数模型描述实际问题，最关键的判断依据是？", options:["计算是否简单","数据的增长（变化）规律","式子是否好看","系数是否为整数"], answer:1},
            {stem:"某商品成本30元，售价x元时销量(100−x)件，利润最大的售价为？", options:["50元","65元","80元","100元"], answer:1, note:"W=(x−30)(100−x)对称轴65"}
          ]
        },
        practice: {
          easy: [
            {stem:"某出租车起步10元含3公里，之后每公里2元，里程x（x≥3）的车费y为？", options:["y=2x+4","y=2x+10","y=10x","y=2x−4"], answer:0, note:"10+2(x−3)"},
            {stem:"周长20的矩形，一边为x，面积S=？", options:["S=−x²+10x","S=20x","S=x²","S=10x"], answer:0, note:"x(10−x)"},
            {stem:"实际问题中，成倍增长常用哪种函数？", options:["一次函数","指数函数","反比例函数","常函数"], answer:1}
          ],
          mid: [
            {stem:"成本30元，售价x元销量(100−x)件，最大利润是？", options:["1000元","1225元","1500元","900元"], answer:1, note:"(65−30)(100−65)=1225"},
            {stem:"用水≤10吨每吨3元，超出每吨5元，用水x（x>10）的水费为？", options:["5x−20","3x+5","5x","3x−20"], answer:0, note:"30+5(x−10)"},
            {stem:"矩形周长20，面积最大时一边长为？", options:["5","10","4","2"], answer:0, note:"对称轴x=5，正方形时最大"}
          ],
          hard: [
            {stem:"某物质每年衰减为原来90%，剩余量约为初始一半约需？", options:["约6.6年","约10年","约3年","约9年"], answer:0, note:"0.9ᵗ=0.5"},
            {stem:"某物质每年衰减为原来90%，初始M₀，t年后剩余量模型为？", options:["M=M₀·0.9ᵗ","M=M₀−0.1t","M=0.9M₀t","M=M₀·1.1ᵗ"], answer:0},
            {stem:"下列最适合描述人口成倍增长的模型是？", options:["一次函数","二次函数","指数函数","分段函数"], answer:2}
          ]
        }
      },
      {
        name: "数学建模活动-决定苹果的最佳出售时间点",
        video: "videos/数学建模活动-决定苹果的最佳出售时间点.mp4",
        quiz: {
          easy: [
            {stem:"本建模问题中，苹果单价y随市面苹果量x的增大而？", options:["增大","减小","不变","先增后减"], answer:1},
            {stem:"保鲜存储成本C是存储时间t的？", options:["常数","减函数","增函数","周期函数"], answer:2},
            {stem:"'物以稀为贵'说明苹果越少，价格？", options:["越高","越低","不变","先高后低"], answer:0}
          ],
          mid: [
            {stem:"最终收益模型 z=−0.001t²+0.06t+0.1 的图象开口方向为？", options:["向上","向下","无法确定","是直线"], answer:1},
            {stem:"对于 z=−0.001t²+0.06t+0.1，使收益z最大的时间t（天）为？", options:["20","30","40","60"], answer:1, note:"对称轴t=−b/2a=30"},
            {stem:"收益z能写成关于t的二次函数，是因为各关系拟合为？", options:["一次或二次多项式","指数函数","三角函数","对数函数"], answer:0}
          ],
          hard: [
            {stem:"由 z=−0.001t²+0.06t+0.1，在t=30时的最大收益z约为？", options:["0.5元","1.0元","1.5元","2.0元"], answer:1, note:"−0.9+1.8+0.1=1.0"},
            {stem:"数学建模的一般过程不包括下列哪一项？", options:["发现问题、提出问题","建立模型、确定参数","验证结果、改进模型","背诵所有公式"], answer:3},
            {stem:"收益 z=y·x−C 中，把y、x、C都用什么变量表示后代入？", options:["时间t","单价y","苹果量x","成本C"], answer:0}
          ]
        },
        practice: {
          easy: [
            {stem:"本问题中t表示？", options:["保鲜存储的天数","苹果单价","苹果总量","成本"], answer:0},
            {stem:"单价y=f(x)是关于苹果量x的？", options:["减函数","增函数","常函数","周期函数"], answer:0},
            {stem:"数学建模是连接数学和什么的桥梁？", options:["现实世界","考试","计算机","语文"], answer:0}
          ],
          mid: [
            {stem:"z=−0.001t²+0.06t+0.1 的对称轴t=？", options:["30","20","40","15"], answer:0, note:"−0.06/(2×−0.001)"},
            {stem:"第30天出售时的最大收益约为？", options:["1.0元","0.5元","1.5元","2.0元"], answer:0},
            {stem:"收益 z 的计算式为？", options:["z=y·x−C","z=y+x+C","z=y·x+C","z=x−y"], answer:0, note:"卖的钱减成本"}
          ],
          hard: [
            {stem:"数学建模一般过程的正确顺序是？", options:["发现提出问题→建立模型→计算求解→验证改进","先计算再建模","先验证再提出问题","先背公式再求解"], answer:0},
            {stem:"用一次/二次函数近似真实关系，主要局限是？", options:["模型是近似的，结果有偏差","计算太复杂","无法求解","不能画图"], answer:0},
            {stem:"建模结果通常整理成什么形式向他人介绍？", options:["建模论文","口头报告","一张图","不需要整理"], answer:0}
          ]
        }
      }
    ]
  }

  ,
  /* ================= 章节七：指数函数、对数函数与幂函数 ================= */
  {
    name: "指数函数、对数函数与幂函数",
    desc: "涵盖：指数与指数函数、对数与对数函数、指对关系、幂函数、增长速度比较、函数应用（二）、生长规律建模。",
    topics: [
      {
        name: "指数与指数函数",
        video: "videos/指数与指数函数.mp4",
        quiz: {
          easy: [
            {stem:"计算 2³ 的值是？", options:["6","8","9","16"], answer:1},
            {stem:"a⁰（a≠0）等于？", options:["0","1","a","不存在"], answer:1},
            {stem:"指数函数 y=2ˣ 的底数是？", options:["x","2","y","e"], answer:1}
          ],
          mid: [
            {stem:"计算 8^(2/3) 的值是？", options:["2","4","6","16"], answer:1, note:"(2³)^(2/3)=2²=4"},
            {stem:"指数函数 y=aˣ 为增函数的条件是？", options:["a>1","0<a<1","a>0","a<0"], answer:0},
            {stem:"化简 2^(−2) 的值是？", options:["−4","1/4","4","−1/4"], answer:1, note:"负指数取倒数"}
          ],
          hard: [
            {stem:"函数 y=(1/2)ˣ 在 R 上是？", options:["增函数","减函数","常函数","先增后减"], answer:1, note:"0<底数<1为减函数"},
            {stem:"比较 2^0.3 与 2^0.5 的大小？", options:["2^0.3>2^0.5","2^0.3<2^0.5","相等","无法比较"], answer:1, note:"底数>1，指数大者大"},
            {stem:"若 aˣ=3，则 a^(2x)=？", options:["6","9","3","27"], answer:1, note:"(aˣ)²=3²=9"}
          ]
        },
        practice: {
          easy: [
            {stem:"计算 3² 的值是？", options:["6","8","9","5"], answer:2},
            {stem:"指数函数 y=aˣ 中，底数 a 需满足？", options:["a>0且a≠1","a>1","a<0","a=1"], answer:0},
            {stem:"5⁰ 等于？", options:["0","1","5","不存在"], answer:1}
          ],
          mid: [
            {stem:"计算 4^(1/2) 的值是？", options:["1","2","4","8"], answer:1, note:"即√4"},
            {stem:"函数 y=3ˣ 在 R 上是？", options:["增函数","减函数","常函数","无单调性"], answer:0},
            {stem:"计算 3^(−1) 的值是？", options:["−3","1/3","3","−1/3"], answer:1}
          ],
          hard: [
            {stem:"比较 (1/2)^0.3 与 (1/2)^0.5 的大小？", options:["前者>后者","前者<后者","相等","无法比较"], answer:0, note:"0<底数<1，指数大者反而小"},
            {stem:"若 2ˣ=5，则 2^(x+1)=？", options:["6","10","7","25"], answer:1, note:"2ˣ·2=10"},
            {stem:"函数 y=aˣ 过点 (2,9)，则 a=？", options:["2","3","9","1/3"], answer:1, note:"a²=9,a>0得a=3"}
          ]
        }
      },
      {
        name: "对数与对数函数",
        video: "videos/对数与对数函数.mp4",
        quiz: {
          easy: [
            {stem:"log₂8 的值是？", options:["2","3","4","8"], answer:1, note:"2³=8"},
            {stem:"log_a1（a>0,a≠1）等于？", options:["0","1","a","不存在"], answer:0},
            {stem:"对数函数 y=log₂x 的定义域是？", options:["R","{x|x>0}","{x|x≥0}","{x|x≠0}"], answer:1}
          ],
          mid: [
            {stem:"lg100 的值是？", options:["1","2","10","100"], answer:1, note:"10²=100"},
            {stem:"log₂4+log₂8 的值是？", options:["5","6","12","32"], answer:0, note:"2+3=5"},
            {stem:"对数函数 y=log_a x 为增函数的条件是？", options:["a>1","0<a<1","a>0","a<1"], answer:0}
          ],
          hard: [
            {stem:"log₃9−log₃3 的值是？", options:["1","2","3","6"], answer:0, note:"2−1=1"},
            {stem:"比较 log₂3 与 log₂5 的大小？", options:["log₂3>log₂5","log₂3<log₂5","相等","无法比较"], answer:1, note:"底>1，真数大者大"},
            {stem:"若 log_a2=1/2，则 a=？", options:["2","4","1/2","√2"], answer:1, note:"a^(1/2)=2,a=4"}
          ]
        },
        practice: {
          easy: [
            {stem:"log₃27 的值是？", options:["2","3","9","27"], answer:1, note:"3³=27"},
            {stem:"log_a a（a>0,a≠1）等于？", options:["0","1","a","不存在"], answer:1},
            {stem:"对数 log₂x 有意义的条件是？", options:["x>0","x≥0","x≠0","x∈R"], answer:0}
          ],
          mid: [
            {stem:"lg1000 的值是？", options:["2","3","10","100"], answer:1},
            {stem:"log₂6−log₂3 的值是？", options:["1","2","3","log₂3"], answer:0, note:"log₂(6/3)=log₂2=1"},
            {stem:"函数 y=log₃x 在定义域上是？", options:["增函数","减函数","常函数","无单调性"], answer:0}
          ],
          hard: [
            {stem:"比较 log_0.5 3 与 log_0.5 2 的大小？", options:["前者>后者","前者<后者","相等","无法比较"], answer:1, note:"0<底<1，真数大者反而小"},
            {stem:"若 lg x=2，则 x=？", options:["20","100","1000","10"], answer:1, note:"x=10²"},
            {stem:"log₂3·log₃4 的值是？", options:["1","2","3","4"], answer:1, note:"换底：lg3/lg2·lg4/lg3=lg4/lg2=2"}
          ]
        }
      },
      {
        name: "指数与对数函数的关系",
        video: "videos/指数与对数函数的关系.mp4",
        quiz: {
          easy: [
            {stem:"指数函数与对数函数互为？", options:["相反函数","反函数","相同函数","无关函数"], answer:1},
            {stem:"y=2ˣ 的反函数是？", options:["y=log₂x","y=2ˣ","y=x²","y=(1/2)ˣ"], answer:0},
            {stem:"互为反函数的两个函数图象关于哪条直线对称？", options:["x轴","y轴","直线y=x","原点"], answer:2}
          ],
          mid: [
            {stem:"y=log₃x 的反函数是？", options:["y=3ˣ","y=log₃x","y=x³","y=(1/3)ˣ"], answer:0},
            {stem:"若点 (2,8) 在 y=2ˣ 图象上，则其反函数图象过点？", options:["(8,2)","(2,8)","(−2,8)","(8,−2)"], answer:0, note:"反函数交换横纵坐标"},
            {stem:"aˣ=N 与 log_a N=x 的关系是？", options:["互为逆运算","相等","无关","相反"], answer:0}
          ],
          hard: [
            {stem:"函数 y=aˣ（a>1）与 y=log_a x 的图象都经过的公共特征是？", options:["都过原点","关于y=x对称","都是减函数","都过(0,1)"], answer:1},
            {stem:"若 f(x)=2ˣ，则 f⁻¹(4)=？", options:["2","4","16","1/2"], answer:0, note:"2ˣ=4→x=2"},
            {stem:"y=log_a x（0<a<1）的反函数的单调性是？", options:["增函数","减函数","常函数","无单调性"], answer:1, note:"反函数y=aˣ,0<a<1为减"}
          ]
        },
        practice: {
          easy: [
            {stem:"y=10ˣ 的反函数是？", options:["y=lgx","y=10ˣ","y=x¹⁰","y=(1/10)ˣ"], answer:0},
            {stem:"互为反函数的图象关于哪条线对称？", options:["y=x","x轴","y轴","y=−x"], answer:0},
            {stem:"对数运算是指数运算的？", options:["逆运算","相同运算","无关运算","相反数"], answer:0}
          ],
          mid: [
            {stem:"y=log₅x 的反函数是？", options:["y=5ˣ","y=x⁵","y=log₅x","y=(1/5)ˣ"], answer:0},
            {stem:"点 (0,1) 在 y=aˣ 上，则反函数图象必过点？", options:["(1,0)","(0,1)","(1,1)","(0,0)"], answer:0},
            {stem:"若 f(x)=3ˣ，则 f⁻¹(9)=？", options:["2","3","9","1/2"], answer:0, note:"3ˣ=9→x=2"}
          ],
          hard: [
            {stem:"函数 y=2ˣ 与 y=log₂x 的图象交点情况（在y=x上）说明？", options:["它们关于y=x对称","它们平行","它们重合","无对称性"], answer:0},
            {stem:"若 f(x)=log₂x，则 f⁻¹(3)=？", options:["8","6","9","3"], answer:0, note:"反函数为2ˣ,2³=8"},
            {stem:"y=aˣ（a>1）是增函数，其反函数 y=log_a x 是？", options:["增函数","减函数","常函数","先增后减"], answer:0, note:"反函数保持单调性方向一致"}
          ]
        }
      },
      {
        name: "幂函数",
        video: "videos/幂函数.mp4",
        quiz: {
          easy: [
            {stem:"下列是幂函数的是？", options:["y=2ˣ","y=x²","y=2x","y=log₂x"], answer:1, note:"形如y=xᵃ"},
            {stem:"幂函数的一般形式是？", options:["y=aˣ","y=xᵃ","y=ax+b","y=log_a x"], answer:1},
            {stem:"所有幂函数的图象都过哪个点？", options:["(0,0)","(1,1)","(0,1)","(1,0)"], answer:1}
          ],
          mid: [
            {stem:"幂函数 y=x² 在 (0,+∞) 上是？", options:["增函数","减函数","常函数","无单调性"], answer:0},
            {stem:"幂函数 y=x⁻¹（即1/x）在 (0,+∞) 上是？", options:["增函数","减函数","常函数","先增后减"], answer:1},
            {stem:"幂函数 y=x^(1/2)（即√x）的定义域是？", options:["R","{x|x≥0}","{x|x>0}","{x|x≠0}"], answer:1}
          ],
          hard: [
            {stem:"幂函数 y=x³ 的奇偶性是？", options:["奇函数","偶函数","非奇非偶","既奇又偶"], answer:0, note:"指数为奇数"},
            {stem:"幂函数 y=x² 的奇偶性是？", options:["奇函数","偶函数","非奇非偶","既奇又偶"], answer:1, note:"指数为偶数"},
            {stem:"若幂函数 y=xᵃ 过点 (2,8)，则 a=？", options:["2","3","4","8"], answer:1, note:"2ᵃ=8→a=3"}
          ]
        },
        practice: {
          easy: [
            {stem:"下列不是幂函数的是？", options:["y=x³","y=x^(1/2)","y=3ˣ","y=x⁻¹"], answer:2},
            {stem:"幂函数 y=xᵃ 中变化的是？", options:["底数x","指数a为常数","系数","以上都对"], answer:1},
            {stem:"幂函数图象必过的定点是？", options:["(1,1)","(0,0)","(0,1)","(1,0)"], answer:0}
          ],
          mid: [
            {stem:"幂函数 y=x³ 在 R 上是？", options:["增函数","减函数","常函数","无单调性"], answer:0},
            {stem:"幂函数 y=1/x 在 (0,+∞) 上是？", options:["增函数","减函数","常函数","先增后减"], answer:1},
            {stem:"幂函数 y=x^(1/2) 在 (0,+∞) 上是？", options:["增函数","减函数","常函数","无单调性"], answer:0}
          ],
          hard: [
            {stem:"幂函数 y=x⁴ 的奇偶性是？", options:["奇函数","偶函数","非奇非偶","既奇又偶"], answer:1},
            {stem:"若幂函数 y=xᵃ 过点 (3,9)，则 a=？", options:["2","3","9","1/2"], answer:0, note:"3ᵃ=9→a=2"},
            {stem:"幂函数 y=x⁻² 在 (0,+∞) 上是？", options:["增函数","减函数","常函数","无单调性"], answer:1, note:"即1/x²，正区间递减"}
          ]
        }
      },
      {
        name: "增长速度比较",
        video: "videos/增长速度比较.mp4",
        quiz: {
          easy: [
            {stem:"当 x 足够大时，增长最快的函数是？", options:["y=x","y=x²","y=2ˣ","y=log₂x"], answer:2, note:"指数增长最快"},
            {stem:"当 x 足够大时，增长最慢的函数是？", options:["y=x","y=x²","y=2ˣ","y=log₂x"], answer:3, note:"对数增长最慢"},
            {stem:"指数函数的增长特点是？", options:["越来越快","匀速","越来越慢","不变"], answer:0}
          ],
          mid: [
            {stem:"三类函数增长速度由快到慢排序（x很大时）是？", options:["指数>幂>对数","对数>幂>指数","幂>指数>对数","指数>对数>幂"], answer:0},
            {stem:"对数函数的增长特点是？", options:["越来越快","匀速","越来越慢","忽快忽慢"], answer:2},
            {stem:"'指数爆炸'描述的是哪类函数？", options:["一次函数","对数函数","指数函数","常函数"], answer:2}
          ],
          hard: [
            {stem:"当x充分大时，2ˣ 与 x¹⁰⁰ 的大小关系是？", options:["2ˣ最终更大","x¹⁰⁰永远更大","相等","无法比较"], answer:0, note:"指数最终超过任何幂函数"},
            {stem:"函数 y=x 与 y=log₂x，x充分大时？", options:["y=x更大","y=log₂x更大","相等","无法确定"], answer:0},
            {stem:"选择模型时若要求'先慢后极快'，应选？", options:["一次函数","对数函数","指数函数","常函数"], answer:2}
          ]
        },
        practice: {
          easy: [
            {stem:"下列增长最快的是（x很大时）？", options:["y=log₃x","y=x","y=3ˣ","y=x³"], answer:2},
            {stem:"对数函数随x增大，增长速度？", options:["越来越快","越来越慢","不变","忽快忽慢"], answer:1},
            {stem:"一次函数的增长方式是？", options:["匀速","加速","减速","爆炸式"], answer:0}
          ],
          mid: [
            {stem:"x充分大时，增长最慢的是？", options:["y=2ˣ","y=x²","y=x","y=log₂x"], answer:3},
            {stem:"'指数爆炸、对数缓慢'描述的是它们的？", options:["增长速度特征","定义域","值域","对称性"], answer:0},
            {stem:"幂函数 y=x² 与指数 y=2ˣ，x充分大时？", options:["2ˣ更大","x²更大","相等","无法比较"], answer:0}
          ],
          hard: [
            {stem:"银行复利（本息按比例增长）适合用哪种模型？", options:["指数函数","一次函数","对数函数","常函数"], answer:0},
            {stem:"某量增长'起初迅速、后趋平缓'，最适合用？", options:["指数函数","对数函数","二次函数","一次函数"], answer:1},
            {stem:"当x=10时，2ˣ 约1024，x²=100，说明？", options:["指数增长远超幂函数","幂函数更快","两者相等","无规律"], answer:0}
          ]
        }
      },
      {
        name: "函数应用（二）",
        video: "videos/函数应用（二）.mp4",
        quiz: {
          easy: [
            {stem:"人口按固定比例增长，适合用哪种函数建模？", options:["指数函数","一次函数","二次函数","对数函数"], answer:0},
            {stem:"用函数解决实际问题的第一步是？", options:["求解","建立函数模型","验证","画图"], answer:1},
            {stem:"放射性物质衰变常用哪种模型？", options:["指数函数","一次函数","幂函数","对数函数"], answer:0}
          ],
          mid: [
            {stem:"某存款年利率r，本金P，t年后本息（复利）为？", options:["P(1+r)ᵗ","P+rt","Prt","P·rᵗ"], answer:0},
            {stem:"声音强度、地震震级等常用哪种函数刻画？", options:["对数函数","指数函数","一次函数","二次函数"], answer:0, note:"分贝、里氏震级都是对数标度"},
            {stem:"细菌每20分钟繁殖一代，属于哪种增长？", options:["指数增长","线性增长","对数增长","匀速增长"], answer:0}
          ],
          hard: [
            {stem:"某物质每小时衰减10%，初始量a，t小时后为？", options:["a·0.9ᵗ","a·1.1ᵗ","a−0.1t","a·0.1ᵗ"], answer:0},
            {stem:"pH值 pH=−lg[H⁺]，若[H⁺]增大10倍，pH如何变化？", options:["减小1","增大1","减小10","不变"], answer:0, note:"lg增大1，取负减小1"},
            {stem:"复利公式 A=P(1+r)ᵗ 中，使A随t增长越来越快的原因是？", options:["指数增长特性","一次增长","匀速","衰减"], answer:0}
          ]
        },
        practice: {
          easy: [
            {stem:"复利存款的本息随时间的增长方式是？", options:["指数增长","匀速增长","减速增长","不变"], answer:0},
            {stem:"用函数建模的核心是根据什么选模型？", options:["数据的变化规律","式子好看","计算简单","题目长短"], answer:0},
            {stem:"放射性衰变量随时间？", options:["指数减少","线性减少","增加","不变"], answer:0}
          ],
          mid: [
            {stem:"本金1000元，年利率5%复利，1年后本息为？", options:["1050元","1005元","1500元","1055元"], answer:0, note:"1000×1.05"},
            {stem:"地震震级、声音分贝采用哪种标度？", options:["对数标度","线性标度","指数标度","平方标度"], answer:0},
            {stem:"某菌落每小时翻倍，初始100，3小时后为？", options:["800","300","600","1000"], answer:0, note:"100×2³=800"}
          ],
          hard: [
            {stem:"某物质每年衰减为原来80%，初始a，3年后约为？", options:["0.512a","0.8a","0.6a","0.24a"], answer:0, note:"a×0.8³=0.512a"},
            {stem:"[H⁺]从10⁻⁷减小到10⁻⁸，pH从7变为？", options:["8","6","9","5"], answer:0, note:"pH=−lg[H⁺]"},
            {stem:"某投资年增长率20%，多少年约翻倍（lg2≈0.301,lg1.2≈0.079）？", options:["约3.8年","约2年","约5年","约10年"], answer:0, note:"t=lg2/lg1.2≈3.8"}
          ]
        }
      },
      {
        name: "数学建模-生长规律描述",
        video: "videos/数学建模-生长规律描述.mp4",
        quiz: {
          easy: [
            {stem:"描述生物在食物充足初期的快速生长，常用哪种模型？", options:["指数模型","一次模型","常函数","减函数"], answer:0},
            {stem:"数学建模描述生长规律的第一步是？", options:["收集数据","背公式","直接求解","画装饰图"], answer:0},
            {stem:"生物种群数量在资源有限时最终会趋于？", options:["无限增长","一个稳定值","归零","随机变化"], answer:1}
          ],
          mid: [
            {stem:"许多生物生长呈'先慢—再快—后慢'的S形，常用哪类曲线描述？", options:["Logistic（逻辑斯蒂）曲线","直线","抛物线","反比例曲线"], answer:0},
            {stem:"生长初期近似指数增长，说明此阶段增长率？", options:["与当前数量成正比","恒定","为零","递减"], answer:0},
            {stem:"用模型描述生长规律后，需用什么来检验模型？", options:["实际观测数据","个人猜测","公式美观度","题目难度"], answer:0}
          ],
          hard: [
            {stem:"Logistic 模型与纯指数模型的关键区别是？", options:["Logistic有增长上限（环境容量）","二者完全相同","指数更慢","Logistic无上限"], answer:0},
            {stem:"某种群数量N随时间起初按 N=N₀·2ᵗ 增长，这一近似只在什么阶段成立？", options:["资源充足的早期","全过程","后期","任意阶段"], answer:0},
            {stem:"建立生长模型的一般流程是？", options:["收集数据→建模→求解→检验改进","先求解再收集","先检验再建模","只需背公式"], answer:0}
          ]
        },
        practice: {
          easy: [
            {stem:"生物早期快速生长阶段可近似用哪种模型？", options:["指数模型","减函数","常函数","一次减少"], answer:0},
            {stem:"数学建模描述生长规律，是把现实转化为？", options:["数学模型","文字故事","图画","表格封面"], answer:0},
            {stem:"资源有限时，种群数量最终趋于？", options:["稳定值","无穷大","零","负数"], answer:0}
          ],
          mid: [
            {stem:"S形生长曲线常用于描述？", options:["种群在有限资源下的生长","匀速运动","自由落体","价格波动"], answer:0},
            {stem:"某细菌初期每小时翻倍，符合哪种增长？", options:["指数增长","线性增长","对数增长","负增长"], answer:0},
            {stem:"建模后发现预测与实际有偏差，应当？", options:["改进模型","放弃数据","忽略偏差","随意修改数据"], answer:0}
          ],
          hard: [
            {stem:"Logistic 模型中，种群增长速度最快出现在？", options:["数量约为容量一半时","一开始","接近容量时","数量为零时"], answer:0},
            {stem:"纯指数模型预测长期种群会？", options:["无限增大（不现实）","趋于稳定","逐渐减少","保持不变"], answer:0, note:"故需引入环境容量修正"},
            {stem:"建立生长模型时引入'环境容量K'的目的是？", options:["体现增长上限使模型更真实","让计算更简单","装饰模型","去掉数据"], answer:0}
          ]
        }
      }
    ]
  }

  ,
  /* ================= 章节八：统计与概率 ================= */
  {
    name: "统计与概率",
    desc: "涵盖：统计（数据收集、数字特征、样本估计总体）、编号样本估算总数、概率、统计概率实际应用。",
    topics: [
      {
        name: "统计",
        video: "videos/统计.mp4",
        quiz: {
          easy: [
            {stem:"数据 2,4,6,8,10 的平均数是？", options:["5","6","7","8"], answer:1, note:"(2+4+6+8+10)/5=6"},
            {stem:"一组数据中出现次数最多的数叫作？", options:["平均数","中位数","众数","方差"], answer:2},
            {stem:"将数据从小到大排列后处于中间位置的数是？", options:["平均数","中位数","众数","极差"], answer:1}
          ],
          mid: [
            {stem:"数据 1,2,3,4,5 的中位数是？", options:["2","3","4","2.5"], answer:1},
            {stem:"数据 3,3,5,7,7,7 的众数是？", options:["3","5","7","不存在"], answer:2},
            {stem:"衡量一组数据离散程度（波动大小）的量是？", options:["平均数","中位数","方差","众数"], answer:2}
          ],
          hard: [
            {stem:"用样本估计总体时，样本应具有？", options:["随机性和代表性","越小越好","全部相同","主观选择"], answer:0},
            {stem:"数据 2,2,4,4 的方差是？", options:["0","1","2","4"], answer:1, note:"均值3，方差=[(1+1+1+1)]/4=1"},
            {stem:"若一组数据每个都加上同一常数c，则方差？", options:["不变","加c","乘c","加c²"], answer:0, note:"平移不改变离散程度"}
          ]
        },
        practice: {
          easy: [
            {stem:"数据 1,3,5,7 的平均数是？", options:["3","4","5","6"], answer:1, note:"16/4=4"},
            {stem:"抽样调查中，被抽取的部分个体组成？", options:["总体","样本","个体","方差"], answer:1},
            {stem:"数据 5,5,6,8 的众数是？", options:["5","6","8","不存在"], answer:0}
          ],
          mid: [
            {stem:"数据 2,4,6,8 的中位数是？", options:["4","5","6","4.5"], answer:1, note:"(4+6)/2=5"},
            {stem:"要了解全校学生视力，最合适的方法是？", options:["普查","抽样调查","只问一个班","不调查"], answer:1},
            {stem:"方差越大说明数据？", options:["越集中","越分散","平均数越大","众数越多"], answer:1}
          ],
          hard: [
            {stem:"数据 1,2,3,4,5 的方差是？", options:["2","3","4","5"], answer:0, note:"均值3，方差=(4+1+0+1+4)/5=2"},
            {stem:"若数据每个都乘以2，则方差变为原来的？", options:["2倍","4倍","不变","一半"], answer:1, note:"方差乘系数平方"},
            {stem:"抽样时'分层抽样'适用于总体？", options:["由差异明显的几部分组成","完全均匀","个体极少","无差异"], answer:0}
          ]
        }
      },
      {
        name: "数学探究-编号样本估算总数",
        video: "videos/数学探究-编号样本估算总数.mp4",
        quiz: {
          easy: [
            {stem:"'标记重捕法'常用于估计什么？", options:["种群总数量","平均身高","方差","中位数"], answer:0},
            {stem:"标记重捕法中，若标记数为M，第二次捕获n只中有m只带标记，估计总数N约为？", options:["M·n/m","M+n","M·m/n","n·m/M"], answer:0},
            {stem:"用样本比例估计总体，依据的是？", options:["样本与总体比例近似相等","随机猜测","总体已知","样本最大"], answer:0}
          ],
          mid: [
            {stem:"先标记50条鱼放回，再捕100条有10条带标记，估计鱼塘总数约？", options:["500","1000","150","5000"], answer:0, note:"50×100/10=500"},
            {stem:"标记重捕法要求标记个体重新充分混合的目的是？", options:["保证抽样随机","便于计数","减少工作量","增大误差"], answer:0},
            {stem:"若第二次捕获中带标记比例越低，估计的总数？", options:["越大","越小","不变","为零"], answer:0}
          ],
          hard: [
            {stem:"标记20只鸟放回，重捕80只有5只带标记，估计种群约？", options:["320","400","100","1600"], answer:0, note:"20×80/5=320"},
            {stem:"标记重捕法误差可能偏大的原因是？", options:["标记个体死亡或混合不均","计数太快","样本过大","公式错误"], answer:0},
            {stem:"该方法的核心数学思想是？", options:["用局部比例估计整体","精确计数","排列组合","方程求根"], answer:0}
          ]
        },
        practice: {
          easy: [
            {stem:"标记重捕法估计的对象是？", options:["总数量","平均数","方差","众数"], answer:0},
            {stem:"用样本中标记比例估计总体，前提是抽样？", options:["随机","主观","有偏","固定"], answer:0},
            {stem:"标记50个，重捕中有一半带标记，说明总数约为标记数的？", options:["2倍","1倍","10倍","一半"], answer:0}
          ],
          mid: [
            {stem:"标记100条鱼，重捕200条有20条带标记，估计总数约？", options:["1000","2000","500","200"], answer:0, note:"100×200/20=1000"},
            {stem:"标记重捕法属于哪种统计思想？", options:["用样本估计总体","普查","精确统计","随机模拟"], answer:0},
            {stem:"重捕比例 m/n 越大，估计总数N越？", options:["小","大","不变","无关"], answer:0, note:"N=Mn/m，m大则N小"}
          ],
          hard: [
            {stem:"标记30只放回，重捕60只有6只带标记，估计约？", options:["300","180","100","360"], answer:0, note:"30×60/6=300"},
            {stem:"为提高估计准确性，应？", options:["增大重捕样本量","减少标记数","只捕一次","随意估计"], answer:0},
            {stem:"若部分标记脱落，估计的总数会？", options:["偏大","偏小","不变","为零"], answer:0, note:"带标记数偏少，Mn/m偏大"}
          ]
        }
      },
      {
        name: "概率",
        video: "videos/概率.mp4",
        quiz: {
          easy: [
            {stem:"掷一枚均匀骰子，出现'3点'的概率是？", options:["1/2","1/3","1/6","1/4"], answer:2},
            {stem:"概率的取值范围是？", options:["0到1之间","任意实数","大于1","小于0"], answer:0},
            {stem:"必然事件的概率是？", options:["0","0.5","1","不确定"], answer:2}
          ],
          mid: [
            {stem:"抛一枚硬币两次，样本空间包含几个基本结果？", options:["2","3","4","8"], answer:2, note:"正正、正反、反正、反反"},
            {stem:"掷一枚骰子，出现偶数点的概率是？", options:["1/6","1/3","1/2","2/3"], answer:2, note:"2,4,6共3个"},
            {stem:"古典概型中每个基本事件发生的可能性？", options:["相等","不等","随机","未知"], answer:0}
          ],
          hard: [
            {stem:"两个相互独立事件A、B，P(A)=0.5,P(B)=0.4，则P(A∩B)=？", options:["0.9","0.2","0.1","0.5"], answer:1, note:"独立事件P(A)·P(B)=0.2"},
            {stem:"从1~9中随机取一个数，取到质数的概率是？", options:["4/9","1/3","5/9","1/2"], answer:0, note:"质数2,3,5,7共4个"},
            {stem:"抛两枚骰子，点数之和为7的概率是？", options:["1/6","1/9","5/36","1/12"], answer:0, note:"共6种，6/36=1/6"}
          ]
        },
        practice: {
          easy: [
            {stem:"抛一枚均匀硬币，正面朝上的概率是？", options:["1/2","1/3","1/4","1"], answer:0},
            {stem:"不可能事件的概率是？", options:["0","0.5","1","负数"], answer:0},
            {stem:"所有可能结果组成的集合称为？", options:["样本空间","事件","概率","总体"], answer:0}
          ],
          mid: [
            {stem:"掷一枚骰子，点数大于4的概率是？", options:["1/3","1/2","1/6","2/3"], answer:0, note:"5,6共2个,2/6=1/3"},
            {stem:"从红、黄、蓝三球中随机取一个是红球的概率是？", options:["1/3","1/2","2/3","1"], answer:0},
            {stem:"古典概型要求样本空间中的结果是有限且？", options:["等可能","无限","不等","随机不定"], answer:0}
          ],
          hard: [
            {stem:"独立事件A、B，P(A)=0.6,P(B)=0.5，则P(A∩B)=？", options:["0.3","1.1","0.1","0.5"], answer:0, note:"0.6×0.5=0.3"},
            {stem:"抛两枚硬币，恰好一正一反的概率是？", options:["1/2","1/4","1/3","3/4"], answer:0, note:"正反、反正共2种,2/4=1/2"},
            {stem:"从1~10随机取一数，取到偶数或大于8的数概率是？", options:["3/5","1/2","2/5","7/10"], answer:0, note:"偶数5个+9共6个,6/10=3/5"}
          ]
        }
      },
      {
        name: "统计概率实际应用",
        video: "videos/统计概率实际应用.mp4",
        quiz: {
          easy: [
            {stem:"抽奖、天气预报的'降水概率'体现的是概率的？", options:["实际应用","定义式","公理","无关内容"], answer:0},
            {stem:"用频率估计概率，需要试验次数？", options:["足够多","很少","一次","为零"], answer:0},
            {stem:"'明天降水概率70%'表示？", options:["降水的可能性为70%","一定下雨","70%的地方下雨","下雨70小时"], answer:0}
          ],
          mid: [
            {stem:"某产品100件抽检有2件次品，估计次品率约为？", options:["2%","20%","0.2%","50%"], answer:0},
            {stem:"大量重复试验中，事件发生的频率会稳定在其？", options:["概率附近","0附近","1附近","平均数"], answer:0},
            {stem:"用样本数据的平均数估计总体平均数，依据是？", options:["样本估计总体","主观判断","总体已知","随机猜测"], answer:0}
          ],
          hard: [
            {stem:"某射手命中率0.8，独立射击2次都命中的概率是？", options:["0.64","0.8","1.6","0.16"], answer:0, note:"0.8×0.8=0.64"},
            {stem:"抽样调查显示某地支持率60%，误差±3%，则真实支持率约在？", options:["57%~63%","60%","30%~90%","无法估计"], answer:0},
            {stem:"保险公司用大量数据估计风险，依据的是？", options:["频率稳定于概率","随机猜测","单次结果","主观经验"], answer:0}
          ]
        },
        practice: {
          easy: [
            {stem:"用频率估计概率时，试验次数应？", options:["尽可能多","越少越好","恰好一次","无所谓"], answer:0},
            {stem:"产品合格率是概率在哪方面的应用？", options:["质量检测","天气","考试","娱乐"], answer:0},
            {stem:"'中奖概率1%'表示中奖的？", options:["可能性为1%","一定中奖","中1元","不会中奖"], answer:0}
          ],
          mid: [
            {stem:"抽检200件产品有4件次品，估计次品率约？", options:["2%","4%","0.4%","20%"], answer:0, note:"4/200=2%"},
            {stem:"某地1000人抽样，600人支持，估计支持率约？", options:["60%","6%","40%","100%"], answer:0},
            {stem:"频率与概率的关系是？", options:["试验多时频率稳定在概率附近","二者永远相等","无关","频率恒大于概率"], answer:0}
          ],
          hard: [
            {stem:"某射手命中率0.9，独立射击2次至少命中1次的概率是？", options:["0.99","0.81","0.9","0.18"], answer:0, note:"1−0.1×0.1=0.99"},
            {stem:"某疾病发病率0.1%，用于评估风险体现概率的？", options:["实际决策应用","理论推导","无用信息","随机猜测"], answer:0},
            {stem:"抛硬币10000次正面约5000次，说明？", options:["频率稳定于概率0.5","硬币不均匀","纯属巧合","无规律"], answer:0}
          ]
        }
      }
    ]
  }

  ,
  /* ================= 章节九：平面向量初步 ================= */
  {
    name: "平面向量初步",
    desc: "涵盖：平面向量线性运算、基本定理与坐标运算、线性运算应用。",
    topics: [
      {
        name: "平面向量线性运算",
        video: "videos/平面向量线性运算.mp4",
        quiz: {
          easy: [
            {stem:"既有大小又有方向的量称为？", options:["数量","向量","标量","常量"], answer:1},
            {stem:"长度为0的向量称为？", options:["单位向量","零向量","相反向量","平行向量"], answer:1},
            {stem:"向量加法'首尾相接'的法则叫作？", options:["三角形法则","平方法则","分配律","结合律"], answer:0}
          ],
          mid: [
            {stem:"a+(−a)等于？", options:["2a","零向量","a","−2a"], answer:1},
            {stem:"向量 a 与 −a 的关系是？", options:["方向相同","大小相等方向相反","完全相同","垂直"], answer:1},
            {stem:"实数λ与向量a的积 λa，当λ<0时方向？", options:["与a相同","与a相反","垂直于a","为零"], answer:1}
          ],
          hard: [
            {stem:"在平行四边形ABCD中，AB+AD=？", options:["AC","BD","CA","DB"], answer:0, note:"对角线AC"},
            {stem:"AB−AC等于？", options:["CB","BC","BA","CA"], answer:0, note:"AB−AC=CB"},
            {stem:"若 a、b 为非零向量且 a=λb（λ∈R），则 a 与 b？", options:["共线（平行）","垂直","相等","无关"], answer:0}
          ]
        },
        practice: {
          easy: [
            {stem:"下列是向量的是？", options:["温度","位移","质量","时间"], answer:1, note:"位移有方向"},
            {stem:"模为1的向量称为？", options:["零向量","单位向量","相反向量","负向量"], answer:1},
            {stem:"向量减法 a−b 可看作 a 加上？", options:["b","−b","2b","0"], answer:1}
          ],
          mid: [
            {stem:"AB+BC等于？", options:["AC","CA","BA","CB"], answer:0, note:"首尾相接"},
            {stem:"2a+3a等于？", options:["5a","6a","a","−a"], answer:0},
            {stem:"向量 a 与 2a 的关系是？", options:["共线","垂直","相等","相反"], answer:0}
          ],
          hard: [
            {stem:"平行四边形ABCD中，AB+AD表示哪条对角线？", options:["AC","BD","BC","CD"], answer:0},
            {stem:"若 AB=a，AD=b，则 DB=？", options:["a−b","b−a","a+b","−a−b"], answer:0, note:"DB=AB−AD"},
            {stem:"O为三角形重心时，OA+OB+OC=？", options:["零向量","OA","3OA","AB"], answer:0, note:"重心性质"}
          ]
        }
      },
      {
        name: "向量基本定理与坐标运算",
        video: "videos/向量基本定理与坐标运算.mp4",
        quiz: {
          easy: [
            {stem:"平面内任一向量都可由两个不共线向量唯一表示，这是？", options:["平面向量基本定理","三角形法则","勾股定理","韦达定理"], answer:0},
            {stem:"向量 a=(3,4) 的坐标中，横坐标是？", options:["3","4","7","5"], answer:0},
            {stem:"若 a=(x₁,y₁)，b=(x₂,y₂)，则 a+b=？", options:["(x₁+x₂,y₁+y₂)","(x₁x₂,y₁y₂)","(x₁−x₂,y₁−y₂)","(x₁+y₁,x₂+y₂)"], answer:0}
          ],
          mid: [
            {stem:"向量 a=(1,2)，b=(3,1)，则 a+b=？", options:["(4,3)","(3,2)","(2,1)","(4,2)"], answer:0},
            {stem:"向量 a=(3,4) 的模 |a|=？", options:["5","7","12","25"], answer:0, note:"√(9+16)=5"},
            {stem:"若 a=(2,3)，则 2a=？", options:["(4,6)","(2,6)","(4,3)","(2,3)"], answer:0}
          ],
          hard: [
            {stem:"已知 A(1,2)，B(4,6)，则向量 AB=？", options:["(3,4)","(5,8)","(−3,−4)","(3,8)"], answer:0, note:"终点减起点"},
            {stem:"a=(2,4)，b=(1,2)，则 a 与 b 的关系是？", options:["共线","垂直","相等","无关"], answer:0, note:"a=2b"},
            {stem:"向量 a=(1,2)，b=(3,k) 共线，则 k=？", options:["6","3","2","1"], answer:0, note:"1·k−2·3=0"}
          ]
        },
        practice: {
          easy: [
            {stem:"向量 a=(5,12) 的横坐标是？", options:["5","12","13","17"], answer:0},
            {stem:"a=(1,1)，b=(2,3)，则 a+b=？", options:["(3,4)","(2,3)","(1,2)","(3,3)"], answer:0},
            {stem:"选作基底的两个向量必须？", options:["不共线","共线","相等","垂直"], answer:0}
          ],
          mid: [
            {stem:"向量 a=(6,8) 的模是？", options:["10","14","48","100"], answer:0, note:"√(36+64)=10"},
            {stem:"a=(4,2)，b=(1,3)，则 a−b=？", options:["(3,−1)","(5,5)","(3,1)","(−3,1)"], answer:0},
            {stem:"若 a=(1,2)，则 3a=？", options:["(3,6)","(1,6)","(3,2)","(4,5)"], answer:0}
          ],
          hard: [
            {stem:"已知 A(2,1)，B(5,5)，向量 AB 的模为？", options:["5","4","3","7"], answer:0, note:"AB=(3,4),|AB|=5"},
            {stem:"a=(3,6)，b=(1,2)，二者关系是？", options:["共线","垂直","相反","无关"], answer:0, note:"a=3b"},
            {stem:"a=(2,3)，b=(4,m) 共线，则 m=？", options:["6","5","3","8"], answer:0, note:"2m−3·4=0→m=6"}
          ]
        }
      },
      {
        name: "平面向量线性运算应用",
        video: "videos/平面向量线性运算应用.mp4",
        quiz: {
          easy: [
            {stem:"用向量可以证明几何中的哪类问题？", options:["平行、共线、中点等","方程求根","概率","数列"], answer:0},
            {stem:"线段中点M，则 OM=？（O为原点）", options:["(OA+OB)/2","OA+OB","OA−OB","OA·OB"], answer:0},
            {stem:"若 AB=λCD，则 AB 与 CD？", options:["平行（共线）","垂直","相等","无关"], answer:0}
          ],
          mid: [
            {stem:"A(0,0),B(4,0),则AB中点坐标是？", options:["(2,0)","(4,0)","(0,2)","(2,2)"], answer:0},
            {stem:"用向量证明三点A、B、C共线，可证 AB 与 AC？", options:["共线（成比例）","垂直","相等","模相等"], answer:0},
            {stem:"若 M 为 BC 中点，则 AM=？", options:["(AB+AC)/2","AB+AC","AB−AC","AB·AC"], answer:0, note:"中线向量"}
          ],
          hard: [
            {stem:"已知 A(1,1),B(3,5)，AB中点坐标是？", options:["(2,3)","(4,6)","(1,2)","(2,2)"], answer:0, note:"((1+3)/2,(1+5)/2)"},
            {stem:"三点A(0,0),B(1,2),C(2,4)是否共线？", options:["共线","不共线","无法判断","垂直"], answer:0, note:"AB=(1,2),AC=(2,4)=2AB"},
            {stem:"平行四边形对角线互相平分，可用什么工具简洁证明？", options:["向量","解方程","概率","数列"], answer:0}
          ]
        },
        practice: {
          easy: [
            {stem:"向量常用于证明几何中的？", options:["平行与共线","方程解","频率","众数"], answer:0},
            {stem:"原点O，A(2,4)，则OA的中点坐标是？", options:["(1,2)","(2,4)","(4,8)","(0,0)"], answer:0},
            {stem:"若两向量成比例，则它们？", options:["共线","垂直","无关","相等"], answer:0}
          ],
          mid: [
            {stem:"A(2,2),B(6,6)，则AB中点坐标是？", options:["(4,4)","(8,8)","(2,6)","(4,6)"], answer:0},
            {stem:"要证A、B、C三点共线，需证 AB 与 BC？", options:["共线","垂直","模相等","无关"], answer:0},
            {stem:"M为AB中点，O为原点，OM=？", options:["(OA+OB)/2","OA+OB","OA−OB","2OA"], answer:0}
          ],
          hard: [
            {stem:"A(−1,2),B(3,4)，AB中点坐标是？", options:["(1,3)","(2,6)","(1,2)","(2,3)"], answer:0, note:"((−1+3)/2,(2+4)/2)"},
            {stem:"A(0,0),B(2,1),C(4,2)三点关系？", options:["共线","不共线","垂直","构成直角"], answer:0, note:"AC=2AB"},
            {stem:"用向量法证明中点问题，核心是把几何关系转化为？", options:["向量等式","数值方程","概率式","不等式"], answer:0}
          ]
        }
      }
    ]
  }

  /* ================= 以后加新章节：在这里加逗号，再粘一个 {...} 章节对象 ================= */

];
