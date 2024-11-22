const express = require('express');
const news = express.Router();
const axios = require('axios');

function getToday() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

const today = getToday();


news.get('/', async function (req, res){

    const {m, s} = req.query;

    const api = await axios.get(`https://api-v2.deepsearch.com/v1/${m}/${s}?date_from=${today}&date_to=${today}&api_key=5b471a9c36214c4496843a1d5c6e5e2b`);
    res.json(api.data);
})


news.get('/search', async function (req, res){

    const {m, keyword} = req.query;


    const api = await axios.get(`https://api-v2.deepsearch.com/v1/${m}?keyword=${keyword}&date_from=${today}&date_to=${today}&api_key=5b471a9c36214c4496843a1d5c6e5e2b`);
    res.json(api.data);
})

module.exports = news;