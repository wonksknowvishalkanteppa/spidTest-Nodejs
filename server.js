const speedTest = require('speedtest-net');

options = {
    acceptLicense: true
};
(async() => {
    try {
        var x = await speedTest(options);
        console.log(x['upload']);
    } catch (err) {
        console.log(err.message);
    } finally {
        process.exit(0);
    }
})();