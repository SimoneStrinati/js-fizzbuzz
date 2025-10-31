console.log("JS Funziona");

//Inizio

for (let i = 1; i <= 100; i++) {
     
   
//Svolgimento

if ( i % 15 == 0 ) {
    console.log("FizzBuzz"); 
} else if ( i % 5 == 0) {
    console.log("Buzz");
} else if ( i % 3 == 0 ) {
    console.log("Fizz");
} else {
    console.log(i);
}

}

//Output

console.log("Fine del ciclo")