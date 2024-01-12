#!/usr/bin/env node

const fetchHercai = require('./fetchHercai');
const chalk = require('chalk');

// Ambil semua argumen dari baris perintah, dimulai dari indeks 2
const args = process.argv.slice(2);

// Gabungkan semua argumen menjadi satu pertanyaan
const question = args.join(' ');

// Pastikan pertanyaan tersedia sebelum melakukan fetch
if (question) {
    fetchHercai(question);
} else {
    console.error(chalk.red('Usage: dibo <question>'));
}
