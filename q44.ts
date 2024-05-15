function make_car (manufacturer: string, model: string, ... options: [string, any][]): object{

    let car = { manufacturer, model};

    options.forEach(([key, value]) => car[key] = value);

    return car;
}

console.log(make_car("Toyota", "Corolla",["Color", "Red"],["Year", 2022]));

console.log(make_car("Ferrari", "Audi", ["Color", "Black"], ["Sunroof", true]));