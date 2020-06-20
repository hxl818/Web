/*
    Module：Modifier for the heading
 */
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

/*
    Module 2：Image Switcher
*/
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/thisisus.jpeg') {
      myImage.setAttribute('src', 'images/dog.jpg');
    } else {
      myImage.setAttribute('src', 'images/thisisus.jpeg');
    }
}

/*
    Module3 ;Customerized Welcome Message 
*/

// 设置个性化欢迎信息
// 获取新按钮和标题的引用
let myButton = document.querySelector('button');
let myHeading2 = document.querySelector('h1');

// 个性化欢迎信息设置函数
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading2.innerHTML = 'WELCOME' + myName;
  }
}

// 初始化代码：在页面初次读取时进行构造工作：
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading2.textContent = 'WELCOME，' + storedName;
}

// 为按钮设置 onclick 事件处理器：
myButton.onclick = function() {
  setUserName();
};