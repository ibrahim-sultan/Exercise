//  FUNTION PROBLEM SET 


// IS EVEN () SOLUTION

function isEven(number) {

    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
isEven(20);



//  FACTORIA SOLUTION

// FACTORIAL 

// 1! = 1
// 2! = 2*1 = 2
// 3! = 3*2*1 = 6
// 4! = 4*3*2*1 = 24
// 5! = 5*4*3*2*1 = 120


function factorial(num) {

    if (num < 0)
        return -1;

    else if (num == 0)
        return 1;

    else {
        return (num * factorial(num - 1));
    }

}

factorial(5);


//        KEBAB TO SNAKE

//   I DONT SEE ANY SOLUTION FOR THAT ONE SIR.




//   LOOP PROBLEM SET

//    EVEN NUMBER 



// WHILE LOOP SOLUTION

var i = 0;

while (i <= 50) {
    i += 2;

    console.log(i);
}


//   FOR LOOP SOLUTION

for (i = 0; i <= 50; i + 2) {

    console.log(i);
}



//    ASCII SOLUTION

var i, j;
for (i = 1; i < 5; i++) {

    // inner loop
    for (j = 1; j <= i; j++) {
        document.write("#");
    }
    document.write("<br/>")

}

// FIZZBUZZ 
// I DONT UNDERSTAND FIZZBUZ TOO SIR.


// ARRAY PPROBLEM SET 

// PRINT REVERSE () SOLUTION

var reverse = ["mango", "banana", "apple", "orange"];

reverse.reverse();

console.log(reverse);



//  SOLUTION TO SUMARRAY()

function sumArray(arr){
  var sum = 0;
   for(i=0; i<arr.lenght; i++){
       
         for(j=0; j<arr[i].lenght; j++){

            sum += arr[i][j];
         }
   }
   return sum;
}
 sumArray([[3,2], [1] [4,12]]);


//    SOLUTION TO MAX ()

var max = [3, 6, 2, 56, 32, 5, 86];
  var maximum = max[0];
    for(i=0; i<=max.lenght; i++){
        if (max[i] > maximum){
            maximum = max[i];
        }
    }

    console.log(maximum);