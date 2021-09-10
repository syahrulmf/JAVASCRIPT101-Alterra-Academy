// function dengan return value

function cekBilanganPrima(number) {
  let totalFaktor = 0;

  for(let i = 1; i <= number; i++){
    if(number % i == 0){
      totalFaktor = totalFaktor + 1
    }
  }

  // Output
  if(totalFaktor == 2){
    return "Bilangan Prima"
  } else {
    return "Bukan Bilangan Prima"
  }
}

console.log(cekBilanganPrima(10));
console.log(cekBilanganPrima(3));
console.log(cekBilanganPrima(5));
console.log(cekBilanganPrima(12));
