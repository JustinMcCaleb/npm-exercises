'use stict';

const $ = require('jquery');

let sayHello =(() => console.log('Hello'));

sayHello();

$('body').css('background-color', 'blue');