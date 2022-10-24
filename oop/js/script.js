// let person = {
//     firstName: "Olga",
//     lastName: "Demina",
//     getFullName: function(pippo) {
//        // Crea il nome completo e lo restituisce come una stringa
//        return `${pippo} ${this.firstName} ${this.lastName} `;  
//     }
// }
// 
// console.log("Il nome completo: ", person.getFullName("Ciao"));
// 
// const btn = document.getElementById("btn");
// console.log(btn.classList);
// 
// console.log(typeof(document));

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName[0].toUpperCase() + firstName.substring(1);
        this.lastName = lastName;
        this.age = age;
    }
    
    getInfo() {
        return `${this.firstName} ${this.lastName} ha ${this.age} ${this.age === 1 ? "anno" : "anni"}`;
    }
}

const olga = new Person("olga", "Demina", 37);
const giovanni = new Person("Giovanni", "Bassani", 34);
const giuseppe = new Person("Giuseppe", "Verdi", 1);

console.log(olga.getInfo());
console.log(giovanni.getInfo());
console.log(giuseppe.getInfo());

console.log(olga.hasOwnProperty("name"));
