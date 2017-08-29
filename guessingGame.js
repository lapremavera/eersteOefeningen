
    var randomNumber = Math.floor(Math.random()*10);
    console.log(randomNumber);

    var guessCount = 1;

    var guess = window.prompt("Give a number.");
    var won=false;
    while (guessCount < 3) {
        if (guess == randomNumber) {
            document.writeln("Congratulation, your guess is correct!");
            won=true;
            break;
        } else {

            if (guess < randomNumber) {
                guess = prompt("Your guess is too low.Your number was " + guess);
            }
            else if (guess > randomNumber) {
                guess = prompt("Your guess it too high. Your number was " + guess);

            }
            guessCount++;
        }
    }

    if(won) {
        document.writeln("You won!!");
    } else {
        document.writeln("game over!");
    }

