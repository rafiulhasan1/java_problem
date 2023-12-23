let cpy = 0;

function makeAve(numb)
{
    let av = numb.length;
    for(var i=0 ; i < av ; i++){
        cpy += numb[i];
         
    }
    console.log(cpy/av);

}


let number =[10 , 30 , 240 , 48 , 97];
makeAve(number);
// let av = number.length;
// for(var i=0 ; i < av ; i++){
//     cpy += number[i];
//     // makeAve();
//     // console.log(number[i]);
// }

// console.log(cpy/av);