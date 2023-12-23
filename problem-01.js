var fruits = ['Apple', 'Banana', 'Orange'];
var indPosition = fruits.indexOf('Banana');
// indPosition = 'Mango';
fruits[indPosition] = 'mango';
fruits.pop();
fruits.push('Watermelon');
console.log(fruits);