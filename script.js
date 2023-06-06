const characterAmountRange = document.getElementById("characterAmountRange");
const characterAmountNumber = document.getElementById("characterAmountNumber");
const includeUpperCaseElement = document.getElementById("includeUpperCase");
const includeNumbersElement = document.getElementById("includeNumbers");
const includeSymbolsElement = document.getElementById("includeSymbols");
const form = document.getElementById("passwordGeneratorForm");
const passwordDisplay = document.getElementById("passwordDisplay");

const LOWER_CHAR_CODES = arrayFromLowToHigh(97, 122);
const UPPER_CHAR_CODES = arrayFromLowToHigh(65, 90);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

syncCharacterAmount = (e) => {
  const value = e.target.value;
  console.log(e);
  characterAmountRange.value = value;
  characterAmountNumber.value = value;
};

characterAmountRange.addEventListener("input", syncCharacterAmount);
characterAmountNumber.addEventListener("input", syncCharacterAmount);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const characterAmount = characterAmountNumber.value;
  const includeUpperCase = includeUpperCaseElement.checked;
  const includeNumbers = includeNumbersElement.checked;
  const includeSymbols = includeSymbolsElement.checked;
  // console.log(SYMBOL_CHAR_CODES);
  const password = generatePassword(
    characterAmount,
    includeUpperCase,
    includeNumbers,
    includeSymbols
  );
  passwordDisplay.innerHTML = password;
});

function generatePassword(
  characterAmount,
  includeUpperCase,
  includeNumbers,
  includeSymbols
) {
  let charCodes = LOWER_CHAR_CODES;
  if (includeUpperCase) {
    charCodes = charCodes.concat(UPPER_CHAR_CODES);
    // console.log(`${includeUpperCase} + ${charCodes}`);
  }
  if (includeNumbers) {
    charCodes = charCodes.concat(NUMBER_CHAR_CODES);
    // console.log(`${includeNumbers} + ${charCodes}`);
  }
  if (includeSymbols) {
    charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
    // console.log(`${includeSymbols} + ${charCodes}`);
  }
  const passwordCharacters = [];
  for (let i = 0; i < characterAmount; i++) {
    let character = Math.floor(Math.random() * charCodes.length);
    console.log(charCodes.length);
    // console.log(character);
    passwordCharacters.push(String.fromCharCode(charCodes[character]));
  }
  return passwordCharacters.join("");
}

function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}
