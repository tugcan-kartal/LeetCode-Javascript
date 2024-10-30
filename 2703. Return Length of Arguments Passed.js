/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    let total=0;

    if(!args){
        return 0;
    }

    let x=0;

    while(args[x]!==undefined){
        total++;
        x++;
    }

    return total;
};
