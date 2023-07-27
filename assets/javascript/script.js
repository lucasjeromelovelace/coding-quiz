var questions = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts',
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses',
    },
    {
      title: 'Arrays in JavaScript can be used to store ____.',
      choices: [
        'numbers and strings',
        'other arrays',
        'booleans',
        'all of the above',
      ],
      answer: 'all of the above',
    },
    {
        title:
          'String values must be enclosed within ____ when being assigned to variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: 'quotes',
      },
      {
        title:
          'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
        answer: 'console.log',
      },
    ];
var time=60;
var TimerEl=document.getElementById("Timer");
var startEl=document.getElementById("start");
var startbtnEl=document.getElementById("start-btn");
var quizEl=document.getElementById("Quiz-play");
var questionEl=document.getElementById("question");
var answersEl=document.getElementById("answers");
var timeinterval;
var index=0

function startQuiz() {
    startEl.classList.add("hide")
    quizEl.classList.remove("hide")
    timeinterval=setInterval(countdown, 1000)
    TimerEl.textContent=time
    displayQuestions()
}
function countdown() {
    time--
    TimerEl.textContent=time
    if(time<=0){
        stop();        
    }
}
function displayQuestions() {
    var currentQuestion=questions [index]
    questionEl.textContent=currentQuestion.title
    answersEl.innerHTML=""
    currentQuestion.choices.forEach(function(choice){
        var btn=document.createElement("button");
        btn.textContent=choice
        btn.onclick=checkanswer;
        answersEl.append(btn);
    })
}
function checkanswer(event) {
    
}
startbtnEl.onclick=startQuiz