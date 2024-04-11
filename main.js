function rollDice(){
    const diceNumber = document.getElementById("diceNumber").value;
    const diceValue = document.getElementById("diceValue");
    const diceImages = document.getElementById("diceImages");
    const dice = [];
    const images = [];

   //console.log("dice # ", diceNumber);

   for(let i=1; i<= diceNumber; i++){
    const value = Math.floor(Math.random() * 6) + 1;
    dice.push(value);
    images.push(`<img src="images/${value}.png">`);
    diceValue.textContent = `Dice: ${dice.join(", ")}`;
    console.log(images.join(' '));
    diceImages.innerHTML = images.join(' ');
   }

}