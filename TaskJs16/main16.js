"use strict";

// Вспомогательная функция сравнения массивов
function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length)
        return arr1.every((x, index) => x === arr2[index])
    else
        return false
}

function memoize(fn, limit) {

    let results = [{
        args: [],
        result: 0,
    }];

    console.log('Результат из памяти');

    return function (...rest) {
        console.log('Функция не из памяти');
        for (let i = 0; i < results.length; i++) {

            let args = results[i].args;

            if (compareArrays(args, arguments)) {
                return args;
            }
        }

        if (results.length > limit) {
            results.length = limit;
        }

        results.push({
            args: arguments,
            result: fn(arguments)
        });

        return fn(arguments);
    };

}

const sum = (a, b) => a + b;

const mSum = memoize(sum, 2); // 2 результата хранятся в памяти

// Вызов этих функций даёт один и тот же результат
(sum(3, 4)); // 7
/*
  разница только в том, что mSum запоминает результат (7)
  и повторно не делает вычисления
 */
mSum(3, 4); // 7