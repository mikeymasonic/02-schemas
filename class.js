function something(value) {
  // let number;
  // if(value > 10) {
  //   number = 100;
  // } else {
  //   number = -100;
  // }

  //this is the same as above
  const number = value > 10 ? 100 : -100;

  return number;
  
}
///////


const spot = {
  name: 'spot',
  age: 5,
  weight: '20lbs'
};

console.log(spot.age);
console.log(spot(['age']));
//either one works

// describe(' get function', () => {
//   it('gets a value based on key', () => {
//     const dog = {
//       name: 'spot',
//       age: 5,
//       weight: '20lbs'
//     };
//     const result = get(dog, 'age', 50);

//     expect(result).toEqual(5);
//   });
//   it('gets the default if key does not exist'),
//     const dog = {
//       name: 'spot',
//       age: 5,
//       weight: '20lbs'
//     };
//     const result = get(dog, 'bang', 'erang');

//     expect(result).toEqual('erang');
// });

//name age weight
console.log(Object.keys(spot));
//spot 5 20lbs
console.log(Object.values(spot));
//name: spot, age: 5, weight: 20lbs
console.log(Object.entries(spot));

///////
const dogNames =['spot', 'rover', 'bingo']

// const spot = dogNames[0];
// const rover = dogNames[1];
//or
const [spot, rover, bear] = dogNames;
//     0     1      2
const [spot,, bear] = dogNames;
//if you want just the first dog and last dog
console.log(spot, rover, bear);

const [spot, ...otherDogs] = dogNames;
// takes the rest of the dogs (rover, bear)
const [spot,, ...otherDogs] = dogNames;
// takes the rest of the dogs (bear)
console.log(spot, otherDogs);

// [key, value]
Object.entries(spot).forEach((keyValue) => {
  console.log(keyValue);
})

// [key, value]
Object.entries(spot).forEach(([key, value]) => {
  console.log(key, value);
})
//two ways to go about it, second is destructuring

const number = [1, 2, 3, 4];

const [...rest] = numbers;