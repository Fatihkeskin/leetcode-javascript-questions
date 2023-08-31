/**
 * 2631. Group By
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    const dict = {};
    for(let e of this){
        const key = fn((e));
        dict[key] ||=[];
        dict[key].push(e);
    }
    return dict;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */