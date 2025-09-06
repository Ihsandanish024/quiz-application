let questions = [
    {
        question : "who is the founder of pakistan",
        options: ["Q azam","iqbal","M jauher"],
        correctAnswere: "Q azam",
        time: 60,
        marks: 2
    },
    {
        question : "what is the national flower of pakistan",
        options: ["rose","yasmeen","lala"],
        correctAnswere: "rose",
        time: 60,
        marks: 2
    },
    {
        question : "what is the independent date of pakistan",
        options: [1945,1947,1943],
        correctAnswere: 1947,
        time: 60,
        marks: 2
    },
    {
        question : "who was the first PM of pakistan",
        options: ["liaqat ali khan","mirza","fatima jinnah"],
        correctAnswere: "liaqat ali khan",
        time: 60,
        marks: 2
    },
    {
        question : "when the first constitiution of pak was declared",
        options: [1954,1960,1955],
        correctAnswere: 1954,
        time: 60,
        marks: 2
    },
    {
        question : "who is the national poet of pakistan",
        options: ["allama muhammad iqbal","ch rahmat ali","rahat fatah ali khan"],
        correctAnswere: "allama muhammad iqbal",
        time: 60,
        marks: 2
    },
    {
        question : "who is the field martial",
        options: ["asim muneer","asif ghafoor","shehbaz sharif"],
        correctAnswere: "asim muneer",
        time: 60,
        marks: 2
    },
    {
        question : "which language do you prefer for game devalopment",
        options: ["javascript","c++","java"],
        correctAnswere: "javascript",
        time: 60,
        marks: 2
    },
    {
        question : "which one is more interesting",
        options: ["html","css","javascript"],
        correctAnswere: "css",
        time: 60,
        marks: 2
    },
    {
        question : "what about third queiz of Saylani",
        options: ["easy","difficult","normal"],
        correctAnswere: "dificult",
        time: 60,
        marks: 2
    },
    {
        question : "which skill do you like in our sir",
        options: ["speed","theory explaination","concept clearness"],
        correctAnswere: "concept clearness",
        time: 60,
        marks: 2
    },
]

let totalMarks = 0;

let questionIndex = 0;
let displayQuestion = document.getElementById("displayQuestion");
let displayOptions  = document.getElementById("displayOptions");
let currentQuestionNo = document.getElementById("currentQuestion");
let totalqueston = document.getElementById("totalqueston");
let timerDisplay = document.getElementById("timerDisplay")
let timer = 60;
totalqueston.innerHTML = questions.length;




let checkAnswer = (a,b,c) =>{
    if ( a === b ){
        totalMarks += c
    }
    console.log(totalMarks);
    nextQuestion();
    renderQuestion();
}

let renderQuestion = () => {
    let currentQuestion = questions[questionIndex];
    currentQuestionNo.innerHTML = questionIndex + 1;
    displayQuestion.innerHTML = currentQuestion.question;
    
displayOptions.innerHTML = "";
for(let i = 0; i < currentQuestion.options.length; i ++){
    let option = currentQuestion.options[i];
    displayOptions.innerHTML += `<button onclick="checkAnswer('${currentQuestion.correctAnswere}','${option}', ${currentQuestion.marks})">${option}</button>`
}

}

renderQuestion();





let  nextQuestion =() =>{ 
    if(questionIndex + 1 === questions.length){
       alert("quiz completed and your total marks are " + totalMarks);
    }else{
        questionIndex ++;
        renderQuestion();
        timer = questions[questionIndex].time
        timerDisplay.innerHTML = timer;
    }
}

let  prevQuestion =() =>{
    questionIndex --;
    renderQuestion();
}


const checkTimer = ()=>{
    const currentQuestion = questions[questionIndex];
    if (timer === 0 ){
        nextQuestion();
        timer = currentQuestion.time;
    }else{
        timer --;
    }
    timerDisplay.innerHTML = timer;

}

setInterval(checkTimer,1000)