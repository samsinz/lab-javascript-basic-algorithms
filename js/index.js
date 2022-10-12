// Iteration 1: Names and Input
let hacker1 = "Sam";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Anthony";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

let newHacker1 = "";

for (let i = 0; i < hacker1.length; i++) {
  newHacker1 += hacker1[i].toUpperCase();
  if (i < hacker1.length - 1) {
    newHacker1 += " ";
  }
}

console.log(newHacker1);

let newHacker2 = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  newHacker2 += hacker2[i];
}

console.log(newHacker2);

switch (newHacker1.localeCompare(newHacker2)) {
  case -1:
    console.log("The driver's name goes first.");
    break;
  case 0:
    console.log("What?! You both have the same name?");
    break;
  case 1:
    console.log(" Yo, the navigator goes first definitely.");
    break;
  default:
    console.log("ERROR");
    break;
}

// BONUS

let lorem1 =
  "In id risus viverra ipsum mollis feugiat eget sed quam. Aliquam quam magna, iaculis ac aliquet sed, posuere at eros. Suspendisse sit amet libero ipsum. Sed eu mauris ipsum. Donec lacinia, elit in lobortis pretium, odio nulla porttitor quam, sodales tincidunt orci tellus et lacus. Nam malesuada sapien id nulla tempor interdum. Cras varius rhoncus risus. Curabitur nec purus vitae diam efficitur tincidunt. Duis aliquam nisl non purus facilisis, nec maximus diam semper. Aliquam ut eleifend tortor, a fringilla risus. Suspendisse eleifend mollis sapien, eu convallis odio sodales at. Quisque massa felis, ultricies et purus in, lacinia pretium urna. Suspendisse et mollis quam, at suscipit magna. Phasellus sed pulvinar orci, rutrum porttitor massa. Aenean varius, nulla a sollicitudin pellentesque, risus lorem vestibulum massa, nec ullamcorper eros orci a sapien. Aenean vel neque consectetur, ullamcorper orci a, tincidunt quam.";
let lorem2 =
  "Fusce semper erat in tortor rhoncus, quis hendrerit eros facilisis. Pellentesque blandit fringilla dignissim. Nunc sollicitudin vitae dui sed pulvinar. Donec convallis commodo urna, id molestie nisl volutpat nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla maximus ex sed diam pellentesque, volutpat ornare lacus pulvinar. Praesent quis lorem neque. Suspendisse potenti. Duis lacinia et odio eu bibendum.";
let lorem3 =
  "Duis non imperdiet nisl. Nunc nec erat suscipit, malesuada nunc eu, laoreet diam. Vivamus auctor rutrum tellus ac cursus. Proin ac justo condimentum, condimentum urna sit amet, venenatis ipsum. Fusce vehicula orci quis enim consectetur gravida. Quisque posuere dapibus mi, non viverra nibh lacinia at. Pellentesque et metus sit amet justo pellentesque lobortis. Cras non convallis mauris, ac ullamcorper mi. Duis aliquet consectetur purus, id viverra risus volutpat sit amet. Aliquam erat volutpat. Integer lobortis libero eu arcu sodales, in dignissim mi dapibus. Duis aliquet diam at ullamcorper ultricies. Donec vel aliquam orci. In dapibus tellus a orci condimentum, quis ornare purus ultricies. Duis vestibulum accumsan elit fermentum varius. Cras eu ipsum in risus ornare accumsan.";

let lorems = [lorem1, lorem2, lorem3];

function etCounter(lorem) {
  let etCount = 0;
  for (let i = 0; i < lorem.length; i++) {
    if (lorem[i].toLowerCase() === "e") {
      if (lorem[i + 1] === "t") {
        etCount++;
        i += 2;
      }
    }
  }
  return etCount;
}

for (let lorem of lorems) {
  console.log(`Words: ${lorem.split(" ").length}. Et: ${etCounter(lorem)}`);
}

// BONUS 2

function checkP(phraseToCheck) {
  let phraseNoSpace = [];
  /*unnecessary space cleanup*/
  for (let cha of phraseToCheck.split(" ")) {
    for (let i = 0; i < cha.length; i++) {
      phraseNoSpace.push(cha[i]);
    }
  }
  if (phraseNoSpace.length % 2 != 0) {
    phraseNoSpace.splice((phraseNoSpace.length - 1) / 2, 1);
  }
  for (let i = 0; i < phraseNoSpace.length / 2; i++) {
    if (phraseNoSpace[i] == phraseNoSpace[phraseNoSpace.length - 1 - i]) {
      continue;
    } else {
      return 0;
    }
  }
  return 1;
}

let phraseToCheck = "Amor, Roma";

if (checkP(phraseToCheck.toLowerCase().replace(/[^a-zA-Z0-9]/g, ""))) {
  console.log(`${phraseToCheck} is a palindrome.`);
} else {
  console.log(`${phraseToCheck} is not a palindrome.`);
}
