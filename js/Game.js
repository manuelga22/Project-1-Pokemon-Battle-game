$("#changePage").hide();
$(".stadium").hide();
$(".attack").css("display", "none");
$(".youLose").hide();
$(".youWin").hide();
//variables
let red = new Player("red");
let gary = new Enemy("gary");
let charizard = new Pokemon("Charizard",110,"fire","images/Charizard.gif",80,"songs/charizard.mp3",["Flamethrower","Fire Blast","Slash","WingAttack"]);
let feraligatr = new Pokemon("Feraligatr",90,"water","images/Feraligatr.gif",82,"songs/feraligatr.mp3",["Surf","Water Gun","Ice Beam","Hydro Pump"]);
let raikou=new Pokemon("Raikou",110,"electric","images/raikou.gif",90,"songs/raikou.mp3",["thunder","Volt Tackle","Thunderbolt","Thunder Shock"]); 
let gengar=new Pokemon("Gengar",100,"ghost","images/Gengar.gif",83,"songs/gengar.mp3",["Shadow Ball","Hex Ghost","Dazzling Gleam","Energy Ball"]);
let mewtwo= new Pokemon("Mewtwo",150,"psychic","images/Mewtwo.gif",95,"songs/mewtwo.mp3",["Psychic","Thunder","Fire Blast","Ice Beam"]);
let pikachu= new Pokemon("Pikachu",70,"electric","images/Pikachu.gif",85,"songs/pikachu.mp3",["Volt Tackle","Iron tail","Thunderbolt","Dig"]);
let salamance=new Pokemon("Salamence",90,"dragon","images/Salamence.gif",75,"songs/Salamence.mp3",["Dragon Meteor","Dragon Claw","Dragon Dance","Earthquake"]);
let swampert=new Pokemon("Swampert",110,"water","images/Swamper.gif",92,"songs/swampert.mp3",["Surf","Water Gun","Hydro Pump","Earthquake"]);
let sceptile=new Pokemon("Sceptile",90,"grass","images/Sceptile.gif",94,"songs/sceptile.mp3",["Swords Dance","Leaf Blade","Acrobat","Earthquake"]);
let metapod =new Pokemon("Metapod",100,"bug","images/metapod.gif",20,"songs/metapod.mp3",["Harden","Harden","Harden","Harden"]);
let tyranitar=new Pokemon("Tyranitar",110,"rock","images/Tyranitar.gif",81,"songs/tyranitar.mp3",["dragon dance","fire punch","crunch","earthquake"]);
let typhlosion=new Pokemon("Typhlosion",100,"fire","images/typhlosion.gif",78,"songs/typhlosion.mp3",["Flamethrower","Eruption","Lava","SolarBeam"]);
let arrayOfPokemon =[charizard,feraligatr,gengar,mewtwo,pikachu,salamance,swampert,sceptile,tyranitar,metapod,raikou,typhlosion];
let attackSound = new Audio("songs/attack.mp3");
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
  if(player.team.length == 6){
  $(".pokemonList").hide();
  $("#changePage").show();
  addPokemonToEnemy(gary);
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
  $(".title").hide();
  var song = new Audio("songs/trainerBattle.mp3");
  song.play();
  startFight(0);
});
//
//Fighting system
function startFight(index){
  var sound = new Audio(red.team[0].audio);
  sound.play();
  $("#pokemon1").append(`<img src="${red.team[0].img}" >`).hide().show(1000); 
  $("#Name1").text(`Name: ${red.team[0].name}`);
  $("#Name2").text(`Name: ${gary.team[0].name}`);
  $("#HP1").text(`HP: ${red.team[0].hp}`);
  setTimeout(function(){
    var sound2 = new Audio(gary.team[0].audio);
    sound2.play();
    $("#pokemon2").append(`<img src="${gary.team[0].img}" >`).hide().show(1000);
    $("#HP2").text(`HP: ${gary.team[0].hp}`);
    $("#attack1").text(`${red.team[index].attacks[0]}`);
    $("#attack2").text(`${red.team[index].attacks[1]}`);
    $("#attack3").text(`${red.team[index].attacks[2]}`);
    $("#attack4").text(`${red.team[index].attacks[3]}`);
  },2000);
 
}
function changePokemon(enemy){
  enemy.team.splice(0,1);
  console.log(enemy.team);
  enemy.checkIfLost();
  if(enemy.name == "gary"){
    var sound = new Audio(gary.team[0].audio);
    sound.play();
    //display new gary pokemon
    $("#Name2").html(`<p>Name: ${gary.team[0].name}</p>`);
    $("#pokemon2").html(`<img src="${gary.team[0].img}">
    <div class="attack" id="AnimationFire2"></div>
    <div class="attack" id="AnimationWater2"></div>
    <div class="attack" id="AnimationNeutral2"></div>`).hide().show(1000);
    $('.attack').hide();
    $("#HP2").html(`<p> HP: ${gary.team[0].hp}</p>`);
  }else if(enemy.name=="red"){
    var sound2 = new Audio(red.team[0].audio);
    sound2.play();
    //display new pokemon
    $("#Name1").html(`<p>Name: ${red.team[0].name}</p>`);
    $("#pokemon1").html(`<img src="${red.team[0].img}" >
    <div class="attack" id="AnimationFire1"></div>
    <div class="attack" id="AnimationWater1"></div>
    <div class="attack" id="AnimationNeutral1"></div>`).hide().show(1000);
    $('.attack').hide();
    $("#HP1").html(`<p>HP: ${red.team[0].hp}</p>`);
    $("#attack1").text(`${red.team[0].attacks[0]}`);
    $("#attack2").text(`${red.team[0].attacks[1]}`);
    $("#attack3").text(`${red.team[0].attacks[2]}`);
    $("#attack4").text(`${red.team[0].attacks[3]}`);
    //
  }
}
function chooseAnimation(attacking){
  if(attacking.team[0].type == "fire" ||attacking.team[0].type === "psychic"||attacking.team[0].type === "rock"||attacking.team[0].type === "electric"){
    if(attacking.name == "red"){
      $("#AnimationFire2").toggle().fadeToggle(1400);
    }else if(attacking.name === "gary"){
      $("#AnimationFire1").toggle().fadeToggle(1400);
    }
   }else if(attacking.team[0].type === "water"){
    if(attacking.name == "red"){
      $("#AnimationWater2").toggle().fadeToggle(2400);
    }else if(attacking.name == "gary"){
      $("#AnimationWater1").toggle().fadeToggle(2400);
    }
   }else{
    if(attacking.name == "red"){
      $("#AnimationNeutral2").toggle().fadeToggle(2400);
    }else if(attacking.name == "gary"){
      $("#AnimationNeutral1").toggle().fadeToggle(2400);
    }
   }
  }
