'use strict';
/*
const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];
const julia2 = [9, 16, 6, 8, 3];
const kate2 = [10, 5, 6, 1, 4];

const checkDogs = function () {
  const correctedJulia = julia.slice(1, -2);
  const bothData = [...correctedJulia, ...kate];
  bothData.forEach(function (dogAge, i) {
    if (dogAge >= 3) {
      console.log(
        `Dog number ${i + 1} is an adult, and is ${dogAge} years old`
      );
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};

checkDogs(julia2, kate2);
*/
/*
// CHALLENGE 2
let humanAge;

const calcAverageHumanAge = function (dogsAge) {
  const age = dogsAge.map(function (dogAge) {
    if (dogAge <= 2) {
      humanAge = 2 * dogAge;
      return humanAge;
    } else if (dogAge > 2) {
      humanAge = 16 + dogAge * 4;
      return humanAge;
    }
  });

  const above = age.filter(function (dogAge) {
    return dogAge > 18;
  });
  const average = above.reduce(function (acc, cur, i, arr) {
    return acc + cur;
  });
  return average / dogsAge.length;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
*/

// CHALLENGE 3
/*
const calcAverageHumanAge = function (ages) {
  const humanAge = ages
    .map(age => (age <= 2 ? (age *= 2) : (age = 16 + age * 4)))
    .filter(age => age >= 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
  return humanAge;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
*/
// ChALLENGE 4
/*
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(function (dog) {
  dog.recommandedFood = Math.trunc(dog.weight ** 0.75 * 28);
  if (dog.owners.includes('Sarah'))
    console.log(
      `Sarah's dog is eating too ${
        dog.curFood < dog.recommandedFood * 0.9 ? 'little' : 'much'
      }`
    );
});

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommandedFood * 1.1)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommandedFood * 0.9)
  .flatMap(dog => dog.owners);

console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);

console.log(dogs.some(dog => dog.curFood === dog.recommandedFood));

console.log(
  dogs.some(
    dog =>
      dog.curFood > dog.recommandedFood * 0.9 &&
      dog.curFood < dog.recommandedFood * 1.1
  )
);

const okayAmount = [];
okayAmount.push(
  dogs.find(
    dog =>
      dog.curFood > dog.recommandedFood * 0.9 &&
      dog.curFood < dog.recommandedFood * 1.1
  )
);
console.log(okayAmount);

const ascended = dogs
  .slice()
  .sort((dog, nextDog) => dog.recommandedFood - nextDog.recommandedFood);
console.log(dogs);
console.log(ascended);
/*
const ownersEatTooMuch = dogs.filter(function (dog, i, arr) {
  console.log(arr);
  if (dog.curFood > dog.recommandedFood * 1.1) return arr[i].owners;
});
*/
// . Find Sarah's dog and log to the console whether it's eating too much or too little
