const levels = [
  {
    title: "中线不等式：倍长构造",
    chapter: "全等三角形 · 倍长中线",
    difficulty: "难度：拔高",
    target: "目标：证明线段不等式",
    text: "在 △ABC 中，AD 是 BC 边上的中线。求证：AB + AC > 2AD。",
    points: { A: [355, 82], B: [132, 402], C: [590, 404], D: [360, 403] },
    segments: [["A", "B"], ["A", "C"], ["B", "C"], ["A", "D"]],
    strategy: "把中线条件转成全等：倍长 AD，让一个三角形翻到另一侧。",
    line: "延长 AD 到 F，使 DF = AD，连接 BF。",
    aux: [["D", "F"], ["B", "F"]],
    extraPoints: { F: [368, 500] },
    strategies: [
      "把中线条件转成全等：倍长 AD，让一个三角形翻到另一侧。",
      "过 A 作 BC 的平行线，直接转移角度。",
      "作 AC 的垂直平分线，先证明等距。",
      "连接 AB 的中点和 C，尝试使用中位线。"
    ],
    lines: [
      "延长 AD 到 F，使 DF = AD，连接 BF。",
      "过 D 作 AB 的平行线交 AC 于 F。",
      "过 A 作 BC 的垂线。",
      "取 AB 中点 E，连接 CE。"
    ],
    proof: [
      "因为 AD 是 BC 的中线，所以 BD = DC。",
      "延长 AD 到 F，使 DF = AD，连接 BF。",
      "由 AD = DF、BD = DC、∠BDA = ∠CDF，得 △ABD ≌ △FCD。",
      "所以 BF = AC，且 AF = 2AD。",
      "在 △ABF 中，由三角形两边之和大于第三边，得 AB + BF > AF。",
      "把 BF = AC、AF = 2AD 代入，得到 AB + AC > 2AD。"
    ],
    decoys: [
      "因为 D 是 BC 的中点，所以 AD 一定垂直 BC。",
      "由中线可以直接推出 AB = AC。"
    ],
    tags: ["倍长中线", "构造全等", "三角形不等式", "把中线变成边"],
    hints: [
      "目标里有 2AD，说明可以把 AD 倍长成一条完整边。",
      "倍长中线后，AC 会被搬到新三角形的一条边上，再使用三角形不等式。"
    ]
  },
  {
    title: "角平分线：外部等腰构造",
    chapter: "角平分线 · 构造等腰",
    difficulty: "难度：高阶",
    target: "目标：证明角关系",
    text: "在 △ABC 中，AD 平分 ∠BAC，AB > AC。点 E 在 AB 上，且 AE = AC。求证：∠CDE = 1/2∠B。",
    points: { A: [360, 88], B: [112, 410], C: [612, 410], D: [404, 410], E: [245, 238] },
    segments: [["A", "B"], ["A", "C"], ["B", "C"], ["A", "D"], ["C", "D"], ["D", "E"], ["A", "E"]],
    strategy: "把 AE = AC 看成等腰三角形，把角平分线和底角联系起来。",
    line: "连接 CE，先研究 △ACE 的等腰结构。",
    aux: [["C", "E"]],
    strategies: [
      "把 AE = AC 看成等腰三角形，把角平分线和底角联系起来。",
      "从 D 向 AB、AC 作垂线，先用距离相等。",
      "延长 CD 到 F，使 DF = DC。",
      "过 E 作 BC 的平行线，直接得到 ∠B。"
    ],
    lines: [
      "连接 CE，先研究 △ACE 的等腰结构。",
      "过 D 分别作 AB、AC 的垂线。",
      "延长 AD 至 F，使 AF = AB。",
      "连接 BE，并作 BE 的中点。"
    ],
    proof: [
      "连接 CE，因为 AE = AC，所以 △ACE 是等腰三角形。",
      "AD 平分 ∠BAC，因此 ∠EAD = ∠DAC。",
      "把 ∠CDE 分解到 △CDE 与 △ACD 的角关系中。",
      "由等腰底角与外角关系，把 ∠CED、∠ECD 转化为含 ∠B 的表达式。",
      "合并角度后得到 ∠CDE = 1/2∠B。"
    ],
    decoys: [
      "因为 AD 是角平分线，所以 D 一定是 BC 的中点。",
      "AE = AC 可以推出 DE = DC。"
    ],
    tags: ["等腰搬角", "角平分线", "半角目标", "连接隐藏底边"],
    hints: [
      "目标是半角，不一定要直接作角平分线；可能要先制造一个等腰三角形。",
      "AE = AC 已经给出等腰，只差把底边 CE 画出来。"
    ]
  },
  {
    title: "斜边中点：直角三角形破局",
    chapter: "直角三角形 · 斜边中点",
    difficulty: "难度：挑战",
    target: "目标：证明相等",
    text: "在 Rt△ABC 中，∠A = 90°，D 是 BC 的中点。点 E 在 AB 上，点 F 在 AC 上，且 ∠EDF = 90°。求证：DE = DF。",
    points: { A: [185, 390], B: [185, 90], C: [620, 390], D: [402, 240], E: [185, 238], F: [435, 390] },
    segments: [["A", "B"], ["A", "C"], ["B", "C"], ["D", "E"], ["D", "F"]],
    strategy: "利用斜边中点到三个顶点距离相等，先补出 DA。",
    line: "连接 AD，把 D 变成外接圆圆心式的点。",
    aux: [["A", "D"]],
    strategies: [
      "利用斜边中点到三个顶点距离相等，先补出 DA。",
      "过 E 作 EF 的垂线，构造矩形。",
      "延长 ED，使 DG = ED。",
      "连接 CE，把 E 放进 △CED。"
    ],
    lines: [
      "连接 AD，把 D 变成外接圆圆心式的点。",
      "过 D 作 AB 的平行线。",
      "连接 BF，并作 BF 的中点。",
      "延长 FD 到 G，使 DG = DF。"
    ],
    proof: [
      "在 Rt△ABC 中，D 是斜边 BC 的中点，所以 DA = DB = DC。",
      "连接 AD 后，△ADE 与 △ADF 都以 D 为顶点并含直角关系。",
      "由 ∠A = 90° 与 ∠EDF = 90°，可得到 ∠ADE = ∠ADF 的互余转化。",
      "又因为 DA 为公共边，且 AE、AF 分别落在两条互相垂直的边上。",
      "通过角边关系证明两个相关三角形对应，推出 DE = DF。"
    ],
    decoys: [
      "D 是 BC 中点，所以 AD 一定垂直 BC。",
      "∠EDF = 90° 可直接推出四边形 AEDF 是正方形。"
    ],
    tags: ["斜边中点", "补半径", "互余角", "直角结构"],
    hints: [
      "D 是斜边中点时，最有价值的线往往不是从 D 到 B 或 C，而是连到直角顶点 A。",
      "连接 AD 后，D 到 A、B、C 的距离关系才显性出现。"
    ]
  },
  {
    title: "平行四边形：转移目标线段",
    chapter: "四边形 · 平移构造",
    difficulty: "难度：压轴",
    target: "目标：证明线段和差",
    text: "在 △ABC 中，AD 是角平分线。点 E 在 AC 上，且 BE ⟂ AD。求证某条线段关系时，需要把 BE 平移到过 A 的位置。",
    points: { A: [355, 88], B: [135, 400], C: [610, 400], D: [382, 400], E: [488, 250] },
    segments: [["A", "B"], ["A", "C"], ["B", "C"], ["A", "D"], ["B", "E"]],
    strategy: "把垂线条件平移，过 A 构造与 BE 平行的线，形成可比较的直角三角形。",
    line: "过 A 作 AF ∥ BE，交 BC 的延长线于 F。",
    aux: [["A", "F"], ["C", "F"]],
    extraPoints: { F: [662, 438] },
    strategies: [
      "把垂线条件平移，过 A 构造与 BE 平行的线，形成可比较的直角三角形。",
      "作 AD 的中点，直接使用中位线。",
      "连接 CE，把 E 作为三角形重心。",
      "延长 BE，使 BE = EF。"
    ],
    lines: [
      "过 A 作 AF ∥ BE，交 BC 的延长线于 F。",
      "连接 BD 并作 BD 的垂直平分线。",
      "过 E 作 AC 的垂线。",
      "取 AB 中点 M，连接 ME。"
    ],
    proof: [
      "过 A 作 AF ∥ BE，由 BE ⟂ AD 得 AF ⟂ AD。",
      "AD 是角平分线，所以 AF 关于 AD 的对称方向能和 AB、AC 建立角对应。",
      "利用平行线把 ∠BEA、∠AFE 等角转移到新三角形中。",
      "构造出的直角三角形和原图中的三角形可以比较对应边。",
      "目标线段关系被转化到同一直线或同一三角形中，证明完成。"
    ],
    decoys: [
      "BE ⟂ AD 可以推出 BE 是 AC 的垂直平分线。",
      "AD 是角平分线，所以 AB = AC。"
    ],
    tags: ["平移辅助线", "角平分线", "垂线条件", "转移线段"],
    hints: [
      "垂线给方向，角平分线给对称；难点是把 BE 移到能和 A 点发生关系的位置。",
      "过关键点作已知线的平行线，是把外部条件搬进主三角形的常见手法。"
    ]
  },
  {
    title: "特殊角：旋转构造",
    chapter: "等边三角形 · 旋转",
    difficulty: "难度：竞赛",
    target: "目标：证明三线关系",
    text: "△ABC 中，∠BAC = 60°，AB ≠ AC。点 D、E 分别在 AB、AC 上，且 BD = CE。求证：CD 与 BE 的关系。",
    points: { A: [365, 96], B: [135, 405], C: [604, 405], D: [252, 256], E: [486, 255] },
    segments: [["A", "B"], ["A", "C"], ["B", "C"], ["C", "D"], ["B", "E"], ["B", "D"], ["C", "E"]],
    strategy: "围绕 60° 做旋转，把 BD 与 CE 放到同一个等边结构里比较。",
    line: "以 A 为顶点作等边三角形 ABF，再连接 EF。",
    aux: [["B", "F"], ["A", "F"], ["E", "F"]],
    extraPoints: { F: [70, 92] },
    strategies: [
      "围绕 60° 做旋转，把 BD 与 CE 放到同一个等边结构里比较。",
      "过 D 作 AC 的平行线，直接形成平行四边形。",
      "连接 DE，先证明 DE ∥ BC。",
      "作 CD 的垂直平分线，转化为点到线距离。"
    ],
    lines: [
      "以 A 为顶点作等边三角形 ABF，再连接 EF。",
      "连接 DE，并延长到 G。",
      "过 B 作 AC 的垂线。",
      "取 BC 中点 M，连接 AM。"
    ],
    proof: [
      "因为 ∠BAC = 60°，可围绕 A 构造等边三角形，把一条边旋转到另一侧。",
      "作等边三角形 ABF 后，AB = AF 且 ∠BAF = 60°。",
      "利用 BD = CE，把 D、E 的条件放入旋转后的对应三角形中。",
      "证明 △ACD 与 △AFE 或相关三角形全等。",
      "由全等和旋转关系得到 CD 与 BE 的目标关系。"
    ],
    decoys: [
      "∠BAC = 60° 可以推出 △ABC 是等边三角形。",
      "BD = CE 可以直接推出 D、E 关于 AD 对称。"
    ],
    tags: ["60°旋转", "等边构造", "搬移线段", "竞赛常见手法"],
    hints: [
      "特殊角 60° 经常提示等边三角形或旋转构造。",
      "BD 和 CE 在两条不同边上，关键是通过旋转把它们变成可比较的对应边。"
    ]
  }
];

