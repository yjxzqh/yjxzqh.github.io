//替换标题
// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

document.querySelector('h1').onclick = function() { alert('别动') };
//切换图片
let myImg = document.querySelector('img');

myImg.onclick = function() {
        let mySrc = myImg.getAttribute('src');
        if (mySrc === 'images/1.png') {
            myImg.setAttribute('src', 'images/2.png');
        } else {
            myImg.ssetAttribute('src', 'images/1.png');
        }
    }
    //输入名字切换标题
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setName() {
    let myName = prompt('please input your name');
    if (myName === null || myName === '') {
        setName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'welcome, ' + myName;
    }
}

myButton.onclick = function() {
    if (!localStorage.getItem('name')) {
        setName();
    } else {
        myHeading.textContent = 'welcome' + localStorage.getItem('name');
    }
}

// localStorage.clear();