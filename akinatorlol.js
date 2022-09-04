"use strict";

// declare the elements outside of functions, then append the child inside the function.
// DO THIS FOR ELEMENTS WITH MULTIPLE INTERACTIONS

// QUESTIONS AND ANSWERS

const questionsDatabase = [
  {
    // 0
    question: "Is your champion from Demacia?", // console log to check for what this actually is
    followupQuestions: [
      {
        question: "Does your champion fight with chains?",
        answer: {
          name: "Sylas",
        },
      },
      {
        question: "Does your champion breathe fire?",
        answer: {
          name: "Shyvana",
        },
      },
      {
        question: "Does your champion always camp bushes?",
        answer: {
          name: "Garen",
        },
      },
    ],
  },
  {
    // 1
    question: "Is your champion from the Shadow Isles?",
    followupQuestions: [
      {
        question: "Does your champion fight with chains?",
        answer: {
          name: "Thresh",
        },
      },
      {
        question: "Did your champion ride a steed in life?",
        answer: {
          name: "Hecarim",
        },
      },
      {
        question: "Is your champion's ultimate global?",
        answer: {
          name: "Karthus",
        },
      },
    ],
  },
  {
    // 2
    question: "Is your champion from Noxus?",
    followupQuestions: [
      {
        question: "Is your champion considered an exile?",
        answer: {
          name: "Riven",
        },
      },
      {
        question: "Does your champion need an ego check?",
        answer: {
          name: "Draven",
        },
      },
      {
        question: "Was your champion too angry to die?",
        answer: {
          name: "Mordekaiser",
        },
      },
    ],
  },
];

const startButton = document.querySelector(".start_button");

const nextButton = document.createElement("button");
nextButton.classList.add("nextButton");
nextButton.innerText = "Next";

const main = document.getElementById("main");
const body = document.getElementById("body");

const jhinTextBox = document.createElement("div");
jhinTextBox.classList.add("jhin_text_box");

const fogIntro = document.createElement("div");
fogIntro.classList.add("fog");

const akinatorFirstElement = document.createElement("div");
akinatorFirstElement.classList.add("akinatorFirstElement");

const jhinPhase1 = document.createElement("div");
jhinPhase1.classList.add("jhin_phase1");

let i = 0; // for some reason if I declare this inside the function it doesn't work

const akinatorSecondElement = document.createElement("div");
akinatorSecondElement.classList.add("akinatorSecondElement");

const jhinPhase2 = document.createElement("div");
jhinPhase2.classList.add("jhin_phase2");

const jhinTextBoxTwo = document.createElement("div");
jhinTextBoxTwo.classList.add("jhin_text_box_two");

const buttonYes = document.createElement("button");
buttonYes.classList.add("button_Yes");
buttonYes.innerText = "Yes";

const buttonNo = document.createElement("button");
buttonNo.classList.add("button_No");
buttonNo.innerText = "No";

const buttonMaybe = document.createElement("button");
buttonMaybe.classList.add("button_Maybe");
buttonMaybe.innerText = "Maybe";

const answersBox = document.createElement("div");
answersBox.classList.add("answers_Box");

//
//
// phase one

// akinator starts:
startButton.addEventListener("click", function () {
  startButton.remove();
  fogIntroduction();
});

function text1() {
  const text = "...";
  const speed = 400;
  if (i < text.length) {
    jhinTextBox.innerHTML += text.charAt(i);
    i++;
    setTimeout(text1, speed);
  }
}

function text2() {
  const text = "HmmHmm?"; // why just question mark? Oh, it doesn't reset properly...
  const speed = 80;
  if (i < text.length) {
    jhinTextBox.innerHTML += text.charAt(i);
    i++;
    setTimeout(text2, speed);
  }
}

// first function:
function fogIntroduction() {
  main.appendChild(fogIntro);
  main.appendChild(nextButton);
  fogIntro.appendChild(jhinTextBox);

  text1();

  // nextButton starts the game and remains until akinator starts asking questions:
  nextButton.addEventListener("click", function () {
    text2();
    setNextOne();
  });
}

function setNextOne() {
  nextButton.addEventListener("click", function () {
    nextButton.remove(); // Removing and appending repeatedly to get it lined up properly in the div (else the button appears above the image, not below)
    fogIntro.remove();
    akinatorIntroduction();
  });
}

function text3() {
  const text = "Why Why Why hello there"; // doesn't reset properly. Will return to this later. Ductape mix.
  const speed = 100;
  if (i < text.length) {
    jhinTextBox.innerHTML += text.charAt(i);
    i++;
    setTimeout(text3, speed);
  }
}

