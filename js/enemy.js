class Enemy {
  constructor(name) {
    this.name = name;
    this.team = [];
  }
  attackEndOfturn(index) {
    increaseOrDecreaseDamage(red, gary, index); //do the damage
    attackSound.play();
    if (!gary.team[0].checkIfPokemonAlive()) {
      setTimeout(function() {
        changePokemon(gary);
      }, 1500);
    }
  }
  attack(index) {
    increaseOrDecreaseDamage(gary, red, index); //does the damage
    attackSound.play();
    if (red.team[0].checkIfPokemonAlive()) {//check if the pokemon attacked is alive
      setTimeout(function() {
        gary.attackEndOfturn(index);
        $("button").css("pointer-events", "all");
      }, 2000);
    } else {
      red.checkIfLost();
      setTimeout(function() {
        changePokemon(red);
      }, 1500);
      $("button").css("pointer-events", "all");
    }
  }
  checkIfLost(){
    if(this.team.length ==0){
      $(".stadium").hide();
      $(".youWin").show();
      setTimeout(function(){
       location.reload();
      },10000);
    }
  }
} //end of class
