let guestArray:string[] = ["Saim","haris","saud"];

guestArray.map((items) =>console.log(`Hello,${items} you are invited to dinner`));

let cannotAttend:string = "saud";

console.log(`${cannotAttend} can not make it for dinner`);

let newguest : string = "shaheen";

guestArray[guestArray.indexOf(cannotAttend)]=newguest;


console.log(guestArray);

guestArray.map((items) =>console.log(`Hello,${items} you are invited to dinner`));

export{guestArray};