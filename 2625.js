/**
 * 2625. Flatten Deeply Nested Array
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    let result = []

    for (let i = 0; i < n; i++) {
        for (let y = 0; y < arr.length; y++) {
            if (Array.isArray(arr[y])) {
                for (let z = 0; z < arr[y].length; z++) {
                    arr.splice(y, 0, arr[y][z]);
                    y++;
                }
                console.log(y);
                arr.splice(y,1);
                y--;
            }
        }
    }
    result = arr
    return result;
};