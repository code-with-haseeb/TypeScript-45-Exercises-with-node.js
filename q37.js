//Making a Function
function make_shirt(size, printMessge) {
    if (size === void 0) { size = "Large"; }
    if (printMessge === void 0) { printMessge = "I Love Typescript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessge, " prints on shirt"));
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I Love Java Script");
