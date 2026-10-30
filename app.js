const questions = [
  {
    title: "업무를 맡는다면 어떤 방식이 가장 편한가요?",
    help: "가장 이상적인 모습보다 평소 자연스럽게 하는 행동을 골라보세요.",
    answers: [
      ["자료를 정리하고 일정과 순서를 맞춘다", { admin: 3, leader: 1 }],
      ["장비나 프로그램의 원리를 파악한다", { tech: 3 }],
      ["직접 움직이며 빠르게 처리한다", { field: 2, mobility: 1 }],
      ["사람들에게 설명하고 함께 움직인다", { leader: 3 }]
    ]
  },
  {
    title: "문제가 생겼을 때 가장 먼저 하는 행동은?",
    help: "정답은 없습니다. 가장 가까운 반응을 선택하세요.",
    answers: [
      ["상황을 기록하고 원인과 순서를 정리한다", { admin: 3 }],
      ["장비와 연결 상태부터 점검한다", { tech: 3 }],
      ["현장을 확인하고 바로 가능한 조치를 한다", { field: 3 }],
      ["역할을 나누고 필요한 사람에게 알린다", { leader: 3 }]
    ]
  },
  {
    title: "다음 중 가장 관심이 가는 활동은?",
    help: "지금 잘하는 것보다 배우고 싶은 것을 골라도 좋아요.",
    answers: [
      ["문서·엑셀·일정 관리", { admin: 3 }],
      ["네트워크·통신·전자기기", { tech: 3 }],
      ["운전·차량·기계 장비", { mobility: 3 }],
      ["체력 훈련·야외 활동", { field: 3 }]
    ]
  },
  {
    title: "반복적인 점검 업무에 대해 어떻게 느끼나요?",
    help: "매일 같은 기준으로 빠짐없이 확인하는 상황을 떠올려보세요.",
    answers: [
      ["체크리스트가 있으면 꼼꼼히 할 수 있다", { admin: 2, tech: 1 }],
      ["장비 상태를 확인하는 일이라면 괜찮다", { tech: 2, mobility: 1 }],
      ["반복보다 변화가 많은 일이 좋다", { field: 2, leader: 1 }],
      ["사람들의 진행 상황을 챙기는 편이다", { leader: 2, admin: 1 }]
    ]
  },
  {
    title: "팀에서 주로 맡게 되는 역할은?",
    help: "학교, 동아리, 아르바이트 경험을 떠올려보세요.",
    answers: [
      ["기록과 준비물을 챙기는 역할", { admin: 3 }],
      ["기술적인 문제를 해결하는 역할", { tech: 3 }],
      ["이동하거나 물건을 직접 다루는 역할", { mobility: 3 }],
      ["진행을 이끌고 설명하는 역할", { leader: 3 }]
    ]
  },
  {
    title: "야외 활동과 체력 소모는 어느 정도 괜찮은가요?",
    help: "현재 체력 수준이 아니라 선호도를 기준으로 답해주세요.",
    answers: [
      ["실내 중심의 정돈된 업무가 더 좋다", { admin: 3 }],
      ["기술 업무라면 실내외 모두 괜찮다", { tech: 2, field: 1 }],
      ["이동과 장비 운용이 포함돼도 괜찮다", { mobility: 3 }],
      ["체력 소모가 있어도 현장 활동이 좋다", { field: 3 }]
    ]
  },
  {
    title: "새로운 내용을 배울 때 가장 편한 방식은?",
    help: "설명서를 처음 접하는 상황을 생각해보세요.",
    answers: [
      ["순서가 정리된 문서를 읽는다", { admin: 2, tech: 1 }],
      ["직접 설정하고 오류를 해결해본다", { tech: 3 }],
      ["시범을 본 뒤 몸으로 반복한다", { field: 2, mobility: 1 }],
      ["다른 사람에게 설명하며 익힌다", { leader: 3 }]
    ]
  },
  {
    title: "돌발 상황이 생겼을 때 내 장점은?",
    help: "급하게 계획이 바뀌는 순간을 떠올려보세요.",
    answers: [
      ["해야 할 일을 다시 정리한다", { admin: 3 }],
      ["무엇이 고장 났는지 논리적으로 찾는다", { tech: 3 }],
      ["주변을 살피며 바로 행동한다", { field: 3 }],
      ["사람들을 진정시키고 방향을 제시한다", { leader: 3 }]
    ]
  },
  {
    title: "전역 후에도 남기고 싶은 경험은?",
    help: "군 복무를 진로나 생활 경험과 연결한다면 무엇이 좋을까요?",
    answers: [
      ["행정·기획·문서 관리 경험", { admin: 3 }],
      ["IT·통신·장비 운용 경험", { tech: 3 }],
      ["운전·수송·기계 관리 경험", { mobility: 3 }],
      ["리더십·교육·현장 대응 경험", { leader: 2, field: 1 }]
    ]
  },
  {
    title: "업무 환경에서 더 중요하게 생각하는 것은?",
    help: "둘 다 중요하지만 조금 더 끌리는 쪽을 선택하세요.",
    answers: [
      ["정해진 기준과 안정적인 루틴", { admin: 3 }],
      ["전문성을 쌓을 수 있는 기술", { tech: 3 }],
      ["다양한 장소와 이동이 있는 경험", { mobility: 3 }],
      ["도전적인 목표와 팀워크", { field: 2, leader: 1 }]
    ]
  },
  {
    title: "다른 사람이 나를 어떻게 평가하나요?",
    help: "가족이나 친구에게 자주 듣는 말을 골라보세요.",
    answers: [
      ["꼼꼼하고 책임감 있다", { admin: 3 }],
      ["기계나 컴퓨터를 잘 다룬다", { tech: 3 }],
      ["행동이 빠르고 적응력이 있다", { mobility: 1, field: 2 }],
      ["설명을 잘하고 사람을 챙긴다", { leader: 3 }]
    ]
  },
  {
    title: "마지막으로 가장 끌리는 문장은?",
    help: "결과에 큰 영향을 주는 마지막 질문입니다.",
    answers: [
      ["빈틈없이 운영되는 과정에 기여하고 싶다", { admin: 4 }],
      ["기술을 익혀 문제를 해결하고 싶다", { tech: 4 }],
      ["장비와 기동을 책임지고 싶다", { mobility: 4 }],
      ["현장에서 팀과 함께 목표를 이루고 싶다", { field: 2, leader: 2 }]
    ]
  }
];

