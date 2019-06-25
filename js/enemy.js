class Enemy{
  constructor(name){
    this.name = name;
    this.team =[];
  }

  getRandom(){
    return Math.floor(Math.random()*3);
  }
  attackEndOfturn(index){
   //update the console
   $("#text").text(`${red.team[0].name} used 
   ${red.team[0].attacks[index]}`);
   //do the damage
   this.team[0].dealDamage(30,gary);
   if(!(gary.team[0].checkIfPokemonAlive())){
    setTimeout(function(){
      changePokemon(gary);
      },1500);
   }
  }
 attack(index){
   //update the console
   $("#text").text(`${this.team[0].name} used 
   ${this.team[0].attacks[this.getRandom()]}`);
   //do the damage
   this.team[0].dealDamage(30,red);
   //check if the pokemon attacked is alive
   if(red.team[0].checkIfPokemonAlive()){
    setTimeout(function (){
      gary.attackEndOfturn(index);
    },2000);
   }else{
    changePokemon(red);
  }
 }
}