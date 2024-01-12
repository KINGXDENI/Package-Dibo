#!/usr/bin/env node

const {
    dibohandler,
    dibohandlercli
} = require('./dibohandler');
const chalk = require('chalk');

const dibo = (question) => {
    // Pastikan pertanyaan tersedia sebelum melakukan fetch
    if (question) {
        return dibohandler(question);
    } else {
       console.error(chalk.red('Gagal mengambil jawaban dari Dibo'));
    }
};

// Jika dijalankan langsung dari command line, panggil fungsi dibo
if (require.main === module) {
    // Ambil semua argumen dari baris perintah, dimulai dari indeks 2
    const args = process.argv.slice(2);

    // Gabungkan semua argumen menjadi satu pertanyaan
    const question = args.join(' ');
    if (question) {
        return dibohandlercli(question);
    } else {
        console.error(chalk.red('Usage: dibo <question>'));
    }
}

// Ekspor fungsi dibo untuk digunakan di file lain
module.exports = dibo;