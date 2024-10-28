const express = require('express');
const news = express.Router();
const axios = require('axios');

news.get('/', async function (req, res){

    const {m, s} = req.query;

    const api = await axios.get(`https://api-v2.deepsearch.com/v1/${m}/${s}?date_from=2024-10-10&date_to=2024-10-24&api_key=5b471a9c36214c4496843a1d5c6e5e2b`);
    res.json(api.data);
})


news.get('/search', async function (req, res){

    const {m, keyword} = req.query;


    const api = await axios.get(`https://api-v2.deepsearch.com/v1/${m}?keyword=${keyword}&date_from=2024-10-10&date_to=2024-10-24&api_key=5b471a9c36214c4496843a1d5c6e5e2b`);
    res.json(api.data);
})

module.exports = news;