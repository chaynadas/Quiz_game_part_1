function addUser(){
   player1_name = document.getElementById("Player1_name").Value;
    player2_name = document.getElementById("Player2_name").Value;

    localStorage.setItem("Player_1_name" , player1_name);
    localStorage.setItem("Player_2_name" , player2_name);

    window.location = "game_page.html";
}