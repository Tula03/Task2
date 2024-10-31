function merge(nums1, m, nums2, n) {
    let p1 = m - 1;       // Last element in nums1's initial part
    let p2 = n - 1;       // Last element in nums2
    let p = m + n - 1;    // Last position in nums1

    // Merge nums1 and nums2 starting from the end
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }

    // If any elements left in nums2, copy them
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
}

// Example usage:
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

merge(nums1, m, nums2, n);
console.log(nums1); 