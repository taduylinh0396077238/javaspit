//Callback ?

//Làm hàm (function) đc truyền qua đối số 
//khi gọi hàm 

//1. Là Hàm
//2. đc truyền qua đối số


// function myFunction(param) {
//     param('Duy Linh');
// }

// function myCallBack(value) {
//     console.log('Value:' +  value);
// }


// myFunction(myCallBack);



//BT CallBack - Phần 2

// Array.prototype.map2 = function(Callback) {
//     var output = [], arrayLength = this.length;
//     for(var i =0; i < arrayLength; i++) {
//          var result =  Callback(this[i], i); // gọi hàm -- đối số
//       
//          output.push(result);
//     }
//     return output;

// }
// var courses = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];
// var htmls =  courses.map2(function(course, index){
//         // console.log(index, course); // tham số 
//         return `<h2>${course}</h2>`;
// });
// console.log(htmls.join(''));

// courses.map(function(course){
//     return `<h2>${course}</h2>`;
// });

// console.log(htmld.join(''));






// Array.prototype.myMap = function(cb) {
//       var output = [],   arrayLength = this.length;
//     for(var i = 0; i < arrayLength; i ++){
//         var result = cb(this[i], i);
//         console.log(result);
//         output.push(result);
//     }
//     return output;
// }
// const numbers = [1, 2, 3];
// console.log(numbers.myMap(function (number) {
//     return number * 2;
// }))
// console.log(numbers.myMap(function (number, index) {
//     return number * index;
// }))

// // Expected results ---  trả về kết quả 
// // const numbers = [1, 2, 3];

// // console.log(numbers.myMap(function (number) {
// //     return number * 2;
// // })) // Output: [2, 4, 6]

// // console.log(numbers.myMap(function (number, index) {
// //     return number * index;
// // })) // Output: [0, 2, 6]



//Callback - forEach 2
// Array.prototype.forEach2 = function(callback) {
// for (var index in this) {
//     if(this.hasOwPropertype(index)) {
//         callback(this[index], index, this);
//         }
//     }    
// }
// var courses = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];
// //forEach ko return đc


// courses.forEach2(function(course, index, array){
//     console.log(course, index, array);
// });



//Callback - filter 2
// Array.prototype.filter2 = function(callback) {
//     var output = [];
//     for(var index in this) {
//       if(this.hasOwnProperty(index)){
//         var result =  callback(this[index], index, this);
//         if(result) {
//               output.push(this[index]);
//         }
//       }
//     }
//     return output;
// }


// var course = [
//     {
//         name: 'Javascript',
//         coin: 680
//     },
//     {
//         name: 'PHP',
//         coin: 860
//     },
//     {
//         name: 'Ruby',
//         coin: 980
//     }
// ];


// var filterCourses = course.filter2(function(course, index, array){
 
//     return course.coin > 700;
// });
// console.log(filterCourses);




// Callback - some 2
// Array.prototype.some2 = function(callback) {


//     for (var index in this) {
//         if(this.hasOwnProperty(index)) {
//             if(callback(this[index], index, this)) {
//                 return true;
//                 break;
//             }
//         }
//     }
//     return false;
// }

// var course = [
//         {
//             name: 'Javascript',
//             coin: 680,
//             isFinite: false,
//         },
//         {
//             name: 'PHP',
//             coin: 860,
//             isFinite: true,
//         },
//         {
//             name: 'Ruby',
//             coin: 980,
//             isFinite: false,
//         }
//     ];

// var isFinite = course.some2(function(course, index , array ){
//         console.log(course, index , array);
// });
