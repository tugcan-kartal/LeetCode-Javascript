/**
 * @param {Function} fn
 * @return {Function}
 */
const once =(fn)=> {

    let called=false;
    let result;

    return (...args)=>{
        if(!called){
            result=fn(...args);
            return result;
        }else{
            return undefined;
        }
    }

    return result;
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
