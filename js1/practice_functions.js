"use strict";

function isOdd(number) {
    return parseFloat(number) % 2 !== 0;
}
function isEven(number) {
    return parseFloat(number) % 2 === 0;
}
function identity(input) {
    return input;
}
function isFive(input) {
    return input === 5;
}
function addFive(input) {
    return parseFloat(input) + 5;
}
function isMultipleOfFive(input) {
    return (parseFloat(input) % 5 === 0);
}
function isThree(input) {
    return input === 3;
}
function isMultipleOfThree(input) {
    return (parseFloat(input) % 3 === 0);
}
function isMultipleOfThreeAndFive(input) {
    return (parseFloat(input) % 5 === 0 && parseFloat(input) % 3 === 0);
}
function isMultipleOf(target, n) {
    return (parseFloat(target) % n === 0);
}
function isTrue(boolean) {
        return boolean === true;
}
function isFalse(boolean) {
    return boolean === false;
}
function isTruthy(input) {
    switch(input) {
        case false:
            return false;
        case 0:
            return false;
        case -0:
            return false;
        case '':
            return false;
        case ``:
            return false;
        case null:
            return false;
        case undefined:
            return false;
        case NaN:
            return false;
        case document.all:
            return false;
        default:
            return true;
    }
}
function isFalsy(input) {
    switch(input) {
        case false:
            return true;
        case 0:
            return true;
        case -0:
            return true;
        case '':
            return true;
        case ``:
            return true;
        case null:
            return true;
        case undefined:
            return true;
        case NaN:
            return true;
        case document.all:
            return true;
        default:
            return false;
    }
}
function isVowel(input) {
    switch(input.toLowerCase()) {
        case 'a':
            return true;
        case 'e':
            return true;
        case 'i':
            return true;
        case 'o':
            return true;
        case 'u':
            return true
    }
}
function isConsonant(input) {
    switch(input.toLowerCase()) {
        case 'q':
            return true;
        case 'w':
            return true;
        case 'r':
            return true;
        case 't':
            return true;
        case 'y':
            return true;
        case 'p':
            return true;
        case 's':
            return true;
        case 'd':
            return true;
        case 'f':
            return true;
        case 'g':
            return true;
        case 'h':
            return true;
        case 'j':
            return true;
        case 'k':
            return true;
        case 'l':
            return true;
        case 'z':
            return true;
        case 'x':
            return true;
        case 'c':
            return true;
        case 'v':
            return true;
        case 'b':
            return true;
        case 'n':
            return true;
        case 'm':
            return true;
        default:
            return false;
    }
}
var isLetter = /^[A-Za-z]+$/;
function isCapital(letter) {
    return (letter.match(/^[A-Za-z]+$/) && (letter === letter.toUpperCase()));
}

