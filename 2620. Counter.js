/**
 * @param {number} n
 * @return {Function} counter
 */
const createCounter=(n)=>{
    return ()=>{
        return n++;
    }
}

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */