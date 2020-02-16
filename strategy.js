let {load_from_file} = require("./load");
let search_users = require("./search");
let process = require("./process")

module.exports = strategy = {
    "method": {
        "file": load_from_file,
    },
    "search": {
        "func": search_users,
    },
    "process": {
        "func": process,
    },
}