 $(document).ready(function(){
var choosen =false;
var playing = false;

var characters_div = '<div class="col-sm-2 obi click" value = 0><div class="characters " > Obi Wan Kenobi <img src="assets/images/Ben.png" alt="">	<div class="health">10</div></div></div>';


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

var obi;
var luke;
var maul;
var sidious;

var count = 0;


function player (name, attack, health) {

this.name = name ;
this.health =  health;
this.attack= attack;

}

setNewGame();

function setNewGame (argument) {
 	
 obi= new player("Obi One" , "8", "110");
characters.push(obi);

 luke= new player("Luke" ,"16s","110");
characters.push(luke);


 maul= new player("Maul", "20", "120");
characters.push(maul);

 sidious= new player ("sidious", "8","100");
characters.push(sidious);

playing = false;
choosen = false;



$(".cha").empty();


for(var i = 0 ; i <4 ; i++) {


var characters_div = '<div class="col-sm-2 click characters" value = '+ i +'>' + characters[i].name +'  <img src="assets/images/'+i+'.jpg" alt="">	<div class="health">'+characters[i].health+'</div></div>';
 
$(".cha").append(characters_div);
	// body... 
}



$(".click").on("click", clickCharacter);


$(".next").empty();
$(".display").empty();

$(".attack").hide();

}



function clickCharacter (argument) {
	// body... 


if (!playing) {
if (!choosen) {

	$(".me").append($(this));

me = characters[$(this).attr("value")];

choosen = true;

}


else
{
	$(".opponent").append($(this));
	opponent = characters[$(this).attr("value")];
	playing = true;
	count++;
	$(".next").empty();
	$(".attack").show();

}


}
}




$(".attack").on("click", function (i,j) {

me.health = parseInt(me.health) - parseInt(opponent.attack);
//$(".health").html(myHealth);


opponent.health -=  me.attack;


$(".display").html("You attacked " + opponent.name + "for " + me.attack+ " damage. <br> Your opponent attacked you back for "+ opponent.attack+ " damage.");


me.attack = parseInt(me.attack) + 8;

$(".opponent > .characters > .health").html(opponent.health);

$(".me > .characters > .health").html(me.health);

if (opponent.health <0 ) {

console.log("wa"+ opponent.health);

	$(".next").html("<h2>select next opponent</h2>");
	$(".opponent").empty();
	$(".attack").hide();
	playing = false;

}


if (count == 3 ) {
	setNewGame();
	$(".opponent").empty();
	$(".me").empty();
	alert("You won");

}

if (me.health <0) {
setNewGame();
	$(".opponent").empty();
	$(".me").empty();
	alert("You lose");

}



//setOppHealth(opponentHealth);
//console.log(opponentHealth);
//console.log("Wa"+myAttack);
//myAttack = parseInt(myAttack) + 8;




});




});