let levelIndex = 0;
let selectedStrategy = null;
let selectedLine = null;
let selectedProof = [];
let score = 100;
let hintIndex = 0;
let solved = false;

const svg = document.querySelector("#diagram");
const levelTag = document.querySelector("#levelTag");
const scoreText = document.querySelector("#scoreText");
const difficultyText = document.querySelector("#difficultyText");
const targetText = document.querySelector("#targetText");
const chapterText = document.querySelector("#chapterText");
const problemTitle = document.querySelector("#problemTitle");
const problemText = document.querySelector("#problemText");
const strategyChoices = document.querySelector("#strategyChoices");
const lineChoices = document.querySelector("#lineChoices");
const proofBank = document.querySelector("#proofBank");
const proofSlots = document.querySelector("#proofSlots");
const feedbackTitle = document.querySelector("#feedbackTitle");
const feedbackText = document.querySelector("#feedbackText");
const insightTags = document.querySelector("#insightTags");
const strategyState = document.querySelector("#strategyState");
const lineState = document.querySelector("#lineState");
const proofState = document.querySelector("#proofState");
const checkBtn = document.querySelector("#checkBtn");
const hintBtn = document.querySelector("#hintBtn");
const nextBtn = document.querySelector("#nextBtn");
const resetBtn = document.querySelector("#resetBtn");

