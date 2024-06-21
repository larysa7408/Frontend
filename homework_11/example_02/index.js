/**
 * Напишите функцию, которая превратит массив ,который содержит элементы в виде массивов из двух элементов, в объект. Первый элемент каждого внутреннего массива ключ, второй - значение. Например такой:
 */

const arraysWithDoubleElements=[
    [ 'height', 170 ],
    [ 'weight', 80 ],
    [ 'sport', 'regbi' ],
    [ 'full name', 'John Doe' ],
    [ 'sing', 'love' ],
    [ 'speed', 90 ]
  ]

  function makeNewObject(array){
    const obj1=[];
    for(let i=0;i<array.length;i++){
      // console.log(array[i]);
      // console.log(array[i][0]);
      // console.log(array[i][1]);
      obj1[array[i][0]]=array[i][1];
    }
    return obj1;
  }
 console.log(makeNewObject(arraysWithDoubleElements));