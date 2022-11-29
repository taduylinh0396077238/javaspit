// setInterval(function() {
//     console.log('Duy Linh Đẹp Zai  ');
// }, 1000)



// var a = 1;
// var b = 2;

// if( a < b ){
//     alert('Đúng');
// }



/**
 * If - else
 * */ 


/**
 * 6 Điều kiện cho vào luôn là fales
 * 0
 * false
 * '' - ""
 * undefined
 * NaN
 * null
 */

//Còn lại là true 

// var fullName = 0;
// if(fullName) {
//         console.log('DIEU KIEN DUNG');
// }else {
//     console.log('DIEU KIEN SAI');
// }



/**
 * Toán tử logic
 * 1. && - And
 * 2. || - or --> chỉ cần 1 cái đúng là in ra đúng
 * 3. ! - Not: không phải 
 * 
 */
//  var a = 1;
//  var b = 2;
// var c = 3;
//  if(a < 0  || b > 0) {
//      console.log('DIEU KIEN DUNG');
//  }else {
//    console.log('ĐIỀU KIỆN SAI')
//  }




/**
 * Kiểu dữ liệu trong javascript
 * 
 * 1. Dữ liệu nguyên thủy 
 *      -Number
 *      - String 
 *      - Boolean
 *      - Undefined
 *      - Null
 *      - Symbol
 * 
 * 2. Dữ liệu phức tạp 
 *      - Function
 *      - Object
//  * 
//  */

// //Number
// var a = 1;
// var b = 2;
// var c = 3;
 
// //Boolean 
// var isSuccess = true;

// //Unsefined : ko gắn giá trị cho nó 
// var age;

// //Null: nghĩa là ko có gì
// var isNull = null;

// //Symbol 
// var id = Symbol('id'); //unique
// var id2 = Symbol('id'); //unique

// //Function
// var myFunction = function() {
//     alert('Hi . Xin chào các bạn ');
// }
//  myFunction();


//Object types

// var myObject = {
//     name: 'Son Dang',
//     age: 18,
//     address: 'Ha Noi',
//     myFunction: function () {

//     }
// };

// console.log('myOject' , myObject);

// var myArray = [ 
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];




/**
 * TOÁN TỬ SO SÁNH
 * === : so sánh bằng tuyệt đối khi 2 gtri giống nhau
 * !== 
 */
// var a = 1;
// var b =' 1';

// console.log(a === b);


//Toán tử AND

// var a = 1;
// var b = 2; 
// var result = 'A' && 'B' && NaN &&'D';

// // var result1 = 'A' ||  'B' || 'C'  ||'D';
// // console.log('result1', result1);

// if(result) {
//         console.log('DIEU KIEN DUNG');
// }else {
//     console.log('DIEU KIEN SAI');
// }





/**
 * HÀM (function) trong Javascript
 * 1. Hàm ?
 *      - Một Khối Mã 
 *      - Lmà 1 việc cụ thể
 *      
 * 2.Loại HÀM
 *      - Built-in
 *      - Tự định nghĩa
 * 3.Tính Chất 
 *      - Ko thực thi khi đ/n
 *      - sẽ thực thi khi đc gọi 
 *      - có thể nhận tham số
 *      - Có thể trả về 1 giá trị 
 * 4. Tọa hàm đầu tiên 
 */

//  1. Tham số?
//      Định nghĩa?
//      –Kiểu dữ liệu?
//      -Tính private?
//      -1tham số
//      -Nhiều tham số
// 2. Truyền tham số
//      -1tham số
//      -Nhiều tham số
// 3. Arguments?
//      - Đối tượng arguments -- CHẠY HẾT GIÁ TRỊ MÌNH GỌI Ở HÀM 
//      -Giới thiệu vòng for of

// var message ='Duy';
// var message2 = 'Linh';
// var message3 = 'Đẹp zai nhất'
// function wrirelog(message, message2,message3) {
//     console.log(message)
//     console.log(message2)
//     console.log(message3)
// }

// IN TỪNG ĐÒNG
// function wrirelog() {
//     for(var param of arguments){
//         console.log(param)
//     }
// }



// //IN RA 1 DÒNG 
// function wrirelog() {

//     var myString = '';
//     for(var param of arguments){
//         myString += `${param} -`
//     }
//     console.log(myString);
// }


