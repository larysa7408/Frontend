const strA='Hello, my little bro Hello';
console.log(strA.length);
console.log(strA.toLowerCase()); //нижний регистр
console.log(strA.toUpperCase()); // верхний регистр
console.log(strA.substring(7, 9)); //вырезание, 1-это индекс символов 2- колво сколько нужно элементов вырезать
console.log(strA.replace('Hello','Hy')); //заменить первое слово
console.log(strA.replaceAll('Hello','Hy')); //заменит все слова
console.log(strA);
console.log(strA.trim());// сначала и с конца убирает пробелы
strA[0] = 'h';
console.log(strA);
console.log(strA.trim.split(' '));// запишет все через запятую и в ""

