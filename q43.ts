function makeSandwich(...items : string[]) {
    console.log("\nMaking a sandwich with the following items :");

    items.forEach(singleItem => console.log("-" + singleItem));

    console.log("Now Enjoy Sandwich");
    
}


makeSandwich("Chicken","Cheese","Mayo","Egg");

makeSandwich("Bread","Butter");

makeSandwich("Bread","Butter","Mayo","Egg","Cheese","Chicken","Lettuce","Tomato");