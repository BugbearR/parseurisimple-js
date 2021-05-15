var json = require("./urltestdata.json");
var parseUriSimple = require("../index");

json.forEach((item) => {
    if (typeof item === "string") {
        // console.log(item);
    }
    else if (typeof item === "object") {
        console.log("data:");
        console.log(item);

        var input = item.input;
        var r = parseUriSimple(input);
        console.log(r);
        console.log(",");
    }
});
