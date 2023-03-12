Score = 0;

function updateScore(){
    Score = Score + 1 ;
    document.getElementById("score").innerHTML = "Score: " + Score;
}

function saveScore(){
    localStorage.setItem("Score" , Score);
}

function nextPage(){
    window.location = "activity2.html";
}