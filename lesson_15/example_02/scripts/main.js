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
Human.prototype.walk = function () {
    console.log(`I am ${this.name}.I am walking`);

}
const TomC = new Human('Tom', 'Cruise');
const Arni = new Human('Arnold', 'Schwarzenegger');
console.log(TomC.walk === Arni.walk);
TomC.walk();
//hasOwnProperty()

const testObj = new Object;

// классы
class HumanNew {
    #wealth;
    constructor(name, surName, age) {
        this.name = name;
        this.surnName = surName;
        this.age = age;
        this.#wealth = 100000*age;
    }

    get wealth() {
        return this.#wealth;
    }

    set wealth(amount) {
        this.#wealth = this.#wealth + amount;
    }

    walk() {
        console.log('I am walking');
    }

    static diffInAge = function(obj1, obj2) {
        return obj1.age - obj2.age;
    }
};

const Homer = new HumanNew('Homer', 'Simpson', 30);
const Sponge = new HumanNew('SpongeBob', 'SquarePants', 15)
console.log(Homer);
console.log(Homer.walk == Sponge.walk);
HumanNew.diffInAge(Homer, Sponge);

// Наследование у классов

class ActorNew extends HumanNew {
    constructor(name, surName, age, country) {
        super(name, surName, age);
        this.country = country;
    }
}

const Mila = new ActorNew('Mila', 'J', 25);