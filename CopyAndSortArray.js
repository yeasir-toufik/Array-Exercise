console.log(" js connection working!");







function copySorted(arr){
   return [...arr].sort( (a, b) => a.localeCompare(b) );
}


let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)