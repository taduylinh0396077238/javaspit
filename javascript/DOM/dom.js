//Nhớ rẳng sau 1 phương thức phải gắn cho nó 1 function


//HTML DOM 

/**
 * CÓ 3 PHẦN CHÍNH 
 * 1.element - CÁC THẺ CỨNG  : ID , Class, tag , 
 * //CSS selector, HTML collection
 * 
 * 2. Attribute - là các class id src ....
 * 3.text - là chữ điền HTML DOM
 */


// //ID
// var headingNode =  document.getElementById('heading');

// console.log({
//     Element: headingNode
// })

// //Class
// var headingsNode =  document.getElementsByClassName('heading1');

// console.log({
//     Element: headingsNode
// })

//Tag: lấy ra thẳng cái thẻ luôn ko phải chuyền qua class-id 
// var headingsNode =  document.getElementsByTagName('h1');

// console.log({
//     Element: headingsNode
// })

//CSS selector
// var headingNode =  document.querySelectorAll('.box .heading-2 ');

// console.log(headingNode[1]);




//DOM Attribute : thêm Attribute khi ko có trong element
// var headingElement = document.querySelector('h1');

// Thêm Attribute vào trong element
// headingElement.title = 'Heading';
// headingElement.className = 'Heading';
// headingElement.setAttribute('href', 'heading'); // phải có phương thức 
// //thì mới thêm đc thuộc tính mà thẻ h1 ko có vào đc 

// console.log(headingElement.setAttribute);




/**
 * InnerText , textContent
 */

//innerText : bị ảnh hưởng display = none còn textContent thì ko 
//innerText nó in chữ ra thành 1 dòng còn ---textContent nó in ra thành từng thẻ 1 và lấy khoảng cách từng thẻ 
// ngc lại thêm vào innerText thì cách từng cái 1 


// var headingElement = document.querySelector('.heading');

// console.log(headingElement.innerText);   // in ra text node
// console.log(headingElement.textContent); // geter 

// headingElement.innerText = 'New heading';  // Đổi tên lấy gtri mới 
// headingElement.textContent = 'New heading'; //seter 




/**
 * InnerHTML,   outerHTML
 * InnerHTML: thêm đc các element nhỏ vào đc các element to 
 */
// var boxElement = document.querySelector('.box');
// // console.log([boxElement]); // in ra đoạn mã đc thêm bên trên ra bđk

// boxElement.outerHTML = '<h1>Heading new</h1>'
// console.log(boxElement.innerHTML);






/**
 *  DOM style: dùng để thay đổi style của nó 
 */
// var boxElement = document.querySelector('.box');
// //cách nhanh nhất chuyền giá trị 
// Object.assign(boxElement.style, {
//     width: '200px',
//     height:'100px',
//     backgroundColor: 'green',
// });

// console.log([boxElement]);





//CLASS LIST
/**
 * ClassList property
 * 1.add : thêm phần tử 
 * 2.contains: kiểm tra phần tử có hay ko 
 * 3.remove: xóa
 * 4.toggle: có thì xóa còn ko có thì thêm vào 
 */

// var boxElement = document.querySelector('.box');

// boxElement.classList.add('red');
// console.log(boxElement.classList.contains('green'));


// setTimeout(() => {
//     boxElement.classList.toggle('blue');
// }, 3000);


// setInterval(() => {
//     boxElement.classList.toggle('red');
// }, 1000);






//DOM events
// 1. Attribute events : đặt onclick tt trên thẻ (ít sử dụng)
// 2. Assign event using the element node : viết  ra ngoài 


// var h1Elements = document.querySelectorAll('h1');


// // // //Hiện mouse event:  sự kiện chuột 
// // h1Elements.onclick = function(e) {
// //     console.log(e);
// // }


// for(var i = 0; i < h1Elements.length; ++i) {
//     h1Elements[i].onclick  = function(e) {
//         console.log(e.target); //target click vào từng cái nó hiện ra 
//     }
// }