function akinatorIntroduction() {
  main.appendChild(akinatorFirstElement);
  main.appendChild(nextButton);
  akinatorFirstElement.appendChild(jhinPhase1);
  jhinPhase1.appendChild(jhinTextBox);

  text3();

  nextButton.addEventListener("click", function () {
    nextButton.remove();
    setNextTwo();
  });
}

function text4() {
  console.log("triggered");

  const text = "Shall we play?";
  const speed = 100;
  if (i < text.length) {
    jhinTextBox.innerHTML += text.charAt(i);
    i++;
    setTimeout(text4, speed);
  }
}

function setNextTwo() {
  main.appendChild(nextButton);
  nextButton.innerHTML = "PLAY";
  console.log("woah");

  text4(); // function triggers but the text isn't working. Come back later. Maybe just CSS.

  nextButton.addEventListener("click", function () {
    nextButton.remove();
    akinatorFirstElement.remove();
    main.appendChild(akinatorSecondElement);

    akinatorSecondElement.appendChild(jhinPhase2);
    jhinPhase2.appendChild(jhinTextBoxTwo);

    akinatorSecondElement.appendChild(answersBox);
    answersBox.appendChild(buttonYes);
    answersBox.appendChild(buttonMaybe);
    answersBox.appendChild(buttonNo);

    gameStarts();
  });
}

//
//
// phase two
// game starts

function gameStarts() {
  const shuffledQuestions = questionsDatabase.sort(() => Math.random() - 0.5);
  let currentQuestionIndex = 0;
  console.log(shuffledQuestions);
  startQuestions(shuffledQuestions[currentQuestionIndex]);
}

function startQuestions(questions) {
  jhinTextBoxTwo.innerHTML = questions.question;

  buttonYes.addEventListener(
    "click",
    function () {
      console.log(questionsDatabase);
      if (jhinTextBoxTwo.innerHTML === questionsDatabase[0].question) {
        demaciaFirstRound(); // Demacia first round --
      } else if (jhinTextBoxTwo.innerHTML === questionsDatabase[1].question) {
        shadowIslesFirstRound(); // Shadow Isles first round --
      } else if (jhinTextBoxTwo.innerHTML === questionsDatabase[2].question) {
        noxusFirstRound(); // Noxus first round --
      }
    },
    { once: true }
  );

  buttonNo.addEventListener(
    "click",
    gameStarts, // this event is removed later to prevent the math random from sorting the first choice, thereby breaking the tree process
    { once: true }
  );
}

// --> Demacia first round
function demaciaFirstRound() {
  console.log("works!");
  const shuffledQuestions = questionsDatabase[0].followupQuestions.sort(
    () => Math.random() - 0.5
  );
  let currentQuestionIndex = 0;
  questionDemacia(shuffledQuestions[currentQuestionIndex]);
}

function questionDemacia(questions) {
  jhinTextBoxTwo.innerHTML = questions.question;

  buttonYes.addEventListener(
    "click",
    function () {
      jhinTextBoxTwo.innerHTML = `Your champion is ${questionsDatabase[0].followupQuestions[0].answer.name}!`;
    },
    { once: true }
  );

  buttonNo.removeEventListener("click", gameStarts);
  buttonNo.addEventListener(
    "click",
    function () {
      demaciaFirstRound();
    },
    { once: true }
  );
}

// --> Shadow Isles first round
function shadowIslesFirstRound() {
  const shuffledQuestions = questionsDatabase[1].followupQuestions.sort(
    () => Math.random() - 0.5
  );
  let currentQuestionIndex = 0;
  questionDemacia(shuffledQuestions[currentQuestionIndex]);
}

function questionShadowIsles(questions) {
  jhinTextBoxTwo.innerHTML = questions.question;

  buttonYes.addEventListener(
    "click",
    function () {
      console.log(questionsDatabase);
      jhinTextBoxTwo.innerHTML = `Your champion is ${questionsDatabase[0].followupQuestions[0].answer.name}!`;
      // why does 0 make no difference here? if 0 instead of 1, still works.
    },
    { once: true }
  );

  buttonNo.removeEventListener("click", gameStarts);
  buttonNo.addEventListener(
    "click",
    function () {
      shadowIslesFirstRound();
    },
    { once: true }
  );
}

// --> Noxus first round
function noxusFirstRound() {
  const shuffledQuestions = questionsDatabase[2].followupQuestions.sort(
    () => Math.random() - 0.5
  );
  let currentQuestionIndex = 0;
  questionNoxus(shuffledQuestions[currentQuestionIndex]);
}

