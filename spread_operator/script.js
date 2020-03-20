window.onload = function(){

    // var fruits = ["apple", "orange", "banana"]
    // console.log(...fruits)

    // var nums1 = [1,2,3]
    // // var nums2 = [nums1,4,5,6]
    // var nums2 = [...nums1,4,5,6]
    // console.log(nums2)

    var nums = [1,3,5];
    function addNums(a,b,c){
        console.log(a+b+c)
    }
    addNums(...nums)

}