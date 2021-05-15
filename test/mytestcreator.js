var json = require("./urltestdata.json");
// var parseUriSimple = require("../src/index");

console.log('var parseUriSimple = require("../index");');

var mySet = new Set();

json.forEach((item) => {
    if (typeof item === "string") {
        // console.log(item);
    }
    else if (typeof item === "object") {
        // console.log("data:");
        // console.log(item);

        var input = item.input;
        if (mySet.has(input)) {
            return;
        }
        mySet.add(input);

        console.log("test(\"input: \\\"" + JSON.stringify(input).slice(1,-1).replace(/\\/g, "\\\\").replace("\"", "\\\"") + "\\\"\", () => {");
        console.log("    expect(parseUriSimple(" + JSON.stringify(input) + ")).toMatchSnapshot();");
        console.log("});");
    }
});
