// * Задача 1 - Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех четных чисел целочисленного массива

console.log('1 ---------------------------------');

const IntArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

console.log(IntArr.filter(elem => elem % 2 == 0)
                  .reduce((acc,elem) => acc + Math.sqrt(elem), 0));

// * 2 - Напишите функцию, которая заполняет новый массив предоставленным значением. Результат (3,'a') => ['a','a','a']

console.log('2 ---------------------------------');

function makeArr(n, x) {
    const newArr = [];
    for(let i = 0; i < n; i++) {
        newArr.push(x);
    }
    console.log(newArr);
}

makeArr(3, 'a'); 

// * 3 - Напишите функцию, которая разворачивает массив в обратном порядке. Не использовать array.reverse(). Результат [1,2,3] => [3,2,1]

console.log('3 ---------------------------------');

let reverseArray = ['a','b','c','d','e','f', 1, 2, 3, 4, 5]
console.log(reverseArray); //исходный массив

function reverseArr (arr) {
    let result = [];
        for (let k = arr.length - 1; k >= 0; k--) { //Перебираем исходный массив и записываем в новый в обратном порядке
       result.push(arr[k])
    }
    console.log(result);
}
reverseArr (reverseArray);

// * 4 - Напишите функцию, которая очищает массив от нежелательных значений (false, undefined, пустые строки, ноль, null)
// * Ожидаемый результат [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

console.log('4 ---------------------------------');

const DirtyArr = [0, 1, false, 2, undefined, '', 3, null]; // Исходный "грязный" массив

function CleanArr (arr) {
    
    console.log(arr.filter(
            elem => 
        elem !== false && 
        elem !== undefined && 
        elem !== '' && 
        elem !== null && 
        elem !== 0));
}
CleanArr (DirtyArr);

// * 5 - Напишите функцию, которая возвращает объект, составленный из значений, вложенных массивов.
// * Первый элемент массива - ключ, второй - значение. Результат [['a', 1], ['b', 2]] => { a: 1, b: 2 }

console.log('5 ---------------------------------');

let arrStart = [['a', 1], ['b', 2]];

//Variant 2 - через цикл for

console.log('5  ---- Variant 1 -----');

function toObject (array) {
    const obj = {};   //Задаем пустой объект
    for (let i = 0; i < array.length; i++) { //Перебираем массив, зная, что элементы массива - это подмассивы с парами
      obj[array[i][0]] = array[i][1];
    }
    return obj;
  };
  console.log(toObject(arrStart)); 

  //Variant 2 - через reduce

  console.log('5  ---- Variant 2 -----');

  function toObjectSecond (array) {
    return array.reduce((total, elem) => {
      if (Array.isArray(elem)) { // Проверка, массив ли этот элемент
        total[elem[0]] = elem[1];
      }
      return total;
    }, {});
  };
  console.log(toObjectSecond(arrStart)); // { 'a': 1, 'b': 2 }



// * 6 Напишите функцию, которая убирает повторяющееся значения. Результат [1, 2, 3, 1, 2] => [1, 2, 3]

console.log('6 ---------------------------------');

const startArr = [1, 2, 3, 1, 2]

function unical (arr) {
    let unicalArr = [];
    for (let f = 1; f < arr.length; f++) {
        if (unicalArr.includes(arr[f]) == false) {
            unicalArr.push(arr[f]);
        }
    }
    console.log(unicalArr.sort((a,b)=>a - b));
}

unical(startArr)

// * 7 - Напишите функцию, которая сравнивает два массива и возвращает TRUE, если они идентичны
// * Результат ([1, 2, 3], [1, 2, 3]) => true

console.log('7 ---------------------------------');

const arrFirst = [1, 2, 3]
const arrSecond = [1, 2, 3]

function arraySrav (First, Second) {
    var z = 0
    if (First.length == Second.length) { //Проверка по количеству элементов в массиве
        for (let k = 0; k < First.length; k++) { //Сравнение элементов массивов по значению
            if (First[k] !== Second[k]) {
                z++;
                break;
            }
            
        }
        z == 0 ? console.log(true) : console.log(false);
        
    } else {
        console.log(false);
    }
}

arraySrav (arrFirst, arrSecond)

// * 8 - Напишите функцию, которая преобразует глубокий массив в одномерный не используя array.flat()
// * Результат [1,2,[3,4,[5]]] => [1, 2, 3, 4, 5]

console.log('8 ---------------------------------');

let newArr = [1,2,[3,4,[5]]];

function oneLevelArr(array) {
    var result = [];
    (function flat(array) {
      array.forEach(function(el) {
        if (Array.isArray(el)) flat(el);
        else result.push(el);
      });
    })(array);
    return result;
    
  }

  console.log(oneLevelArr (newArr));

// * 9 - Напишите функцию, которая разделяет массив на части заданного размера. 
// * Результат ([1, 2, 3, 4, 5]) => [[1, 2], [3, 4], [5]]

console.log('9 ---------------------------------');

const StartArr = [1, 2, 3, 4, 5];

function sliceArr(arr, Size) {
    const res = [];
    for (let i = 0; i < arr.length; i += Size) {
        const elem = arr.slice(i, i + Size);
        res.push(elem);
    }
    return res;
}

console.log(sliceArr(StartArr, 2));

// * 10 - Преобразовать первый символ строки в нижний регистр

console.log('10 --- Текст в браузере ---');

var str = 'Пример строки';

function capitalizeFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}
document.writeln(capitalizeFirstLetter(str));