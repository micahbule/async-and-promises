/** Using plain callback if you're not tied with function signatures */
function getNav(req, callback) {
    var nav = '';

    // Simulate the database call for 3 seconds
    setTimeout(function () {
        nav = 'someValue';
        callback(null, nav); // NodeJS signature usually requires an error as the first parameter
    }, 3000);
}

/** Using q */
var q = require('q');

function getNavWithQ(req) {
    var deferred = q.defer();
    var nav = '';

    // Simulate the database call for 3 seconds
    setTimeout(function () {
        nav = 'someValue';
        deferred.resolve(nav);
    }, 3000);

    return deferred.promise;
}

// getNav()
getNav('someRequestObject', function (err, nav) {
    if (err) console.log('An error occured');

    console.log('Using callback', nav);
});

// getNavWithQ()
var promise = getNavWithQ('someRequestObject');
promise.then(successCallback, errorCallback);

function successCallback(nav) {
    console.log('Using q', nav);
}

function errorCallback(error) {
    console.log('An error occured');    
}