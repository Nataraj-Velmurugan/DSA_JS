// caution sorted array

let nums1 = [2,3,5,6,8,10];
let nums2 = [2,4,5,8];

let findIntersection = (nums1, nums2) => {
    let left = 0;
    let right = 0;
    let size1 = nums1.length;
    let size2 = nums2.length;
    while(left<size1 && right<size2) {
        if(nums1[left] === nums2[right]){
            console.log(left, right)
            left++;
            right++;
        } else if(nums1[left] < nums2[right]) {
            left++;
        } else {
            right++;
        }
    }
}

findIntersection(nums1, nums2);