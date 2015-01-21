// Function Practice #1

// var tripleFive = function() {
// 	for (var i = 0; i < 3; i++) {
// 		console.log("Five!");
// 	}
// }

// tripleFive();



// var lastLetter = function(w) {
// 	var input = w;
// 	for (var i = 0; i <= input; i++) {
// 		return input.substring(i);
// 	}
// }

// lastLetter("super");



// var lastLetter = function(w) {
// 		return w.charAt(w.length - 1);
// }

// (lastLetter("super"));



// var square = function(n) {
// 	n = n * n;
// 	return n;
// }

// console.log(square(3));



// var negate = function(n) {
// 	n = -n;
// 	return n;
// }

// console.log(negate(-8));



// var toArray = function(a, b, c) {
// 	return ("[" + a + ", " + b + ", " + c + "]");
// }

// console.log(toArray(5, 2, 3));



// var startsWithA = function(a) {
// 	if (a.charAt(0) === "a") {
// 		return true
// 	} else {
// 		return false
// 	}
// }

// console.log(startsWithA("apple"));



// var excite = function(a) {
// 	return (a.toString() + "!!!");
// }

// console.log(excite("yeah"));



// var sun = function(a) {
// 	if (a.indexOf("sun") >= 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// console.log(sun("sundries"));



// var tiny = function(a) {
// 	if (a < 0 || a > 1) {
// 		return false 
// 	} else {
// 		return true
// 	}
// }

// console.log(tiny(1));



var getSeconds = function (x) {
    var p = x.split(':'),
        s = 0, m = 1;

    while (p.length > 0) {
        s += m * parseInt(p.pop(), 10);
        m *= 60;
    }

    return s;
}

console.log(getSeconds("01:00"));