function cekBilanganPrima(number) {
  if (number <= 1) return "bukan prima";

  for (let i = 2; i < number; i++) {
    if (number % i === 0) return "bukan prima";
  }
  return "prima";
}

console.log(cekBilanganPrima(5));

// number = 5
// i = 2
// 2 < 5
// 3 < 5
// 4 < 5

// 5 : 2 = 2.5
// 5 : 3 = 1.6666666666666667
// 5 : 4 = 1.25
