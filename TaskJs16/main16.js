"use strict";

// Вспомогательная функция сравнения массивов
function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length)
        return arr1.every((x, index) => x === arr2[index])
    else
        return false
}

const sum = (a, b) => {
    if(typeof a === 'number' && typeof b === 'number'){
        console.log('\nфункция не из памяти');
        return a + b;
    } else {
        return false;
    }
};

const resultFunc = (obj, arr2) => {
    obj.filter((object) => {
        const res = compareArrays(object.args, arr2);
        if(!res) obj.push(arr2);
        return res;
    });
}

function memoize(fn, limit) {
    const results = [];

    return (x, y) => {
        let objDouble = null;
        const double = results.some((object) => {
            if(compareArrays([x, y], object.args)) {
                objDouble = object;
                return object;
            }
        });

        if(double) {
            return `\nрезультат из памяти ${objDouble.result}`;
        } else {
            const summa = fn(x, y);
            results.push({
                args: [x, y],
                result: summa
            });
            results.length > limit ? results.shift() : void 0;
            console.log(`длина массива историй ${results.length}`);
            return summa;
        }
        
    };
}

const mSum = memoize(sum, 2);
console.log(mSum(4,3));
console.log(mSum(4,3));
console.log(mSum(8,3));