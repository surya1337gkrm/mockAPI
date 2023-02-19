const express = require('express');
const router = express.Router();
const apiCache = require('apicache');
const needle = require('needle');
require('dotenv').config();

const API_BASE_URL = process.env.API_BASE_URL;
let cache = apiCache.middleware;
router.get('/', cache('2 minute'), async (req, res, next) => {
  try {
    const apiRes = await needle('get', API_BASE_URL);
    const data = apiRes.body;
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ err });
  }
});
module.exports = router;
