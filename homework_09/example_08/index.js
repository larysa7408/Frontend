/**
 * Задание 1
Создайте массив с элементами:"Мария","Алексей","Елена","gMuTp".
Создайте массив с возрастами: 22, 31, 45, 53.
Создайте новый массив, заполнив его элементами в формате "имя возраст лет/годов".  */

const names = ["Мария", "Алексей", "Елена", "Дмитрий"];
const ages = [22, 31, 45, 53];
const newArray = [];

for (let i = 0; i < names.length; i++) {
    newArray.push(names[i] + ' ' + ages[i] + "имя возраст лет/годов")
}
console.log(newArray);

/**
Задание 2
Используя пройденные на занятии методы массива получите из этого массива новый массив, в котором элементы идут в обратной последовательности. */

const reversed = [];
for (let i = newArray.length - 1; i >= 0; i--) {
    reversed.push(newArray[i])
}
console.log(reversed)

/**
сделайте два решения - без и с использованием reverse()
Задание 3
Создайте пустой массив countries. Добавьте в массив следующие страны:
"Франция","Германия", "Италия" Удалите последний
элемент из массива и сохраните значение в переменной. Добавьте его в начало массива. Выведите countries в консоль*/

const countries = [];
countries.push("Франция", "Германия", "Италия");

console.log(countries);
let deleted = countries.pop()
// проверяем, что удаление и добавление возвращаемого значения сработали
console.log(countries);
console.log(deleted);

countries.unshift(deleted);
console.log(countries);

/**
Задание 4
Объявите массив colors с названиями цветов: "красный",
"зеленый", "синий". Создайте массив animals с животными: "кошка",
"собака","кролик". Объедините массивы в colorsAndAnimals с помощью оператора spread Используя деструктуризацию,
создайте переменные для каждого элемента нового массива с соответствующими именами переменных Выведите в консоль переменную blue и rabbit через запятую.
*/

const colors = ["красный", "зеленый", "синий"];
const animals = ["кошка", "собака", "кролик"];
const colorsAndAnimals = [...colors, ...animals];
console.log(colorsAndAnimals);

const [red, green, blue, cat, dog, rabbit] = colorsAndAnimals;
console.log(blue,rabbit);


