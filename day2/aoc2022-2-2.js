// --- Part Two ---

// The Elf finishes helping with the tent and sneaks back over to you. "Anyway, the second column says how the round needs to end: X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win. Good luck!"

// The total score is still calculated in the same way, but now you need to figure out what shape to choose so the round ends as indicated. The example above now goes like this:

//     In the first round, your opponent will choose Rock (A), and you need the round to end in a draw (Y), so you also choose Rock. This gives you a score of 1 + 3 = 4.
//     In the second round, your opponent will choose Paper (B), and you choose Rock so you lose (X) with a score of 1 + 0 = 1.
//     In the third round, you will defeat your opponent's Scissors with Rock for a score of 1 + 6 = 7.

// Now that you're correctly decrypting the ultra top secret strategy guide, you would get a total score of 12.

// Following the Elf's instructions for the second column, what would your total score be if everything goes exactly according to your strategy guide?

const fs = require('fs');
const cheatSheetInput = fs.readFileSync('aoc2022-2-input.txt', 'utf-8');
const cheatSheetData = cheatSheetInput.split(/\r?\n/);

let myMove = '';
let oppMove = '';
let myPoints = 0;
let oppPoints = 0;
const rockPoints = 1;
const paperPoints = 2;
const scissorsPoints = 3;

cheatSheetData.forEach((line) => {
	if (line != '') {
		matchResults = line.split(' ');
		oppMove = matchResults[0];
		outcome = matchResults[1];

		if (outcome == 'X') {
			// Lose conditions
			oppPoints += 6;

			switch (oppMove) {
				case 'A':
					oppPoints += rockPoints;
					myPoints += scissorsPoints;
					break;
				case 'B':
					oppPoints += paperPoints;
					myPoints += rockPoints;
					break;
				case 'C':
					oppPoints += scissorsPoints;
					myPoints += paperPoints;
					break;
			}
		} else if (outcome == 'Y') {
			// Tie conditions
			myPoints += 3;
			oppPoints += 3;

			switch (oppMove) {
				case 'A':
					oppPoints += rockPoints;
					myPoints += rockPoints;
					break;
				case 'B':
					oppPoints += paperPoints;
					myPoints += paperPoints;
					break;
				case 'C':
					oppPoints += scissorsPoints;
					myPoints += scissorsPoints;
					break;
			}
		} else if (outcome == 'Z') {
			// Win conditions
			myPoints += 6;

			switch (oppMove) {
				case 'A':
					oppPoints += rockPoints;
					myPoints += paperPoints;
					break;
				case 'B':
					oppPoints += paperPoints;
					myPoints += scissorsPoints;
					break;
				case 'C':
					oppPoints += scissorsPoints;
					myPoints += rockPoints;
					break;
			}
		}
	} else {
		return;
	}
});

console.log(
	'Using the strategy guide, my total score would be ' +
		myPoints +
		" and my opponent's total score would be " +
		oppPoints
);
