class Player {
  constructor(name) {
    this.name = name;
    this.team = [];
  }
  attackEndOfTurn(index) {
    increaseOrDecreaseDamage(gary, red, index);
    //checks if pokemon was killed in the second turn
    if (!red.team[0].checkIfPokemonAlive()) {
      setTimeout(function() {
        changePokemon(red);
      }, 1500);
    }
  }
  attack(index) {
    increaseOrDecreaseDamage(red, gary, index);
    if (gary.team[0].checkIfPokemonAlive()) {
      setTimeout(function() {
        red.attackEndOfTurn(0);
        gary.checkIfLost()
        $("button").css("pointer-events", "all");
      }, 2000);
    } else {
      gary.changePokemon(gary);
      $("button").css("pointer-events", "all");
    }
  }
  checkIfLost(){
    if(this.team.length == 0){
      alert('You lost');
    }
  }
}
