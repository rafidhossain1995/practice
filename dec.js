const twoSum = (nums, target)=>{
    const map = {}
    for(let i =0; i<nums.length; i++){
        const val = target - nums[i]
        if(map[val] != undefined){
            return [map[val], i]
        }
        maps[nums[i]] = i

    }
}
console.log(twoSum(4, 3))