function drawLevel() {
  const level = levels[levelIndex];
  svg.innerHTML = "";
  const allPoints = { ...level.points, ...(level.extraPoints || {}) };

  level.segments.forEach(([from, to]) => drawLine(allPoints[from], allPoints[to], "geo-line"));

  if (selectedLine === level.line) {
    level.aux.forEach(([from, to]) => drawLine(allPoints[from], allPoints[to], "aux-line"));
    Object.entries(level.extraPoints || {}).forEach(([name, coords]) => drawPoint(name, coords));
  }

  drawAngleMarks(levelIndex);
  Object.entries(level.points).forEach(([name, coords]) => drawPoint(name, coords));
}

function drawLine(a, b, className) {
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", a[0]);
  line.setAttribute("y1", a[1]);
  line.setAttribute("x2", b[0]);
  line.setAttribute("y2", b[1]);
  line.setAttribute("class", className);
  svg.appendChild(line);
}

function drawPoint(name, [x, y]) {
  const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  dot.setAttribute("cx", x);
  dot.setAttribute("cy", y);
  dot.setAttribute("r", 5);
  dot.setAttribute("class", "point");
  svg.appendChild(dot);

  const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
  label.textContent = name;
  label.setAttribute("x", x + 9);
  label.setAttribute("y", y - 9);
  label.setAttribute("class", "label");
  svg.appendChild(label);
}

