// const salary = 'Google do a roll';
// let noSpaces = salary.split(' ');
// console.log(noSpaces);

// let letters = noSpaces[0].length;
// console.log(letters);
// for (let word of noSpaces) {
//   console.log(word.length);
//   if (word.length > letters) {
//     letters = word;
//   }
//   console.log(letters);
// }

// function findLongestWord(string) {
//   // Change code below this line
//   const noSpace = string.split(' ');
//   let biggerOne = noSpace[0];

//   // for (let i = 0; i < biggerOne.length; i += 1) {
//   //   biggerOne = noSpace[(noSpace += i)];
//   //   console.log(i);
//   // }

//   for (let word of noSpace) {
//     console.log(word);
//     if (word.length > biggerOne.length) {
//       biggerOne = word;
//     }
//   }
//   console.log(biggerOne);
//   return biggerOne;
// }
// // Change code above this line

// findLongestWord('The quick brown fox jumped over the lazy dog');

// function filterArray(numbers, value) {
//   // Change code below this line
//   for (let i = value + 1; i <= numbers.length; i += 1) {
//     // console.log(i);
//     if (i > value) {
//       value = i;
//       console.log(value);
//     }
//   }
//   // Change code above this line
// }
// filterArray([12, 24, 8, 41, 76], 38);

// const string = 'JavaScript';
// let toReverse = '';

// let letters = string.split('');

// for (const letter of letters) {
//   // console.log(letter);
//   // if (letter === letter.toLowerCase()) {
//   //   console.log('Эта буква в нижнем регистре', letter);
//   //   toReverse += letter.toUpperCase();
//   // } else {
//   //   toReverse += letter.toLowerCase();
//   toReverse += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
// }
// console.log(toReverse);

// const title = 'Top 10 benefits of React framework';
// // const toLower = title.toLowerCase();
// // console.log(toLower);

// // let massive = toLower.split(' ');
// // let slug = massive.join('-');
// // console.log(slug);

// let slug1 = title.toLowerCase().split(' ').join('-');
// console.log(slug1);
// function multiply(...args) {
//   return args;
// }

// console.log(multiply(2, 5, 10));

// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

// function includes(array, value) {
//   // Change code below this line
//   let isBoolean = false;
//   for (let thing of array) {
//     console.log(thing);
//     if (thing === value) {
//       isBoolean = true;
//       break;
//       // console.log(boolean);
//     }
//   }
//   return isBoolean;

//   // Change code above this line
// }

// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter'));
// console.log(includes(['apple', 'plum', 'pear', 'orange'], 'plum'));
// console.log(includes([1, 2, 3, 4, 5], 17));
// const playlist = {
//   name: 'my superlist',
//   rating: 5,
//   tracks: ['trek', 'trek 1', 'trek 2'],
//   changeName(newName) {
//     this.name = newName;
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//   },
//   updateRating(rating) {
//     this.rating = rating;
//   },
//   getTrackCount() {
//     return this.tracks.length;
//   },
// };
// playlist.changeName('new track');
// playlist.addTrack('trek 69');
// playlist.updateRating(4.5);
// playlist.addTrack('trek555');
// console.log(playlist.getTrackCount());

// console.log(playlist);

// const friends = [
//   { name: 'mango', online: false },
//   { name: 'kiwi', online: true },
//   { name: 'poly', online: true },
//   { name: 'ajax', online: false },
// ];
// console.log(friends);

// for (const friend of friends) {
//   console.log(friend);
//   friend.newprop = 'hello MOTO';
// }
// console.table(friends);

function litres(time) {
  const x = Math.ceil(time * 0.5);
  console.log(x);
  return x;
}
console.log(litres(0.82));
