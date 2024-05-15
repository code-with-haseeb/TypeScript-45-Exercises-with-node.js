//Arry of current users
var Current_Users = ["Usman", "Ali", "Sunny", "Raza", "Zain"];
//Array of new users
var New_Users = ["Zohaib", "Mahid", "Ali", "Danish", "Sunny"];
//Loop through new_users to check for username avaibility
New_Users.forEach(function (new_one_user) {
    var our_condition = Current_Users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("This UserName ".concat(new_one_user, " is available"));
    }
});
