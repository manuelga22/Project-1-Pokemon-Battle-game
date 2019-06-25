class Player{
  constructor(name){
    this.name=name;
    this.team =[];
  }
 attackEndOfTurn(enemy){
  //updates console
  $("#text").text(`${enemy.team[0].name} used 
  ${enemy.team[0].attacks[Math.floor(Math.random()*3)]}`);
  //does damage
  this.team[0].dealDamage(30,red);
  //checks if pokemon was killed in the second turn
   if(!(red.team[0].checkIfPokemonAlive())){
      setTimeout(function(){
      changePokemon(red);
      },1500);
   }
 }
 attack(index){
   //updates console
  $("#text").text(`${this.team[0].name} used 
  ${this.team[0].attacks[index]}`);
  //does damage
  this.team[0].dealDamage(30,gary);
  //checks if other pokemon is alive
  if(gary.team[0].checkIfPokemonAlive()){
    setTimeout(function(){
      red.attackEndOfTurn(gary);
    },2000);  
  }else{
    changePokemon(gary);
  }
  }


}