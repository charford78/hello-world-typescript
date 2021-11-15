"use strict";
var hwt = "Hello, Typescript world!";
var charlie = "Charlie";
var nbr = 0;
console.log(charlie, hwt);
var loaded = function (abc) {
    var hw = document.getElementById("hw");
    if (hw != null) {
        hw.innerText = charlie + ", " + hwt;
    }
};
