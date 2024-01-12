// dibo-fetch.js

const fetch = require('node-fetch');
const {
    color
} = require('./color');

const baseUrl = 'https://hercai.onrender.com/v3/hercai?question=';

function dibohandler(question) {
    return new Promise(async (resolve, reject) => {
        try {
            const spinner = createSpinner();

            // Start fetching
            const response = await fetch(baseUrl + encodeURIComponent(question));
            const data = await response.json();

            // Stop the spinner
            stopSpinner(spinner);

            const result = {
                date: new Date(),
                reply: data.reply
            };

            console.log(color(`\n< ================================================== >`, 'green'));
            console.log(color(`[ DIBO ]`, 'black', 'bgGreenBright'), color(`[${result.date}]`, 'black', 'bgGreen'), color(`\n${result.reply}`, 'whiteBright'));

            resolve(result);
        } catch (error) {
            reject(new Error(`Error Searching: ${error.message}`));
        }
    });
}

function createSpinner() {
    const spinner = ['|', '/', '-', '\\'];
    let i = 0;

    const intervalId = setInterval(() => {
        process.stdout.write('\r' + color(`[SEARCHING... ${spinner[i]}]`, 'green'));
        i = (i + 1) % spinner.length;
    }, 100);

    return intervalId;
}

function stopSpinner(spinnerId) {
    clearInterval(spinnerId);
    process.stdout.write('\r' + ' '.repeat(30) + '\r'); // Clear the spinner line
}

module.exports = dibohandler;
