 /**
     * OBJECT trong JavaScript
     */
    // thêm thẳng vào myInFo

    // var emailKey = 'email';

    // var myInFo = {
    //   name: 'Duy Linh',
    //   age: 18,
    //   address: 'Ha Noi, VN',
    //   [emailKey]: 'linhtdth2109010@fpt.edu.vn'
    //   // getName: function(){
    //   //   return this.name;
    //   // } // console.log .getName()

    // };
    // console.log(myInFo);


    // // //Thêm Dữ liệu 
    // myInFo.email = 'ABCD'
    // console.log(myInFo.getName());
    // //Lấy ra từng giá trị 
    // // console.log(myInFo.name);




    //Object constructor : xây dựng 1 đối tượng 
    //${} ký tự nối 

    // function User(firsName, lastName, avatar) {
    //   this.firsName = firsName;
    //   this.lastName = lastName;
    //   this.avatar = avatar;
    //   this.getName = function() {
    //     return `${this.firsName} ${this.lastName}`;
    //   }
    // }

    // var author = new User('Duy', 'Linh', 'Avatar');
    // var user = new User('Đẹp', 'Zai', 'Avatar');

    // console.log(author.getName());
    // console.log(user);


/**
     * Object prototype - Basic : nguyên mẫu tạo ra 1 đối tượng như là nguyên liệu xây nhà 
     * 1. prototype là gì?
     * 2. sử dụng khi nào ?
     */
    //  function User(firsName, lastName, avatar) {
    //   this.firsName = firsName;
    //   this.lastName = lastName;
    //   this.avatar = avatar;
    //   this.getName = function() {
    //     return `${this.firsName} ${this.lastName}`;
    //   }
    // }
    

    // User.prototype.clasName = 'F8'; // thêm 1 giá trị ngoài hàm dùng prototype
    
    
    // var author = new User('Duy', 'Linh', 'Avatar');
    // var user = new User('Đẹp', 'Zai', 'Avatar');
    
    // console.log(author.getName());
    // console.log(user.clasName);
  





    // //ĐỐI TƯỢNG DATE : cập nhật date hiện tại 
    //  var date = new Date();

    //  var year = date.getFullYear();
    //  var month = date.getMonth() + 1;
    //  var day = date.getDate();

    //  console.log(`${day}/${month}/${year}`);


    


    /**
     * Math object
     * 
     * -Math.PI
     * -Math.round()
     * -Math.abs()
     * -Math.ceil()
     * -Math.floor()
     * -Math.random()
     * -Math.min
     * -Math.max
     */

    // var random = Math.floor(Math.random()  * 5);
    // // var bonus = [
    // //   '10 coin',
    // //   '20 coin',
    // //   '30 coin',
    // //   '40 coin',
    // //   '50 coin',
    // // ];
    // // console.log(bonus[random]);

    // if(random < 5) {
    //   console.log('Cường hóa thành công ');
    // }


    // >= 3 thì dùng switch case







    //TOÁN TỬ 3 NGÔI :: Ternary operator

  //   var course = {
  //     name: 'Javascript',
  //     coin: 0
  //   }

  //   // if(course.coin > 0 ){
  //   //   console.log(`${course.coin} Coins`);
  //   // }else {
  //   //   console.log('Free');
  //   // }

  //   var result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn Phí'
  // console.log (result);







  /**
   * VÒNG LẶP - LOOP
   * 1. for - Lặp với  điều kiện đúng
   * 2. for/in - lặp qua key của đối tượng 
   * 3. for/of - lặp qua value của đối tượng 
   * 4. while - lặp khi điều kiện đúng 
   * 5. do/while - lặp ít nhất 1 lần , sau đó lặp khi 
   * điều kiện đúng 
   */

  //for- loop
  // for(var i = 1 ; i <= 99; i++){
  //   console.log(i);
  // }

  // var myArray = [
  //   'Javascript',
  //   'PHP',
  //   'Java',
  //   'Dart',
  //   'Ruby',
  //   'Python'
  // ];
    
  // var myArrays = myArray.length;
  // for(var i = 0; i < myArrays; i++) {
  //   console.log(myArray[i]);
  // }





  // //for/in - loop --- lấy ra cả key và value
  // var myInFo = {
  //   name: 'Duy Linh',
  //   age: 18,
  //   addres: 'Ha Noi, VN'
  // };

  // for (var key in myInFo){
  //   console.log(key);
  // }



  //while - loop
  // var i = 0;
  //   while( i < 1000) {
  //      i++;
  //      console.log( i);
  //   }


  // do- while loop
  // var  i = 0;
  // var isSuccess = false;  

  // do{
  //   i++;
  //   console.log('Nạp thẻ lần' + i);

  //   if(false) {
  //     isSuccess = true;
  //   }
  // }while(!isSuccess && i <= 3);



  //Break & Continue in loop
  // for(var i = 0; i < 10; i++) {
  
  //   // console.log(i);
  //   // if(i >= 5) {
  //   //   break;
  //   // }

  //   if(i%2 !== 0 ) {
  //     continue;
  //   }
  //   console.log(i);
   
  // }

  
  //VÒNG LẶP LỒNG NHAU
    // var myArray = [
    //   [1, 2],
    //   [3, 4],
    //   [5, 6]
    // ];

    // for(var i = 0; i < myArray.length; i++) {
    //   for(var j = 0; j < myArray[i].length; j++) {
    //     console.log(myArray[i][j]);
    //   }
    // }





    /**
     * ĐỆ QUY 
     */
    // function loop(start, end , cb) {
    //   if(start < end) {
    //     cb(start);
    //     return loop(start + 1, end, cb);
        
    //   }
    // }


    // var array = ['Javascript', 'PHP', 'Ruby'];
    // loop(0, array.length, function(index){
    //   console.log(array[index]);
    // })

    
    // function abc(a,b) {
     

    //   if(a == b) {
    //     return a;
    //   }else if ( a > b) {
    //     return abc(b, a -  b);
    //   }else {
    //     return abc (a, b - a);
    //   }
   

    // }
    // console.log(abc(6,3));


        
    // function FI(n) {
     

    //  if(n == 2) {
    //    return 1;
    //  }else if (n == 1) {
    //    return 0;
    //  }else {
    //    return FI (n-1) + FI(n - 2);
    //  }
   

    // }
    // console.log(FI(6));