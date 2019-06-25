class Pokemon{
  constructor(name,hp,type,img,speed,attacks){
    this.speed=speed;
    this.attacks = attacks;
    this.type = type;
    this.name = name;
    this.hp = hp;
    this.img = img;
  }
  checkIfPokemonAlive(){
    if(this.hp>0){
      return true;
    }else return false;
  }
 dealDamage(amount,enemy){
  if(enemy.team[0].hp > amount){
    enemy.team[0].hp -= amount;
    $("#HP2").text(`HP: ${gary.team[0].hp}`);
    $("#HP1").text(`HP: ${red.team[0].hp}`);
   }else if(amount >= enemy.team[0].hp){
     enemy.team[0].hp = 0;
     $("#HP2").text(`HP: ${gary.team[0].hp}`);
     $("#HP1").text(`HP: ${red.team[0].hp}`);
   }
    
  } 
}
