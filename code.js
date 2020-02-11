// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(input) {
    return (input === undefined || input === true || input === false) ? "Hello, World!" : "Hello, " + input + "!";
}

function isFive(input) {
    return parseFloat(input) === 5;
}

function isEven(input) {
    return parseFloat(input) % 2 === 0;
}

function isVowel(input) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    return (input !== undefined) ? vowels.includes(input.toString().toLowerCase()) : false;
}

function add(n1, n2) {
    return parseFloat(n1) + parseFloat(n2);
}