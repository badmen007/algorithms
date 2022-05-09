

const twoSum = (nums, target) => {
  const map = new Map();
  for(let i = 0; i < nums.length; i++) {
    let key = target - nums[i];
    if(map.has(key)){
      return [map.get(key), i];
    } 
    map.set(nums[i], i);
  }
}

console.log(twoSum([2,3,7,4,9], 9))