function increaseOrDecreaseDamage(attacking, defending,index){
  if(attacking.team[0].type == "fire"&& defending.team[0].type =="grass"||defending.team[0].type =="bug"){
    attacking.team[0].dealDamage(40,defending,index);
    chooseAnimation(attacking);
  }else if(attacking.team[0].type == "water"&&defending.team[0].type =="fire"||defending.team[0].type =="rock"){
    attacking.team[0].dealDamage(40,defending,index);
    chooseAnimation(attacking);
  }else if(attacking.team[0].type === "electric"&&defending.team[0].type =="water"){
    attacking.team[0].dealDamage(40,defending,index);
    chooseAnimation(attacking);
  }else if(attacking.team[0].type == "ghost"&& defending.team[0].type =="psychic"){
    attacking.team[0].dealDamage(40,defending,index);
    chooseAnimation(attacking);
  }else if(attacking.team[0].type == "rock"&& gary.team[0].type =="fire"||defending.team[0].type =="bug"){
    attacking.team[0].dealDamage(40,defending,index);
    chooseAnimation(attacking);
  }else if(attacking.team[0].type == "fire"&& defending.team[0].type =="rock"||defending.team[0].type =="water"){
    attacking.team[0].dealDamage(20,defending,index);
    chooseAnimation(attacking);
  }else if(attacking.team[0].type == "water"&&defending.team[0].type =="grass"||defending.team[0].type =="dragon"){
    attacking.team[0].dealDamage(20,defending,index);
    chooseAnimation(attacking);
  }else if(attacking.team[0].type == "electric"&&defending.team[0].type =="grass"||defending.team[0].type =="dragon"){
    attacking.team[0].dealDamage(20,defending,index);
    chooseAnimation(attacking);
  }else{
    attacking.team[0].dealDamage(30,defending,index);
    chooseAnimation(attacking);
  }
}

$("#attack1").on("click",function(){
  $(this).css("pointer-events", "none");
  if(red.team[0].speed>gary.team[0].speed){
    red.attack(0);
  }else {gary.attack(0);}
});
$("#attack2").click(function(){
   $(this).css("pointer-events", "none");
    if(red.team[0].speed>gary.team[0].speed){
    red.attack(1);
    }else {gary.attack(1);}
});
$("#attack3").click(function(){
  $(this).css("pointer-events", "none");
  if(red.team[0].speed>gary.team[0].speed){
  red.attack(2);
  }else {gary.attack(2);}
});
$("#attack4").click(function(){
    $(this).css("pointer-events", "none");
    if(red.team[0].speed>gary.team[0].speed){
    red.attack(3);
    }else {gary.attack(3);}
});
