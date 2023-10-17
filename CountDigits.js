function CountDigits(inputNumber) {
  let totalDigits = 0;
  //   if (inputNumber === 0) {
  //     return 0;
  //     }
  let inputCopy = Number(inputNumber);
  while (inputCopy !== 0) {
    ++totalDigits;
    inputCopy = Math.floor(inputCopy / 10);
  }

  return totalDigits;
}

console.log(CountDigits(456));
console.log(CountDigits(4262222));
console.log(CountDigits(45226));
