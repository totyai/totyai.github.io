function rock_paper() {
    const choices = {"Rock": `
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)`,
        "Paper": `
    _______
---'   ____)____
          ______)
          _______)
          _______)
---.__________)`,
        "Scissors": `
    _______
---'   ____)____
          ______)
        __________)
      (____)
---.__(___)`
    }

    // Welcome
    const welcome = document.createTextNode("Welcome to the game of Rock-Paper-Scissors\nPlease input your choice: 0 - Rock; 1 - Paper; 2 - Scissors:")
    document.getElementById("instructions").appendChild(welcome);

    //Input element
    const input = document.createElement("input")
    input.type = "int";
    input.placeholder = "0-1-2";
    document.getElementById("inputfield").appendChild(input)

    //logic for game

    //output choice
}