let utils = require("./utils")
let search_users = function (location, distance, dataArray) {
    try {
        // console.log(location instanceof Array)
        let lat = utils.degrees_to_radians(location[0]);
        let long = utils.degrees_to_radians(location[1]);

        var final_data = new Array()
        dataArray.forEach(element => {
            ulat = utils.degrees_to_radians(Number(element.latitude));
            ulong = utils.degrees_to_radians(Number(element.longitude));

            if (utils.calculate_distance(lat, long, ulat, ulong) <= distance) {
                final_data.push(element);
            }
        });
        final_data.sort(compare)
        var result = new Array();
        final_data.forEach(element => {
            result.push({user_id:element.user_id,name:element.name})
        });

        return result
    } catch (err) {
        throw err;
    }
};

function compare( a, b ) {
    if ( a.user_id < b.user_id ){
      return -1;
    }
    if ( a.user_id > b.user_id ){
      return 1;
    }
    return 0;
  }

module.exports = search_users;
