'use strict';
var quote = prompt('what is the quote?');
var aut = prompt('who said such quote?');
var greet = aut + ' ' + 'says,'+' '+ ' " ' + quote + ' " ';
var q = document.getElementById('q');
q.innerHTML = greet;