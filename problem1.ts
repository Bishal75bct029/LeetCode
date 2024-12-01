function twoSum(nums: number[], target: number): number[] {
  let tempStorage: { [key: number]: number } = {};

  let ans;
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in tempStorage) {
      return [tempStorage[target - nums[i]], i];
    }
    tempStorage[nums[i]] = i;
  }
  return ans;
}
