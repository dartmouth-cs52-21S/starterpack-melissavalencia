// const $ = require('jquery');
// $('#main').html('Here we go!');

// change require to es6 import style
import $ from 'jquery';
import './style.scss';

let sec = 0;

setInterval(() => { $('#main').html(`You have been on this page for ${sec} seconds.`); sec += 1; }, 1000);