function questionNoxus(questions) {
  jhinTextBoxTwo.innerHTML = questions.question;

  buttonYes.addEventListener(
    "click",
    function () {
      jhinTextBoxTwo.innerHTML = `Your champion is ${questionsDatabase[2].followupQuestions[0].answer.name}!`;
      // why does 0 make no difference here? if 0 instead of 2, still works.
    },
    { once: true }
  );

  buttonNo.removeEventListener("click", gameStarts);
  buttonNo.addEventListener(
    "click",
    function () {
      noxusFirstRound();
    },
    { once: true }
  );
}

//
/*
function startQuestions(questions) {
  jhinTextBoxTwo.innerHTML = questions.question;

  buttonYes.addEventListener(
    "click",
    function () {
      console.log(questionsDatabase);
      if (jhinTextBoxTwo.innerHTML === questionsDatabase[0].question) {
        demaciaFirstRound(); // Demacia first round --
      } else if (jhinTextBoxTwo.innerHTML === questionsDatabase[1].question) {
        shadowIslesFirstRound(); // Shadow Isles first round --
      } else if (jhinTextBoxTwo.innerHTML === questionsDatabase[2].question) {
        noxusFirstRound(); // Noxus first round --
      }
    },
    { once: true }
  );

  buttonNo.addEventListener(
    "click",
    gameStarts, // this event is removed later to prevent the math random from sorting the first choice, thereby breaking the tree process
    { once: true }
  );
}

// --> Demacia first round
function demaciaFirstRound() {
  const shuffledQuestions = questionsDatabase[0].followupQuestions.sort(
    () => Math.random() - 0.5
  );
  let currentQuestionIndex = 0;
  questionDemacia(shuffledQuestions[currentQuestionIndex]);
}

function questionDemacia(questions) {
  jhinTextBoxTwo.innerHTML = questions.question;

  buttonYes.addEventListener(
    "click",
    function () {
      jhinTextBoxTwo.innerHTML = `Your champion is ${questionsDatabase[0].followupQuestions[0].answer.name}!`;
    },
    { once: true }
  );

  buttonNo.removeEventListener("click", gameStarts);
  buttonNo.addEventListener(
    "click",
    function () {
      demaciaFirstRound();
    },
    { once: true }
  );
}

// --> Shadow Isles first round
function shadowIslesFirstRound() {
  const shuffledQuestions = questionsDatabase[1].followupQuestions.sort(
    () => Math.random() - 0.5
  );
  let currentQuestionIndex = 0;
  questionDemacia(shuffledQuestions[currentQuestionIndex]);
}

function questionShadowIsles(questions) {
  jhinTextBoxTwo.innerHTML = questions.question;

  buttonYes.addEventListener(
    "click",
    function () {
      console.log(questionsDatabase);
      jhinTextBoxTwo.innerHTML = `Your champion is ${questionsDatabase[0].followupQuestions[0].answer.name}!`;
      // why does 0 make no difference here? if 0 instead of 1, still works.
    },
    { once: true }
  );

  buttonNo.removeEventListener("click", gameStarts);
  buttonNo.addEventListener(
    "click",
    function () {
      shadowIslesFirstRound();
    },
    { once: true }
  );
}

// --> Noxus first round
function noxusFirstRound() {
  const shuffledQuestions = questionsDatabase[2].followupQuestions.sort(
    () => Math.random() - 0.5
  );
  let currentQuestionIndex = 0;
  questionNoxus(shuffledQuestions[currentQuestionIndex]);
}

function questionNoxus(questions) {
  jhinTextBoxTwo.innerHTML = questions.question;

  buttonYes.addEventListener(
    "click",
    function () {
      jhinTextBoxTwo.innerHTML = `Your champion is ${questionsDatabase[2].followupQuestions[0].answer.name}!`;
      // why does 0 make no difference here? if 0 instead of 2, still works.
    },
    { once: true }
  );

  buttonNo.removeEventListener("click", gameStarts);
  buttonNo.addEventListener(
    "click",
    function () {
      noxusFirstRound();
    },
    { once: true }
  );
}

*/

//
//
//
//
//
//
//
//
//
//
//
//

/* MAYBE FOR DEMACIA

if (
      jhinTextBoxTwo.innerHTML ===
      questionsDatabase[0].followupQuestions[0].question // why does this work for all 3?
    ) {

 else if (
      jhinTextBoxTwo.innerHTML ===
      questionsDatabase[0].followupQuestions[1].question
    ) {
      jhinTextBoxTwo.innerHTML = `Your champion is ${questionsDatabase[0].followupQuestions[1].answer.name}!`;
    } else if (
      jhinTextBoxTwo.innerHTML ===
      questionsDatabase[0].followupQuestions[2].question
    ) {
      jhinTextBoxTwo.innerHTML = `Your champion is ${questionsDatabase[0].followupQuestions[2].answer.name}!`;
    }
*/

