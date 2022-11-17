const flightcompanys = require('../model/flightCompanys')
const getIndex=(req)=>{
    const flightId = flightcompanys.find(flight=> flight.id==req.params.id)
    const flightIndex = flightcompanys.indexOf(flightId)
    return flightIndex
}

const getFlightcompanys = (req,res,next)=>{
    res.send(flightcompanys)
}
const createFlightcompanys = (req,res)=>{
    const data = req.body.data
    flightcompanys.push(data)
    data ? res.send('flight has been added'):res.send('err flight not added')
}

const getFlightcompanysById =(req,res)=>{
    const flightcompanysId = flightcompanys.find(flight => flight.id == req.params.id)
    flightcompanysId ? res.send(flightcompanysId) : res.send('flight not found')
}

const deleteFlightcompanys = (req,res)=>{
    const flightIndex = getIndex(req)
    const deletedFlight = flightcompanys.splice(flightIndex,1)
    deletedFlight ? res.send('flight deleted') : res.send('flight not found and not deleted')
}
const updateFlightcompanys =(req,res)=>{
    const flightIndex = getIndex(req)
    if (flightIndex > -1) {
        flightcompanys[flightIndex]=req.body.data
        return res.send('flight Update')
    }
    res.send('flight not found and not deleted')
}

const getFlightByName = (req,res)=>{
    const getFlight = flightcompanys.filter(flight => flight.name==req.params.id)
    getFlight ? res.send(getFlight): res.send('flight not Found')
}

const getSingleFlightByName = (req,res)=>{
    const getFlight = flightcompanys.find(flight => flight.name==req.params.id)
    getFlight ? res.send(getFlight): res.send('flight not Found')
}
module.exports= {
    getFlightcompanys,
    createFlightcompanys,
    getFlightcompanysById,
    deleteFlightcompanys,
    updateFlightcompanys,
    getFlightByName,
    getSingleFlightByName
}