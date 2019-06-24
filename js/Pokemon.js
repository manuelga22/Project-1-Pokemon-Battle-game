class Pokemon{
  constructor(name,hp,type,img,attacks){
    this.attacks = attacks;
    this.type = type;
    this.name = name;
    this.hp = hp;
    this.img = img;
  }
  dealDamage(player,amount,enemy){
    if(amount>=enemy.team[0].hp){
      enemy.team[0].hp = 0;   
      changePokemon(enemy);  
    }else{
      enemy.team[0].hp-=amount;
      $("#HP2").text(`HP: ${enemy.team[0].hp}`);
      $("#HP1").text(`HP: ${player.team[0].hp}`);
    }
  } 
}
