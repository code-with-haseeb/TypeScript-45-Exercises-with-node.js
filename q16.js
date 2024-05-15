"use strict";
let guestArrayn = ["Saim", "haris", "saud"];
guestArray.map((items) => console.log(`Hello,${items} you are invited to dinner`));
let cannotAttend = "saud";
let newguest = "shaheen";
guestArray[guestArray.indexOf(cannotAttend)] = newguest;
guestArray.unshift("haider");
let middleguest = "fakhar";
let middleindex = guestArray.length / 2;
guestArray.splice(middleindex, 0, middleguest);
guestArray.push("shadab");
console.log(guestArray);
console.log("we can invite only for two people for dinner!");
while (guestArray.length > 2) {
    let removeguestArray = guestArray.pop();
    console.log(`\nsorry ${removeguestArray} we can't invite you to dinner`);
}
guestArray.map((item) => console.log(`\n${item} you are still invited to dinner!`));
guestArray.pop();
guestArray.pop();
console.log(guestArray);
