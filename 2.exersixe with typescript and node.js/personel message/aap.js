"use strict";
let personName = '';
personName = prompt('what is your name?') || '';
if (personName !== null && personName !== '') {
    alert(`Hello ${personName}, would you like to learn Python today?`);
}
else {
    alert('You have to fill your name !');
}
