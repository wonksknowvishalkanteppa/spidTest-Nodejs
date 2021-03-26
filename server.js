const express = require('express');
const fetch = require("node-fetch");
const NetworkSpeed = require('network-speed');
const testNetworkSpeed = new NetworkSpeed();
const app = express();
app.set('view engine', 'pug');


const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});

app.get('/', (req, res) => {
    console.log("get");
    res.render('index');
    // return 
});

app.post('/', (req, res) => {
    console.log("post");
    var speed;
    getNetworkUploadSpeed().then(resu => {
        speed = resu;
        console.log(speed);
        res.render("index1", {
            one: speed['kbps'] / 8,
            two: speed['mbps'],
            three: speed['mbps'] / 8
        })
    });
});

async function getNetworkDownloadSpeed() {
    const baseUrl = 'https://eu.httpbin.org/stream-bytes/500000';
    const fileSizeInBytes = 500000;
    const speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSizeInBytes);
    console.log(`Download Speed: ${JSON.stringify(speed)}`);
}

async function getNetworkUploadSpeed() {
    const options = {
        hostname: 'www.google.com',
        port: 80,
        path: '/catchers/544b09b4599c1d0200000289',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const fileSizeInBytes = 200000
    const speed = await testNetworkSpeed.checkUploadSpeed(options, fileSizeInBytes);
    // return await testNetworkSpeed.checkUploadSpeed(options, fileSizeInBytes);
    console.log(`Upload Speed: ${JSON.stringify(speed)}`);
    // console.log("Upload Speed: ", speed['bps']);
    return speed;
}

// getNetworkDownloadSpeed();