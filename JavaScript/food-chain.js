const eatsPlants = false;
const eatsAnimals = true;
let category;

// your code goes here

if (eatsPlants && eatsAnimals) {
  category = "omnivore";
} else if (eatsPlants) {
  category = "herbivore";
}
else if (eatsAnimals) {
  category = "carnivore";
}
else {
  category = "unknown";
}


console.log(category);