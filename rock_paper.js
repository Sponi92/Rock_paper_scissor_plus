let auswahl=["ROCK", "PAPER", "SCISSORS"]
let auswahlPC
let auswahlUser
let countPC =0;
let countUser = 0;
let rock= "pictures/rock.png";
let paper= "pictures/paper.png";
let scissors= "pictures/scissor.png";

document.getElementById("button1").addEventListener("click", function() {
		clearDraw();
		auswahlUser="ROCK"
		playRound();
		checkCount();
});
document.getElementById("button2").addEventListener("click", function() {
	clearDraw();
	auswahlUser="PAPER"
	playRound();
	checkCount();
});

document.getElementById("button3").addEventListener("click", function() {
		clearDraw();
		auswahlUser="SCISSORS"
		playRound();
		checkCount();
	

});
function clearDraw() {
	document.getElementById("drawContainer").textContent=" ";
}

function playRound() {

	auswahlPC=chooseComputer();
	checkHand();
}
function chooseComputer() { //Zufallsfunktion die dem PC seine Hand zuweist
	document.getElementById("computerImage").innerHTML = " ";
	return auswahl[Math.floor(Math.random() * 		auswahl.length)];
}
function checkHand(){

	if (auswahlPC==="ROCK" && auswahlUser==="SCISSORS" || 		auswahlPC==="SCISSORS" && auswahlUser==="PAPER" ||
		auswahlPC==="PAPER" && auswahlUser==="ROCK")
		{
		countPC =countPC+1;
		showResult();
		getComputerHand();
	}
	else if (auswahlPC==="ROCK" && auswahlUser==="PAPER" ||
		auswahlPC==="SCISSORS" && auswahlUser==="ROCK"||
		auswahlPC==="PAPER" && auswahlUser==="SCISSORS") 
		{
		countUser =countUser+1;
		showResult();
		getComputerHand();
	}

	else if (auswahlPC===auswahlUser){
		showResult();		document.getElementById('drawContainer').textContent = 			"Draw";				
		getComputerHand();
		}
		}
		
function showResult() {
	document.getElementById('thisRound').textContent= "The Score is: Computer= "+countPC+" to Human= "+countUser ;
	}
function getComputerHand() {
document.getElementById('computer').textContent = "The computer chose: ";
	if (auswahlPC==="ROCK"){
		var image = new Image();
		image.src = rock;
		image.alt = "Rock";	document.getElementById("computerImage").appendChild(image);
		image.classList.add("resize");
		}
	else if (auswahlPC==="PAPER"){
		var image = new Image();
		image.src = paper;
		image.alt= "Paper";	document.getElementById("computerImage").appendChild(image);
		image.classList.add("resize");
		}
	else{
		var image = new Image();
		image.src = scissors;
		image.alt="Scissors";	document.getElementById("computerImage").appendChild(image);
		image.classList.add("resize");
	}
}

function checkCount(){
	if (countPC===5 ||countUser===5){
		checkWinner();
		countPC=0;
		countUser=0;
		}
	else {
		document.getElementById('endScore').textContent = " ";
		}
}
function checkWinner(){
	if (countUser> countPC){
		document.getElementById('endScore').textContent = "You Win!";
	}
else if (countUser< countPC){
	document.getElementById('endScore').textContent = "You Loose!";
	}
}
