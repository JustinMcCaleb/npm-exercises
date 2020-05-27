const $ = require('jquery');

import {niceMessage} from "./say-hello";

console.log(niceMessage('Justin'));

let sayHello =(() => console.log('Hello'));

sayHello();

$('body').css('background-color', 'lightgray');