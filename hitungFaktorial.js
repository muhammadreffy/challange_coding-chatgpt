function hitungFaktorial(number) {
  if (number < 0) {
    return "Masukkan bilangan positif";
  } else if (number === 0) {
    return 1;
  } else {
    return number * hitungFaktorial(number - 1);
  }
}

console.log(hitungFaktorial(4));
