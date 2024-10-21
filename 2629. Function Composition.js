/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        let total=x;

        for(let i=functions.length-1;i>=0;i--){
            let temp_func=functions[i];
            total=temp_func(total);
        }

        return total;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */