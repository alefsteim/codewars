export function removeElement(nums: number[], val: number): number {
  let i = nums.length-1;
  while (i >=0) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
    i--;
  }
  return nums.length;
}
