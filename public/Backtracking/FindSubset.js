/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 function findsubset(input, output,i,j,result){
      
    if(i=== input.length){
      output[j]='\0';
    
      result.push(output.filter((item) => item!=='\0' ));
       return
   } 
    output[j]=input[i]
    findsubset(input, output, i+1, j+1, result)
    findsubset(input, output, i+1, j, result)
}
var subsets = function(nums) {
   var result=[];
   var output=[];
     
    findsubset(nums, output, 0, 0, result)
   return result;
};