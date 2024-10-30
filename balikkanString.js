function reverseString(str) {
  const currentString = str;
  let newString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newString = newString + currentString[i];
  }

  return newString;
}

console.log(reverseString("hello"));
