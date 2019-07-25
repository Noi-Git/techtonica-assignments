function printCuteAnimal(animals) {
  let otherAnimals = ['birds', 'snakes']
    console.log(animals.length);
    console.log(animals.pop('deer'));
    console.log(animals.length);
    animals = animals.concat(otherAnimals);
    console.log(animals);
    console.log(animals.length);


  return animals
}
printCuteAnimal(['dogs', 'cats', 'slots', 'deer'])
