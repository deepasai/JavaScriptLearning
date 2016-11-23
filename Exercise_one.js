/**
 * Created by deepa.sainath on 11/23/16.
 */
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'I am cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'I am cooler, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}