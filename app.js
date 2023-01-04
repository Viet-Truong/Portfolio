import Typed from './node_modules/typed.js/lib/typed';

var Typed = require('./typed.min.js');
var typed = new Typed('#header-search-input', {
	strings: ["", "I'm a Front-End Developer", "I'm a Designer", "I'm a Android Developer"],
    attr: 'placeholder',
    startDelay: 50,
    typeSpeed: 50,
    backSpeed: 50,
    smartBackspace: true,
    loop: true,
    loopCount: Infinity
});
