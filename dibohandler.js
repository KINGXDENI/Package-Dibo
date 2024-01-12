// dibohandler.js

const fetch = require('node-fetch');
const chalk = require('chalk');
const { color } = require('./color');

const baseUrl = 'https://hercai.onrender.com/v3/hercai?question=';

async function dibohandler(question) {
    try {
        const spinner = createSpinner();

        // Start fetching
        const response = await fetch(baseUrl + encodeURIComponent(question));
        const data = await response.json();

        // Stop the spinner
        stopSpinner(spinner);
        console.log(color(`\n< ================================================== >`, 'green'));
        console.log(chalk.black(chalk.bgGreenBright('[ DIBO ]')), chalk.black(chalk.bgGreen(new Date)),  chalk.whiteBright(`\n${data.reply}`));
    } catch (error) {
        console.error(chalk.red('Error Searching:', error.message));
    }
}

function createSpinner() {
    const spinner = ['|', '/', '-', '\\'];
    let i = 0;

    const intervalId = setInterval(() => {
        process.stdout.write('\r' + chalk.green(`[SEARCHING... ${spinner[i]}]`));
        i = (i + 1) % spinner.length;
    }, 100);

    return intervalId;
}

function stopSpinner(spinnerId) {
    clearInterval(spinnerId);
    process.stdout.write('\r' + ' '.repeat(30) + '\r'); // Clear the spinner line
}

module.exports = dibohandler;
