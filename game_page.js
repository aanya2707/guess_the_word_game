player_1= localStorage.getItem("Player_1");
player_2= localStorage.getItem("Player_2");

score_player_1= 0;
score_player_2= 0;

document.getElementById("player_1").innerHTML=player_1 + " : ";
document.getElementById("player_2").innerHTML=player_2 + " : ";

document.getElementById("Score_1").innerHTML= score_player_1;
document.getElementById("Score_2").innerHTML= score_player_2;

document.getElementById("Question_turn").innerHTML="Question Turn = " + player_1 ;
document.getElementById("Answer_turn").innerHTML="Answer Turn = " + player_2;

function Send(){
    getWord=document.getElementById("Word").value;
    word=getWord.toLowerCase();
    console.log("word in lower case = " + word);

    CharAt1=word.charAt(1);
    console.log(CharAt1);

    length_divide= Math.floor(word.length/2);
    CharAt2= word.charAt(length_divide);
    console.log(CharAt2);

    length_minus= word.length - 1;
    CharAt3= word.charAt(length_minus);
    console.log(CharAt3);

    remove_CharAt1= word.replace(CharAt1, "_");
    remove_CharAt2= remove_CharAt1.replace(CharAt2, "_");
    remove_CharAt3= remove_CharAt2.replace(CharAt3, "_");
    console.log(remove_CharAt3);

    Question_Word = "<h4 id='word_display'> Q. " + remove_CharAt3 + "</h4>";
    Input = "<br>Answer : <input type='text' id='Input_box'>";
    Check_Button = "<br><br> <button class='btn btn-success' onclick='Check()'>Check</button>";
    row= Question_Word + Input + Check_Button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("Word").value="";
}

Question_turn = "player_1";
Answer_turn = "player_2";

function Check(){
    get_answer = document.getElementById("Input_box").value;
    answer = get_answer.toLowerCase(); 
    console.log("answer in lower case - " + answer);

    if(answer==word){
        if(Answer_turn=="player_1"){
            score_player_1 = score_player_1 + 1;
            document.getElementById("Score_1").innerHTML=score_player_1;
        }
        else{
            score_player_2 = score_player_2 + 1;
            document.getElementById("Score_2").innerHTML=score_player_2;
        }
    }
    if(Question_turn == "player_1"){
        Question_turn = "player_2";
        document.getElementById("Question_turn").innerHTML="Question turn - " + player_2;
    }
    else{
        Question_turn = "player_1";
        document.getElementById("Question_turn").innerHTML="Question turn - " + player_1;
    }
    if(Answer_turn == "player_1"){
        Answer_turn = "player_2";
        document.getElementById("Answer_turn").innerHTML="Answer turn - " + player_2;
    }
    else{
        Answer_turn = "player_1";
        document.getElementById("Answer_turn").innerHTML="Answer turn - " + player_1;
    }
    document.getElementById("output").innerHTML="";
}