function isLowerCase(letter) {
    return (letter.match(/^[A-Za-z]+$/) && (letter === letter.toLowerCase()));
}
function isSpace(letter) {
    return letter === " ";
}
function not(input) {
    return !input;
}
function isBoolean(input) {
    return typeof input == "boolean";
}
function hasLowerCase(str) {
    return str.toUpperCase() !== str;
}
function isZero(num) {
    return parseFloat(num) === 0;
}
function isNotZero(num) {
    return parseFloat(num) !== 0;
}
function lowerCase(str) {
    return str.toLowerCase();
}
function double(num) {
    return parseFloat(num) * 2;
}
function triple(num) {
    return parseFloat(num) * 3;
}
function quadruple(num) {
    return parseFloat(num) * 4;
}
function half(num) {
    return parseFloat(num) / 2;
}
function subtract(num1, num2) {
    return parseFloat(num1) - parseFloat(num2);
}
function multiply(num1, num2) {
    return parseFloat(num1) * parseFloat(num2);
}
function remainder(num1, num2) {
    return parseFloat(num1) % parseFloat(num2);
}
function cube(num1) {
    return parseFloat(num1 * num1 * num1);
}
function squareRoot(num) {
    return Math.sqrt(num);
}
function cubeRoot(num) {
    return Math.cbrt(num);
}
function invertSign(num) {
    return parseFloat(num) * -1;
}
function degreesToRadians(deg) {
    return parseFloat(deg) * (Math.PI/180);
}
function isBlank(input) {
    return (!input || /^\s*$/.test(input));
}
function trim(str) {
    return str.trim();
}
function areEqual(input1, input2) {
    return input1 == input2;
}
function areIdentical(input1, input2) {
    return input1 === input2;
}
function not(input) {
    return !input;
}
function notNot(input) {
    return !!input;
}
function and(input1, input2) {
    return input1 && input2;
}
function or(input1, input2) {
    return input1 || input2;
}
function reverseString(str) {
    return str.split("").reverse().join("");
}
function absoluteValue(num) {
    return Math.abs(num);
}
function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}
function first(input) {
    return input[0];
}
function last(input) {
    return input[input.length -1];
}
function rest(input) {
    return input.substring(1);
}
function howMuchWhiteSpace(str) {
    return parseFloat(str.length) - parseFloat(str.trim().length);
}
function isLastLetterA(input) {
    return input[input.length -1].toLowerCase() === 'a';
}
function typeOf(input) {
    return typeof input;
}
function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let numOfVowels = 0;
    for (var i = 0; i < str.length; ++i) {
        if (vowels.indexOf(str[i]) !== -1) {
            numOfVowels += 1;
        }
    }
    return numOfVowels;
}
//randomIntBetween
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function isNumeric(input) {
    return typeof input === "number" && isNaN(input) === false;
}
function add(a, b) {
    return a + b;
}
function square(x) {
    return x * x;
}
function sumOfSquares(a, b) {
    return add(square(a), square(b));
}
function removeAtIndex(array, index) {
    var arr1 = array.slice(0, index);
    var arr2 = array.slice(index + 1);
    return arr1.concat(arr2);
} // this returns an array copy with item removed
function doMath(op, a, b) {
    return op(a, b);
}
function removeSecondStrFromFirst(str1, str2) {
    if (str1.includes(str2)) {
        return str1.replace(str2, '');
    } else {
        return str1;
    }
}
function howMuchWhiteSpaceAtStart(str) {
    var x = str.trim();
    return str.indexOf(x);
}
function returnTrueMessage() {
    return "Hey, it's true!";
}
function returnFalseMessage() {
    return "Hey, it's false!";
}
function returnMessage(input) {
    return input();
}
function isPalindrome(str) {
    if(typeof str !== 'string') {
        return false;
    }
    return str.toLowerCase() === str.split('').reverse().join('').toLowerCase();
}
function simpleMath(num1, num2) {
    var add = num1 + " + " + num2 + " = " + parseInt(num1 + num2);
    var sub = num1 + " - " + num2 + " = " + parseInt(num1 - num2);
    var mp = num1 + " * " + num2 + " = " + parseInt(num1 * num2);
    var div = num1 + " / " + num2 + " = " + parseInt(num1 / num2);
    return "" + add + "\n" + sub + "\n" + mp + "\n" + div;
}

function filterNumbers(array){
    return array.filter(array => typeof array == "number").sort((a,b) => a-b);
}
var dogObjects = [
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
];

function getOlder(array) {
    array.forEach(function(arr){
        ++arr.age;
    });
    return array;
}
var carsArr = [
    {
        make: "Volvo",
        color: "red",
        year: 1996,
        isDirty: true

    },
    {
        make: "Toyota",
        color: "black",
        year: 2004,
        isDirty: false

    },
    {
        make: "Ford",
        color: "white",
        year: 2007,
        isDirty: true

    }
];
function washCars(array) {
    for(var i = 0; i < array.length; ++i) {
        if(array[i].isDirty === true) {
            array[i].isDirty = false;
        }
    }
    return array;
}
var users = [
    {
        isAdmin: true,
        email: 'user1@email.com'
    },
    {
        isAdmin: true,
        email: 'user2@email.com'
    },
    {
        isAdmin: false,
        email: 'user3@email.com'
    }
];
function adminList(array) {
    var admins = [];
    for(var i = 0; i < array.length; ++i) {
        if(array[i].isAdmin === true) {
            admins.push(array[i]);
        }
    }
    return admins;
}
var breads = ["white", "wheat", "rhy", "white"];
var fillings = ["pb&j", "ham", "cheese steak", "tuna"];

