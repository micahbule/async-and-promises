/** Problem */
console.log('I want to consecutively print letters \'A\' to \'D\' from inside asynchronous functions representing processes that takes time');

/** This function represents a process that retrieves data from the database and finishes after 3 seconds */
function  databaseCall() {
	setTimeout(function () {
		console.log('B => after database call');
	}, 3000);
}

/** This function represents a process that analyze a million records and finishes after 6 seconds */
function processMillionRecords() {
	setTimeout(function () {
		console.log('A => after processing million records');
	}, 6000);
}

/** This function represents a process that access a third party service (ex. APIs) and finishes after 4 seconds */
function thirdPartyServices() {
	setTimeout(function () {
		console.log('C => after accessing third party services');
	}, 4000);
}

/** Sample method to call everything */
function processEverything() {
	processMillionRecords(); // Prints 'A'
	databaseCall(); // Prints 'B'
	thirdPartyServices(); // Prints 'C'
	console.log('D => last letter') // To check if letters are consecutively printed
}

processEverything();

/**
 * The issue with this one is how the letters are printed. Because we don't know when an asynchronous process will end,
 * we need to find a way to only execute the next block of code when a certain asynchronous process ended.
 */