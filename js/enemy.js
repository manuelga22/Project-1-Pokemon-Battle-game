class Enemy {
  constructor(name) {
    this.name = name;
    this.team = [];
  }
  attackEndOfturn(index) {
    increaseOrDecreaseDamage(red, gary, index); //do the damage
    if (!gary.team[0].checkIfPokemonAlive()) {
      setTimeout(function() {
        changePokemon(gary);
      }, 1500);
    }
  }
  attack(index) {
    increaseOrDecreaseDamage(gary, red, index); //does the damage
    if (red.team[0].checkIfPokemonAlive()) {
      //check if the pokemon attacked is alive
      setTimeout(function() {
        gary.attackEndOfturn(index);
        red.checkIfLost();
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
    if(this.team.length == 0){
      alert('You won');
    }
  }
} //end of class