function makeSandwichObjects(arr1, arr2) {
    var sandwiches = [];
    for (var i = 0; i < arr1.length; ++i) {
        sandwiches.push({
            bread: arr1[i],
            filling: arr2[i]
        });
    }
    return sandwiches;
}
var fruits = ['apple', 'banana', ' orange', 'apple', 'pineapple'];
function allIndexesOf(array, value) {
    var indOfVal = [];
    for (var i = 0; i < array.length; ++i) {
        if(array[i] === value) {
            indOfVal.push(i);
            --i;
        }
    }
    return indOfVal;
}
function removeAll(array, value) {
    for(var i = 0; i < array.length; ++i) {
        if(array[i] === value) {
            array.splice(i, 1);
            --i;
        }
    }
    return array;
}
function coinFlip() {
    return Math.round(Math.random());
}
function twoDice() {
    return Math.floor(Math.random() * 12) + 1;
}
function twentySidedDie() {
    return Math.floor(Math.random() * 20) + 1;
}
function twelveSidedDie() {
    return Math.floor(Math.random() * 12) + 1;
}
function tetrahedron() {
    return Math.floor(Math.random() * 4) + 1;
}
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}
function listOfRolls(num) {
    var dieRolls = [];
    for(var i = 0; i < num; ++i) {
        var rollDie = Math.floor(Math.random() * 6) + 1;
        dieRolls.push(rollDie);
    }
    return dieRolls;
}
function listOfRollsFromDieFunc(numOfRolls, diceFunction) {
    var dieRolls = [];
    for(var i = 0; i < numOfRolls; ++i) {
        dieRolls.push(diceFunction());
    }
    return dieRolls;
}
function first(arr) {
    return arr[0];
}
function secondToLast(arr) {
    return arr[arr.length -2];
}
function rest(arr) {
    return arr.slice(1);
}

function getLongestString(arr) {
    var longestStr = arr[0];
    for(var i =0; i < arr.length; ++i) {
        if(longestStr.length < arr[i].length) {
            longestStr = arr[i];
        }
    }
   return longestStr;
}
function getShortestString(arr) {
    var shortestStr = arr[0];
    for(var i =0; i < arr.length; ++i) {
        if(shortestStr.length > arr[i].length) {
            shortestStr = arr[i];
        }
    }
    return shortestStr;
}
function addTwoArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
function getUniqueValues(arr) {
    return Array.from(new Set(arr));
}
//returns a copy of original array reversed
function reverseArray(arr) {
    var arrCopy = arr.slice();
    return arrCopy.reverse();
}
function getRandomQuote() {
    var quotes = [`"If we have the attitude that it's going to be a great day it usually is." - Catherine Pulsifier`, `"Impossible is just an opinion." - Paulo Coelho`, `"Magic is believing in yourself. If you can make that happen, you can make anything happen." - Johaan Wolfgang Von Goethe`, `"No one is to blame for your future situation but yourself. If you want to be successful, then become "Successful." - Jaymin Shah`, `“I always did something I was a little not ready to do. I think that’s how you grow. When there’s that moment of ‘Wow, I’m not really sure I can do this,’ and you push through those moments, that’s when you have a breakthrough.” – Marissa Mayer`, `“Some people want it to happen, some wish it would happen, others make it happen.” – Michael Jordan`];
    var randomIndex = Math.floor(Math.random() * quotes.length - 1) + 1;
    return quotes[randomIndex];
}
function getIndexesOf(specValue, value) {
    var indOfVal = [];
    for (var i = 0; i < specValue.length; ++i) {
        if(specValue[i] === value) {
            indOfVal.push(i);
        }
    }
    return indOfVal;
}
function moveFirstToLast(arr) {
    var arrCopy = arr.slice();
    var first = arrCopy.shift();
    arrCopy.push(first);
    return arrCopy;
}
function zip(arr1, arr2) {
    var newArr = [];
    var theArr = [];
    if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length) {
        for (var i = 0; i < arr1.length; ++i) {
            newArr.push(arr1[i], arr2[i]);
            if (newArr.length === 2) {
                theArr.push(newArr);
                newArr = [];
            }
        }
    }
    return theArr;
}

function sumOfPositives(input) {
    var posNums = [];
    input.forEach(function(element){
        if (element > 0 && typeof element === 'number') {
            posNums.push(element);
        }
    });
    var sum = 0;
    for (var i = 0; i < posNums.length; ++i) {
        sum += posNums[i];
    }
    return sum;
}


