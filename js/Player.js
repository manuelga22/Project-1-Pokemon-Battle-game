class Player{
  constructor(){
    this.team =[];
  }
 checkIfPokemonAlive(){
    if(this.team[0].hp>0){
      return true;
    }else return false;
  }
 attack(index,enemy){//updates console
  $("#text").text(`${this.team[0].name} used ${this.team[0].attacks[index]}`);
  this.team[0].dealDamage(red,30,enemy);
  }
}