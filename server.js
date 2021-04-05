const speedTest = require('speedtest-net');

options = {
    acceptLicense: true
};
(async() => {
    try {
        var x = await speedTest(options);
        console.log(x['upload']['bandwidth'] * 8 / 1024 / 1024);
        console.log("\n\n", x);
    } catch (err) {
        console.log(err.message);
    } finally {
        process.exit(0);
    }
})();