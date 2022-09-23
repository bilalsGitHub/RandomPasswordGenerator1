const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

// console.log(resultEl);
// console.log(lengthEl);
// console.log(uppercaseEl);
// console.log(lowercaseEl);
// console.log(numbersEl);
// console.log(symbolsEl);
// console.log(generateEl);
// console.log(clipboardEl);

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value; //Convert into Number
  const hasUpper = uppercaseEl.checked;
  const hasLower = lowercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  console.log(hasUpper, hasLower, hasNumber, hasSymbol);

  resultEl.innerText = generatePassword(
    hasUpper,
    hasLower,
    hasNumber,
    hasSymbol,
    length
  );
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = ``;
  const typesCount = lower + upper + number + symbol;
  console.log(typesCount);
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  console.log(typesArr);

  if (typesCount == 0) {
    return "";
  }
  for (let i = 0; i < length; i++) {
    console.log(i);
    typesArr.forEach((type) => {
      //console.log(type);
      const funcName = Object.keys(type)[0];
      console.log(funcName);
      generatedPassword += randomFunc[funcName]();
    });
  }
  return generatedPassword.slice(0, length);
}
const randomFunc = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNumber,
  symbol: getRandomSybols,
};

function getRandomLower() {
  //UTF-16 Code Units'e göre alır
  //ASCII
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSybols() {
  const symbols = "!'^+%&/()=?_;:>£##$½{[]}";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
function getRandomSymbols() {}
