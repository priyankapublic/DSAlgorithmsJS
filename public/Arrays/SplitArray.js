/**
 * @param {number[]} nums
 * @return {number}
 */
 
 var waysToSplitArray = function(nums) {
    let c=0;
    let grandSum = 0;
    for(let i =0;i<nums.length; i++){
        grandSum+=nums[i]
    }
    lastSum = 0
    
    for(let i =0;i<nums.length-1; i++){
       
        let sum1 =  lastSum+nums[i];
        lastSum = lastSum+nums[i]
        let sum2 = grandSum - sum1
         
        if(sum1>=sum2){
            c++
        }
    }
    return c;
};