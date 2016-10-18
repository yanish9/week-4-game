
var choosen =false;
var playing = false;

var myHealth;
var opponentHealth;

var myAttack ;
var opponentHealth;

var player;

var obi= {
	name: "Obi One" ,
	attack: "8",
	health: "110",

	getName: function () {
		return this.name;

	}

}

var luke= {
	name: "Luke" ,
	attack: 12,
	health: 150

}

var maul= {
	name: "Maul", 
	attack: 10,
	health: 100
}

var sidious= {
	name: "sidious", 
	attack: 8,
	health: 100

}

var user;



$(".click").on("click", function (i,j) {
	
var obii = $("#obi").data(obi);
console.log(obii.name);

	/* body... */
if (!playing) {
if (!choosen) {
	$(".me").append($(this));

	choosen = true;
	myHealth = select();
	myAttack = selectAttack();

}


else
{
	$(".opponent").append($(this));
	opponentHealth = select();
	opponentAttack = selectAttack();

	playing = true;
}

}
});


$(".attack").on("click", function (i,j) {

console.log("opponentHealth" + opponentHealth);
myHealth = parseInt(myHealth) - parseInt(opponentAttack);
//$(".health").html(myHealth);

opponentHealth = opponentHealth -  myAttack;

$(".opponent > .click > .characters > .health").html(opponentHealth);

//setOppHealth(opponentHealth);
console.log(opponentHealth);
console.log("Wa"+myAttack);
myAttack = parseInt(myAttack) + 8;




});



function setOppHealth (user) {


console.log();
switch (player) {
		case "obi":
$(".obi-health").html(user);

			break;

			case "luke":
			$(".luke-health").html(user);

			break;

			case "maul":
			$(".maul-health").html(user);

			break;

			case "sidious":
			$(".sid-health").html(user);

			break;
		default:
			// statements_def
			break;
	}

}



function select (user) {

 player = $(".characters").attr('value');

	switch (player) {
		case "obi":

			return obi.health;

			break;

			case "luke":
			return  luke.health;
			break;

			case "maul":
			return  maul.health;
			break;

			case "sidious":
			return sidious.health;
			break;
		default:
			// statements_def
			break;
	}

}

function selectAttack (user) {

	 player = $(".characters").attr('value');

	switch (player) {
		case "obi":

			return obi.attack;

			break;

			case "luke":
			return  luke.attack;
			break;

			case "maul":
			return  maul.attack;
			break;

			case "sidious":
			return sidious.attack;
			break;
		default:
			// statements_def
			break;
	}

}

