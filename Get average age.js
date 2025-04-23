console.log(" js connection working!");



let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];


function getAverageAge(arr){

  let add= arr.map((item)=> item.age);
  console.log(add);
  
  let result= add.reduce((acc,cumm)=> acc+cumm);
  console.log(result);
  
  let final= result/add.length;

  return final;



}


alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28