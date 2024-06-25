/**Нужно методом map.() каждый элемент массива увеличить на 2
 * 
 */

const array = [1, 2];
const erlange = (element) => {
    return (element + 2);
}
const arrayErlange = array.map(erlange)

console.log(arrayErlange);