function drawAngleMarks(index) {
  const marks = [
    "",
    "M336 132 Q358 165 386 132",
    "M202 358 L226 358 L226 382",
    "M344 126 Q358 148 373 126",
    "M340 122 Q364 155 390 122"
  ];
  if (!marks[index]) return;
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", marks[index]);
  path.setAttribute("class", "angle-mark");
  svg.appendChild(path);
}

function renderChoices(container, items, selected, correct, onSelect) {
  container.innerHTML = "";
  items.forEach((item) => {
    const button = document.createElement("button");
    button.className = "choice";
    if (selected === item) button.classList.add(item === correct ? "selected" : "wrong");
    button.textContent = item;
    button.addEventListener("click", () => onSelect(item));
    container.appendChild(button);
  });
}

function renderProof() {
  const level = levels[levelIndex];
  const mixed = [...level.proof, ...level.decoys].sort((a, b) => a.localeCompare(b, "zh-CN"));
  proofBank.innerHTML = "";
  proofSlots.innerHTML = "";

  mixed.forEach((step) => {
    const item = document.createElement("button");
    item.className = "proof-item";
    if (selectedProof.includes(step)) item.classList.add("used");
    item.textContent = step;
    item.addEventListener("click", () => {
      if (selectedProof.includes(step) || selectedProof.length >= level.proof.length || solved) return;
      selectedProof.push(step);
      renderProof();
      updateStates();
    });
    proofBank.appendChild(item);
  });

  for (let i = 0; i < level.proof.length; i += 1) {
    const slot = document.createElement("button");
    slot.className = "slot";
    const value = selectedProof[i];
    if (value) {
      slot.classList.add("filled");
      slot.textContent = `${i + 1}. ${value}`;
    } else {
      slot.textContent = `${i + 1}. 选择关键步骤`;
    }
    slot.addEventListener("click", () => {
      if (solved) return;
      selectedProof.splice(i, 1);
      renderProof();
      updateStates();
    });
    proofSlots.appendChild(slot);
  }
}

function renderLevel() {
  const level = levels[levelIndex];
  selectedStrategy = null;
  selectedLine = null;
  selectedProof = [];
  score = 100;
  hintIndex = 0;
  solved = false;

  levelTag.textContent = `第 ${levelIndex + 1} 关`;
  difficultyText.textContent = level.difficulty;
  targetText.textContent = level.target;
  chapterText.textContent = level.chapter;
  problemTitle.textContent = level.title;
  problemText.textContent = level.text;
  scoreText.textContent = score;
  nextBtn.disabled = true;
  checkBtn.disabled = false;

  renderLevelChoices();

  renderProof();
  drawLevel();
  updateStates();
  setFeedback("先观察结论，再决定构造", "本游戏的判定会更严：必须同时选对构造策略、辅助线，并排出能推进证明的关键链。");
  renderTags(level.tags);
}

