
var choosen =false;
var playing = false;

var myHealth;
var opponentHealth;

var myAttack ;
var opponentHealth;

var name ;
var health;
var attack; 

var opponent;
var me;

var characters = [];

function player (name, attack, health) {

this.name = name ;
this.health =  health;
this.attack= attack;

}




var obi= new player("Obi One" , "8", "110");
characters.push(obi);

var luke= new player("Luke" ,"12","150");
characters.push(luke);


var maul= new player("Maul", "10", "100");
characters.push(maul);

var sidious= new player ("sidious", "8","100");
characters.push(sidious);




$(".click").on("click", function (i,j) {
	
var obii = $("#obi").data(obi);
//console.log(obii.name);

	/* body... */
if (!playing) {
if (!choosen) {
	$(".me").append($(this));

me = characters[$(this).attr("value")];

console.log($(this).attr("value"));
	choosen = true;
	myHealth = select();
	//myAttack = selectAttack();

}


else
{
	$(".opponent").append($(this));
	opponent = characters[$(this).attr("value")];
	playing = true;
}

}
});


$(".attack").on("click", function (i,j) {

console.log("opponentHealth" + opponentHealth);
me.health = parseInt(me.health) - parseInt(opponent.attack);
//$(".health").html(myHealth);

opponent.health -=  me.attack;

me.attack = parseInt(me.attack) + 8;

$(".opponent > .click > .characters > .health").html(opponent.health);

$(".me > .click > .characters > .health").html(me.health);

if (opponent.health <0 ) {

	$("#mid").append("<h2>select next opponent</h2>");
	$(".opponent").empty();
	playing = false;

}


//setOppHealth(opponentHealth);
//console.log(opponentHealth);
//console.log("Wa"+myAttack);
//myAttack = parseInt(myAttack) + 8;




});



function setOppHealth (user) {


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



function select (player) {

 //player = $(this).attr('value');

console.log(player);

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



