/**
 * 2623. Memoize
 * @param {Function} fn
 */
function memoize(fn) {
    let memo = {}
    return function(...args) {
        let answer;
        let key = args.join(",");
        if (memo[key] === undefined) {
            let result = fn(...args); 
            memo[key] = result;
        }
        return memo[key];
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */