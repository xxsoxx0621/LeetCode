/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
   let arr = [];
   for(let i=0; i < nums.length; i++){
       if(i === 0){
           arr.push(nums[0]);
       }else{
         arr.push(arr[i-1]+ nums[i]);   
       }
   }
   return arr;
};
