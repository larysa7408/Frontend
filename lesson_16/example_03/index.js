const functionExample = (a) => {
    return a + 2;
}
const result = functionExample(6);
console.log(result);
const result2 = functionExample(100);
console.log(result2);

// const Array = {
//     functionExample: (i) => { }
// }
// Array.functionExample(7);
const arr = [1, 3];
console.log([1, 3].map(functionExample));