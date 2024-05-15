//Describe a Function
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("Lahore");
describe_city("Karachi");
describe_city("Berlin", "Germany");
