/** Problem */
console.log('I want to consecutively print letters \'A\' to \'D\' from inside asynchronous functions representing processes that takes time');

/** This function represents a process that retrieves data from the database and finishes after 3 seconds */
function  databaseCall(callback) {
	setTimeout(function () {
		console.log('B => after database call');
		callback();
	}, 3000);
}

/** This function represents a process that analyze a million records and finishes after 6 seconds */
function processMillionRecords(callback) {
	setTimeout(function () {
		console.log('A => after processing million records');
		callback();
	}, 6000);
}

/** This function represents a process that access a third party service (ex. APIs) and finishes after 4 seconds */
function thirdPartyServices(callback) {
	setTimeout(function () {
		console.log('C => after accessing third party services');
		callback();
	}, 4000);
}

/** Sample method to call everything */
function processEverything() {
	/**
	 * Notice that we pass an anonymous function in each of the asynchronous functions as callback methods?
	 * This is what callback programming looks like. Callbacks are mainly used to control flow from asynchronous
	 * processes.
	 *
	 * ex. ...after procession million records, do a database call, then after that, access a third party service, then lastly do this...
	 */
	
	processMillionRecords(function () {
		databaseCall(function () {
			thirdPartyServices(function () {
				console.log('D => last letter') // To check if letters are consecutively printed

				/**
				 * Ths issue with this one is the more asynchronous process you have, the more callbacks you'll need,
				 * and using this implementation, your code would suffer the problem it going to the "right" ------>
				 */
				
			}); // Prints 'C'
		}); // Prints 'B'
	}); // Prints 'A'
}

processEverything();
