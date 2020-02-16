let fs = require("fs");
let process = require("./process");

function load_from_file(file_path, cb) {
    fs.readFile(file_path, "ascii", function (err, data) {
        cb(err, data);
    });
}


module.exports = {load_from_file}