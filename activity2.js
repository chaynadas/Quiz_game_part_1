function Back(){
    window.location = "activity1.html";
}

function GetScore(){
    Score = localStorage.getItem("score");
    document.getElementById("update").innerHTML = "<h1>Score" + score + "</h1>"
}