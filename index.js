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

// function litres(time) {
//   const x = Math.ceil(time * 0.5);
//   console.log(x);
//   return x;
// }
// console.log(litres(0.82));

// const time = prompt('Введите время');

// const toNumber = Number(time);
// const total = toNumber * 60 * 60;
// alert(`В ${time} содержится ${total} секунд`);

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       console.log(key);
//       propCount += 1;
//     }
//   }
//   // Change code above this line
//   return propCount;
// }
// console.log(countProps({ name: 'Mango', age: 2 }));

// Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (let key of keys) {
//   values.push(key);
// }
// console.log(values);

// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, но необязательно, цикл for...of.
// Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех значений его свойств. Используй методы Object.keys() и Object.values().

// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const salary = Object.values(salaries);
//   console.log(salary);
//   for (let i of salary) {
//     totalSalary += i;
//   }
//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (let color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   let price = 0;
//   for (let product of products) {
//     if (product.name === productName) {
//       price = product.price;
//       break;
//     } else {
//       price = null;
//     }
//     // Change code above this line
//   }
//   return price;
// }
// console.log(getProductPrice('Scanner'));
// console.log(getProductPrice('Droid'));
// console.log(getProductPrice('Engine'));

// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let massive = [];
//   for (let product of products) {
//     // console.log(product[propName]);
//     const keys = Object.keys(product);
//     // console.log(keys);
//     for (let key of keys) {
//       if (key === propName) {
//         massive.push(product[key]);
//         console.log(massive);
//       }
//     }
//   }
//   return massive;
//   // Change code above this line
// }

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('category'));

// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;
//   for (let product of products) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//       console.log(totalPrice);
//       break;
//     }
//   }
//   return totalPrice;
//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice('Blaster'));
// console.log(calculateTotalPrice('Radar'));

// К нам обратилась владелица лавки зелий «У старой жабы» и заказала программу для ведения инвентаря - добавления, удаления, поиска и обновления зелий. Добавь объекту atTheOldToad свойство potions, значением которого сделай пустой массив.
// Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.
// Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.
// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.
// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.

// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions, но только если такого зелья еще нет в инвентаре. В противном случае возвращается строка.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.
const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    const { name } = newPotion;
    for (const potion of this.potions) {
      if (potion.name === name) {
        return `Error! Potion ${newPotion} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
    return this.potions;
  },

  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};

console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));

// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
