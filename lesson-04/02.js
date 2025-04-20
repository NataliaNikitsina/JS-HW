/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
function includesElement(arr, elem){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elem){ return true;}
    }
    return false;
}
function findUniqueElements(arr$) {
    let newArr = [];
    for (let i = 0; i < arr$.length; i++) {
        if (newArr.length === 0) {
            newArr.push(arr$[i])
        } else if (!includesElement(newArr, arr$[i])) {
            newArr.push(arr$[i]);
        }
    }
    return newArr;
}
console.log(findUniqueElements([1, 2, 3, 2, 1, 4, 5, 4, 1, 6, 15]));
