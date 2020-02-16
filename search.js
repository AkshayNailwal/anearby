let utils = require("./utils")
let search_users = function (location, distance, dataArray) {
    try {
        // console.log(location instanceof Array)
        let lat = utils.degrees_to_radians(location[0]);
        let long = utils.degrees_to_radians(location[1]);

        var final_data = [];
        dataArray.forEach(element => {
            ulat = utils.degrees_to_radians(Number(element.latitude));
            ulong = utils.degrees_to_radians(Number(element.longitude));

            if (utils.calculate_distance(lat, long, ulat, ulong) <= distance) {
                final_data.push(element);
            }
        });
        return final_data
    } catch (err) {
        throw err;
    }
};


module.exports = search_users;
