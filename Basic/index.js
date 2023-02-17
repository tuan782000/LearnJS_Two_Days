// var red = true;
// var green = false;
// var blue = "1000";
// var myNum = 5;
// var otherNum = "5";

// // var colors = ["red", "green", "yellow", "blue"]
// // var slectedColor =  colors[2];

// // if (slectedColor == "red") {
// //   console.log("This is red")
// // } else if (slectedColor == "green") {
// //   console.log('This is green')
// // }
// // else if (slectedColor == "yellow") {
// //   console.log('This is yellow')
// // }
// // else {
// //   console.log('This is blue')
// // }

// // var animals = ['dog', 'cat', 'fish', 'bird']
// // var selectorAnimals = animals[1]

// // switch(selectorAnimals) {
// //   case "dog": console.log('dog'); break
// //   case "cat": console.log('cat'); break
// //   case "fish": console.log('fish'); break
// //   default: console.log('bird');
// // }

// // var goodMood = true;
// // var goodSleep = false;

// // if (goodMood && goodSleep) {
// //     console.log("Today is a good day")
// // } else {
// //     console.log("Today is not good")
// // }

// // Vòng lập
// var e = 0
// for (e; e <= 10; e++) {
//     console.log(e)
// }

// // Vòng lập for
// var colors = ['red', 'blue', 'white', 'black', 'yellow', 'orange']
// for (i = 0; i < colors.length; i++) {
//     console.log(colors[i] + '\n')
// }

// //  vòng lặp for... of
// var food = ["chicken", "fish", "pork", "beef", "vegetable"]
// for(var eachItem of food) {
//     console.log(eachItem + '\n');
// }

// //  String as Arrays || trong js thì chuỗi có thể là một mãng
// var statement = "chuỗi là một mãng"

// for (i = 0; i < statement.length; i++) {
//     console.log(statement[i] + "\n")
// }

// var incrementor = 0; //typeof number
// var text = ""; // typeof string

// // vòng lập while
// while (incrementor < 10) {
//     text += "the incrementor has gone up to " + incrementor + "\n";
//     incrementor++;
// }
// console.log(text);

// // template literals
// // Thay vì phải viết "" tên biến+"\n"
// // Viết luôn ${tên biến} để có thể dùng nó trong chuỗi.
// while (incrementor < 10) {
//     text += "the incrementor has gone up to ${incrementor} \n";
//     incrementor++;
// }
// console.log(text);

// // Another exmaple

// var i = 0
// var text = "";
// while (i < 10) {
//     text += `the incrementor is ${i}, and squred it is ${i*i} \n`;
//     i++;
// }

// console.log(text);

// // find number min in array
// let array = [10, 9, 8, 7, 0];
// let min = Math.min(...array); // min = 0
// console.log("The minimum value in the array is: " + min); // output: "The minimum value in the array is: 0"

// // Structured Programming

// /**
// Structured Programming
// Sequence:
// Selection
// Loop
// */

// // Sequence
// var myName = "nguyen thai tuan"
// console.log(myName)
// var myNameUpperCase = myName.toUpperCase();
// console.log(myNameUpperCase)

// var nguyenLocation = myName.search("tuan");
// console.log(nguyenLocation)

// var specialWord = myName.substr(nguyenLocation, 6)
// console.log(specialWord)

// // string and array
// var foods = ["chesse", "vegetable", "musroom", "carot"]
// var eatFood = "i'm really hungry food for some"

// console.log(`${eatFood} ${foods[0]}`)

// // Loop for
// //cách 1
// for (i = 0; i < foods.length; i++) {
//     console.log(`${eatFood} ${foods[i]}`)
// }
// // Loop for of || khai báo biến mới là của foods sau đó dùng
// for (var eachFood of foods) {
//     console.log(`${eatFood} ${eachFood}`)
// }

// for (i = 0; i < foods.length; i++) {
//     // check điều kiện nếu mà i chia hết cho 2 chắc chắn nó là số chẵn thỏa mãn điều kiện
//     if (i % 2 === 0) {
//         // in ra kq và viết hoa nó lên
//         console.log(`${eatFood} ${foods[i].toUpperCase()}`)
//     }else {
//         console.log(`${eatFood} ${foods[i]}`)
//     }
// }

// //Challange 1
// var firstName = "Bill";
// var lastName = "Mead"
// console.log(firstName)
// console.log(lastName)
// // Challange 2
// var yourName = firstName +" " + lastName
// console.log(yourName)

// // Function
// // function tên hàm () { xử lý } || dùng hàm đó thì name()
// function doStuff () {
//     // do something
//     // do something else
//     // do another something
//     var myString = "this is a message"
//     var upperString = myString.toUpperCase();
//     console.log(myString, upperString)
// }

// doStuff()

// function checkNum() {
//     var useNum = prompt("Enter your number", "");
//     if(useNum < 10) {
//         console.log("You entered a number less than 10")
//         for(i = 0; i < useNum; i++) {
//             console.log (`Your Number is ${i}`)
//         }
//     }else if ( useNum > 9) {
//         console.log("You entered a big Number")
//     }else {
//         console.log("You didn't enter number")
//     }

