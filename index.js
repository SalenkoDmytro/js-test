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
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     const { name } = newPotion;
//     for (const potion of this.potions) {
//       if (potion.name === name) {
//         return `Error! Potion ${newPotion} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//     return this.potions;
//   },

//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === potionName) {
//         this.potions.splice(i, 1);
//         return this.potions;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === oldName) {
//         this.potions[i].name = newName;
//       }
//     }
//     return this.potions;

//     // const potionIndex = this.potions.indexOf(oldName);

//     // if (potionIndex === -1) {
//     //   return `Potion ${oldName} is not in inventory!`;
//     // }

//     // this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };

// console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));

// За допомогою prompt() пропонуєте користувачеві ввести число від 1 до 10 включно та
// записуєте змінну. Другий змінної привласнюєте випадкове число в тому ж діапазоні за
// допомогою Math.random(), закругливши його до цілого значення.
// У випадку, якщо випадкове число та число, введене користувачем збіглися, виводьте в
// консоль "Ви щасливчик! Ваше число ...",
// якщо не збіглися - "Не вгадали! Ваше число ..., а випало число ..." (замість точок мають бути значення відповідних змінних.
//console.log(Math.floor(Math.random() * 10 + 1));

// let number = 0;
// let random = 1;

// let flag = false;

// while (number !== random) {
//   number = Number(prompt('Введи число от 1 до 10'));
//   if (flag) {
//     console.log(`Не вгадали! Ваше число ${number}, а випало число ${random}`);
//   }
//   flag = true;
// }
// console.log(`Ви щасливчик! Ваше число ${random}`);

// do {
//   number = Number(prompt('Введи число от 1 до 10'));
//   random = Math.floor(Math.random() * 10 + 1);
//   if (number !== random) {
//     console.log(`Не вгадали! Ваше число ${number}, а випало число ${random}`);
//   }
// } while (number !== random);
// console.log(`Ви щасливчик! Ваше число ${random}`);

// Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.
// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onError, передавая ему аргументом строку "There is no pizza with a name <имя пиццы> in the assortment."
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй.

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, makePizza, onOrderError) {
//     const { pizzas } = this;
//     // console.log(pizzas.includes(pizzaName));
//     if (pizzas.includes(pizzaName)) {
//       return makePizza(pizzaName);
//     }
//     return onOrderError(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// // pizzaPalace.order('Smoked', makePizza, onOrderError);
// // pizzaPalace.order('Four meats', makePizza, onOrderError);
// // pizzaPalace.order('Big Mike', makePizza, onOrderError);
// // pizzaPalace.order('Vienna', makePizza, onOrderError);

// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// function toJadenCase(str) {
//   let massive = str.split(' ');
//   let toJadenCase = [];
//   for (const word of massive) {
//     console.log(word);
//     toJadenCase.push(word[0].toUpperCase() + word.slice(1, word.length));
//     console.log(toJadenCase);
//   }

//   return toJadenCase.join(' ');
// }
// console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(number => number > 3);
// console.log(filteredNumbers);

// function getSum(a, b) {
//   let total = 0;
//   a.forEach(element => {
//     a += element;
//   });
//   if (a !== b && a > 0 && b > 0) {
//     return a + b;
//   } else if (a === b) {
//     return a;
//   } else if (a < 0) {
//     for (let i = a; i <= b; i += 1) {
//       // console.log(i);
//       total += i;
//     }
//     return total;
//   } else if (b < 0) {
//     for (let i = b; i <= a; i += 1) {
//       // console.log(i);
//       total += i;
//     }
//     return total;
//   }
// }
// console.log(getSum(0, -1), -1);

// function doMath(string, number1, number2) {
//   const normalized = Number(string);
//   return number1 normalized number2;
// }
// console.log(doMath('*', 2, 2));
// function changeEven(numbers, value) {
//   // Change code below this line
//   let newNumber = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     newNumber.push(numbers[i]);
//     console.log(newNumber);

//     if (newNumber[i] % 2 === 0) {
//       newNumber[i] = newNumber[i] + value;
//       console.log(newNumber);
//     }
//   }
//   // Change code above this line
// }
// Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, а в переменной oddNumbers массив нечётных. Обязательно используй метод filter().
// Change code below this line

// Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING.
// const filter = function (array, test) {
//   const filteredArray = [];

//   for (const el of array) {
//     console.log(el);
//     const passed = test(el);

//     if (passed) {
//       filteredArray.push(el);
//     }
//   }

//   return filteredArray;
// };

// const callback1 = function (value) {
//   return value >= 3;
// };

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const callback2 = function (value) {
//   return value <= 4;
// };

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
// console.log(r2);

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// function getFruitsQuantity(fruit) {
//   return fruit.quantity >= 120;
// }
// const r3 = filter(fruits, getFruitsQuantity);
// console.log(r3);

// const fnA = function (parameter) {
//   const innerVariable = 'значение внутренней переменной функции fnA';

//   const innerFunction = function () {
//     console.log(parameter);
//     console.log(innerVariable);
//     console.log('Это вызов innerFunction');
//   };

//   return innerFunction;
// };

// const fnB = fnA(555);

// fnB();

// console.log(fnB);

// const makeDish = function (sheffName, dish) {
//   console.log(`${sheffName} готовит ${dish}`);
// };

// // makeDish('Mango', 'пирожок');
// // makeDish('Mango', 'омлет');
// // makeDish('Mango', 'чай');

// const makeSheff = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} готовит ${dish}`);
//   };
//   return makeDish;
// };
// const mango = makeSheff('Mango');

// console.log(mango);

// mango('котлеты');
// mango('Пирожок');
// console.dir(mango);

// function removeEveryOther(arr) {
//   const massive = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//       massive.push(arr[i]);
//     }
//   }
//   return massive;
// }

// function sumArray(array) {
//   const newMassive = [];
//   array.forEach(element => {
//     if (element !== Math.min(...array) && element !== Math.max(...array)) {
//       newMassive.push(element);
//     }
//   });
//   return newMassive;
// }
// const sumArray = array =>
//    return array.filter(element => element !== Math.min(...array) && element !== Math.max(...array))
//         .reduce((t, e) => (t += e), 0)

// class Hero {
//   constructor({ name = 'hero', xp = 0 }) {
//     this.name = name;
//     this.xp = xp;
//   }

//   gainXp(amount) {
//     console.log(`${this.name} получает ${amount} опыта`);
//     this.xp += amount;
//   }
// }

// class Warrior extends Hero {
//   constructor({ weapon, ...restProps } = {}) {
//     super(restProps);
//     this.weapon = weapon;
//   }
//   attack() {
//     console.log(`${this.name} атакует используя ${this.weapon}`);
//   }
// }

// class Berserk extends Warrior {
//   constructor({ warcry, ...restProps } = {}) {
//     super(restProps);
//     this.warcry = warcry;
//   }
//   babyRage() {
//     console.log(this.warcry);
//   }
// }

// class Mage extends Hero {
//   constructor({ spells, ...restProps } = {}) {
//     super(restProps);
//     this.spells = spells;
//   }
//   spell() {
//     console.log(`${this.name} использует магию ${this.spells}`);
//   }
// }
// const mango = new Warrior({ name: 'mango', xp: 1000, weapon: 'Алебарда' });

// mango.gainXp(1000);
// mango.attack();
// mango.gainXp(1000);
// console.log(mango);

// const poly = new Mage({ name: 'poly', xp: 2000, spells: 'FireBoll' });
// poly.spell();
// poly.gainXp(1000);
// console.log(poly);

// const ajax = new Berserk({ name: 'ajax', xp: 200, warcry: 'я ребенок, Вали отсюда' });

// ajax.babyRage();
// ajax.gainXp(300);
// console.log(ajax);

// Фібоначчі
// Послідовність Фібоначчі - це ряд чисел, де кожне наступне є
// сумою двох попередніх. Так, перші десять чисел виглядають так: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

// Постановка
// Потрібно написати функцію, яка повертає n-ний запис у певній послідовності,
// причому n - число, яке передається як аргумент функції.
// const num = number => {
//   const numbers = [0, 1];
//   for (let i = 2; i < number; i++) {
//     numbers.push(numbers[i - 1] + numbers[i - 2]);
//   }
//   return numbers;
// };
// console.log(num(10));
// Return an array
