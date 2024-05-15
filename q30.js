// Creating a Array
var userNames = ["Amir", "Imad", "Razzak", "Admin", "Umer"];
//Ussing Foreach Loop on Array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a staatus report;"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", Thank you for logging in again."));
    }
});
