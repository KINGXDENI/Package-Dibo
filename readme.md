# Dibo Fetch

<p align="center">
  <img src="https://media.discordapp.net/attachments/1184740016883236894/1195249276478046208/WhatsApp_Image_2023-10-05_at_16.28.41.jpg?ex=65b34da2&is=65a0d8a2&hm=8c9a8bdb4b4ad4c9139a294a621121d7c92821c45b07d85b84d6c6c52e9ca5a8&=&format=webp&width=300&height=300" alt="Dibo Fetch Logo">
</p>

**Fetch answers with Dibo, created by Muh. Deni Setiawan**

## Overview

Dibo Fetch is a command-line tool that allows you to fetch answers from the Dibo platform. It provides a simple and convenient way to interact with the Dibo API.

## Features

- **Easy to Use**: Simply ask a question, and Dibo Fetch will fetch the answer for you.
- **Colorful Output**: Enjoy a visually appealing terminal output with colorful messages.
- **Loading Animation**: Experience a cool loading animation while waiting for the answer.

## Installation

Make sure you have [Node.js](https://nodejs.org/) installed.

```bash
npm install -g dibo-fetch 
```

## Usage
- **For CLI**:
```bash
dibo <Your Question>
```

- **For Require**:
```javascript
const dibo = require('dibo-fetch');

async function exampleDibo() {
    try {
        const reply = await dibo("Apa kabar hari ini?");
        console.log('Jawaban dari Dibo:', reply);
    } catch (error) {
        console.error(chalk.red('Gagal mengambil jawaban dari Dibo:', error.message));
    }
}

exampleDibo();
```
## Example CLI

<img alt="Dibo Fetch Example" src="https://media.discordapp.net/attachments/1184740016883236894/1195257999317540925/tutorial_dibo.gif?ex=65b355c1&amp;is=65a0e0c1&amp;hm=64314aa392173fd0d672da199323487abddac3e7f01d1c44c319cb3fea1dc59a&amp;=&amp;width=1155&amp;height=571">