const resultTypes = {
  admin: {
    title: "운영·행정형",
    icon: "▤",
    summary: "정보를 정리하고 일정과 기준을 맞추는 능력이 강한 유형이에요. 조직이 안정적으로 움직이도록 뒤에서 흐름을 관리하는 역할과 잘 맞을 가능성이 있습니다.",
    strengths: ["문서와 정보를 체계적으로 정리해요", "정해진 절차와 마감을 잘 지켜요", "여러 사람의 일정과 준비물을 챙기는 편이에요"],
    roles: ["인사행정", "재정행정", "작전행정", "보급행정"],
    caution: "행정 관련 보직도 부대와 직책에 따라 현장 업무가 포함될 수 있습니다.",
    articles: [
      ["군대 행정병 종류 총정리", "https://blog.naver.com/eungyulee_97/224449850503"],
      ["육·해·공군·해병대 비교", "https://blog.naver.com/eungyulee_97/224448687262"],
      ["군인 계급별 월급 비교", "https://blog.naver.com/eungyulee_97/224446290269"]
    ]
  },
  tech: {
    title: "기술·통신형",
    icon: "⌁",
    summary: "기기와 시스템의 원리를 이해하고 문제를 논리적으로 해결하는 데 흥미를 느끼는 유형이에요. 통신·네트워크·정보체계처럼 기술을 다루는 역할부터 살펴보세요.",
    strengths: ["오류의 원인을 단계적으로 찾아요", "새로운 장비와 프로그램을 익히는 데 거부감이 적어요", "정확한 연결과 점검 업무에 집중할 수 있어요"],
    roles: ["전술통신", "네트워크 운용", "위성통신", "정보체계 지원"],
    caution: "지원 가능한 군사특기는 전공·자격증·신체조건과 모집 시기에 따라 달라집니다.",
    articles: [
      ["군대 통신병 종류 총정리", "https://blog.naver.com/eungyulee_97/224451009902"],
      ["UX/UI와 연결되는 군 보직", "https://blog.naver.com/eungyulee_97/224441389429"],
      ["2027년 2월 모집병 일정", "https://blog.naver.com/eungyulee_97/224454066570"]
    ]
  },
  mobility: {
    title: "기동·장비형",
    icon: "◉",
    summary: "직접 움직이며 차량과 장비를 다루는 일에 관심이 많은 유형이에요. 운전·수송·구난처럼 기동과 장비 관리가 함께 필요한 역할을 우선 비교해보세요.",
    strengths: ["공간과 이동 경로를 빠르게 파악해요", "장비 상태를 반복해서 점검할 수 있어요", "현장에서 필요한 일을 직접 처리하는 편이에요"],
    roles: ["차량운전", "수송", "구난", "장비 운용·정비"],
    caution: "면허가 있어도 원하는 세부 특기나 차량 배치가 자동으로 보장되는 것은 아닙니다.",
    articles: [
      ["군대 운전병 종류 총정리", "https://blog.naver.com/eungyulee_97/224449880164"],
      ["군대 보직 선택 가이드", "https://blog.naver.com/eungyulee_97/224448687262"],
      ["현역병 입영일자 선택", "https://blog.naver.com/eungyulee_97/224455083043"]
    ]
  },
  field: {
    title: "현장·실행형",
    icon: "▲",
    summary: "몸을 움직이며 현장에서 빠르게 판단하고 실행하는 상황에 강한 유형이에요. 보병·소총수부터 수색·해병대 등 체력과 팀워크 비중이 높은 역할을 차근차근 살펴보세요.",
    strengths: ["변화가 있는 환경에 빠르게 적응해요", "시범을 보고 몸으로 익히는 데 강해요", "목표가 분명하면 끝까지 실행하는 편이에요"],
    roles: ["소총수", "보병", "해병대 계열", "특전 관련 경로"],
    caution: "체력 선호와 실제 지원 자격은 다릅니다. 최신 신체·체력 기준을 반드시 확인하세요.",
    articles: [
      ["육군 소총수에 대해 알아보자", "https://blog.naver.com/eungyulee_97/224452506325"],
      ["군대 해병대 되는 법", "https://blog.naver.com/eungyulee_97/224451859769"],
      ["군대 특전사 종류 총정리", "https://blog.naver.com/eungyulee_97/224451859263"]
    ]
  },
  leader: {
    title: "교육·리더십형",
    icon: "✦",
    summary: "사람들에게 설명하고 진행 상황을 챙기며 팀의 방향을 맞추는 데 강한 유형이에요. 교육지원·조교 역할과 장기적으로는 간부 경로도 함께 살펴볼 수 있습니다.",
    strengths: ["상대방이 이해할 때까지 설명하는 편이에요", "팀의 분위기와 진행 상황을 빠르게 파악해요", "책임을 맡았을 때 기준을 세우고 이끌 수 있어요"],
    roles: ["훈련소 조교", "교육지원", "인원관리", "부사관·장교 경로"],
    caution: "교육·지휘 역할은 의사소통뿐 아니라 체력, 책임감과 반복적인 인원 관리가 필요합니다.",
    articles: [
      ["군대 조교 되는 법", "https://blog.naver.com/eungyulee_97/224448687494"],
      ["특전부사관·장교 경로", "https://blog.naver.com/eungyulee_97/224451859263"],
      ["육·해·공군·해병대 비교", "https://blog.naver.com/eungyulee_97/224448687262"]
    ]
  }
};

