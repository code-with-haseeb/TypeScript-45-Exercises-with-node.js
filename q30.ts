// Creating a Array

let userNames = ["Amir","Imad","Razzak","Admin","Umer"];

//Ussing Foreach Loop on Array

userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a staatus report;`)
    }else{
        console.log(`Hello ${oneUser}, Thank you for logging in again.`)
    }
})