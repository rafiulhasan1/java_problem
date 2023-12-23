function makeAve(n1 , n2 , n3)
{
    let sum = (n1+n2+n3)/3;
    return sum;
}

let number = 10;
let number1 = 20;
let number3 = 45;
const ave  =  makeAve(number,number1,number3);
console.log(ave);