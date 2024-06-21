console.log([1, 2, 3]);
console.log({ name: 'John' });

const human = {
    head: true,
}

const actor = {
    mainRole: 'cinema'
}
const john = {
    name: 'Johny',
    surName: 'Depp',
}

Object.setPrototypeOf(actor, john);
Object.setPrototypeOf(human, actor);
console.log(john);
console.log(human);
console.log(john.head);

// функция конструктор для создания обьектов
function Human(name, surName) {
    this.name = name;
    this.surName = surName;
    // this.walk=function(){
    //  console.log('i am walking');
    //     return 'погулял';}

}
Human.prototype.walk = function (){
    console.log(`I am ${this.name}.I am walking`);

}
const TomC = new Human('Tom', 'Cruise');
const Arni = new Human('Arnold', 'Schwarzenegger');
console.log(TomC.walk === Arni.walk);
TomC.walk();
//hasOwnProperty()

const

