// const arr = [1,2,3,4]
// console.log(arr[2])
// console.log(arr[2])
// console.log(arr[2])

//const arr2 = [true, false, "yay!", [6, 7, 9], null, 9];
//console.log(arr2);
//console.log(arr2.length);

//arr2.push("goes at end"); //moves to front of array
//arr2.unshift("goes in front"); //moves to end of arrray
//arr2.pop(); //changes last item in array to whats in the parenthesis
//console.log(arr2);
let year = 2023;
const student = [
  {
    firstName: "Travis",
    lastName: "Tam",
    DOB: 2008,
    graduated: false,
    age: function () {
      //subtract his DOB year from current year
      return year - this.DOB;
    },
  },
  {
    firstName: "ChenZee",
    lastName: "Unknown",
    DOB: 2008,
    graduated: false,
    age: function () {
      //subtract his DOB year from current year
      return year - this.DOB;
    },
  },
  {
    firstName: "Olega",
    lastName: "Goyco",
    DOB: 2008,
    graduated: false,
    age: function () {
      //subtract his DOB year from current year
      return year - this.DOB;
    },
  },
];
student.forEach((student)=>{
  console.log(student.firstName)
});

student.forEach((student)=> {
  console.log(student.lastName);
});
student.forEach((student)=> {
  console.log(student.DOB);
});
student.forEach((student)=> {
  console.log(student.graduated)
});
student.forEach((student)=> {
  console.log(student.graduated)
});
const nongraduates = student.filter((student) => student.graduated === false);
console.log(nongraduates);

student.forEach((student) => {
  console.log()
})