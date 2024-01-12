#!/usr/bin/env node

const dibohandler = require('./dibohandler');
const chalk = require('chalk');

const dibo = (question) => {
    // Pastikan pertanyaan tersedia sebelum melakukan fetch
    if (question) {
        dibohandler(question);
    } else {
        console.error(chalk.red('Usage: dibo <question>'));
    }
};

// Jika dijalankan langsung dari command line, panggil fungsi dibo
if (require.main === module) {
    // Ambil semua argumen dari baris perintah, dimulai dari indeks 2
    const args = process.argv.slice(2);

    // Gabungkan semua argumen menjadi satu pertanyaan
    const question = args.join(' ');

    // Panggil fungsi dibo dengan pertanyaan yang telah diambil
    dibo(question);
}

// Ekspor fungsi dibo untuk digunakan di file lain
module.exports = dibo;