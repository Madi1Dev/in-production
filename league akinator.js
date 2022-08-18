// the way the actual app would work is it would ask you a question, and based on your answer, it would ask a follow-up question.
// the database would involve a series of values with arrays which have values within them. So, objects.
// For instance, "chains" could point to either Thresh or Sylas, or some other champ.
// based on "chains", the app would ask you another question, which would split the difference between the two champs.
// So: "is your champion from the Shadow Isles?" If answered "yes", then: your champ is Thresh!
// Ultimately, its a series of true/false answers based on which the app determines the next question.

// im pretty sure this app would use event delegation in the actual non-prototype version


const startButton = document.getElementById("start_button")
const endButton = document.getElementById("end_button")
const akinatorElement = document.getElementById("akinator")

const answerButtonYes = document.getElementById("answer_yes")
const answerButtonNo = document.getElementById("answer_no")
const answerButtons = document.getElementById("answer_buttons")
const questionElement = document.getElementById('question')  

let shuffledQuestions, currentQuestionIndex // defaults both to undefined

startButton.addEventListener('click', startGame) /*note: "click" didn't work, but 'click' did */

// start of game
function startGame() {
  startButton.classList.add('hide')
  endButton.classList.add('hide')
  akinatorElement.classList.remove('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  setFirstQuestion()
}


// first series of questions:
function setFirstQuestion() {
  showFirstQuestion(shuffledQuestions[currentQuestionIndex])
}


function showFirstQuestion(question) {
  questionElement.innerText = question.question 
  answerButtonYes.addEventListener('click', startSecondRound) // remake these as in shopping list? Test!
  answerButtonNo.addEventListener('click', keepAskingFirst)
}


/* I don't know how this works, but I feel like I need it:
function showFirstQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonElement.appendChild(button)
  })
}


function selectAnswer() {

}
*/



// if first series fails, repeat:
function keepAskingFirst() {
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  showFirstQuestion(shuffledQuestions[currentQuestionIndex])
}

// otherwise, second round:
function startSecondRound() {
  shuffledQuestions = questionsDemacia.sort(() => Math.random() - .5) 
  currentQuestionIndex = 0
  showSecondQuestion(shuffledQuestions[currentQuestionIndex])
}

function showSecondQuestion(question) {
  questionElement.innerText = question.question
  answerButtonYes.addEventListener('click', firstGuess)
  answerButtonNo.addEventListener('click', keepAskingSecond)
} 

// if second series fails, repeat:
function keepAskingSecond() {
  shuffledQuestions = questionsDemacia.sort(() => Math.random() - .5) 
  currentQuestionIndex = 0
  showSecondQuestion(shuffledQuestions[currentQuestionIndex])
}

// if second series successful, take a guess:
// this function has to take into account the answer which was just given.
// I am thinking that it must be a for loop.
function firstGuess() {
  for (i = 0; i < questionsDemacia.length; i++) {
    if (i = 0) { // how does the program know that i = 0 or another number? Its the previous answer.
      questionElement.innerHTML = 'Your champion is Sylas!'
    }
  }
}

// currently app just freezes when I click yes. The loop isn't working.

function setGameOver() {
  endButton.classList.remove('hide')
  setRestartGame()
}


function setRestartGame() {
  endButton.addEventListener('click',
    function restartTheGame() {
      startGame()
  }
  )
}


const questions = [
  {
    question: 'Is your champion from Demacia?',
    answers: [
      {text: 'yes', correct: true },
      {text: 'no', incorrect: false}
    ]
  },
  {
    question: 'Is your champion from the Shadow Isles?',
    answers: [
      {text: 'yes', correct: true },
      {text: 'no', incorrect: false}
    ]
  },
  {
    question: 'Is your champion from Noxus?',
    answers: [
      {text: 'yes', correct: true },
      {text: 'no', incorrect: false}
    ]
  }
]

const questionsDemacia = [
  {
    question: 'Does your champion fight with chains?',
    answers: [
      {text: 'yes', correct: true },
      {text: 'no', incorrect: false}
    ]
  },
  {
    question: 'Does your champion breathe fire?',
    answers: [
      {text: 'yes', correct: true },
      {text: 'no', incorrect: false}
    ]
  }
]

/* 
const answersDemacia = [
  {
    question:
  }
] 














function a (){
  if (x == true) {
    console.log('X is true');
  } else if (y == true) {
    console.log('Y is true')
  }
}

/*
function setFirstAnswer() {
  answerButtonYes.addEventListener('click', () => {
  let secondQuestionText = questionEelement
  secondQuestionText.innerHTML = '<p> Is your champion from the Shadow Isles? </p>';
  })
} */


for (let i = 0; i < questions.length; i++) {
  console.log(questions[i]);
}

// for loops only work with numeric arrays
// a for ... in loop is used for associative arrays or an object

for (let i = 1; i <= Object.keys(questions).length; i++) {
  console.log(questions[i])
}












/* let shuffledQuestions = undefined
let currentQuestionIndex = undefined

shuffledQuestions = questions.sort(() => Math.random() - .5) /* this creates a completely random array. Necessary for first question to be taken at random 
currentQuestionIndex = 0 */


/*
function showQuestion(question) {
  questionEelement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.textbutton.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  nextChampion.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer() {
  const selectedButton = e.target // whatever is clicked on is e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(butto => {
    setStatusClass(button, button.dataset.correct)
  })
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.ClassList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Does your champion fight with chains?',
    answers: [
      {text: 'yes', correct: true },
      {text: 'no', incorrect: false}
    ]
  }
]

*/















