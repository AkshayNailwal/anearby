function calculate_distance(lat1, long1, lat2, long2) {
    dlong = long2 - long1;
    dlat = lat2 - lat1;

    temp1 =
        Math.sin(dlat / 2) ** 2 +
        Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlong / 2) ** 2;
    temp2 = 2 * Math.asin(Math.sqrt(temp1));

    radius = 6378.1; // radius of earth in kilometres
    result = temp2 * radius;
    return result;
}

function degrees_to_radians(degrees) {
    let pi = Math.PI;
    let radians = degrees * (pi / 180);
    return radians
}

module.exports = { calculate_distance, degrees_to_radians }