function addUser(){
    player_1= document.getElementById("user_name_1").value;
    player_2= document.getElementById("user_name_2").value;

    localStorage.setItem("Player_1" , player_1);
    localStorage.setItem("Player_2" , player_2);

    window.location.replace("game_page.html");
}