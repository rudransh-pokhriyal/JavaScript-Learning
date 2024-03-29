let arr=[1,2,3,4,5,6,7,8,9]

//filter is used to retrieve selective data from an array (i.e when on basis on some conditions we need some data)
let new_nums1=arr.filter((num)=> num>5)// we can use arrow function with implicit return for callback fn of filter

//alternatives to above
/* new_nums1=arr.filter((num)=>{
    return num>5
})

new_nums1=arr.filter(function (num){
    return num>5
})
*/

console.log(new_nums1)


//map is used to perform some operations over the array data
let new_nums2=arr.map((num)=> num*10+1)

//alternatives to above
/* new_nums2=arr.map((num)=>{
    return num*10+1
})

new_nums2=arr.map(function (num){
    return num*10+1
})
*/

console.log(new_nums2)

//reduce is also used for same purpose as map but here we have an extra predefined variable accumulator that works such that first it stores initial value in it and then it stores the result of the operation
let initialVal=0
let sum_arr=arr.reduce((accumulator,num)=> accumulator+num , initialVal)

console.log(sum_arr)