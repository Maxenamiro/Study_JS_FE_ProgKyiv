var name = prompt ("your name");
var surname = prompt ("your surname");
var age = prompt ("your age");

var a = prompt ("1st num");
var b = prompt ("2nd num");
var c = prompt ("3rd num");
var d = parseFloat (a);
var e = parseFloat (b);
var f = parseFloat (c);
var sum = (d + e + f) / 3;

document.write ("<header></header> <main> <nav></nav> <section>" + name + "<br>" + surname + "<br>" + age + "<br>" + sum + "</section> </main> <footer></footer>");

document.write ("<br>" + "<br>" + "<br>");

var x = 6, y = 14, z = 4; 
var sum1 = (x += y - x++ *z); // 6 * 4 = 24, 14 - 24 = -10, x = 6 - 10 = -4;

x = 6, y = 14, z = 4;
var sum2 = (z = --x - y * 5); // x = 5, 14 * 5 = 70, z = 5 - 70 = -65; 

x = 6, y = 14, z = 4;
var sum3 = (y /= x + 5 % z);  // 5 % 4 = 1, 6 + 1 = 7, y = 14 / 7 = 2;

x = 6, y = 14, z = 4;
var sum4 = (z - x++ +y *5); // 14 * 5 = 70, 4 - 6 = -2, -2 + 70 = 68;

x = 6, y = 14, z = 4;
var sum5 = (x = y - x++ *z); // 6 * 4 = 24, 14 - 24 = -10, x = -10;

document.write (sum1 + "<br>" + sum2 + "<br>" + sum3 + "<br>" + sum4 + "<br>" + sum5);