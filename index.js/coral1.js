//solution1
const arr=[1,3,4,5,6,89,56]

var result = arr.filter((e,index)=>{
    return (index % 2 == 0);
  });
console.log(result)


//solution2
const arr=[1,3,5,2,4]
const result=arr.map((e)=>{
    return e*e
})
console.log(result)

//solution3

const arr=[1,3,4,5,6,89,56]

var result = arr.filter((e,index)=>{
    return ((index % 2 == 0));
  });
var result1=result.map((e)=>{
    return(e*e)
})
console.log(result1)