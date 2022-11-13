const router = require('express').Router()
const {
    getFlights,
    getFlightById,
    createFlight,
    updateFlights,
    deleteFlight,
    getFlightByNumFlight,
    getAllFlightsFirstClass,
    getFlightByTimeDepartureTime
} = require('../controllers/flights-ctrl')

router.get('/',getFlights)
router.get('/getById/:id',getFlightById)
router.post('/addFlight',createFlight)
router.put('/updateFlight/:id',updateFlights)
router.delete('/delete/:id',deleteFlight)
router.get('/getFlightByNun/:flightNum',getFlightByNumFlight)
router.get('/getFirstClassFlights',getAllFlightsFirstClass)
router.get('/flightsByTimeDeparture/:departureTime',getFlightByTimeDepartureTime)
router.get('/searchFlightsByLandingAndDeparture',getFlightByTimeDepartureTime)

module.exports = router
