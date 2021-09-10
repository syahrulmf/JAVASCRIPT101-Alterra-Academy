// function

function cekBilanganPrima(number) {
  let totalFaktor = 0;

  for(let i = 1; i <= number; i++){
    if(number % i == 0){
      totalFaktor = totalFaktor + 1
    }
  }

  // Output
  if(totalFaktor == 2){
    console.log("Bilangan Prima")
  } else {
    console.log("Bukan Bilangan Prima")
  }
}

cekBilanganPrima(10);
cekBilanganPrima(3);
cekBilanganPrima(5);
cekBilanganPrima(12);
