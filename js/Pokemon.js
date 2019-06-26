class Pokemon{
  constructor(name,hp,type,img,speed,audio,attacks){
    this.speed=speed;
    this.audio = audio;
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
 dealDamage(amount,enemy,index){
   let damage = amount;
   if(amount==30 && enemy.name == "gary"){
    $("#text").text(`${red.team[0].name} used 
    ${red.team[0].attacks[index]}`);
   }else if(amount ==40 && enemy.name=="gary"){
    $("#text").text(`${red.team[0].name} used 
    ${red.team[0].attacks[index]}, it's super effective`);
   }else if(amount ==20 && enemy.name=="gary"){
    $("#text").text(`${red.team[0].name} used 
    ${red.team[0].attacks[index]}, not very effective`);
   }
   if(amount==30 && enemy.name == "red"){
    $("#text").text(`${gary.team[0].name} used 
    ${gary.team[0].attacks[Math.floor(Math.random()*3)]}`);
   }else if(amount ==40 && enemy.name=="red"){
    $("#text").text(`${gary.team[0].name} used 
    ${gary.team[0].attacks[Math.floor(Math.random()*3)]}
    it's super effective`);
   }else if(amount ==20 && enemy.name=="red"){
    $("#text").text(`${gary.team[0].name} used 
    ${gary.team[0].attacks[Math.floor(Math.random()*3)]} 
    not very effective`);
   }
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
}//end of class
