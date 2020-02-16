let { load_and_search } = require("./functions")

load_and_search().then(data=>console.log(data))

module.exports = {
    load_and_search,
    
}
