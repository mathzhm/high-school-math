# Skill：高中数学复习资料制作（视频 + 互动网页）

> 版本 v1.0 ｜ 适用：家长/老师为高中生制作自学复习材料
> 首次实践案例：高中数学《集合》专题（表示方法 / 基本关系 / 基本运算）

## 一、Skill 用途
把一个高中数学知识点（或章节），快速产出一套"复习视频脚本 + 分难度练习 + 可交互 HTML 网页"的完整复习资料。

## 二、输入（调用时需提供）
- 学科章节主题：例如"集合""函数的单调性"
- 需要覆盖的子知识点：例如"表示方法 / 基本关系 / 基本运算"
- 单集目标时长：例如"每集 3 分钟"
- 目标学生水平：入门 / 复习 / 冲刺
- 素材：已录好的视频/音频文件（可选）、吉祥物图片（可选）

## 三、标准产出物
1. 每个子知识点一集的**视频串词脚本**（含画面提示 + 口播文字）
2. 每集配套**分难度练习题**（简单 / 中等 / 困难，各 3 题，附答案）
3. 一个**单文件 HTML 网页**：嵌入视频、Tab 切换难度、点击显示/隐藏答案、吉祥物形象、进阶拓展卡片
4. （可选）用于打印的 PDF 练习题版本

## 四、执行流程（Steps）

### 步骤 1：拆分知识点，规划集数
- 一个子知识点 = 一集，每集控制在目标时长内（3 分钟约 550-650 字口播）
- 若内容过多，拆成多个短集，集与集之间加"上节课/下节课"衔接语

### 步骤 2：撰写视频串词
- 结构：开场问候 → 概念 → 分点讲解 → 例子 → 本集小结 → 预告下集
- 数学符号首次出现时标注读法（如 ∈ 读"属于"）
- 关键结论加粗提醒（如子集个数公式 2ⁿ）

### 步骤 3：出分难度练习题（关键校验环节）
- 简单档：符号识别、直接填空
- 中等档：一步计算、表示法转换
- 困难档：含参数讨论、区间运算、子集计数
- ⚠️ **含参数的题目必须把每个候选解代回原集合验证"互异性"**，不能想当然给答案

### 步骤 4：生成 HTML 网页
- 单文件 HTML（CSS 内嵌 <style>，JS 内嵌 <script>），方便分发
- 布局：多集横向分列（flex），窄屏自动变竖排（@media max-width:900px）
- 视频用 <video><source src="本地文件名.mp4">，**引用本地文件名而非临时外链**
- 练习题：Tab 按钮切难度 + 按钮点击 toggle 显示答案
- 加吉祥物形象（fixed 定位右下角）增加趣味
- 需要时加"进阶拓展"卡片，用差异化配色区分正课

### 步骤 5：交付与使用说明
- 提醒把 html 与所有视频、图片放在**同一文件夹**
- 如需在线分享，须将视频托管到稳定的外链平台
- 可选：另出一份 PDF 打印版

## 五、经验教训（Lessons Learned）
1. **时长先估算**：口播约 200-250 字/分钟，别把 15 分钟内容塞进 3 分钟。
2. **临时文件外链会失效**：嵌入网页优先用本地文件名。
3. **数学题必须验算**：含参数、涉及互异性的题目，逐个候选解代回检验。
4. **区分音频/视频**：嵌入前确认 MIME 类型，mp3 用 <audio>，mp4 用 <video>。
5. **布局别太长**：多集内容横向分列，避免页面竖着拖很长。

## 六、可复用代码模板

