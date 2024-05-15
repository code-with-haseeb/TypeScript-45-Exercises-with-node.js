//Arry of current users

let Current_Users = ["Usman","Ali","Sunny","Raza","Zain"]

//Array of new users

let New_Users = ["Zohaib","Mahid","Ali","Danish","Sunny"]

//Loop through new_users to check for username avaibility

New_Users.forEach(new_one_user =>{
    let our_condition = Current_Users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken`)
    }else{
        console.log(`This UserName ${new_one_user} is available`)
    }
})