let auswahl=["ROCK", "PAPER", "SCISSORS"]
let auswahlPC
let auswahlUser
let countPC =0;
let countUser = 0;




document.getElementById("button1").addEventListener("click", function() {
		auswahlUser="ROCK"
		playRound();
		checkCount();
});
document.getElementById("button2").addEventListener("click", function() {
		auswahlUser="PAPER"
		playRound();
		checkCount();
});

document.getElementById("button3").addEventListener("click", function() {
		auswahlUser="SCISSORS"
		playRound();
		checkCount();

});



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




function playRound() {

	auswahlPC=chooseComputer();
	checkHand();
}


function checkHand(){

	if (auswahlPC==="ROCK" && auswahlUser==="SCISSORS" || 		auswahlPC==="SCISSORS" && auswahlUser==="PAPER" ||
		auswahlPC==="PAPER" && auswahlUser==="ROCK"){
		countPC =countPC+1;
		document.getElementById('thisRound').textContent = " Count: PC="+countPC+" to Count: User="+countUser;

	}
	else if (auswahlPC==="ROCK" && auswahlUser==="PAPER" ||
		auswahlPC==="SCISSORS" && auswahlUser==="ROCK"||
		auswahlPC==="PAPER" && auswahlUser==="SCISSORS") {
		countUser =countUser+1;
		document.getElementById('thisRound').textContent = " Count: PC="+countPC+" to Count: User="+countUser;
	}

	else if (auswahlPC===auswahlUser){
		document.getElementById('thisRound').textContent = "Draw";
		}
		}
		
function chooseComputer() { //Zufallsfunktion die dem PC seine Hand zuweist
	return auswahl[Math.floor(Math.random() * auswahl.length)];
}

function checkWinner(){
if (countUser> countPC){
document.getElementById('endScore').textContent = "You Win!";
}
else if (countUser< countPC){
document.getElementById('endScore').textContent = "You Loose!";
}
}
