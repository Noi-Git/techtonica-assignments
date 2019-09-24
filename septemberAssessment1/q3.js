// question 3

let people = [
  { firstName: 'Kelly', lastName: 'Smith' },
  { firstName: 'Colt', lastName: 'Steels' },
  { firstName: 'Kara', lastName: 'Kimbal' },
  { firstName: 'Nance', lastName: 'Nance' }
];

function person() {
  for (let i = 0; i < people.length; i++) {
    if (people.firstName === people.lastName) {
      console.log(people.firstName);
      lastName = 'Same';
      console.log(`${lastName}`);
    }
  }
}
person(people);
