// Map implementation for squares of a number:
function createMap(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i] ** 2;
  }
  return result;
}

const initialArray = [1,2,3,4,5,6];
let mappedArray = createMap(initialArray);

console.log(mappedArray);
console.log(mappedArray[3]);
console.log(mappedArray[0]);

//Filter array for printing negative numbers:

function filter(arr){
  let negativeArray=[];
  let indexOfNegativeNumbers = 0;
  for(let i=0; i<arr.length; i++){
    if(arr[i]<0) negativeArray[indexOfNegativeNumbers++] = arr[i];
    else continue;
  }
  return negativeArray;
}

const allNumbers = [1,-54,67,-2,67,-12];
console.log(allNumbers);
negativeNumbers=filter(allNumbers);
console.log(negativeNumbers);


//Reduce : Finding sum
function add(arr){
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const originalArray = [1, 2, 3, 4];
const sum = add(originalArray);
console.log(sum);

//forEach
function customForEach(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Index: ${i}, Item: ${arr[i]}`);
  }
}

const actualArray = [1, 2, 3];

customForEach(actualArray);
