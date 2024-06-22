// 1- masala
// let text = "Hello, world!";
// function Substring(text, start, end) {
//   if (end > text.length - 1) {
//     end = text.length;
//   }
//   return text.substring(start, end);
// }
// const substring = Substring(text, 0, 5);
// console.log(substring);


// 2- masala
// let  students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
//   function findStudentWithHighestScore(arg) {
//     if (arg.length === 0) {
//       return null; 
//     }
//     let Student = arg[0];
//     for (let i = 1; i < arg.length; i++) {
//       if (arg[i].score > Student.score) {
//         Student = arg[i]; 
//       }
//     }
//     return Student;
//   }
//   const Score = findStudentWithHighestScore(students);
//   console.log(Score); 


// 3- masala
// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Andrew', age: 23, score: 88, status: 'active' }
// ];
// function filterStudentsStartingA(arg) {
//   return arg.filter(student => student.name.charAt(0).toUpperCase() === 'A');
// }
// let res = filterStudentsStartingA(students);
// console.log(res);


// 4- masala

// 5-masala

// 6chi masala
// const students = [
//   { name: 'Alice', age: 20, score: 86, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 23, score: 85, status: 'active' }
// ];
// function findStudentIndex(students) {
//   for (let i = 0; i < students.length; i++) {
//     if (students[i].score > 85) {
//       return i; 
//     }
//   }
//   return -1; 
// }
// let index = findStudentIndex(students);
// if (index !== -1) {
//   console.log(`85 dan yuqori bolgan o'quvchining indexsi: ${index}`);
// } else {
//   console.log("85 dan yuqori ball olgan o'quvchi yoq.");
// }


// 7- masala
// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 23, score: 88, status: 'active' }
// ];
// function filterActiveStudents(students) {
//   const boshmassiv = [];
//   for (let i = 0; i < students.length; i++) {
//     if (students[i].status === 'active') {
//       boshmassiv.push(students[i]); 
//     }
//   }
//   return boshmassiv;
// }
// let boshmassiv = filterActiveStudents(students);
// console.log("Active students:", boshmassiv);





// 9- masala
// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 23, score: 88, status: 'active' }
// ];
// function checkScore(students) {
//   for (let i = 0; i < students.length; i++) {
//     if (students[i].score >= 90) {
//       return true; 
//     }
//   }
//   return false;
// }
// const res = checkScore(students);
// if (res) {
//   console.log("Hech bolmaganda bitta o'quvchi 90dan yuqori oldi.");
// } else {
//   console.log("Hech kim 90 balldan yuqoril ball ola olmadi.");
// }


// 10- masala
// const students1 = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' }
// ];

// const students2 = [
//   { name: 'Charlie', age: 23, score: 88, status: 'active' },
//   { name: 'David', age: 21, score: 90, status: 'inactive' }
// ];
// let res = students1.concat(students2).map(function (value) {
//   return value
// })
// console.log(res);


// 11- masala

// 12- masala

// 13- masala
// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 23, score: 88, status: 'active' }
// ];
// function getAllScores(students) {
//   const ballar = students.map(student => student.score);
//   return ballar;
// }
// let res = getAllScores(students);
// console.log("Barcha ballar:",res);


// 14- masala

// 15- masala
// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' }
// ];
// const newStudent = { name: 'Charlie', age: 23, score: 88, status: 'active' };

// function addStudent(students, newStudent) {
//   let studentqoshish = [...students, newStudent];
//   return studentqoshish;
// }
// let res  = addStudent(students, newStudent);
// console.log("Yangi ro'yxat:", res);


// 16- masala

// 17- masala
// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 19, score: 88, status: 'active' }
// ];
// function checkAge(students) {
//   for (let i = 0; i < students.length; i++) {
//     if (students[i].age >= 20) {
//       continue; 
//     } else {
//       return false; 
//     }
//   }
//   return true; 
// }
// let res = checkAge(students);
// if (res) {
//   console.log("Barcha o'quvchilar 20 yoshdan katta .");
// } else {
//   console.log("20 yoshda kichik o'quvchilar mavjud.");
// }


// 18-masala
// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 23, score: 88, status: 'active' }
// ];
// function getStatus(students) {
//   const status = students.map(student => student.status);
//   return status;
// }
// let res = getStatus(students);
// console.log("Barcha statuslar:", res);


// 19- masala

// 20- masala
// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 19, score: 88, status: 'active' }
// ];
// function findYoungestStudent(students) {
//   if (students.length === 0) {
//     return null;
//   }
//   let youngestStudent = students[0];
//   for (let i = 1; i < students.length; i++) {
//     if (students[i].age < youngestStudent.age) {
//       youngestStudent = students[i]; 
//     }
//   }
//   return youngestStudent; 
// }
// let  res = findYoungestStudent(students);
// if (res) {
//   console.log(`Eng kichik yoshli o'quvchi: ${res.name}, yoshi ${res.age}`);
// } 


 
// // 8chi masala
// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 19, score: 88, status: 'active' }
// ];
// function checkAgeStudents(students) {
//   for (let i = 0; i < students.length; i++) {
//     if (students[i].age >= 18) {
//       continue; 
//     } else {
//       return false; 
//     }
//   }
//   return true;
// }
// const res = checkAgeStudents(students);
// if (res) {
//   console.log("Hamma o'quvchilar 18 yoshdadan katta");
// } else {
//   console.log("18ga kirmagan o'quvchi bor");
// }

// 2chi masala

// 3chi masala
// let str = "Hello world from JavaScript";
// function splitWords(text) {
//   let words = text.split(" ");
//   return words;
// }
// let words = splitWords(str);
// console.log(words);


// 4- masala
// function joinWords(words) {
//   let joinedText = words.join(", ");
//   return joinedText;
// }
// let str = ["Hello", "world", "from", "JavaScript"];
// let res= joinWords(str);
// console.log(res); 


// 5chi masala
// let str = "JavaScript";
// function replaceAwithAt(text) {
//     let res = text.replace(/a/g, "@");
//     return res;
// }
// let res = replaceAwithAt(str);
// console.log(res);


// 6chi masala
// let str = "      Hello, world!      ";
// function trimSpaces(text) {
//     let res = text.trim();
//     return res;
// }
// let res = trimSpaces(str);
// console.log(res);


// 4- masala
// let str = "Hello, world!";
// let index = 4;
// function getIndex(str, index) {
//     if (index < 0 || index >= str.length) {
//         return 0;
//     }
//     return str.charAt(index);
// }
// let res = getIndex(str, index);
// console.log(res);