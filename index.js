// Iteration 1: Names and Input

const hacker1 = 'John Doe';
console.log(`The driver name is ${hacker1}`);

const hacker2 = 'Steven Martin';
console.log(`The navigator name is ${hacker2}`);

// Iteration 2: Conditionals

const hacker1NameSize = hacker1.length;
const hacker2NameSize = hacker2.length;
const sumHackerNames = hacker1NameSize + hacker2NameSize;

if (hacker1NameSize > hacker2NameSize) {
  console.log(
    `The driver has the longest name, it has ${hacker1NameSize} characters`
  );
} else if (hacker1NameSize < hacker2NameSize) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2NameSize} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${sumHackerNames} characters!`
  );
}

// Iteration 3: Loops

//3.1

const nameCapitalLetters = hacker1.toUpperCase();
console.log(nameCapitalLetters);

const arrHacker1 = [];
for (let i of nameCapitalLetters) {
  arrHacker1.push(i);
}

let stringHacker1 = '';

for (let i = 0; i < arrHacker1.length; i++) {
  stringHacker1 += arrHacker1[i];
  if (i !== arrHacker1.length - 1) {
    stringHacker1 += ' ';
  }
}
console.log(stringHacker1);

//3.2

let reverseHacker2 = '';

for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseHacker2 += hacker2[i];
}
console.log(reverseHacker2);

//3.3

const smallHacker1 = hacker1.toLowerCase();
const smallHacker2 = hacker2.toLowerCase();

const arrayHacker1 = [];

for (let i of smallHacker1) {
  arrayHacker1.push(i);
}
arrayHacker1.sort();
console.log(arrayHacker1);

const arrHacker2 = [];

for (let i of smallHacker2) {
  arrHacker2.push(i);
}
console.log(arrHacker2);

arrHacker2.sort();
console.log(arrHacker2);

if (arrayHacker1.length > arrHacker2.length) {
  console.log(`The driver's name goes first`);
} else if (arrayHacker1.length < arrHacker2.length) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}
