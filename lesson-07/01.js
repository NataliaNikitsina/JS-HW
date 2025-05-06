/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

// вариант 1
// function capitalizeWords(str) {
//     str = str.replace(str[0], str[0].toUpperCase())
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === ' ') {
//             str = str.replace(str[i+1], str[i+1].toUpperCase())
//         }
//     }
//     return str;
// }

// вариант 2
function capitalizeWords(str) {
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
       arr[i] = arr[i].replace(arr[i][0], arr[i][0].toUpperCase())
    }
    return arr.join(' ');
}


console.log(capitalizeWords("hello world from javascript"))

