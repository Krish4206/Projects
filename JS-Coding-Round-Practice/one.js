//How to find duplicate elements in a given array??

/* let arrNumber = [1,2,3,5,2,4,5]

let duplicates = arrNumber.filter((elm,index,arr) => arr.indexOf(elm)!==index)
console.log(duplicates); */

//How to find Max and Min value in a given Array in Javascript??

let arrNumber = [1, 87, 65, 63, 655];
let maxFunction = (arr) => {
  return arr.reduce(function (pre, cur) {
    return pre < cur ? pre : cur;
  });
};
console.log(maxFunction(arrNumber));