
console.log("*  обьект физический  *")
const JohnyDepp = {
    height: 180,
    weight: 75,
    name: 'Johne',
    surname: 'Depp',
    hobbies: ['cricket', 'polo', 'alcogol'],
    films: {
        2000: ['Pirates', 'Edvard'],
        2001: ['Charlie', 'Pirates-2']
    },
    singing: function () {
        console.log("I am singing");
    }
}

// обьект события
const RicktMartin20070515Berlin = {
    location: {
        lng: 544343,
        ltd: 489328,
    },
    duration: 4,
    visitors: 15000,
}

// пример массива
const arrExample = [1, 2, 3];
console.log(arrExample[0]);

const arrExample2 = {
    0: 1,
    1: 2,
    2: 3,
}
console.log(arrExample2[0]);

// варианты обращения
const lngVar = 'lng';
console.log(JohnyDepp.height);
console.log(JohnyDepp['height']);
console.log(RicktMartin20070515Berlin['location'][lngVar]);

//модификация
JohnyDepp['married'] = true;
console.log(JohnyDepp);
JohnyDepp['married'] = false;

delete JohnyDepp['married'];
console.log(JohnyDepp);


//методы
console.log(Object.keys(JohnyDepp));
console.log(Object.values(JohnyDepp)); // список значений
console.log(Object.entries(JohnyDepp)); // двумерный массив с парными ключ значениями

//проверка наличия свойства
if ('height' in JohnyDepp) {
    console.log(JohnyDepp.height)
}

// spred оператор ... /модификация

const bigGarbagePile = {
    married: true,
    ...JohnyDepp,
    ...RicktMartin20070515Berlin
}
console.log(bigGarbagePile);


const footballPlayers = [
    { name: "Player 1", position: "Forward", team: "Team A" },
    { nameХ: "Player 2", position: "Midfielder", team: "Team B" },
    { name: "Player 3", position: "Defender", team: "Team C" },
    { name: "Player 4", position: "Goalkeeper", team: "Team D" },
    { name: "Player 5", position: "Forward", team: "Team E" },
    { name: "Player 6", position: "Midfielder", team: "Team F" },
    { name: "Player 7", position: "Defender", team: "Team G" },
    { name: "Player 8", position: "Goalkeeper", team: "Team H" },
    { name: "Player 9", position: "Forward", team: "Team I" },
    { name: "Player 10", position: "Midfielder", team: "Team J" }
];
const nameP = 'name';
console.log('Первый элементы ' + footballPlayers[0][nameP]);

// написать функц кот принимает массив обьектов имя поля и имя свойства name и вернет нам массив значений по этому свойству
const getValuesByPropertyName = (footballPlayers, name) => {
    const values = [];
    for (let i = 0; i < footballPlayers.length; i++) {
        if (name in footballPlayers[i]) {
            values.push(footballPlayers[i][name]);
        }
    }
    return values;
};
const human = 'name'
console.log(getValuesByPropertyName(footballPlayers, human));

//сделать проверку есть ли это поле name если есть то добавить если нет то не добавлять

function forwardsQ(footballPlayers) {
    let q = 0;
    for (let i = 0; i < footballPlayers.length; i++) {
      if (footballPlayers[i]['position'] === 'Forward') {
        q++;
      }
    }
    return q;
  }

  console.log(forwardsQ(footballPlayers));