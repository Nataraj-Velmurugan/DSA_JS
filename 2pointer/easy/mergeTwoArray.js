let nums1 = [1, 2, 3, 0, 0, 0]
let nums2 = [2, 5, 6]
let nums3 = [];

var merge = function (nums1, nums2) {

    let left = 0, right = 0;
    while (left < nums1.length && right < nums2.length) {
        console.log("inside")
        if (nums1[left] <= nums2[right]) {
            nums3.push(nums1[left]);
            left++;
        }
        else {
            nums3.push(nums2[right]);
            right++
        }
    }

    console.log(nums3)
    return nums3
};

merge(nums1, nums2)