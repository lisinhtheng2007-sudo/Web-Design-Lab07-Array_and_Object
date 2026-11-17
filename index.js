

let numbers = [1,2,3,4,5];
//Ex1
console.log("Ex1");
numbers.push(7);
console.log(numbers);

//Ex2
console.log("Ex2");
for(let i=0; i<numbers.length;i++){
    console.log(numbers[i]);
}

//Ex3
console.log("Ex3");
console.log(numbers[2]);

//Ex4
console.log("Ex4");
numbers.splice(2,1);
console.log(numbers);

//Ex5
console.log("Ex5");
function isBig(n){
    return n > 3;
}
let bigNum = numbers.filter(isBig);
console.log(bigNum);

//Ex6
console.log("Ex6");
function doubleNum(n){
    return n*2;
}
let double = numbers.map(doubleNum);
console.log(double);
