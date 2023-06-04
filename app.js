const quizData = [
   {
    question : "Javascript is an _______ language?",
    a: "Object-Oriented" ,
    b: "Object-Based",
    c: "Procedural",
    correct: "a",
   },
   {
    question : "Which of the following keywords is used to define a variable in Javascript?",
    a: "var" ,
    b: "let",
    c: "Both a and b ",
    correct: "c",
   },
   {
    question : "Which of the following method is used to access HTML elements using Javascript?",
    a: "getElementbyId" ,
    b: "getElementByClassName" ,
    c: "Both A and B",
    correct: "c",
   },
   {
    question : "Upon encountering empty statements, what does the Javascript Interpreter do?",
    a: "Throw the error" ,
    b: "Ignores the statements",
    c: "None of the above",
    correct: "b",
   },
   {
    question : "What year was Javascript launched?",
    a: "1996" ,
    b: "1995",
    c: "1994",
    correct: "b",
   },
   {
    question : "What does HTML stand for ?",
    a: "Hypertext  Markup Language" ,
    b: "Hypertext  Markdown Language",
    c: "Hyperloop  Machine Language",
    correct: "a",
   },
   {
    question : "What does CSS stand for?",
    a: "Central Style Sheets" ,
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    correct: "b",
   },
   {
    question : "What language runs on web browser?",
    a: "Python" ,
    b: "C++",
    c: "JavaScript",
    correct: "c",
   },
   {
    question : "Which of the following is not a Javascript framework?",
    a: "Node ",
    b: "Vue",
    c: "Cassandra",
    correct: "c",
   },
   {
    question : "What keyword is used to declare an asynchronous function in Javascript?",
    a: "async" ,
    b: "await" ,
    c: "setTimeout",
    correct: "a",
   },
   {
    question : "How to stop an interval timer in Javascript?",
    a: "clearInterval" ,
    b: "clearTimer",
    c: "intervalOver",
    correct: "a",
   },
   {
    question : " How do we write a comment in javascript?",
    a: "/* */" ,
    b: "//",
    c: "#",
    correct: "a",
   },
   {
    question : "In which HTML element, we put the JavaScript code?",
    a: "<js>...</js>" ,
    b: "<script>...</script>",
    c: "<javascript>...</javascript>",
    correct: "b",
   },
   {
    question : "JavaScript code can be written in ____.?",
    a: "JavaScript file (.js file)" ,
    b: "HTML document directly",
    c: "JavaScript file and in HTML document directly",
    correct: "c",
   },
   {
    question : "Which symbol is used separate JavaScript statements?",
    a: "Colon (:)" ,
    b: "Semicolon (;)",
    c: "Comma (,)",
    correct: "b",
   },
   {
    question : "JavaScript ignores?",
    a: "newlines and tabs" ,
    b: "spaces",
    c: "All of the above",
    correct: "c",
   },
   {
    question : "How many keywords are there in JavaScript to declare variables or constants?",
    a: "1" ,
    b: "2",
    c: "3",
    correct: "c",
   },
   {
    question : "The const keyword is used to define a ______.?",
    a: "Function scopes variable" ,
    b: "Block scoped variable",
    c: "Constant",
    correct: "c",
   },
   {
    question : "What is the default value of an uninitialized variable?",
    a: "0" ,
    b: "Undefined",
    c: "null",
    correct: "b",
   },

   {
    question : "Original Name of Javascript is?",
    a: " LiveScript" ,
    b: " Escript",
    c: " Javascript",
    correct: "a",
   }
];

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
shuffleArray(quizData);

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const submitBtn = document.getElementById("submit");

let quizSize = quizData.length;
let currentQuiz = 0;
let score = 0;
// const randomQuizNumber = Math.floor(Math.random()*20) + 1;

const loadQuiz = () => {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c

};
loadQuiz();

function deselectAnswers() {
    answerEls.forEach((answer) => (answer.checked =false));
    };
function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

        return answer
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected()
    
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        
        if(currentQuiz < quizSize) {
            loadQuiz()
        } else {
            shuffleArray(quizData);
            if(score<0.7*quizSize){
                quiz.innerHTML = `
                <h2>You answered ${score}/${quizSize} questions correctly</h2>
                <button onClick="location.reload()">Retake</button>`
            }
            else{
                quiz.innerHTML = `
                <h2>You answered ${score}/${quizSize} questions correctly</h2>`
            }
        }
    }
});