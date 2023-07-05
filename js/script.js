'use strict'

const objExample = {
    films: {
        category: {
            'action movie': 'Terminator',
            catastrophe: 2012,
            comedy: 'Movie43',
        },
        'main actors': [
            'Gerard Butler',
            'Brad Pitt'
        ],
        'main actors age': {
            'Gerard Butler': 53,
            'Brad Pitt': 49,
        },
    },
};

objExample['videos'] = {
    category: {
        'Pranks': 'Clown killer',
        'Blogs': 'Alexand Thimoriov',
    },
};
objExample['films'] = { // Остается открытым вопрос, почему при изменении одного свойства, удаляются все остальные?
    category: {
        'action movie': 'Rocky Balboa'
    }
}


console.log(objExample);

alert('Be careful please!');
const infoExample = confirm('Do u like IT?');
const answerForMe = prompt('Answer me now!', 'Sorry, i am unfortunetly');

console.log(infoExample);
console.log(typeof(infoExample));
document.write(answerForMe);

const exampleE = 15 + 2;
console.log(`BradPitt+${exampleE}`);

const PascalCase = 'some class';
const COLOR_BLACK = 'F000';
const mainCase = 15;
const bigNumber = 1398501928590123809128490n;
let exampleFor = null;
const exampleOneMore = undefined;


const objectExample = {
    name: 'Andrey',
    age: 26,
};
// objectExample = {'++age'};
objectExample['isMarried'] = false;
objectExample['job'] = [
    'inSearch',
    'inWork',
    'nothing',
];
objectExample['nickname'] = 'REMBO5';
objectExample['mathExample'] = {
    sum: (15 + 23),
    subtraction: (10 - 5),
    multiplication: (10 * 10 / 5),
    'erection a degree': (2 ** 2),
    rooting: (256 ** (1/2)),
    comparison: (5 > 3),
    comparisonOne: (5 == 5),
    comparisonTwo: (5 === '5'),
    comprarionThree: (5 != 3),
    comprarionFour: (5 !== +'3'),
};
console.log(objectExample);

let simpleExample = 55;
++simpleExample;
console.log(++simpleExample);

const simpleAsd = true,
      simpleZxc = false;
console.log(simpleAsd || simpleZxc);

console.log(5 != 5);
console.log(5 !== +'5');

console.log(5 != 3);
console.log(5 !== '3');
console.log(2 + 2 * 2 !== +'6');


// Первые наработки для будущего приложения

const ofzBond = 1000;
const dohod = ofzBond * 0.096;
const nalog = dohod * 0.13;
const finish = dohod - nalog;
const mothDoh = finish / 12;

console.log(ofzBond); // Цена облигации
console.log(dohod); // Годоая доходность без налога
console.log(nalog); // Налог 13%
console.log(finish); // доходность годовая с учетом налога
console.log(mothDoh); // средняя месячная купонная зп