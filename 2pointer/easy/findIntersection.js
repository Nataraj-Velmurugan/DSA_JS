// caution sorted array

// let nums1 = [2,3,5,6,8,10];
// let nums2 = [2,4,5,8];

let nums1 = [4,9,5], nums2 = [9,4,9,8,4]

let findIntersection = (nums1, nums2) => {
    nums1.sort((a,b) => {return a-b})
    nums2.sort((a,b) => {return a-b})
    let left = 0;
    let right = 0;
    let count = [];
    let size1 = nums1.length;
    let size2 = nums2.length;
    while(left<size1 && right<size2) {
        if(nums1[left] === nums2[right]){
            // console.log(left, right)
            if(!count.includes(nums1[left]))
              count.push(nums1[left])
            left++;
            right++;
        } else if(nums1[left] < nums2[right]) {
            left++;
        } else {
            right++;
        }
    }
  
  return count
}

console.log(findIntersection(nums1, nums2))