//
//
//
//

/* THIS WORKS BUT ITS MANUAL. IGNORE FOR NOW.
function gameStarts() {
  let shuffledQuestions = questionsDatabase.sort(() => Math.random() - 0.5); // randomizes the question. BUT NEED TO MAKE IT SO THE PREVIOUS QUESTION ISN'T POS
  // shuffledQuestions stores the value of questions and inputs it, that's how it works
  let currentQuestionIndex = 0;
  showFirstQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showFirstQuestion(questionsOne1) {
  jhinTextBoxTwo.innerHTML = questionsOne1.question;
  buttonYes.addEventListener("click", function () {
    if (
      jhinTextBoxTwo.innerHTML ===
      questionsDatabase[0].followupQuestions[0].result.name
    ) {
      startSecondRoundDemacia();
    } else if (
      jhinTextBoxTwo.innerHTML === "Is your champion from the Shadow Isles?"
    ) {
      startSecondRoundShadowIsles();
    } else if (jhinTextBoxTwo.innerHTML === "Is your champion from Noxus?") {
      startSecondRoundNoxus();
    }
  });

  buttonNo.addEventListener("click", function () {
    gameStarts();
  });
}

// DEMACIA
const questionsDemacia = [
  {
    question: "Does your champion fight with chains?",
  },
  {
    question: "Does your champion breathe fire?",
  },
  {
    question: "Does your champion always camp pushes?",
  },
];

// SECOND ROUND
function startSecondRoundDemacia() {
  let shuffledQuestions = questionsDemacia.sort(() => Math.random() - 0.5);
  let currentQuestionIndex = 0;
  showSecondQuestionDemacia(shuffledQuestions[currentQuestionIndex]);
}

function showSecondQuestionDemacia(questionsDemacia) {
  jhinTextBoxTwo.innerHTML = questionsDemacia.question;
  buttonYes.addEventListener("click", function () {
    if (jhinTextBoxTwo.innerHTML === "Does your champion fight with chains?") {
      thirdRoundDemaciaOne();
    } else if (
      jhinTextBoxTwo.innerHTML === "Does your champion breathe fire?"
    ) {
      thirdRoundDemaciaTwo();
    } else if (
      jhinTextBoxTwo.innerHTML === "Does your champion always camp pushes?"
    ) {
      thirdRoundDemaciaThree();
    }
  });

  buttonNo.addEventListener("click", function () {
    startSecondRoundDemacia();
  });
}

// THIRD ROUND
function thirdRoundDemaciaOne() {
  jhinTextBoxTwo.innerHTML = "Your champion is Sylas!";
}

function thirdRoundDemaciaTwo() {
  jhinTextBoxTwo.innerHTML = "Your champion is Shyvana!";
}

function thirdRoundDemaciaThree() {
  jhinTextBoxTwo.innerHTML = "Your champion is Garen!";
}

// SHADOW ISLES
const questionsShadowIsles = [
  {
    question: "Does your champion fight with chains?",
  },
  {
    question: "Did your champion ride a steed in life?",
  },
  {
    question: "Is your champion's ultimate global?",
  },
];

function startSecondRoundShadowIsles() {
  shuffledQuestions = questionsShadowIsles.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  showSecondQuestionShadowIsles(shuffledQuestions[currentQuestionIndex]);
}

function showSecondQuestionShadowIsles(questionsShadowIsles) {
  jhinTextBoxTwo.innerHTML = questionsShadowIsles.question;

  buttonYes.addEventListener("click", function () {
    if (jhinTextBoxTwo.innerHTML === "Does your champion fight with chains?") {
      thirdRoundShadowIslesOne();
    } else if (
      jhinTextBoxTwo.innerHTML === "Did your champion ride a steed in life?"
    ) {
      thirdRoundShadowIslesTwo();
    } else if (
      jhinTextBoxTwo.innerHTML === "Is your champion's ultimate global?"
    ) {
      thirdRoundShadowIslesThree();
    }
  });

  buttonNo.addEventListener("click", function () {
    startSecondRoundShadowIsles();
  });
}

// NOXUS
function startSecondRoundNoxus() {
  shuffledQuestions = questionsNoxus.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  showSecondQuestionNoxus(shuffledQuestions[currentQuestionIndex]);
}

function showSecondQuestionNoxus(questionsNoxus) {
  jhinTextBoxTwo.innerHTML = questionsNoxus.question;
}

const questionsNoxus = [
  {
    question: "Is your champion considered an exile?",
  },
  {
    question: "Does your champion love himself more than anyone else?",
  },
  {
    question: "Is your champion trapped deep inside the Immortal Bastion?",
  },
];
*/