// }

// checkNum()
// function checkNum() {
//     var useNum = prompt("Enter your number", "");

//     if (useNum < 10) {
//         console.log("You entered a number less than 10");
//         console.log(`Your number you enterd is ${useNum}`);
//         // for (i = 0; i < useNum ;i++){
//         // }
//     } else if (useNum > 9) {
//         console.log("You entered a big Number");
//     } else {
//         console.log("You didn't enter number");
//     }
// }

// // checkNum()

// // passing data
// function passingData(a, b) {
//     return console.log(a + b);
// }

// passingData(5, 4);

// function upperCaseString(a) {
//     var upperCaseStr = a.toUpperCase();
//     return console.log(upperCaseStr);
// }

// upperCaseString("Important message");

// // Viết gọn lại

// function vietHoa(b) {
//     return console.log(b.toUpperCase());
// }

// vietHoa("Viết Hoa toan bộ");

// //

// var foods = ["chesse", "chicken", "pork", "beaf"]

// function randomInt (min, max) {
//     var numOfValues = max - min + 1;
//     var randomNum =  Math.random();
//     var randomVal = numOfValues * randomNum
//     var randomedRandomVal = Math.floor(randomVal);
//     var finalNum = randomedRandomVal + min
//     // floor: làm tròn

//     return finalNum
// }

// console.log( foods[ randomInt(0, 3) ])

// // Function can be Anonymous
// var greeting = function () {
//     var name = prompt("Please tell me your name", "");
//     console.log(`Hello ${name}, how are you today?`)
// }

// // greeting();

// // Arrow Function
// var helloWorld = "Hello World"
// // 3 cách khai báo hàm
// // cách 1
// function abc(anyString) {
//     anyString = anyString.toUpperCase();
//     return anyString
// }
// // cách 2
// var xyz = function(anyString) {
//     anyString = anyString.toUpperCase();
//     return anyString
// }
// // cách 3 (Arrow function)
// var arrowFunction = anyString => anyString.toUpperCase();

// console.log(abc(helloWorld))
// console.log(xyz(helloWorld))
// console.log(arrowFunction(helloWorld))

// window.vietHoa("a")

// =====================================
// // Javascript and DOM
// =====================================

// Dot syntax & method()

/**
 * insertBefore()
 * replaceChild()
 * removeChild()
 * appendChild()
 * cloneNode()
 * createElement()
 * createAttribute()
 * createTextNode()
 * 
These are all methods in the DOM (Document Object Model) API used to manipulate and create HTML elements:

insertBefore(): inserts a new node before an existing node in a parent node.
replaceChild(): replaces an existing child node with a new node.
removeChild(): removes a child node from its parent node.
appendChild(): adds a new child node to the end of a parent node.
cloneNode(): creates a copy of a node.
createElement(): creates a new HTML element.
createAttribute(): creates a new attribute for an HTML element.
createTextNode(): creates a new text node to be inserted into an HTML element.


Đây là các phương thức trong API DOM (Document Object Model) được sử dụng để thao tác và tạo các phần tử HTML:

insertBefore(): chèn một nút mới vào trước một nút hiện có trong nút cha.
replaceChild(): thay thế một nút con hiện có bằng một nút mới.
removeChild(): xóa một nút con khỏi nút cha của nó.
appendChild(): thêm một nút con mới vào cuối của một nút cha.
cloneNode(): tạo một bản sao của một nút.
createElement(): tạo một phần tử HTML mới.
createAttribute(): tạo một thuộc tính mới cho một phần tử HTML.
createTextNode(): tạo một nút văn bản mới để chèn vào một phần tử HTML.

Ví dụ về cách sử dụng các phương thức trong API DOM (Document Object Model):

1. insertBefore(): Chèn một phần tử vào trước một phần tử khác:

const newElement = document.createElement('p');
const existingElement = document.getElementById('existing-element');
const parentElement = existingElement.parentNode;

parentElement.insertBefore(newElement, existingElement);


2. replaceChild(): Thay thế một phần tử con bằng một phần tử khác:

const newElement = document.createElement('p');
const existingElement = document.getElementById('existing-element');
const parentElement = existingElement.parentNode;

parentElement.replaceChild(newElement, existingElement);


3. removeChild(): Xóa một phần tử con:

const existingElement = document.getElementById('existing-element');
const parentElement = existingElement.parentNode;

parentElement.removeChild(existingElement);

4. appendChild(): Thêm một phần tử con vào cuối một phần tử cha:

const newElement = document.createElement('p');
const parentElement = document.getElementById('parent-element');

parentElement.appendChild(newElement);


5. cloneNode(): Sao chép một phần tử:

const existingElement = document.getElementById('existing-element');
const clonedElement = existingElement.cloneNode(true);


6. createElement(): Tạo một phần tử HTML mới:

const newElement = document.createElement('p');
newElement.textContent = 'This is a new paragraph.';

7. createAttribute(): Tạo một thuộc tính mới cho một phần tử HTML:

const newElement = document.createElement('a');
const newAttribute = document.createAttribute('href');
newAttribute.value = 'https://example.com';
newElement.setAttributeNode(newAttribute);


8. createTextNode(): Tạo một nút văn bản mới để chèn vào một phần tử HTML:

const newElement = document.createElement('p');
const newTextNode = document.createTextNode('This is a new paragraph.');
newElement.appendChild(newTextNode);


*/

