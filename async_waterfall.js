/** Problem */
console.log('I want to consecutively print letters \'A\' to \'D\' from inside asynchronous functions representing processes that takes time');

/** This function represents a process that retrieves data from the database and finishes after 3 seconds */
function  databaseCall(dataFromA, callback) {
	/**
	 * Notice this?
	 * Any data you pass in the callbacks of each asynchronous functions
	 * used in async.waterfall() can be used in other asynchronous functions.
	 * NOTE THAT DATA SHOULD BE PASSED AFTER THE ERROR ARGUMENT IN THE CALLBACK
	 * FUNCTIONS AND CAN BE RETRIEVED IN THE FOLLOWING FUNCTIONS BEFORE THE CALLBACK
	 * PARAMETER
	 */
	console.log(dataFromA);

	setTimeout(function () {
		console.log('B => after database call');
		callback(null, dataFromA, 'from B');
	}, 3000);
}

/** This function represents a process that analyze a million records and finishes after 6 seconds */
function processMillionRecords(callback) {
	setTimeout(function () {
		console.log('A => after processing million records');
		callback(null, 'from A');
	}, 6000);
}

/** This function represents a process that access a third party service (ex. APIs) and finishes after 4 seconds */
function thirdPartyServices(dataFromA, dataFromB, callback) {
	setTimeout(function () {
		console.log('C => after accessing third party services');
		callback(null, { data: [dataFromA, dataFromB] });
	}, 4000);
}

/** Sample method to call everything */
function processEverything() {
	/** Time to use async */
	var async = require('async');

	/**
	 * For me, you'll probably need async.waterfall, you'll see why...
	 */
	
	async.waterfall([
		processMillionRecords,
		databaseCall,
		thirdPartyServices
	], optionalFinalCallback);	
}

function optionalFinalCallback(error, data) {
	/**
	 * If you would notice the 'null' values passed on the callbacks of each asynchronous functions,
	 * it only means any error occuring in each of the asynchronous functions would STOP the process
	 * and pass the error here, in the OPTIONAL final callback. Optional in a sense that you don't have
	 * to put this callback as a 2nd parameter in async.waterfall().
	 */

	console.log('D');

	/**
	 * Also, any data you pass in the last asynchronous function before the optional final callback
	 * can be received in the optional final callback too.
	 */
	console.log(data);
}

processEverything();