// wrirelog('ABCB','CSFS','JJDJDJ'); // GỌI đến hàm 






//Return trong hàm - Javascript
// VD
// function cong(a,b) {
//     return a + b;
// }

// var result = cong (2,8);
// console.log(result);






//    Các loại function
//    1. Declaration function - gọi hàm của nó đc trc khi định nghĩa
//    2. Expression function  - gọi hàm của nó sau khi định nghĩa
//    3. Arrow function
//1 Declaration function
// function showMessage() {

// }

// //2 Expression function
// var showMessage2 = function(){

// }





//   1. Tạo chuỗi
//         -Các cách tạo chuỗi
//         - Nên dùng cách nào?Lý do?
//         –Kiểm tra data type
//   2.Một số case sử dụng backslash(\)
//   3. Xem độ dài chuỗi
//   4. Chúýđộ dài khi viết Code
//   5. Template string ES6
  // backslash in javascript

// var fullName = 'Duy Linh \'Dz\''
// console.log(fullName);
//5 Template
// var firsName = 'Duy';
// var lastName = 'Linh';
// console.log(`Tôi là: ${firsName} ${lastName}`);






var myString = '   Học JS tại  F8!   ';
// // Làm việc với Chuỗi 
// // 1. Length

// // 2. Find index
// console.log(myString.indexOf('JS')); // hỗ trợ tìm kiếm thằng cùng tên
// còn search ko hỗ trợ tìm kiếm tên giống thằng ngay sau nó 

// 3. Cut string - cắt chuỗi
// console.log(myString.slice(6))

// 4. Replace Thay Thế -- /JS/g biểu thức chính quy thay toàn bộ các tên giống nhau có tế JS
// console.log(myString.replace(/JS/g, 'Javascript'))

// 5. Convert to upper case : thay đổi tất cả thành chữ hoa
// console.log(myString.toUpperCase())

// 6. Convert to lower case :  thay đổi tất cả thành chữ thường
// console.log(myString.toLowerCase())

// 7. Trim: loại bỏ khoảng trắng ở đầu và cuối 
// console.log(myString.trim())

// 8. Split: dựa vào 1 điểm chung cắt thành 1 Array
// var lauguages = 'Javascript, PHP, HTML';
// console.log(lauguages.split(', '))

// 9. Getacharacter by index
// charAt khi ko có phần tử thì nó trả về rỗng
//[] còn ngoặc chuỗi nó trả về undefine
// const myString2 = 'Duy Linh';
// console.log(myString2.charAt(0));
// console.log(myString2[10]);







/**
 * Mång trong Javascript-Array
1. Tạo mảng
      Cách tạo
    -Sử dụng cách nào?Tại sao?
      Kiểm tra data type?
2. Truy xuất mảng
    -Độ dài mảng
    -Lấy phần tử theo index
 */
    // var myArray = [
    //     'Javascript',
    //     'PHP',
    //     'HTML',
    //     'CSS',
  
    // ];
    // console.log(Array.isArray(myArray))
    // console.log(myArray[0])






    // var languages = [
    //     'Javascript',
    //     'PHP',
    //     'RUBY'
    // ];

    //1-pop : xóa phần tử cuối mảng trả về phần tử đã xóa
    // console.log(languages.pop())
    // console.log(languages);

    //2-push : thêm 1 hay nhiều phần tử vào trong cuối mảng
    // console.log(languages.push('Duy Linh'))
    // console.log(languages)


    //3-shift : xóa phần tử ở đầu mảng và trả về phần tử  đã xóa
    // console.log(languages.shift())
    // console.log(languages)

    //4-Unshift : thêm 1 hay nhiều phần tử vào đầu mảng
    // console.log(languages.unshift('Duy Linh'))
    // console.log(languages)

    //5-Splice : Xóa - chèn 
        //Xóa
        // languages.splice(2, 3) // dữ liệu số 2 là xóa đến chỉ mục thứ mấy trong bảng

        // //Chèn
        // languages.splice(1,1,'Duy Linh')
        // console.log(languages)

    
    //6-concat : nối 2 bảng 
    // var languages2 = [
    //     'Duy Linh',
    //     'Số 1'
    // ];
    // console.log(languages.concat(languages2))`


    //7- Slicing : cắt mảng 
    // console.log(languages.slice(0, 2))







   






    