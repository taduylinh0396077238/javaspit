/**
 * 1. Let, const
 * 2. Template Literals : ${} nội suy 
 * 3. Multi-line String : viết đc nhiều dòng 
 * 4. Arrow function
 * 5. Classes : rút ngắn code
 * 6. Default parameter values
 * 7. Destructuring
 * 8. Rest parameters(...Rest)
 * 9. Spread(...)  tác dụng nối 
 * 10. Enhanced object literals
 * 11. Tagged template literal
 * 12. Modules
 */




//1. Var / let , const : Scope, Hosting
//- Scope: phạm vi hoạt động 
//- Hosting : lưu trữ chỉ hỗ trong var
//2. Const / Var, Let : Assignment


/**
 * Code thuần : Var
 * Babel : Const, let
 * - Khi định nghĩa biến và ko cần gán lại biến đó 
 * thì dùng : Const
 * 
 * - Khi cần gán lại giá trị cho biến dùng : Let / var
 */


/**
 * Scope
 * - Code block : if else , loop, {}, ....
 */
//TH1 : Ngoài blog : Var / let , const
      // VAR
      // {
      //     var course = 'Javascript basic !';
      // }
      // console.log(course); // nó sẽ in đc ra kq                                                                     

      // //LET , CONST
      // {
      //     let course = 'Javascript basic !';
      // }
      // console.log(course); // nó ko in ra cả const 

// //TH2: Trong Blog : Var / let , const -  thì sẽ đc in ra hết 
      // {
      //     const course = 'Javascript basic !';
      //     {
      // //         {
      //             const courses = 123; // ưu tiên in ra cái block gần nhất mà phải cùng tên khai báo 
      //             console.log(courses);
      // //         }
      // //     }
      // // }






/**
 * Hosting : chỉ hỗ trợ var ko hỗ trợ const vs let
 */
    // a = 1;
    // var a; // let vs const thay vào ko hợp lệ 
    // console.log(a);

    // a = 1;
    // var a; // let vs const thay vào ko hợp lệ 
    // console.log(a);


/*
2. Const / Var, Let : Assignment (so sánh sự khác nha )
  -Const : nó sẽ ko thể sử dụng toán tử  gắn lần thứ 2 cho nó (lỗi )
  -Let / var : có thẻ gắn  sử dụng toán tử giá trị thứ 2 cho nó (ko lỗi)

  CHÚNG TA CÓ THỂ THAY TỪNG BIẾN VÀO ĐỂ THỬ 
*/
//VD1 : ĐƠN GIẢN 
      // let a = 1;

      // a = 100;
      // console.log(a);


// //VD2: DỄ BỊ LỪA NHẤT 
      // const a = {
      //     name : 'Javascript'
      // };
// //TH1: Đây là gắn toán tử mới (đây mới là Assignment)
      // // a = 'PHP';
      // //TH2: Đây là thay đổi  giá trị mới  tất nhiên là đc (điều hiển nhiên )
      // // a.name = 'PHP'; // .name nó gọi đến để thay đổi 
      // console.log(a.name);




/**
 *  2. Template Literals  
 *  ${} : nội suy (trong chính nó suy ra )
 * nếu muốn thêm đc ký tự đặc biệt ta thêm \ trc nó 
 */

    // const courseName = 'Javascript';
    // const courseName2 = 'PHP';
    // const description = `Course name: ${courseName}  ${courseName2}`
    // console.log(description);


/**
 * 3. Multi-line String : viết đc nhiều dòng
 */

    //   const lines = 'Line 1\n' 
    //                 + 'Line 2\n'
    //                 + 'Line 3\n'
    //                 + 'Line 4\n'

    //                 console.log(lines); 


/**
 * 4. Arrow function : (cắt ngắn lại phần funtion )
 */

      //  const logger = (log) => {
      //   console.log(log);
      //  }
      //  logger('Message......');

//Ngắn gọn nữa
      // const sum = (a, b) => a + b;
      // console.log(sum(2, 2));
    //Object muốn in ra đc pt thì nhóm nó vào ()
      // const sum = (a, b) => ({a: a, b: b});
      // console.log(sum(2, 2));




      // const course = {
      //   name: 'Javascript basic!',
      //   getName: function()  {
      //     //ko thể dùng đc arrow function
      //     return this.name; //context: định nghĩa văn bản 
      //   }
      // }
      // console.log(course.getName());


/**
 * 5. Classes : rút ngắn code hơn 
 */
//Xử lý bên trong code nó dối lên 
    // function Course(name, price) {
    //   this.name = name;
    //   this.price = price;

    //   this.getName = function() {
    //     return this.name;
    //   }
    //   const isSuccess = false;
    // }

//tối ưu đoạn code hơn 
    // class Course {
    //   constructor(name, price) {
    //     this.name = name;
    //     this.price = price;
    //   }

    //   getName() {
    //     return this.name;
    //   }

    //   getPrice() {
    //     return this.price;
    //   }
    // }

// const phpCourse = new Course('PHP', 1000);
// const jsCourse = new Course('Javascript', 1200);

// console.log(phpCourse);
// console.log(jsCourse);



/** Xem lại sau 
 * 6. Default parameter values : tham số là của hàm nên làm việc với hàm 
 * Default: giá trị mặc định 
 * parameter : tham số 
 * values : giá trị 
 */

      // function logger(log, isAlert) {
      //   if(isAlert) return alert(log);// nếu mà thg isAlert có isAlert thì return ra alert(log)
      //   console.log(log);// còn ko có thì console
      // }

      // logger()


      //alert : in ra thông báo 
      //console.log in ra màn hình console.log


