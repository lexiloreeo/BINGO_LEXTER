console.log("Hello World")
let B = false, 
I = false,
N = false, 
G = false,
O = false;

function newNumber (maxNumber) {
    // Addition = "+"
    // Subtraction = "-"
    // Multiplication = "*"
    // Division = "/"
    // Remainder = "%"

   let x = Math.floor(Math.random() * maxNumber) + 1;

   // if ... else if ... else statement
   // Conditional operator
   // GE >=, LTE <=, EQ ==, NEQ ! =, AND &&, OR ||
    if (x <= 15) {
        console.log(`New number is $ {x}  belongs to "B"`);
        B = true;
    } else if (x >= 16 && x <= 30) {
        console.log(`New number is $ {x} belongs to "I"`);
        I = true;
    } else if (x >= 31 && x <= 45) {
        console.log(`New number is $ {x} belongs to "N"`);
        N = true;
    } else if (x >= 46 && x <= 60) {
        console.log(`New number is $ {x} belongs to "G"`);
        G = true;
    } else if (x >= 61 && x <= 75) {
        console.log(`New number is $ {x} belongs to "O"`);
        O = true;
    } else {
        console.log(`New number $ {x} is invalid.`);
    }

    if (B == true && I==true && N == true && G == true && O == true) {
     console.log(`BINGOOOOOOO!!!`)   
    }


   return console.log(x);
}

newNumber(75);