"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const PORT = 3000;
const app = express();
app.get('/', (req, res) => {
    res.send('Ola!');
});
app.listen(PORT, () => {
    console.log(`Start on port ${PORT}`);
});
