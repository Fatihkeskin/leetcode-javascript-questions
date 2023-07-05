/**
 * 2620. Counter 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
 
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let x = 0;
    return function() {
        return n + x++;
    };
};

 
 
/**
 * 2619. Array Prototype Last
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
 
Array.prototype.last = function() {
    
    if (this.length==0){
        return -1;
    }
    return this[this.length-1];
};



/** 
 * 2621. Sleep
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
 
/**
 * @param {number} millis
 */
async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}
