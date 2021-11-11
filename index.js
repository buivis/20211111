// const day = 1;
// switch (day) {
//     case 1:
//         console.log('Pirmadienis');
//         break;
//     case 2:
//         console.log('Antradienis');
//         break;
//     case 3:
//         console.log('Treciadienis');
//         break;
//     case 4:
//         console.log('Ketvirtadienis');
//         break;
//     case 5:
//         console.log('Penktadienis');
//         break;
//     case 6:
//         console.log('Sestadienis');
//         break;
//     case 7:
//         console.log('Sekmadienis');
//         break;
//     default:
//     console.log('Tokios dienos nera');
// }

// const grade = "A";
// switch (grade) {
//     case "A":
//         console.log("Good job");
//         break;
//     case "B":
//         console.log('Pretty good');
//         break;
//     case "C":
//         console.log('Passed');
//         break;
//     case "D":
//         console.log('Not so good');
//         break;
//     case "F":
//         console.log('Failed');
//         break;
//     default:
//         console.log("Unknow grade")
// }

// Task 2
// let grade = "A";
// switch (grade) {
//     case "A":
//         grade = 'Good job'
//         break;
//     case "B":
//         grade = 'Pretty good'
//         break;
//     case "C":
//         grade ='Passed';
//         break;
//     case "D":
//         grade = 'Not so good';
//         break;
//     case "F":
//         grade ='Failed';
//         break;
//     default:
//         grade = "Unknow grade";
//         console.log(grade)
// }
// console.log(grade)

//TASK 3
// const fruit = 'Apple';

// switch (fruit) {
//     case 'Apple':
//     case 'Banana':
//     case 'Orange':
//         console.log('Skanu!');
//         break;
//     case 'Pineapple':
//         console.log('Neskanu');
//         break;
//     default:
//         console.log('Tokio maisto nevalgau');
// }
// if(fruit === 'Apple' || fruit === 'Banana' || fruit ==='Orange'){
//     console.log('Skanu!');
// }else if(fruit ==='Pineapple'){
//     console.log('Neskanu!');
// }else {
//     console.log('Tokio maisto nevalgau');
// }

// JAVASCRIPT METHODS

const fruit = ['Apple', 'Banana', 'Orange', 'Pineapple'];
const numbers = [1, 2, 3, 4];
const persons = [
    {
        id: 1,
        firstName:'Jonas'
    },
    {
        id: 2,
        firstName:'Petras'
    },
    {
        id:3,
        firstName:'Ona'
    }
];
const check = persons.map(person => person.id).includes(1) // Patikrins ar yra id su reiksme 1.

const filteredPersons = persons.filter(person => person.id === 2 && person.firstName ==='Petras')
// console.log(filteredPersons)

// const data = "22";
console.log(data.lenght) // Patikrinti stringo ilguma.
console.log(Array.isArray(persons))

persons.push({id: 4, firstName: 'Edvardas'}); // prideda i masyvo gala sita reiksme.
console.log(persons)
if(Array.isArray(perons)){
    console.log("Yra")
} else {
    console.log('Nera')
}
const data = {
    id: 1,
    firstName: 'Jonas'
}
if('asdsad' in data){
    console.log("Yra")
} else {
    console.log('Nera')
}
// Includes patikrina ar reiksme yra masye
// const check = fruit.includes('Orange');


// const check = persons.includes({id: 1, firstName:'Jonas'});
// if ({id: 1, firstName: 'Jonas'} === {id: 1, firstName:'Jonas'}){
//     console.log('True')
// }else {
//     console.log('False')
// }
// console.log(check)
