console.log(" js connection working!");


function camelize(str){

let arr=str.split('-');


const capitalized = arr.map(item => {
  return item.charAt(0).toUpperCase() + item.slice(1);
});

let joined = capitalized.join('');

let final= joined.charAt(0).toLowerCase() + joined.slice(1);

return final;


};


let result= camelize("-webkit-transition");
console.log(result);