function renderLevelChoices() {
  const level = levels[levelIndex];
  renderChoices(strategyChoices, level.strategies, selectedStrategy, level.strategy, (item) => {
    if (solved) return;
    selectedStrategy = item;
    if (item !== level.strategy) deduct(12);
    setFeedback(item === level.strategy ? "策略方向正确" : "这个策略目前接不住目标", explainStrategy(item));
    drawLevel();
    updateStates();
    renderLevelChoices();
  });

  renderChoices(lineChoices, level.lines, selectedLine, level.line, (item) => {
    if (solved) return;
    selectedLine = item;
    if (item !== level.line) deduct(14);
    setFeedback(item === level.line ? "辅助线有效" : "这条线会绕远", explainLine(item));
    drawLevel();
    updateStates();
    renderLevelChoices();
  });
}

function explainStrategy(item) {
  if (item.includes("中线") || item.includes("旋转") || item.includes("等腰") || item.includes("平移") || item.includes("斜边")) {
    return "方向对。高阶题的核心是把原图里分散的条件搬到同一个可证明结构中。";
  }
  return "这类做法可能有局部信息，但没有把已知条件和结论放进同一个证明结构。";
}

function explainLine(item) {
  if (item.includes("连接") || item.includes("延长") || item.includes("过 A 作") || item.includes("等边")) {
    return "观察这条线能否制造全等、等腰、平行转角或旋转对应。有效辅助线必须带来新的可用条件。";
  }
  return "这条线增加了元素，但没有明显产生关键等量、角关系或可比较三角形。";
}

function deduct(value) {
  score = Math.max(0, score - value);
  scoreText.textContent = score;
}

function setFeedback(title, text) {
  feedbackTitle.textContent = title;
  feedbackText.textContent = text;
}

function renderTags(tags) {
  insightTags.innerHTML = "";
  tags.forEach((tag) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = tag;
    insightTags.appendChild(span);
  });
}

function updateStates() {
  const level = levels[levelIndex];
  strategyState.textContent = selectedStrategy === level.strategy ? "正确" : selectedStrategy ? "待修正" : "未完成";
  lineState.textContent = selectedLine === level.line ? "正确" : selectedLine ? "待修正" : "未完成";
  proofState.textContent = `${selectedProof.length}/${level.proof.length}`;
}

function checkLevel() {
  const level = levels[levelIndex];
  const proofCorrect = selectedProof.length === level.proof.length && selectedProof.every((step, index) => step === level.proof[index]);
  const strategyCorrect = selectedStrategy === level.strategy;
  const lineCorrect = selectedLine === level.line;

  if (strategyCorrect && lineCorrect && proofCorrect) {
    solved = true;
    nextBtn.disabled = levelIndex === levels.length - 1;
    checkBtn.disabled = true;
    setFeedback("破局成功", `本关得分 ${score}。关键不是辅助线本身，而是它把目标转成了熟悉模型：${level.tags.join("、")}。`);
    renderProof();
    return;
  }

  deduct(10);
  const misses = [];
  if (!strategyCorrect) misses.push("策略判断");
  if (!lineCorrect) misses.push("辅助线选择");
  if (!proofCorrect) misses.push("证明链顺序");
  setFeedback("还没有闭合", `${misses.join("、")} 还需要调整。难题必须形成完整链条：条件进入构造，构造产生模型，模型推出目标。`);
}

function showHint() {
  const level = levels[levelIndex];
  const hint = level.hints[Math.min(hintIndex, level.hints.length - 1)];
  hintIndex += 1;
  deduct(6);
  setFeedback("提示", hint);
}

checkBtn.addEventListener("click", checkLevel);
hintBtn.addEventListener("click", showHint);
resetBtn.addEventListener("click", renderLevel);
nextBtn.addEventListener("click", () => {
  if (levelIndex < levels.length - 1) {
    levelIndex += 1;
    renderLevel();
  }
});

renderLevel();