function carCreator(input) {
    var newCar = {
        make: input[0],
        model: input[1],
        year: input[2],
        color: input[3]
    };
    return newCar;
}
function findOdd(A) {
    var count = 0;
    for (var i = 0; i < A.length; ++i) {
        for (var j = 0; j < A.length; ++j) {
            if (A[i] === A[j]) {
            ++count
            }
        }
    if (count % 2 !== 0) {
    return A[i];
    }
    }
}
// takes in a string of numbers and returns the one that is different (odd or even)
function iqTest(numbers) {
    var oddNums = [];
    var evenNums = [];
    var numbersArr = numbers.split(' ');
    for (var i = 0; i < numbersArr.length; ++i) {
        (numbersArr[i] % 2 !== 0) ? oddNums.push(numbersArr[i]) : evenNums.push(numbersArr[i]);
    }
    var answer = (oddNums.length === 1) ? numbersArr.indexOf(oddNums[0]) + 1 : numbersArr.indexOf(evenNums[0]) + 1;
    return answer;
}
// (oddNums.length === 1) ? return numbersArr.indexOf(oddNums[0]) + 1 : return numbersArr.indexOf(evenNums[0]) + 1;
var testArr = [10, 10, 10, 10, 10, 200, 3, 3, 10, 10, -1, -1];
var testArr1 = '1 1 1 1 1 1 10';

// takes in a string of numbers and returns the highest and lowest numbers in a string with a space in between
function highAndLow(numbers) {
    var numArr = numbers.split(' ');
    var sortNumArr = numArr.sort((a, b) => a - b);
    var hiNLo = sortNumArr[sortNumArr.length -1] + ' ' + sortNumArr[0];
    return hiNLo;
};

function order(words) {
    var wordsUnordered = words.split(' ');
    var orderOf = []; // the unsorted list of numbers which represent the words unordered
    var inOrder = []; // sorted list of words
    for (var i = 0; i < words.length; ++i) {
        if (!isNaN(parseFloat(words[i]))) {
            orderOf.push(parseFloat(words[i]));
        }
    }
    var arrCopy = orderOf.slice();
    var orderOfSorted = arrCopy.sort((a, b) => a - b);
    for (var j = 0; j < orderOfSorted.length; ++j) {
        for (var k = 0; k < orderOf.length; ++k) {
            if (orderOfSorted[j] === orderOf[k]) {
                inOrder.push(wordsUnordered[k]);
                break;
            }
        }
    }
    return inOrder.join(' ');
}
function makeCar(makeStr, modelStr) {
    return {
        make: makeStr,
        model: modelStr
    }
}
// makes a "private var"
var privateVar = function() {
    var x = 'What is in X?';
    var accessor = function(){ return x;};
    return {
        accessor: accessor
    };
}
var privateVarAcc = privateVar();
//console.log(privateVarAcc.accessor());

//Work in progress, takes words separated by - or _ and returns them camel case or upper camel case
// function toCamelCase(str){
//     if (str === '') {
//         return '';
//     }
//     if(typeof str === 'string' && str.length >= 1) {
//         if (str.includes('-')) {
//             let strArr = str.split('-');
//             for(let strs of strArr) {
//                 if (strs.charAt(0) === strs.charAt(0).toUpperCase()) {
//                     return strArr.join('');
//                 } else {
//                     strs.charAt(0).toUpperCase();
//                 }
//             }
//             let camelStr = strArr.join('');
//             camelStr.charAt(0).toLowerCase();
//             return camelStr;
//         }
//         if (str.includes('_')) {
//             let strArr = str.split('_');
//             if (strArr[0].charAt(0) === strArr[0].charAt(0).toUpperCase()) {
//                 return strArr.join('');
//             }
//             for(let strs of strArr) {
//                 strs.charAt(0).toUpperCase();
//             }
//             let camelStr = strArr.join('');
//             camelStr.charAt(0).toUpperCase();
//             return camelStr;
//         }
//     }
// }

// iife private var
(function() {
    var x = 10;

    var whatIsX = function() {
        return x;
    }

    return {
        whatIsX: whatIsX
    };
})();
// returns length of string with recursion
function length(str) {
    if (str === "") {
        return 0;
    }
    return 1 + length(str.slice(0, -1));
}

function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";

    for(var i = 0; i < numbers.length; i++)
    {
        format = format.replace('x', numbers[i]);
    }

    return format;
}