$("#changePage").hide();
$(".stadium").hide();
//variables
let red = new Player();
let gary = new Enemy();
let charizard = new Pokemon("Charizard",110,"fire","images/Charizard.gif",["Flamethrower","Fire Blast","Slash","WingAttack"]);
let feraligatr = new Pokemon("Feraligatr",90,"water","images/Feraligatr.gif",["Surf","Water Gun","Ice Beam","Hydro Pump"]);
let raikou=new Pokemon("Raikou",110,"electric","images/raikou.gif",["thunder","Volt Tackle","Thunderbolt","Thunder Shock"]); 
let gengar=new Pokemon("Gengar",100,"ghost","images/Gengar.gif",["Shadow Ball","Hex Ghost","Dazzling Gleam","Energy Ball"])
let mewtwo= new Pokemon("Mewtwo",150,"psychic","images/Mewtwo.gif",["Psychic","Thunder","Fire Blast","Ice Beam"]);
let pikachu= new Pokemon("Pikachu",70,"electric","images/Pikachu.gif",["Volt Tackle","Iron tail","Thunderbolt","Dig"]);
let salamance=new Pokemon("Salamace",90,"dragon","images/Salamence.gif",["Dragon Meteor","Dragon Claw","Dragon Dance","Earthquake"]);
let swamper=new Pokemon("Swamper",110,"water","images/Swamper.gif",["Surf","Water Gun","Hydro Pump","Earthquake"]);
let sceptile=new Pokemon("Sceptile",90,"grass","images/Sceptile.gif",["Swords Dance","Leaf Blade","Acrobat","Earthquake"]);
let metapod =new Pokemon("Metapod",300,"insect","images/metapod.gif",["Harden","Harden","Harden","Harden"]);
let tyranitar=new Pokemon("Tyranitar",110,"rock","images/Tyranitar.gif",["dragon dance","fire punch","crunch","earthquake"]);
let typhlosion=new Pokemon("Typhlosion",100,"fire","images/typhlosion.gif",["Flamethrower","Eruption","Lava","SolarBeam"]);
let arrayOfPokemon =[charizard,feraligatr,gengar,mewtwo,pikachu,salamance,swamper,sceptile,tyranitar,metapod,raikou,typhlosion];
//
function addPokemontoPlayer(player,pokemon,index){
  player.team.push(pokemon[index]);
  delete arrayOfPokemon[index];
}
function addPokemonToEnemy(enemy){
  var garyPokemons = arrayOfPokemon.filter(function(el){
     return el != undefined;
  });
  enemy.team = garyPokemons;
}
function detectIfPlayerHas6Pokemon(player){
  //console.log(player.team);
  if(player.team.length == 6){
  $(".pokemonList").hide();
  $("#changePage").show();
  addPokemonToEnemy(gary);
  //console.log(gary.team);
  }
}
function startFight(index){
  $("#pokemon1").append(`<img src="${red.team[index].img}" >`).hide().show(1000); 
  $("#pokemon2").append(`<img src="${gary.team[index].img}" >`).hide().show(1000);
  $("#Name1").text(`Name: ${red.team[index].name}`);
  $("#Name2").text(`Name: ${gary.team[index].name}`);
  $("#HP1").text(`HP: ${red.team[index].hp}`);
  $("#HP2").text(`HP: ${gary.team[index].hp}`);
  $("#attack1").text(`${red.team[index].attacks[0]}`);
  $("#attack2").text(`${red.team[index].attacks[1]}`);
  $("#attack3").text(`${red.team[index].attacks[2]}`);
  $("#attack4").text(`${red.team[index].attacks[3]}`);
}
function changePokemon(enemy){
  enemy.team.splice(0,1);
  if(enemy == "gary"){
    $("#pokemon2").hide();
    // $("#HP2").hide();
    // $("#Name1").hide();
    $("#Name2").text(`Name: ${gary.team[0].name}`);
    $("#pokemon2").attr(`<img src="${gary.team[0].img}" >`);
    $("#HP2").text(`HP: ${gary.team[0].hp}`);
  }else if(enemy=="red"){
    $("#pokemon1").empty();
    $("#HP1").empty();
    $("#Name1").empty();
    $("#Name1").text(`Name: ${gary.team[index].name}`);
    $("#pokemon1").append(`<img src="${gary.team[index].img}" >`);
    $("#HP1").text(`HP: ${gary.team[index].hp}`);
    $("#attack1").text(`${red.team[index].attacks[0]}`);
    $("#attack2").text(`${red.team[index].attacks[1]}`);
    $("#attack3").text(`${red.team[index].attacks[2]}`);
    $("#attack4").text(`${red.team[index].attacks[3]}`);
  }
}
$("#charizard").on("click",function(){
  addPokemontoPlayer(red, arrayOfPokemon,0);
  $("#charizard").hide();
  detectIfPlayerHas6Pokemon(red);
});
$("#Feraligatr").on("click",function(){
  addPokemontoPlayer(red,arrayOfPokemon,1);
  $("#Feraligatr").hide();
  detectIfPlayerHas6Pokemon(red);
});
$("#Raikou").on("click",function(){
  addPokemontoPlayer(red,arrayOfPokemon,10);
  $("#Raikou").hide();
  detectIfPlayerHas6Pokemon(red);
});
$("#Gengar").on("click",function(){
  addPokemontoPlayer(red,arrayOfPokemon,2);
  $("#Gengar").hide();
  detectIfPlayerHas6Pokemon(red);
});
$("#Mewtwo").on("click",function(){
  addPokemontoPlayer(red,arrayOfPokemon,3);
  $("#Mewtwo").hide();
  detectIfPlayerHas6Pokemon(red);
});
$("#Pikachu").on("click",function(){
  addPokemontoPlayer(red,arrayOfPokemon,4);
  $("#Pikachu").hide();
  detectIfPlayerHas6Pokemon(red);
});
$("#Salamance").on("click",function(){
 addPokemontoPlayer(red,arrayOfPokemon,5);
 $("#Salamance").hide();
 detectIfPlayerHas6Pokemon(red);
});
$("#Swamper").on("click",function(){
  addPokemontoPlayer(red,arrayOfPokemon,6);
  $("#Swamper").hide();
  detectIfPlayerHas6Pokemon(red);
});
$("#Sceptile").on("click",function(){
  addPokemontoPlayer(red,arrayOfPokemon,7);
  $("#Sceptile").hide();
  detectIfPlayerHas6Pokemon(red);
});
$("#Metapod").on("click",function(){
  addPokemontoPlayer(red,arrayOfPokemon,9);
  $("#Metapod").hide();
  detectIfPlayerHas6Pokemon(red);
});
$("#Tyranitar").on("click",function(){
  addPokemontoPlayer(red,arrayOfPokemon,8);
  $("#Tyranitar").hide();
  detectIfPlayerHas6Pokemon(red);
});
$("#typhlosion").on("click",function(){
  addPokemontoPlayer(red,arrayOfPokemon,11);
  $("#typhlosion").hide();
  detectIfPlayerHas6Pokemon(red);
});
$("#changePage").on("click",function(){
  $("#changePage").hide();  
  $(".stadium").show();
  startFight(0);
});

//Fighting system
$("#attack1").on("click",function(){
  if(gary.checkIfPokemonAlive()){
  red.attack(0,gary);
  }
  if(red.checkIfPokemonAlive()){
  setTimeout(function(){
   gary.attack(red);},2000);
   }
});
$("#attack2").click(function(){
  if(gary.checkIfPokemonAlive()){
    red.attack(1,gary);
    }
    if(red.checkIfPokemonAlive()){
    setTimeout(function(){
    gary.attack(red);},2000);
    }
});
$("#attack3").click(function(){
    if(gary.checkIfPokemonAlive()){
    red.attack(2,gary);
    }
    if(red.checkIfPokemonAlive()){
    setTimeout(function(){
    gary.attack(red);},2000);
    }
});
$("#attack4").click(function(){
  if(gary.checkIfPokemonAlive()){
    red.attack(3,gary);
    }
    if(red.checkIfPokemonAlive(gary)){
    setTimeout(function(){
    gary.attack(red);},2000);
    }
});
