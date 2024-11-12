const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correct: "Paris"
    },
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      correct: "JavaScript"
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Central Style Sheets",
        "Cascading Style Sheets",
        "Cascading Simple Sheets",
        "Cars SUVs Sailboats"
      ],
      correct: "Cascading Style Sheets"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function loadQuestion() {
    resetOptions();
    const questionData = quizData[currentQuestionIndex];
    document.getElementById("question").innerText = questionData.question;
    questionData.options.forEach((option, index) => {
      document.getElementById(`option${index + 1}-label`).innerText = option;
      document.getElementById(`option${index + 1}`).value = option;
    });
  }
  
  function resetOptions() {
    document.querySelectorAll(".option").forEach((option) => {
      option.checked = false;
    });
  }
  
  function submitAnswer() {
    const selectedOption = document.querySelector("input[name='option']:checked");
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === quizData[currentQuestionIndex].correct) {
        score++;
      }
      currentQuestionIndex++;
      if (currentQuestionIndex < quizData.length) {
        loadQuestion();
      } else {
        displayScore();
      }
    } else {
      alert("Please select an option!");
    }
  }
  
  function displayScore() {
    document.getElementById("score").innerText = `Your Score: ${score}`;
    document.getElementById("score").style.display = "block";
    document.getElementById("reset-button").style.display = "block";
    document.querySelector("button[onclick='submitAnswer()']").style.display = "none";
    document.getElementById("options-list").style.display = "none";
    document.getElementById("question").style.display = "none";
  }
  
  function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("score").style.display = "none";
    document.getElementById("reset-button").style.display = "none";
    document.querySelector("button[onclick='submitAnswer()']").style.display = "inline-block";
    document.getElementById("options-list").style.display = "block";
    document.getElementById("question").style.display = "block";
    loadQuestion();
  }
  
  // Initialize the first question
  loadQuestion();
  