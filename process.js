function process(data) {
    return new Promise((resolve, reject) => {
        try {
            let final_data = []
            data = data.toString()
            data = data.split("\r\n");
            data = JSON.stringify(data);
            data = JSON.parse(data);
            data.forEach(element => {
                elem = JSON.parse(element);
                final_data.push(elem)
            });
            resolve(final_data);
        } catch (err) {
            reject(err);
        }
    });
}

module.exports = process;
