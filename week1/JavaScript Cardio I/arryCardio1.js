//Array Cardio 1
//some data to work with

const inventors = [{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, william'];

//array.prototype.filter()
//1. filter the list of inventors for those who were born in the 1500's
// const fifteen = inventors.filter(function (invetor) {
//   if (invetor.year >= 1500 && invetor.year <= 1599) {
//     return true;//if want to keep it!
//   }
// });
const fifteen = inventors.filter(invetor => invetor.year >= 1500 && invetor.year <= 1599);
console.log(fifteen);

//array.prototype.map()
//2. give us an arry of the inventory first and last names
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);

//array.prototype.sort()
//3.sort the inventors by birthdate, oldest to youngest
// const ordered = inventors.sort(function (a, b) {
//   if (a.year > b.year) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.log(ordered);

//array.prototype.reduce()
//4. How many years did all the inventors live?
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

//5.sort the inventors by years lived
const oldest = inventors.sort(function (a, b) {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  return lastGuy > nextGuy ? -1 : 1;
});
console.log(oldest);

//6. create a list of bouevards in paris that contain 'de' anywhere in name
// is only work in console of page
//https://en.m.wikipedia.org/wiki/Category:Boulevards_in_Paris
const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a'));
const de = links
  .map(link => link.textContent)
  .filter(streetName => streetName.includes('de'));

//7.sort Exercise
//sort the pepoel alphabetically by last name
const alpha = people.sort((lastOne, nextOne) => {
  const [alast, afirst] = lastOne.split(', ');
  const [blast, bfirst] = nextOne.split(', ');
  return alast > blast ? 1 : -1;
});
console.log(alpha);
//8. Readuce Exercise
//sum up the instances of each of these
const data = ['car', 'car', 'truk', 'truk', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truk', 'pogostick'];

const transportation = data.reduce(function (obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
console.log(transportation);
