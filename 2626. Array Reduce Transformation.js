/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    
    let total=init;
    let accum=0;
    for(let i=0;i<nums.length;i++){
        let temp=fn(accum,nums[i]);
        accum=temp;
    }

    return total+accum;
};