/**
 * 10. Enhanced object literals
 * 1- Định nghĩa key: value cho object 
 * 2- Định nghĩa method cho object
 * 3- Định nghĩa key cho object dưới dạng biến 
 */

//     var name = 'Javascript';
//     var price = 1000;

//     var course = {
//     //1- Định nghĩa key: value cho object (ko cần gắn values vào cho  key )
//       name,
//       price,
//     //2- Định nghĩa method cho object
//       getName() {
//         return name;
//       }
//     };
//     console.log(course.getName());
// //cách 3 ít xử dụng nên là dn cho nó thêm [] vào tên biến khai báo 




/**
 * 7. Destructuring : rút ngắn cách gọi tên biến 
 * 8. Rest parameters
 */

//  7. Destructuring : rút ngắn cách gọi tên biến (dùng đc array vs object)\
    //array
        // var array = ['Javascript', 'PHP', 'Ruby'];
        // var [ a, b, c] = array; // [] gọi thẳng đến array 
        // console.log(a, b, c);
    // //Object
        // var Course = {
        //   name: 'Javascript',
        //   price: 1000
        // }
        // // lấy ra giá trị 
        // var {name , price} = Course;
        // console.log(name, price)

    //Xóa giá trị mà ko động đến nó 
        // var Course = {
        //   name: 'Javascript',
        //   price: 1000,
        //   img: 'image-address'
        // }
        // // lấy ra giá trị 
        // var {name , ...newObject} = Course;
        // console.log(newObject)

    //Thêm object con vào thg bố 
        // var Course = {
        //   name: 'Javascript',
        //   price: 1000,
        //   img: 'image-address',
        //   children: {
        //     name: 'DuyLinh Code '
        //   }
        // }
    // lấy ra giá trị 
    //đổi tên dùng dấu : ----VD name: DuyLinh 
          // var {name: parenName , children: { name}} = Course;
          // console.log(parenName);
          // console.log(name);

    //lấy giá trị ko có cho nó 1 giá trị mặc định 
          // var {name, description = 'default description'  } = Course;
          // console.log(name);
          // console.log(description);
          
//8. Rest parameters : lấy ra giá trị còn lại ko đc in ra (...)
    //VD1
        // var array = ['Javascript', 'PHP', 'Ruby'];
        // var [ a, ...Rest] = array; // [] gọi thẳng đến array 
        // console.log(a);// in ra a 
        // console.log(Rest);// lấy ra gtri còn lại 


    // ... xử dụng in ra thành array 
          // function looger(...params) {
          //   console.log(params);
          // }
          // console.log(looger(1,2,3,4,5,6,7,8,9));


    //VD2

    // Object - Array:  phải dùng đúng tên nó mới vào đc  khi (đặt số thì ko cần thiết choa lắm )
            // function course({name, price}) {
            //         console.log(name);
            //         console.log(price);
            // }

            // course({
            //     name: 'Java',
            //     price: 1000
            // }); 


/**
 *  9. Spread(...)  tác dụng nối
 */
        //VD1
            // const Name1 = ['Javascript', 'PHP'];
            // const Name2 = ['Ruby', 'Code F8'];

            // const Name3 = [...Name2, ...Name1];
            // console.log(Name3);
        
        //VD2 : trùng tên api nó sẽ lấy ra thằng in ra cuối cùng 
        // var defaultConfig = {
        //     api: 'http://duylinh',
        //     apiVersion: 'v1',
        //     other: 'other',
        // };

        // var exerciseConfig = {
        //     ...defaultConfig,
        //     api: 'http://abc' 
        // }
        // console.log(exerciseConfig);



        //VD3
        // var array = ['Javascript', 'PHP', 'Ruby'];

        // function looger(...Rest) {
        //     for(var i = 0; i < Rest.length; i++){
        //         console.log(Rest[i]);
        //     }
        // }

        // looger(...array);



        
/**
 * 11. Tagged template literal
 */
        //  function highlight([first, ...strings], ...value) {
        //     //value đc coi xử dụng ...rest lấy ra tất cả phần tử 
        //     //first là (Học lập trình tại )
        //     // console.log('first',first);
        //     // console.log('strings',strings);
        //     // console.log('value',value);
        //     return value.reduce((acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
        //     [first]);
        //     //lặp lại lần 2 sẽ in ra phần còn lại 
            
        //  }
        
        //  var barand = 'F8';
        //  var course = 'Javascript';

        // const html = highlight`Học lập trình ${course} tại ${barand}!`;
        // console.log(html);

        

        
/**
 * Modules: Import / Export
 */
// //  nạp    logger từ    ./logger.js 
//     import logger from './logger.js'
//     // import  {
//     //     TYPE_LOG,
//     //     TYPE_WARN,
//     //     TYPE_ERROR
//     // } from './constants.js'
//     // logger('Test mesage...', TYPE_WARN)    
    

//     //GỌI RA TẤT CẢ CÁC Gía trị 
//     import * as constants from './constants.js'
//     console.log(constants);








//ko muốn inport vào thằng logger.js
import logger from './logger/index.js';
import * as constants from './constants.js'
console.log(constants);

