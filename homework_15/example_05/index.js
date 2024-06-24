/**
 * Написать функцию, которая принимает на вход 2 объекта, и склеивает их в один, на выходе долежн быть объект, который содержит все свойства обоих объектов. Если свойства(ключи) во входящих обьектах повторяются, то взять значение из второго объекта. */

const object1 = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 'value4',
    key5: 'value5'
};
const object2 =
{
    key3: 'new_value3',
    key4: 'new_value4',
    key5: 'new_value5',
    key6: 'value6',
    key7: 'value7'
};
const object3=Object.assign({},object1,object2);
//const object3={...object1,...object2};
console.log(object3);