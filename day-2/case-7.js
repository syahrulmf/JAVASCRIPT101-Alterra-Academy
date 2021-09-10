// memasukan faktor bilangan kedalam array

let number = 20;
let faktorBilangan = [];

for(let i = 1; i <= number; i++){
  if(number % i == 0){
    faktorBilangan.push(i)
  }
}

// output
console.log(faktorBilangan)

// untuk mereplace nilai index
faktorBilangan[0] = 2300;

console.log(faktorBilangan)