let currentQuestion = 0;
let answers = [];

const screens = {
  intro: document.querySelector("#intro"),
  quiz: document.querySelector("#quiz"),
  result: document.querySelector("#result")
};
const showScreen = (name) => {
  Object.entries(screens).forEach(([key, element]) => element.classList.toggle("is-active", key === name));
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function renderQuestion() {
  const question = questions[currentQuestion];
  const number = currentQuestion + 1;
  const percent = Math.round((number / questions.length) * 100);
  document.querySelector("#question-kicker").textContent = `QUESTION ${String(number).padStart(2, "0")}`;
  document.querySelector("#question-title").textContent = question.title;
  document.querySelector("#question-help").textContent = question.help;
  document.querySelector("#progress-text").textContent = `${number} / ${questions.length}`;
  document.querySelector("#progress-percent").textContent = `${percent}%`;
  document.querySelector("#progress-bar").style.width = `${percent}%`;
  document.querySelector(".progress-track").setAttribute("aria-valuenow", String(number));
  document.querySelector("#back-button").style.visibility = currentQuestion === 0 ? "hidden" : "visible";

  const list = document.querySelector("#answer-list");
  list.innerHTML = "";
  question.answers.forEach(([label, score], index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", () => selectAnswer(index, score));
    list.appendChild(button);
  });
  list.querySelector("button")?.focus({ preventScroll: true });
}

function selectAnswer(index, score) {
  answers[currentQuestion] = { index, score };
  if (currentQuestion < questions.length - 1) {
    currentQuestion += 1;
    renderQuestion();
  } else {
    renderResult();
  }
}

function calculateResult() {
  const totals = { admin: 0, tech: 0, mobility: 0, field: 0, leader: 0 };
  answers.forEach((answer) => {
    if (!answer) return;
    Object.entries(answer.score).forEach(([key, value]) => { totals[key] += value; });
  });
  return Object.entries(totals).sort((a, b) => b[1] - a[1])[0][0];
}

function renderResult() {
  const key = calculateResult();
  const result = resultTypes[key];
  document.querySelector("#result-title").textContent = result.title;
  document.querySelector("#result-summary").textContent = result.summary;
  document.querySelector("#result-icon").textContent = result.icon;
  document.querySelector("#strength-list").innerHTML = result.strengths.map((item) => `<li>${item}</li>`).join("");
  document.querySelector("#role-chips").innerHTML = result.roles.map((item) => `<span>${item}</span>`).join("");
  document.querySelector("#result-caution").textContent = result.caution;
  document.querySelector("#article-links").innerHTML = result.articles.map(([title, url]) => `
    <a class="article-link" href="${url}" target="_blank" rel="noopener noreferrer">
      <strong>${title}</strong><span>블로그에서 자세히 보기 ↗</span>
    </a>`).join("");
  document.querySelector("#share-button").dataset.result = result.title;
  document.querySelector("#share-status").textContent = "";
  showScreen("result");
}

document.querySelector("#start-button").addEventListener("click", () => {
  currentQuestion = 0;
  answers = [];
  showScreen("quiz");
  renderQuestion();
});

document.querySelector("#back-button").addEventListener("click", () => {
  if (currentQuestion === 0) return;
  currentQuestion -= 1;
  renderQuestion();
});

document.querySelector("#restart-button").addEventListener("click", () => {
  currentQuestion = 0;
  answers = [];
  showScreen("intro");
  document.querySelector("#start-button").focus({ preventScroll: true });
});

document.querySelector("#share-button").addEventListener("click", async (event) => {
  const result = event.currentTarget.dataset.result;
  const data = {
    title: "나에게 맞는 군생활 역할 유형 테스트",
    text: `나의 군생활 역할 유형은 '${result}'! 당신의 유형도 확인해보세요.`,
    url: window.location.href.split("#")[0]
  };
  try {
    if (navigator.share) await navigator.share(data);
    else {
      await navigator.clipboard.writeText(`${data.text} ${data.url}`);
      document.querySelector("#share-status").textContent = "결과 링크를 복사했습니다.";
    }
  } catch (error) {
    if (error.name !== "AbortError") document.querySelector("#share-status").textContent = "공유하지 못했습니다. 주소를 직접 복사해주세요.";
  }
});
