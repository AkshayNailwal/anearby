let strategy = require("./strategy");

let load_and_search = function (method, path, location, distance) {
    return new Promise((resolve, reject) => {
        if (method === "file") {
            strategy.method.file(path, function cb(err, data) {
                if (err) {
                    console.log(err);
                }
                if (data) {
                    strategy.process
                        .func(data)
                        .then(data => {
                            resolve(strategy.search.func(location, distance, data));
                        })
                        .catch(err => {
                            reject(err);
                        });
                }
            });
        }

    })
}

module.exports = { load_and_search }