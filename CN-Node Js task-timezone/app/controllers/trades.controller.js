const {tradeSchema,querySchema} = require('../helpers/validator.js');
const db = require('../config/dbConnection.js');

const trades = db.trades;

const addTrade = async (req,res)=>{
    try {
        const result = await tradeSchema.validateAsync(req.body);
        const response = await trades.create(result);
        res.status(201).json({response : response});
    } catch (error) {
        res.status(400).json({message : error.message});
    } 
}

const getTrades = async (req,res)=>{
    let user_id = req.query.user_id;
    let type = req.query.type;
    try {
        if(user_id && type){
            try {
                const result = await querySchema.validateAsync(req.query);
                const response = await trades.findAll({where : {user_id,type}})
                if(response.length == 0) throw "Not found"
                res.status(200).send(response);
            } catch (error) {
                res.status(400).send(error)
            }
            
        }else{
            try {
                const response = await trades.findAll({});
                res.status(200).json(response);
            } catch (error) {
                
            }
        }

        res.status(200).json({});
    } catch (error) {
    
    }
}

const getTrade = async (req,res)=>{
    try {
        const response = await trades.findOne({where : {id : req.params.id}});
        if(response == null) throw new error;
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({message :`The given ID:${req.params.id} was not found.`})
    }
}

const updateTrade = async(req,res)=>{
    try {
        const response = await trades.update(req.body,{where :{id :req.params.id}})
        res.status(200).json({message: `The trade with id:${req.params.id} was updated successfully.`})
    } catch (error) {
        res.staus(404).json({message:`The given ID: ${req.body.id} was not found.`})
    }
}

const deleteTrade = async (req,res)=>{
    try {
        const response = await trades.destroy({where : {id : req.params.id}});
        if(response == 0 ) throw new error;
        res.status(200).json({message : `The trade with id:${req.params.id} was deleted successfully.`})
    } catch (error) {
        res.status(404).json({message :`The given ID: ${req.params.id} was not found.`})
    }
}

module.exports = {
    addTrade,
    getTrade,
    getTrades,
    deleteTrade,
    updateTrade
}