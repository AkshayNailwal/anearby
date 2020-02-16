let fs = require("fs");
let path = require("path")
let process = require("./process");

function load_from_file(file_path, cb) {
    f_path = path.join(__dirname,file_path)
    fs.readFile(f_path, "ascii", function (err, data) {
        cb(err, data);
    });
}


module.exports = {load_from_file}