//3. Input / select
//4. Key up / down    - UP là nhấc lên --- down là nhấp xuống 
// var inputValue;// biến toàn cục 
// var inputElement = document.querySelector('input[type="text"]');

//onchange phải có giá trị mới cái cũ nó mới in ra (phù hợp cho đổi tài khoản mật khẩu nè ) 
// inputElement.onchange = function(e) {
//     console.log(e.target.value);
// }

//oninput gõ tới đâu lưu tới đó 
// inputElement.oninput = function(e) {
//      inputValue  = e.target.value; // gọi đến gắn value cho  biến toàn cục 
//      console.log(inputValue);
// }





// inputElement.onkeyup = function(e) {
//     console.log(e.which); // which là mã code của phìm nhấn 

//     switch(e.which) {
//         case 27:  // in ra rồi nhấn ESC vào tìm kiếm hiện ra 27  là phím của esc
//         //nếu bấm vào 27 
//         console.log('Exit');// thì tôi sẽ thoát 
//         break;
//     }
// }



//Bắt đc sự kiện khi mình clck ra ngoài (LỖI KO CLICK RA BÊN NGOÀI ĐC)
// document.onkeydown = function(e) {
    
//     switch(e.which) {
    
//         case 27: //in ra rồi nhấn ESC  click chuột ra bên ngoài bấm ESC
//             console.log('EXIT'); // thì tôi sẽ thoát
//         break;

//         case 13:
//             console.log('SEND CHAT'); // dịch : gửi trò chuyện 
//         break;
//     }
// }


// var inputElement = document.querySelector('select');
// inputElement.onchange = function(e) {
//     console.log(e.target.value);
// }




//5.preventDefault: loại bỏ hành vi mặc định trên thẻ html 
//6.stopPropagation: loại bỏ sự kiện nổi bọt 


// //VD1: preventDefault
// var aElements = document.links;
// for(var i = 0; i < aElements.length; ++i) {
//     aElements[i].onclick = function(e) {
//         if(!e.target.href.startsWith('http://f8.edu.vn')) {
//             //đoạn code trên loại bỏ những link nào khác   http://f8.edu.vn   sẽ ko đc gọi đến !
//             e.preventDefault();
//         }
//     }
// }




// VD2: preventDefault
    var ulElement = document.querySelector('ul');

    ulElement.onmousedown = function(e) {
        e.preventDefault(); // loại bỏ hành vi mặc  định khi click chuột vào nó mất đi 
    }

    ulElement.onclick = function(e) {
        console.log(e.target);
    }

// //VD3 : stopPropagation
// document.querySelector('div').onclick = 
//     function() {
//         console.log('DIV')
//     }

//     document.querySelector('button').onclick = 
//     function(e) {
//         e.stopPropagation(); // ngăn chặn sự kiện nổi bọt lên 
//         console.log('Click me!')
//     }


/**
 * 1. DOM event / Event listener 
 * 2. JSON
 * 3. Fetch 
 * 4. DOM location 
 * 5. Local storage
 * 6. Session storage
 * 7. Coding convention 
 * 8. Best Practices
 * 9. Mistakes
 * 10. Performance
 */


//Event listener
//1. xử lý nhiều việc khi 1 event xảy ra 
//2. Lắng nghe / hủy bỏ lắng nghe 





// // ko xử dụng Event listener 
// btn.onclick = function() {
//     console.log('Việc 1 ');

//     console.log('Việc 2 ');

//     alert('Việc 3 ');
// }


//Xử dụng Event listener 
// function viec1() {
//     console.log('Viec 1');
// };
// btn.addEventListener('click', viec1);//'click' viết tắt onclick
// //addEventListener : lắng nghe sự kiện
// setTimeout(function() {
//     btn.removeEventListener('click', viec1);  //removeEventListener: hủy bỏ lắng nghe  
// }, 3000);





