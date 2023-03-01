const express = require("express");
const timeSheet = require("./../module/TimeSheet/timesheet.routes");

const app = express();

const tradeController = require('../controllers/trades.controller');


app.use("/timesheet", timeSheet);

app.post('/',tradeController.addTrade);

app.get('/trades',tradeController.getTrades);

app.get('/trades/:id',tradeController.getTrade);

app.delete('/trades/:id',tradeController.deleteTrade);

app.put('/trades/:id',tradeController.updateTrade);

module.exports = app;