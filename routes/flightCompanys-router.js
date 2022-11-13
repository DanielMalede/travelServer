const router = require('express').Router()
const {
    getFlightcompanys,
    createFlightcompanys,
    getFlightcompanysById,
    deleteFlightcompanys,
    updateFlightcompanys,
    getFlightByName,
    getSingleFlightByName
} =require('../controllers/flightCompanys-ctrl')

router.get('/',getFlightcompanys)
router.post('/savaData',createFlightcompanys)
router.get('/getById/:id',getFlightcompanysById)
router.delete('/delete/:id',deleteFlightcompanys)
router.put('/update/:id',updateFlightcompanys)
router.get('/getByName/:id',getFlightByName)
router.get('/getSingleFlightByName/:id',getSingleFlightByName)

module.exports = router