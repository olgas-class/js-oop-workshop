class Animal {
    constructor(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }

    greet() {
        return `${this.type} di nome ${this.name} ti saluta: ${this.sound}-${this.sound}`;
    }
}

const animalsArray = [];

document.getElementById("insert-btn").addEventListener("click", function() {
    const animalType = document.getElementById("animal-type").value;
    const animalName = document.getElementById("animal-name").value;
    const animalSound = document.getElementById("animal-sound").value;
    const newAnimal = new Animal(animalType, animalName, animalSound);
    animalsArray.push(newAnimal);
});

document.getElementById("print-btn").addEventListener("click", function() {
    const animalsList = document.getElementById("animals");
    animalsList.innerHTML = "";
    animalsArray.forEach(animal => {
        animalsList.innerHTML += `<li>${animal.greet()}</li>`
    });
});

const now = new Date();
console.log(now.getMonth());