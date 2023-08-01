/**
 * 2624. Snail Traversal
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {

    if (this === undefined || rowsCount*colsCount != this.length)
        return []

    const res = new Array(rowsCount).fill(0).map(() => new Array(colsCount).fill(0));
    let i = 0;
    let j = 0;
    let ind = 0;
    while (i < colsCount) {
        if (i % 2 == 0) {
            while (j < rowsCount) {
                res[j][i] = this[ind];
                j++;
                ind++;
            }
            j--;
        } else {
            while (j > -1) {
                res[j][i]= this[ind];
                j--;
                ind++;
            }
            j++;
        }     
        i++;
    }
    

    return res;
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */