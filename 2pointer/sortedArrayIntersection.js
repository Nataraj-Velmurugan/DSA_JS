/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {

    let left = 0;
    let right = 0;
    let nums3 = [];
    let i = 0 ;
    while(left < nums1.length && right < nums2.length) {
        console.log(i++)
        if(nums1[left] === nums2[right]) {
            nums3.push(nums1[left]);
            left++;
            right++;
        } else if( nums1[left] < nums2[right]) {
            left++;
        } else {
            right++;
        }
    }
console.log(nums3)
    
};

intersection([4,9,10, 12], [4,6,9,11]);