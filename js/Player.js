class Player {
  constructor(name) {
    this.name = name;
    this.team = [];
  }
  attackEndOfTurn(index) {
    increaseOrDecreaseDamage(gary, red, index);
    attackSound.play();
    //checks if pokemon was killed in the second turn
    if (!red.team[0].checkIfPokemonAlive()) {
      setTimeout(function() {
        changePokemon(red);
      }, 1500);
    }
  }
  attack(index) {
    increaseOrDecreaseDamage(red, gary, index);
    attackSound.play();
    if (gary.team[0].checkIfPokemonAlive()) {
      setTimeout(function() {
        red.attackEndOfTurn(0);
        $("button").css("pointer-events", "all");
      }, 2000);
    } else {
      setTimeout(function() {
        changePokemon(gary);
      }, 1500);
      $("button").css("pointer-events", "all");
    }
  }
  checkIfLost(){
    console.log(this.team.length);
    if(this.team.length == 0){
      $(".stadium").hide();
      $(".youLose").show();
      setTimeout(function(){
      location.reload();
      },10000);
    }
  }
}
