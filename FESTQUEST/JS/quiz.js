document.getElementById("quiz-button").addEventListener("onclick", startQuiz);
document.getElementById("finishButton").addEventListener("onclick", finishQuiz);
function startQuiz(){
    
    document.getElementById("quiz-questions").style.display="block";
    document.getElementById("quiz-wrapper").style.display="none";
    document.getElementById("result-box").style.display="none";

}

        



function finishQuiz(){
    var question1 = document.Secret_quiz.question1.value;
    var question2 = document.Secret_quiz.question2.value;
    var question3 = document.Secret_quiz.question3.value;
    var question4 = document.Secret_quiz.question4.value;
    var question5 = document.Secret_quiz.question5.value;
    var question6 = document.Secret_quiz.question6.value;
    var question7 = document.Secret_quiz.question7.value;
    var question8 = document.Secret_quiz.question8.value;
    var question9 = document.Secret_quiz.question9.value;
    var question10 = document.Secret_quiz.question10.value;
    var correct = 0;
    

    if (question1 == "They are planning a suprise party"){
    correct++;
    }
    if (question2 == "Secret santa"){
    correct++;
    }
    if (question3 == "Ensure that the person you are suprising doesn't find out without displaying strange behaviour"){
    correct++;
    }
    if (question4 == "Treasure hunt"){
    correct++;
    }
    if (question5 == "Inform the person you are suprising and make preparations next time"){
    correct++;
    }
    if (question6 == "Plan and prepare in advanced"){
    correct++;
    }
    if (question7 == "During the weekends or breaks"){
    correct++;
    }
    if (question8 == "Birthday"){
    correct++;
    }
    if (question9 == "Somewhere the person you are suprising can get to"){
    correct++;
    }
    if (question10 == "Cheer the peson up first before suprising them"){
    correct++;
    }
    var marks = correct*2
    
    if(marks>=10){
        document.getElementById("result-box").style.backgroundColor="#766617";
        if(marks==20){
            document.getElementById("result-box").style.backgroundColor="#54bd2d";
        }
    }
    else if(marks<10){
        document.getElementById("result-box").style.backgroundColor="#761737";
    }
    
    document.getElementById("quiz-questions").style.display="none";
    document.getElementById("quiz-wrapper").style.display="block";
    document.getElementById("result-box").style.display="block";
    
    
    document.getElementById("after_quiz").style.visibility = "visible";
document.getElementById("answer_correct").innerHTML = "You got " + correct + " correct.";
 document.getElementById("mark").innerHTML = "You got " + marks + " marks.";
   
    
    
};