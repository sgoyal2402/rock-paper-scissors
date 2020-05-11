// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
   
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

var game1= $(".game-part1");
var game2 = $(".game-part2");
var user = $(".user .out-1");
var comp = $(".comp .out-1");
var result = $(".result");
var resultText = $(".win");
var scr = $(".dark-text")
var userWin;
var score = 0;
var inner = comp.children()[0];
var img2;
var img1;

function randomChoice(){
    var choices = ["scissors", "rock", "paper"];
    var choice = Math.floor(Math.random()*3);
    var img = choices[choice];
    return img;
}

function checkWin(one,two){
    if(one==="scissors" && two ==="paper"){
        return 1;
    }
    else if(one === "paper" && two === "rock"){
        return 1;
    }
    else if(one === "rock" && two === "scissors"){
        return 1;
    }
    else{
        return 0;
    }

}

function reset(){
    game1.removeClass("hidden");
    game2.addClass("hidden");
    inner.classList.remove("in-1");
    inner.classList.add("in-2");
    user.removeClass(img1);
    comp.removeClass(img2);
    user.children()[0].innerHTML=" ";
    comp.children()[0].innerHTML=" ";
    result.addClass("hidden");
    user.removeClass("winner");
    comp.removeClass("winner");
    img2 = "";

}

function game(){
    img1 = event.currentTarget.classList[1];
    console.log(img1);
    game1.addClass("hidden");
    game2.removeClass("hidden");

    for(img2 = randomChoice();img1===img2;){
        img2 = randomChoice();
    } 
    console.log(img2);
    var img1Source = "images/icon-" + img1 + ".svg";
    var img2Source = "images/icon-" + img2 + ".svg";

    user.children()[0].innerHTML="<img src=" + img1Source +">";
    user.addClass(img1);

    setTimeout(function(){
        comp.children()[0].innerHTML="<img src=" + img2Source +">";
   
        inner.classList.add("in-1");
        inner.classList.remove("in-2");
        comp.addClass(img2);
    },500);

    userWin = checkWin(img1,img2);
    console.log(userWin);

    setTimeout(function(){
        if(userWin){
            user.addClass("winner");
            resultText.text("YOU WIN");
            score++;
            scr.text(score);
        }
        else{
            comp.addClass("winner");
            resultText.text("YOU LOSE");
            score--;
            scr.text(score);
        }

        result.removeClass("hidden");
    
    },1000);
}


$(".out").click(event,(event)=>{
    game();
});

$("#play_again").click(event,(event)=>{
    reset();
})

