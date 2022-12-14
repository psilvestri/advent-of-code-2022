// --- Part Two ---

// By the time you calculate the answer to the Elves' question, they've already realized that the Elf carrying the most Calories of food might eventually run out of snacks.

// To avoid this unacceptable situation, the Elves would instead like to know the total Calories carried by the top three Elves carrying the most Calories. That way, even if one of those Elves runs out of snacks, they still have two backups.

// In the example above, the top three Elves are the fourth Elf (with 24000 Calories), then the third Elf (with 11000 Calories), then the fifth Elf (with 10000 Calories). The sum of the Calories carried by these three elves is 45000.

// Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?

const fs = require('fs');
const calorieListInput = fs.readFileSync('aoc2022-1-input.txt', 'utf-8');
const calorieList = calorieListInput.split(/\r?\n/);
let elfNumber = 1;
let totalCalories = 0;
let calorieResults = [];
let topThreeCalories = [0, 0, 0];

calorieList.forEach((line) => {
	if (line != '') {
		totalCalories += parseInt(line);
	} else {
		calorieResults.push({
			'Elf Number': elfNumber,
			'Total Calories': totalCalories,
		});
		elfNumber++;
		totalCalories = 0;
	}
});

calorieResults.push({
	'Elf Number': elfNumber,
	'Total Calories': totalCalories,
});

calorieResults.sort((x, y) => y['Total Calories'] - x['Total Calories']);

console.log(
	'The elf carrying the most calories is elf #' +
		calorieResults[0]['Elf Number'] +
		' and they are carrying ' +
		calorieResults[0]['Total Calories'] +
		' calories.'
);

console.log(
	'The elf carrying the second most calories is elf #' +
		calorieResults[1]['Elf Number'] +
		' and they are carrying ' +
		calorieResults[1]['Total Calories'] +
		' calories.'
);

console.log(
	'The elf carrying the third most calories is elf #' +
		calorieResults[2]['Elf Number'] +
		' and they are carrying ' +
		calorieResults[2]['Total Calories'] +
		' calories.'
);

const calorieSum =
	calorieResults[0]['Total Calories'] +
	calorieResults[1]['Total Calories'] +
	calorieResults[2]['Total Calories'];

console.log(
	'The total calories carried by the top three elves is ' +
		calorieSum +
		' calories'
);
