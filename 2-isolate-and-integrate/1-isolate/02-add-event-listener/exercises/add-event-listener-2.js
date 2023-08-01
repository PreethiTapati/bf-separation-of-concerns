'use strict';


const buttonEl = document.createElement('button');
buttonEl.innerHTML = 'log in';
console.log(buttonEl.nodeName, buttonEl.cloneNode(true));

const authenticationHandler = () => {
    const username = prompt('enter your user name');
    if (username === null) {
        return;
    }
    const password = prompt('enter your password');
    if (password === null) {
        return;
    }

    alert(`welcome, ${username}`);
};

// add the event listener to the button so a user can authenicate
buttonEl.addEventListener('hover', authenticationHandler);

// "hover" over the button once
const clickEvent1 = new Event('click');
buttonEl.dispatchEvent(clickEvent1);

// "hover" over the button again
const clickEvent2 = new Event('click');
buttonEl.dispatchEvent(clickEvent2);
