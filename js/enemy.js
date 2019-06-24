class Enemy{
  constructor(){
    this.team =[];
  }
 checkIfPokemonAlive(){
    if(this.team[0].hp>0){
      return true;
    }else return false;
  }
 getRandom(){
    return Math.floor(Math.random()*3);
  }
 attack(enemy){
   let index = Math.floor(Math.random()*3);
   $("#text").text(`${this.team[0].name} used 
   ${this.team[0].attacks[index]}`);
   this.team[0].dealDamage(red,30,enemy);
 }
}