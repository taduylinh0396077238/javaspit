
/**
 * Array methods -- Phương thức 
     forEach()
     every() - kiểm tra điều kiện thỏa mãn mới cho đến điều kiện thứ 2 chỉ 1 điều kiện ko đúng thì trả về false
     some() - điều kiện chỉ cần 1 gtri đúng thì nó trả về true
     find() -  kiểm tra đến điều kiện có 1 giá trị đúng thì các giá trị sau bị loại bỏ kể cả sau đúng
     filter() - kiểm tra giá trị nào đúng là in ra hết 
     map()  - Giá trị trả về của hàm map trong js là một mảng mới, với số lượng phần tử bằng với mảng cũ, nhưng giá trị của các phần tử thì được quyết định bởi lệnh return của hàm map.
     reduce() - Phương reduce()thức này thực thi một hàm gọi lại "giảm thiểu" do người dùng cung cấp trên mỗi phần tử của mảng, theo thứ tự, chuyển giá trị trả về từ phép tính trên phần tử trước đó.
 */

            var course = [
                {
                    id: 1,
                    name: 'Javascript',
                    coin: 210
                },
                {
                    id: 2,
                    name: 'Linh DZ',
                    coin: 210
                },
                {
                    id: 3,
                    name: 'ABC',
                    coin: 210
                },
                {
                    id: 4,
                    name: 'Linh DZ',
                    coin: 210
                },
                {
                    id: 5,
                    name: 'Linh DZ',
                    coin: 210
                },

            ];


    //HÀM ĐC CHUYỀN VÀO THAM SỐ GỌI LÀ   CALL BACK
    //1. forEach()
            // course.forEach(function(course, index){
            //     console.log(index, course);
            // })
 
    // 2.every()


        //    var isFree = course.every(function(course, index){
        //         console.log(index);
        //         return course.coin === 210;
        //    })
        //    console.log(isFree);

    //3.find()
            // var isFree =  course.find(function( course, index ){
                
            //     return course.name === 'Linh DZ';
            // });
            // console.log(isFree);   
    
    // 4.filter()
            // var isFree =  course.filter(function( course, index ){
                
            //     return course.name === 'Linh DZ';
            // });
            // console.log(isFree);  //  ứng dụng tìm kiếm danh bạ hay nè



    // //5.map()
            // var Maps = course.map(function courseHandler(course,index,originArray){
            //     return {
            //         id: course.id,
            //         name: `Khoa học: ${course.name}`,
            //         coin: course.coin,
            //         coinText: `giá: ${course.coin}`,
            //         index: index,
            //         originArray: originArray,
            //     };
            // })
            // console.log(Maps);

            // //reduce() 
            // var totalCoin = course.reduce(function(total, coin) {
            //         return total + coin.coin;
            // },0);
            // console.log(totalCoin);


    // //BT-reduce()
            // //Flat - "Làm phẳng " mảng từ Depth array - "Mảng sâu"
            // var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
            // var flatArray = depthArray.reduce(function(flatOuput, depthItem){
            //     return flatOuput.concat(depthItem);
            // }, []);
            // console.log(flatArray);
    



    //lẤY RA CÁC KHÓA HỌC ĐƯA VÀO 1 MẢNG MỚI
            // var topics = [
            //     {
            //         topic: "Front-end",
            //         courses: [
            //             {
            //                 id: 1,
            //                 title:"HTML, CSS"
            //             },
            //             {
            //                 id: 2,
            //                 title:"Javascript"
            //             }
            //         ]
            //     },
            //     {
            //         topic: "Back-end",
            //         courses: [
            //             {
            //                 id: 1,
            //                 title:"PHP"
            //             },
            //             {
            //                 id: 2,
            //                 title:"NodeJS"
            //             }
            //         ]
            //     },
            // ];

            // var newCourses = topics.reduce(function (courses, topic){
            //     return courses.concat(topic.courses);
            // }, []);
            // console.log(newCourses);

            // var htmls = newCourses.map(function(course){
            //     return `<div>
            //         <h2>${course.title}</h2>
            //         <p>ID:${course.id}</p>
            //     </div>`;
            // });
            // console.log(htmls.join(''));





    //reduce() logic BT
    
            // Array.prototype.reduce2 = function( callback, result){ // f(đối số )
            //     let i = 0
            //     if(arguments.length < 2){
            //         i = 1;
            //        result =  this[0] //result biến tích trữ

            //     }
            //         for(; i < this.length; i++) {
            //            result = callback(result, this[i], i, this) //result biến tích trữ
            //         }
            //         return result;
            // }
            // const numbers = [1, 2, 3, 4, 5]
            
            // const result = numbers.reduce2((total, number) => {
            //     return total + number;
            // }, 10); //initialValue : giá trị ban đầu 
            // console.log(result);

    //total : toàn bộ 
    //number tổng 
    // result : kết quả 


    // includes()
            //  var course = ['Javascript', 'PHP', 'Dart'];
            //  console.log(course.includes('Javascript', 1));






            // var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

            // function render(courses) {
            //   var Maps =  courses.map(function(course){
            //         return `<li>${course}</li>`;
            //     });
            //     Maps.join('');
            //     var ul = document.querySelector('ul').innerHTML = Maps;  
            //     console.log(ul);
            // }


    
   

