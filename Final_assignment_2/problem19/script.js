const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");
const restart_btn =document.querySelector(".restart_quiz");

//if Start Quiz Button is clicked

start_btn.onclick =()=>{
    info_box.classList.add("activeInfo"); //show the info box;
}

//If exit button is clicked

exit_btn.onclick =()=>{
    info_box.classList.remove("activeInfo"); //Hide the info box;
}


// if Start Quiz button is clicked

continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuestions(0);
    queCounter(1);
}

//if restart button is clicked 

restart_btn.onclick =()=>{
    info_box.classList.add("activeInfo"); //show the info box;
    result_box.classList.remove('activeResult'); //hides the result box;
}

let que_count =0;
let que_numb = 1;
let userScore = 0;

const next_btn= document.querySelector('.next_btn');
const result_box= document.querySelector('.result_box');
const  restart_quiz =result_box.querySelector('buttons .restart');
const  quit_quiz =result_box.querySelector('buttons .quit');

// if Next Button is clicked 

next_btn.onclick=()=>{
    if(que_count < questions.length -1){ 
        que_count++;
        que_numb++;
        showQuestions(que_count); 
        queCounter(que_numb);
        next_btn.style.display ='none';
}
else{
    console.log("Questions Completed");
    showResultBox();
}
}

//getting questions and options from array

function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    let option_list = document.querySelector('.option_list');
    var que_tag=  '<p>'+ questions[index].numb + "." + questions[index].question+'</p>';
    let option_tag =  '<div class="option"> <input type="radio" name="ans" id="one">'+ questions[index].options[0]+ '</label></div>'
                       +'<div class="option"> <input type="radio" name="ans" id="two">'+ questions[index].options[1]+'</label></div>'
                       +'<div class="option"> <input type="radio" name="ans" id="three">'+ questions[index].options[2]+'</label></div>'
                       +'<div class="option"> <input type="radio" name="ans" id="four">'+ questions[index].options[3]+'</label></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML =option_tag;
    const option = option_list.querySelectorAll(".option");
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

// Validating useroption with correct option.

function optionSelected(answer){
    let userAns = answer.textContent.trim(); //removes whitespaces trailing and leading.
    console.log("userAns"+userAns);
    let allOptions = option_list.children.length;
    let correctAns = questions[que_count].answer; 
    if(userAns === correctAns){
      answer.classList.add("correct");
      userScore += 1;
      document.getElementById('icon-1').style.display='block';
      document.getElementById('icon-2').style.display='';
      console.log(userScore);
    } 
    else{
        answer.classList.add("incorrect");
        console.log("wrong");
        document.getElementById('icon-2').style.display='block';
        document.getElementById('icon-1').style.display=''; 
    }
       for(let i=0;i< allOptions; i++){
        option_list.children[i].classList.add("disabled");
       }
       next_btn.style.display ='block';
}

// Count of Present question from Total questions.

function queCounter(index){
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span>'+ index +' of '+ questions.length +' Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}


// Result box 

function showResultBox(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add('activeResult');// shows the result box
    const scoreText= result_box.querySelector(".score_text");
    if(userScore > 0){
        let scoreTag = '<i class="fa-solid fa-handshake"></i>'+' <p style="text-align: center"> you got <strong>'+ userScore +'</strong> out of <strong>'+ questions.length +'</strong>correct. <strong></p>';
        scoreText.innerHTML =scoreTag;
    }    
}