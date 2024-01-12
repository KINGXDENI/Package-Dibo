#!/usr/bin/env node

const fetchHercai = require('./fetchHercai');
const chalk = require('chalk');

// Ambil pertanyaan dari argumen command line
const question = process.argv[2];

// Pastikan pertanyaan tersedia sebelum melakukan fetch
if (question) {
    fetchHercai(question);
} else {
    console.error(chalk.red('Usage: dibo <question>'));
}
