// Menentukan apakah bilangan itu bilangan prima atau bukan
// Bilangan prima yaitu bilangan yang memiliki 2 faktor

// Input
let number = 3;

// Proses
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