> 下次换主题时：替换文字、题目、视频文件名与吉祥物图片即可。
> 需准备文件（与 html 同目录）：集合表示法.mp4、集合基本关系.mp4、集合基本运算.mp4、兔子.png

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>高中数学 · 集合专题复习</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
    background: linear-gradient(135deg, #eaf2ff 0%, #f5f9ff 100%);
    color: #333; line-height: 1.7; padding: 20px;
  }
  .container { max-width: 1300px; margin: 0 auto; }
  .header {
    text-align: center;
    background: linear-gradient(135deg, #7b9cf0, #a6bef5);
    color: #fff; padding: 26px 20px; border-radius: 20px;
    box-shadow: 0 6px 20px rgba(123,156,240,0.3); margin-bottom: 26px;
  }
  .header h1 { font-size: 26px; margin-bottom: 6px; }
  .header p { font-size: 14px; opacity: 0.95; }
  .lessons { display: flex; gap: 20px; align-items: stretch; }
  .lesson {
    flex: 1; background: #fff; border-radius: 18px; padding: 20px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.06);
    display: flex; flex-direction: column;
  }
  .lesson-title {
    display: flex; align-items: center;
    font-size: 18px; color: #5a7fd6; font-weight: bold; margin-bottom: 14px;
  }
  .lesson-title .num {
    background: #7b9cf0; color: #fff;
    width: 30px; height: 30px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    margin-right: 10px; font-size: 16px; flex-shrink: 0;
  }
  video { width: 100%; border-radius: 12px; margin-bottom: 6px; background:#000; }
  .media-note { font-size: 12px; color: #999; margin-bottom: 14px; }
  .quiz-title {
    font-size: 15px; color: #e08a3c; font-weight: bold;
    margin: 6px 0 10px; padding-left: 8px; border-left: 4px solid #f4b860;
  }
  .tabs { display: flex; gap: 6px; margin-bottom: 12px; }
  .tab-btn {
    flex: 1; border: none; padding: 7px 0; border-radius: 20px;
    cursor: pointer; font-size: 13px; font-weight: bold;
    background: #eef2fb; color: #7b8bad; transition: all 0.2s;
  }
  .tab-btn.easy.active   { background: #6ac48a; color:#fff; }
  .tab-btn.mid.active    { background: #f4b860; color:#fff; }
  .tab-btn.hard.active   { background: #ec7a7a; color:#fff; }
  .tab-content { display: none; }
  .tab-content.active { display: block; }
  .question {
    background: #f8faff; border-radius: 10px;
    padding: 12px 14px; margin-bottom: 10px; font-size: 14px;
  }
  .question p { margin-bottom: 5px; }
  .answer {
    display: none; background: #eafaf0; border-left: 4px solid #6ac48a;
    padding: 9px 12px; border-radius: 6px;
    margin-top: 7px; color: #2f7d4f; font-size: 14px;
  }
  .toggle-btn {
    background: #7b9cf0; color: #fff; border: none;
    padding: 5px 14px; border-radius: 20px;
    cursor: pointer; font-size: 12px; margin-top: 4px;
  }
  .toggle-btn:hover { background: #5a7fd6; }
  .footer { text-align: center; color: #999; font-size: 13px; padding: 20px; }
  .mascot {
    position: fixed; right: 12px; bottom: 12px;
    width: 110px; z-index: 100; transition: transform 0.3s;
  }
  .mascot img { width: 100%; border-radius: 12px; }
  .mascot:hover { transform: scale(1.05) rotate(-3deg); }
  .mascot .bubble {
    position: absolute; top: -28px; left: -40px;
    background: #fff; border: 2px solid #7b9cf0;
    color: #5a7fd6; font-size: 11px; font-weight: bold;
    padding: 5px 9px; border-radius: 12px; white-space: nowrap;
  }
  @media (max-width: 900px) { .lessons { flex-direction: column; } }
  .advanced {
    background: linear-gradient(135deg, #fff4e0, #fff);
    border: 2px dashed #f4b860; border-radius: 18px;
    padding: 24px 28px; margin-top: 6px;
    box-shadow: 0 4px 15px rgba(244,184,96,0.15); position: relative;
  }
  .advanced .badge {
    position: absolute; top: -14px; left: 24px;
    background: #f4a03c; color: #fff; font-size: 13px; font-weight: bold;
    padding: 4px 14px; border-radius: 20px;
    box-shadow: 0 2px 6px rgba(244,160,60,0.4);
  }
  .advanced h2 { color: #d17f22; font-size: 20px; margin-bottom: 14px; }
  .advanced p { margin-bottom: 10px; font-size: 15px; }
  .advanced .box {
    background: #fff; border-left: 4px solid #f4b860; border-radius: 8px;
    padding: 12px 16px; margin: 12px 0; font-size: 15px;
  }
  .advanced .key { color: #d17f22; font-weight: bold; }
  .advanced .metaphor {
    background: #eef6ff; border-radius: 8px; padding: 12px 16px;
    font-size: 14px; color: #4a6fa5; margin: 12px 0;
  }
</style>
</head>
<body>
<div class="container">

  <div class="header">
    <h1>🐰 高中数学 · 集合专题复习</h1>
    <p>看视频 · 分难度练习 · 打牢基础，和酷酷兔一起加油！</p>
  </div>

  <div class="lessons">

    <div class="lesson">
      <div class="lesson-title"><span class="num">1</span>集合、元素及其表示方法</div>
      <video controls><source src="集合表示法.mp4" type="video/mp4">你的浏览器不支持视频播放。</video>
      <div class="media-note">📺 时长约3分钟</div>
      <div class="quiz-title">📝 课后练习</div>
      <div class="tabs">
        <button class="tab-btn easy active" onclick="switchTab(this,'l1-easy')">简单</button>
        <button class="tab-btn mid"  onclick="switchTab(this,'l1-mid')">中等</button>
        <button class="tab-btn hard" onclick="switchTab(this,'l1-hard')">困难</button>
      </div>
      <div class="tab-content active" id="l1-easy">
        <div class="question"><p><b>1.</b> 用 ∈ 或 ∉ 填空：A = {1,2,3,4}。3 __ A；5 __ A。</p>
          <button class="toggle-btn" onclick="toggle(this)">显示答案</button>
          <div class="answer">3 ∈ A；5 ∉ A。</div></div>
        <div class="question"><p><b>2.</b> 用列举法表示：小于10的正偶数。</p>
          <button class="toggle-btn" onclick="toggle(this)">显示答案</button>
          <div class="answer">{2, 4, 6, 8}</div></div>
        <div class="question"><p><b>3.</b> 下列哪个符号表示实数集？（N / Z / R）</p>
          <button class="toggle-btn" onclick="toggle(this)">显示答案</button>
          <div class="answer">R 表示实数集。</div></div>
      </div>
      <div class="tab-content" id="l1-mid">
        <div class="question"><p><b>1.</b> 用描述法表示：所有大于3的实数。</p>
          <button class="toggle-btn" onclick="toggle(this)">显示答案</button>
          <div class="answer">{x | x &gt; 3, x ∈ R}</div></div>
        <div class="question"><p><b>2.</b> 把 {x | x² = 4, x ∈ R} 改用列举法表示。</p>
          <button class="toggle-btn" onclick="toggle(this)">显示答案</button>
          <div class="answer">{−2, 2}</div></div>
        <div class="question"><p><b>3.</b> 判断集合 {x | x 是最小的正整数} 的元素是什么？</p>
          <button class="toggle-btn" onclick="toggle(this)">显示答案</button>
          <div class="answer">元素只有 1，即集合为 {1}。</div></div>
      </div>
      <div class="tab-content" id="l1-hard">
        <div class="question"><p><b>1.</b> 若集合 {1, a, a²} 中元素满足互异性，求实数 a 不能取的值。</p>
          <button class="toggle-btn" onclick="toggle(this)">显示答案</button>
          <div class="answer">需 a≠1、a²≠1、a²≠a，故 a 不能取 0、1、−1。</div></div>
        <div class="question"><p><b>2.</b> 用描述法表示：坐标平面第一象限内的点组成的集合。</p>
          <button class="toggle-btn" onclick="toggle(this)">显示答案</button>
          <div class="answer">{(x, y) | x &gt; 0 且 y &gt; 0}</div></div>
        <div class="question"><p><b>3.</b> 已知 3 ∈ {1, m, m²−m+1}，求实数 m 的值。</p>
          <button class="toggle-btn" onclick="toggle(this)">显示答案</button>
          <div class="answer">① m=3：集合{1,3,7}互异，成立。<br>② m²−m+1=3 即 m²−m−2=0，得 m=2 或 m=−1；m=2 得{1,2,3}成立，m=−1 得{1,−1,3}成立。<br><b>所以 m = 3 或 2 或 −1。</b></div></div>
      </div>
    </div>

    <div class="lesson">
      <div class="lesson-title"><span class="num">2</span>集合的基本关系</div>
      <video controls><source src="集合基本关系.mp4" type="video/mp4">你的浏览器不支持视频播放。</video>
      <div class="media-note">📺 时长约3分钟</div>
      <div class="quiz-title">📝 课后练习</div>
      <div class="tabs">
        <button class="tab-btn easy active" onclick="switchTab(this,'l2-easy')">简单</button>
        <button class="tab-btn mid"  onclick="switchTab(this,'l2-mid')">中等</button>
        <button class="tab-btn hard" onclick="switchTab(this,'l2-hard')">困难</button>
      </div>
      <div class="tab-content active" id="l2-easy">
        <div class="question"><p><b>1.</b> 判断：A={1,2}，B={1,2,3}，A ⊆ B 对吗？</p>
          <button class="toggle-btn" onclick="toggle(this)">显示答案</button>
          <div class="answer">对。A 的每个元素都在 B 中。</div></div>
        <div class="question"><p><b>2.</b> 空集用什么符号表示？</p>
          <button class="toggle-btn" onclick="toggle(this)">显示答案</button>
          <div class="answer">∅</div></div>
        <div class="question"><p><b>3.</b> 填空：空集是任何集合的____。</p>
          <button class="toggle-btn" onclick="toggle(this)">显示答案</button>
          <div class="answer">子集。</div></div>
      </div>
      <div class="tab-content" id="l2-mid">
        <div class="question"><p><b>1.</b> A={a,b,c} 有几个子集、真子集、非空真子集？</p>
          <button class="toggle-btn" onclick="toggle(this)">显示答案</button>
          <div class="answer">子集 8 个；真子集 7 个；非空真子集 6 个。</div></div>
        <div class="question"><p><b>2.</b> 写出集合 {1, 2} 的所有子集。</p>
          <button class="toggle-btn" onclick="toggle(this)">显示答案</button>
          <div class="answer">∅、{1}、{2}、{1,2}，共4个。</div></div>
        <div class="question"><p><b>3.</b> 判断 A={x|x²=1} 与 B={−1,1} 是否相等。</p>
          <button class="toggle-btn" onclick="toggle(this)">显示答案</button>
          <div class="answer">相等。A={−1,1}=B。</div></div>
      </div>
      <div class="tab-content" id="l2-hard">
        <div class="question"><p><b>1.</b> 若 {1,2} ⊆ A ⊆ {1,2,3,4}，求满足条件的 A 的个数。</p>
          <button class="toggle-btn" onclick="toggle(this)">显示答案</button>
          <div class="answer">A 必含1、2，其余从{3,4}中任选，共 2²=4 个。</div></div>
        <div class="question"><p><b>2.</b> A={x|x&lt;a}，B={x|x&lt;3}，若 A ⊆ B，求 a 范围。</p>
          <button class="toggle-btn" onclick="toggle(this)">显示答案</button>
          <div class="answer">a ≤ 3。</div></div>
        <div class="question"><p><b>3.</b> A={1,2,3} 的真子集共几个？</p>
          <button class="toggle-btn" onclick="toggle(this)">显示答案</button>
          <div class="answer">2³−1=7 个。</div></div>
      </div>
    </div>

    <div class="lesson">
      <div class="lesson-title"><span class="num">3</span>集合的基本运算</div>
      <video controls><source src="集合基本运算.mp4" type="video/mp4">你的浏览器不支持视频播放。</video>
      <div class="media-note">📺 时长约3分钟</div>
      <div class="quiz-title">📝 课后练习</div>
      <div class="tabs">
        <button class="tab-btn easy active" onclick="switchTab(this,'l3-easy')">简单</button>
        <button class="tab-btn mid"  onclick="switchTab(this,'l3-mid')">中等</button>
        <button class="tab-btn hard" onclick="switchTab(this,'l3-hard')">困难</button>
      </div>
      <div class="tab-content active" id="l3-easy">
        <div class="question"><p><b>1.</b> A={1,2,3}，B={2,3,4}，求 A∩B。</p>
          <button class="toggle-btn" onclick="toggle(this)">显示答案</button>
          <div class="answer">{2, 3}</div></div>
        <div class="question"><p><b>2.</b> A={1,2}，B={3,4}，求 A∪B。</p>
          <button class="toggle-btn" onclick="toggle(this)">显示答案</button>
          <div class="answer">{1, 2, 3, 4}</div></div>
        <div class="question"><p><b>3.</b> U={1,2,3,4,5}，A={1,2}，求 ∁ᵤA。</p>
          <button class="toggle-btn" onclick="toggle(this)">显示答案</button>
          <div class="answer">{3, 4, 5}</div></div>
      </div>
      <div class="tab-content" id="l3-mid">
        <div class="question"><p><b>1.</b> U={1,2,3,4,5,6}，A={2,4,6}，求 ∁ᵤA。</p>
          <button class="toggle-btn" onclick="toggle(this)">显示答案</button>
          <div class="answer">{1, 3, 5}</div></div>
        <div class="question"><p><b>2.</b> A={1,2,3}，B={3,4,5}，求 A∩B 和 A∪B。</p>
          <button class="toggle-btn" onclick="toggle(this)">显示答案</button>
          <div class="answer">A∩B={3}；A∪B={1,2,3,4,5}。</div></div>
        <div class="question"><p><b>3.</b> U={1~6的自然数}，A={1,2,3}，B={3,4,5}，求 ∁ᵤ(A∪B)。</p>
          <button class="toggle-btn" onclick="toggle(this)">显示答案</button>
          <div class="answer">A∪B={1,2,3,4,5}，∁ᵤ(A∪B)={6}。</div></div>
      </div>
      <div class="tab-content" id="l3-hard">
        <div class="question"><p><b>1.</b> U={1,2,3,4,5,6}，A={1,2,3}，B={2,3,4}，求 (∁ᵤA)∩B。</p>
          <button class="toggle-btn" onclick="toggle(this)">显示答案</button>
          <div class="answer">∁ᵤA={4,5,6}，(∁ᵤA)∩B={4}。</div></div>
        <div class="question"><p><b>2.</b> A={x|x&lt;2}，B={x|x&gt;−1}，求 A∩B。</p>
          <button class="toggle-btn" onclick="toggle(this)">显示答案</button>
          <div class="answer">A∩B={x | −1 &lt; x &lt; 2}。</div></div>
        <div class="question"><p><b>3.</b> A={1,2,3,m}，B={2,3}，A∩B=B，A∪B=A，求 m。</p>
          <button class="toggle-btn" onclick="toggle(this)">显示答案</button>
          <div class="answer">B⊆A 已满足，只需 A 元素互异，故 m≠1、2、3。</div></div>
      </div>
    </div>

  </div>

  <div class="advanced">
    <span class="badge">🚀 进阶拓展</span>
    <h2>∅ 和 {∅} 一样吗？</h2>
    <p>很多同学会把 <span class="key">∅</span> 和 <span class="key">{∅}</span> 弄混，其实完全不同——</p>
    <div class="box">
      <p><span class="key">∅（空集）</span>：不含任何元素的集合，里面<b>什么都没有</b>。</p>
      <p><span class="key">{∅}</span>：里面<b>有一个元素</b>，这个元素恰好是空集 ∅，所以它<b>不是</b>空集。</p>
    </div>
    <div class="metaphor">
      🎁 <b>打个比方：</b>∅ 像一个<b>空盒子</b>；而 {∅} 是一个<b>大盒子里装着一个空盒子</b>——大盒子里有东西，所以不空。
    </div>
    <p>由此得到两个正确关系式：</p>
    <div class="box">
      <p>① <span class="key">∅ ∈ {∅}</span>：空集是 {∅} 的一个<b>元素</b>（用"属于"∈）。</p>
      <p>② <span class="key">∅ ⊆ {∅}</span>：空集是 {∅} 的<b>子集</b>（用"包含"⊆）。</p>
    </div>
    <p style="font-size:13px;color:#999;margin-top:14px;">💡 该知识点偏思辨，高考一般不深挖，作为拓展理解即可。</p>
  </div>

  <div class="footer">口诀：交集看"且"，并集看"或"，补集看"不属于"。多做题、多画韦恩图！</div>

</div>

<div class="mascot">
  <div class="bubble">冲鸭！一起嗨翻天！</div>
  <img src="兔子.png" alt="活力酷酷兔">
</div>

<script>
  function toggle(btn) {
    var ans = btn.nextElementSibling;
    if (ans.style.display === "block") {
      ans.style.display = "none"; btn.textContent = "显示答案";
    } else {
      ans.style.display = "block"; btn.textContent = "隐藏答案";
    }
  }
  function switchTab(btn, id) {
    var lesson = btn.closest('.lesson');
    lesson.querySelectorAll('.tab-btn').forEach(function(b){ b.classList.remove('active'); });
    lesson.querySelectorAll('.tab-content').forEach(function(c){ c.classList.remove('active'); });
    btn.classList.add('active');
    document.getElementById(id).classList.add('active');
  }
</script>
</body>
</html>
```
