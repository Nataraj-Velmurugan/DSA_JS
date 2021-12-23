let mergeSort = (nums1, m, nums2, n) => {
    let left = 0;
    let right = 0;
    let totalSize = m+n;
    let returnNums = [];
    while(left < m || right < n){
        
        if(left === m) returnNums.push(nums2[right++])
        else if (right === n) returnNums.push(nums1[left++])
        else if(nums1[left] <= nums2[right]) returnNums.push(nums1[left++])
        else returnNums.push(nums2[right++])

    }
    return returnNums
};

console.log(mergeSort([1,2,3], 3, [2,5,6], 3))