/* const arr = ['apple', 'banana', 'mango'];
arr.forEach(loop);
function loop(value){
    console.log(value);
}
let arr2 = Array.isArray(arr);
console.log(arr2);
let arr1 = arr instanceof Array;
console.log(arr1); */


/* let arr = [10, 45, 1, 78, 5, 8, 100, 56];
let points = arr.sort(function (a, b){ 
    return b-a;
});
console.log(points);


const myArr = [13, 30, 11, 31, 26, 96, 01, 71, 76];
function myArrMax(arr){
    return Math.max.apply(null, arr);
}

let a = myArrMax(myArr);
console.log(a);

 */


//highest value
/* let arr = [13, 30, 31, 11, 26, 96, 01, 71, 76];
function myArrMax(arr) {
    let len = arr.length;
    let max = -Infinity;
    while(len--) {
        if(arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}
let highestValue = myArrMax(arr);
console.log(highestValue);

//lowest Value
let arr1 = [13, 30, 31, 11, 26, 96, 01, 71, 76];
function myArrMin(arr) {
    let len1 = arr.length;
    let min = Infinity;
    while(len1--) {
        if(arr[len1] < min) {
            min = arr[len1];
        }
    }
    return min;
}
let lowestValue = myArrMin(arr1);
console.log(lowestValue); */

/* let arr = [13, 30, 31, 11, 26, 96, 01, 71, 76];

arr.forEach(myFunc);

function myFunc(value) {
    console.log(value);
}
 */
/* let  arr = [13, 30, 31, 11, 26, 96, 01, 71, 76];

let loop = arr.filter(myFunc);

function myFunc(value) {
    return value > 50;
}

console.log(loop)  */

/* const arr = ['apple', 'banana', 'mango'];
for(let x of arr){
    console.log(x);
} */

/* const arr = [13, 30, 31, 11, 26, 96, 01, 71, 76];
const arr1 = arr.map((value) => {
    return value * 2;
})
console.log(arr1) */

/* const fruits = ["Banana", "Orange", "Apple", "Mango"];
/* const isArray = function(myArray) {
    return myArray.constructor === Array;
  }
  console.log(isArray(fruits)); */
//console.log(fruits); */

function arr(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits);
    console.log(typeof(fruits));
    return fruits.join('*');
}
let arr1 = arr();
console.log(arr1);
console.log(typeof(arr1))