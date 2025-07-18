// const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const rollDice = document
  .getElementById("RollDice")
  .addEventListener("click", () => {
    const rollDice1 = Math.floor(Math.random() * 6) + 1;
    const rollDice2 = Math.floor(Math.random() * 6) + 1;

    //update img as the number of dice
    document.getElementById("dice1").src = `/DiceImages/dice${rollDice1}.png`;
    document.getElementById("dice2").src = `/DiceImages/dice${rollDice2}.png`;

    console.log(`Player 1 rolled: ${rollDice1}`);
    console.log(`Player 2 rolled: ${rollDice2}`);

    if (rollDice1 > rollDice2) {
      console.log("Dice 1 > Dice 2");
    } else if ((rollDice1 == rollDice2)) {
      console.log("Dice 1 = Dice 2");
    } else {
      console.log("Dice 1 < Dice 2");
    }
  });
