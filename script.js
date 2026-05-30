const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
    answer: "Delhi"
  },
  {
    question: "HTML stands for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Home Tool Markup Language",
      "Hyper Tool Multi Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    answer: "Mars"
  },
  {
    question: "Who is known as the Father of Computers?",
    options: ["Bill Gates", "Charles Babbage", "Steve Jobs", "Alan Turing"],
    answer: "Charles Babbage"
  },
  {
    question: "IPL is related to?",
    options: ["Football", "Cricket", "Tennis", "Hockey"],
    answer: "Cricket"
  }
];

let currentQuestion = 0;
let score = 0;

const startBtn = document.getElementById("startQuizBtn");
const nameScreen = document.getElementById("nameScreen");
const quizScreen = document.getElementById("quizScreen");
const questionText = document.getElementById("questionText");
const optionsGrid = document.getElementById("optionsGrid");
const nextBtn = document.getElementById("nextBtn");
const liveScore = document.getElementById("liveScore");

startBtn.addEventListener("click", () => {
  nameScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  loadQuestion();
});

function loadQuestion() {
  let q = questions[currentQuestion];

  questionText.innerText = q.question;
  optionsGrid.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.innerText = option;

    btn.onclick = () => {
      document.querySelectorAll(".option-btn").forEach(b => {
        b.disabled = true;
      });

      if (option === q.answer) {
        btn.style.background = "green";
        btn.style.color = "white";
        score++;
        liveScore.innerText = score;
      } else {
        btn.style.background = "red";
        btn.style.color = "white";
      }
    };

    optionsGrid.appendChild(btn);
  });
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    quizScreen.innerHTML = `
      <div style="text-align:center">
        <h2>Quiz Completed 🎉</h2>
        <h3>Your Score: ${score}/${questions.length}</h3>
        <button onclick="location.reload()">Restart Quiz</button>
      </div>
    `;
  }
});

// Dark Mode
const darkBtn = document.getElementById("darkModeToggle");

if (darkBtn) {
  darkBtn.addEventListener("click", () => {
    const html = document.documentElement;

    if (html.getAttribute("data-theme") === "dark") {
      html.setAttribute("data-theme", "light");
    } else {
      html.setAttribute("data-theme", "dark");
    }
  });
}
