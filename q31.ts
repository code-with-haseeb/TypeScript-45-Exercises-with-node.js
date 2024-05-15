let Username = ["Amir","Imad","Abrar","Admin","Waseem"]

Username = []

if(Username.length === 0){
    console.log("Your Array In Empty We Need To Find Some Users!")
}else{
    
//Ussing Foreach Loop on Array

Username.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a staatus report;`)
    }else{
        console.log(`Hello ${oneUser}, Thank you for logging in again.`)
    }
})
}