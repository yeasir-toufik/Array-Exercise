console.log(" js connection working!");


function unique(arr) {
  let unique=[...new Set(arr)];
  return unique;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O