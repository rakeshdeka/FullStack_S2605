//  check if a number is postive

// let num = 20;

// -2, -1, 0, 1, 2

// if (num > 0) {
//     console.log(num, "is positive");
// }

// check if number is odd or even.


// let num=8;

// if(num%2===0){
//     console.log(num, "is an Even number!");
// }else{
//     console.log(num , "is an Odd number  !");
// }

// check pass or distiction(nested if)

// let marks = 50;

// if (marks >= 30) {
//     console.log("Student is pass");

//     if (marks >= 80) {
//         console.log("Student got Distinction");

//     }else{
//         console.log("No distinction");

//     }

// } else {
//     console.log("Student is fail");

// }


// find the largest among three

let a = 10;
let b = 25;
let c = 15;


if (a > b) {
    if (a > c) {
        console.log(a + " is the largest");
    } else {
        console.log(c + " is the largest");

    }

} else {
    if (b > c) {
        console.log(b + " is the largest");

    } else {
        console.log(c + " is  the largest");

    }
}