// getElementById()

// document.getElementById("one").style.color = "red";
// getElementByTagName()
// var mytext = document.getElementsByTagName("p");
// console.log(mytext);

// for (i = 0; i < mytext.length; i++) {
//     mytext[i].style.color = "red";
//     alert(`this is element ${i}`);
// }

// getElementsByClassName()
// var myText = document.getElementsByClassName('special');

// for (i = 0; i < myText.length; i++) {
//     myText[i].style.color = "blue";
// }

// cách 2:
//  var myText = document.getElementsByClassName('special');
//  myText[0].style.color = "blue"

// DOM querySelector (Phần tử đầu tiên được nhận thui)

// var myText = document.querySelector("#special .chesse");

// myText.style.fontSize = "24px";
// myText.style.color = "blue";

// // DOM querySelectorAll (cao cấp hơn thằng query selector, là nhận được cho tất cả các thằng được truy cập)
// var myText = document.querySelectorAll("#special p");
// for (i = 0; i < myText.length; i++) {
//     myText[i].style.color = "yellow";
// }

// element.style.color
// .style.property="value"
// .innerHTML = "value"
// .className = "value"

// Working with element methods
// .setAttribute("attributeName", "value")
// .removeAttribute("attributeName")
// .getAttribute("attributeName")

// Working with properties
// element.style.color="color name"
// .style.property="value"
// .innerHTML = "value"
// .className = "value"

// Working Element Methods
// .setAttribute("attributeName", "value")
// .removeAttribute("attributeName")
// .getAttribute("attributeName")

// innerHTML

// cách 1:
// var myDiv = document.getElementById("special");
// myDiv.innerHTML = "<p>I love you</p>";

// cách 2:

// document.getElementById("special").innerHTML = "<p>Hello</p>";
// or
// document.querySelector("#special").innerHTML = "<p>Hello</p>";

// var greenYellow = document.querySelector("p");
// greenYellow.className = "greenYellow"

// setAttribute()

// var myCheckBox = document.querySelector('input')
// myCheckBox.setAttribute("checked","checked")

// Creating Elements and Text Nodes
// var myTag = document.createElement("p");
// var myContent = document.createTextNode("Ok create done tag");
// myTag.appendChild(myContent);
// document.querySelector("div").appendChild(myTag);
// // appendChild: lấy cha bọc con lại

// var myDiv = document.querySelector('div')
// myDiv.removeChild(myDiv.children[0])

// Capturing events with javascript: Nắm bắt sự kiện trong Javascript

// basic event

// cách 1
// var btn = document.querySelector("button");
// function ouch() {
//     alert("oh no you didn't!");
// }

// btn.onclick = ouch;

// cách 2
// var btn = document.querySelector("button");
// btn.onclick = function () {
//     alert("I told you not to press me!")
// }

// Event Listener
// cách 1:
// var btn = document.querySelector('button')
// function ouch () {
//     alert('I told you not to press me!')
// }
// btn.addEventListener("click", ouch)

// cách 2:
// var btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//     alert("I told you not to press me!");
// });

// // The event Object
// var btn = document.querySelector("button");
// btn.addEventListener("click", function (event) {
//     event.target.style.backgroundColor = "red";
//     alert("oh no you didn't!");
// });

// // preventing Default Behavior

// var link = document.querySelector("a");
// link.addEventListener("click", function (e) {
//     e.preventDefault();
//     // Phương thức preventDefault() của đối tượng event được sử dụng để ngăn chặn cách xử lý mặc định của trình duyệt khi xảy ra sự kiện. đồng thời ngăn cản trình duyệt chuyển tiếp người dùng tới trang đích của link liên kết.
//     alert("Don't to go google!");
// });

// More On events

// Submit Event

// var myForm = document.querySelector("form");
// myForm.addEventListener("submit", function (e) {
//     // e.preventDefault();
//     var formData = document.querySelector("input").value;
//     alert(formData);
// });

// Mouse Over Events.
// var heading = document.querySelector("h1");
// var box = document.querySelector("div");

// box.addEventListener("mouseover", function () {
//     heading.innerHTML = "The mouse is over the box:";
// });
// box.addEventListener("mouseout", function () {
//     heading.innerHTML = "The mouse has left the box:";
// });
// heading.addEventListener("mouseover", function () {
//     heading.innerHTML = "Roll your mouse over the boxes:";
// });


// Scroll events
