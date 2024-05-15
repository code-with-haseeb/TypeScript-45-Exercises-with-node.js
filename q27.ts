// Define Variables

let aliencolor = "green";

// Using If and Else-If statement

// Version1

if (aliencolor === "green"){
    console.log("(Version1) you shot down green alien you have earned 5 points");
}

else if(aliencolor === "yellow"){
    console.log("you shot down yellow alien you have earned 10 points");
}

else if(aliencolor === "red"){
    console.log("you shot down red alien you have earned 15 points");
}
// Verison2

let aliencolor2 = "yellow";

if (aliencolor2 === "green"){
    console.log("you shot down red alien you have earned 5 points");
}

else if(aliencolor2 === "yellow"){
    console.log("(Version2) you shot down yellow alien you have earned 10 points");
}

else if(aliencolor2 === "red"){
    console.log("you shot down red alien you have earned 15 points");
}

// Version3

let aliencolor3 = "red";

if (aliencolor3 === "green"){
    console.log("you shot down green alien you have earned 5 points");
}
else if(aliencolor3 ==="yellow"){
    console.log("you shot down yellow alien you have earned 10 points");
}
else if(aliencolor3 === "red"){
    console.log("(Version3) you shot down red alien you have earned 15 points")
}