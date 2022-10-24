// const firstName = "Olga";
// const lastName = "Demina";
// 
// const newKey = "age";
// 
// // Il nome della variabile diventa la chiave
// const person = {
//     firstName,
//     lastName,
//     [newKey]: 36 // ---> age: 36
// }
// 
// console.log(person);

// DESTRUCTURING
// const namesArray = ["Benito", "Carlo", "Serena"];
// // const firstName = namesArray[0];
// // const secondName = namesArray[1];
// // Creo tre variabili
// const [firstName, secondName, thirdName] = namesArray;
// console.log(firstName, secondName, thirdName);


// const person = {
//     name: "Giovanni",
//     lastName: "Verdi",
//     age: 25,
//     profession: "Web Developer"
// };
// 
// // const userName = person.name;
// // const userLastName = person.lastName;
// // 
// // console.log(person);
// // Stiamo creando due variabili
// const { lastName, age } = person;
// 
// console.log(lastName);
// console.log(age);

// SPREAD OPERATOR

// const namesArray = ["Benito", "Carlo", "Serena"];
// 
// const namesSecondArray = ["Marco", "Mauro"];
// 
// const copyArray = [ "Laonardo", ...namesArray, "Carmine", "Alessandro"];
// 
// const generalArray = [...namesArray, ...namesSecondArray];
// 
// console.log(generalArray);
// 
// namesArray.push("Ottavio");
// 
// console.log(namesArray, "originale");
// console.log(copyArray, "copia");

// const person = {
//     name: "Giovanni",
//     lastName: "Verdi",
//     age: 25,
//     profession: "Web Developer"
// };
// 
// const copyPerson = { ...person, height: 180 };
// 
// person.age = 26;
// 
// console.log(person);
// console.log(copyPerson);
// 

// const myObjects = [
//     {
//         name: "Giovanni",
//         lastName: "Verdi"
//     },
//     {
//         name: "Maria",
//         lastName: "Bianchi"
//     }
// ];
// 
// const myCopyArray = [ ...myObjects];
// 
// // Nell'array originale aggiungo un'altro elemento
// myObjects.push(
//     {
//        name: "Giuseppe",
//        lastName: "Bruni" 
//     }
// );
// 
// // Nell'array originale cambio nomedel primo oggetto
// myObjects[0].name = "Marco";
// 
// console.log("originale", myObjects);
// console.log("copia", myCopyArray);

// REST OPERATOR
// 
// function sumNumbers(...numbers) {
//     console.log(numbers);
//     let sum = 0;
//     numbers.forEach(item => sum += item);
//     return sum;
// }
// 
// const result = sumNumbers(2, 4, 5, 7); // ---> 18
// console.log(result);

// OPERATORE TERNARIO
// CONTROLLARE SE NUMERO È PARI O DISPARI
const userNumber = 8;
// let result;
// if (userNumber % 2 === 0) {
//     result = "pari";
// } else {
//     result = "dispari";
// }
//               condizione           se true   se false
let result = (userNumber % 2 === 0) ? "pari" : "dispari";
console.log(result);