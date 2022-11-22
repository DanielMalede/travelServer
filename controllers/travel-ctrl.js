const countryModel = require("../model/country-models");
const getIndex = (req) => {
  const countryId = travelStates.find((item) => item.id == req.params.id);
  const countryIndex = travelStates.indexOf(countryId);
  return countryIndex;
};

const getTravel = async (req, res) => {
  await countryModel.find({}).then((result,err) => {
    if (err) {
      return res.status(400).json({ success: false, message: err });
    }
    if (result.length == 0) {
      return res.json({ success: false, message: 'no data' });
    }
    if (result) {
      return res.status(200).json({ success: true, message: result });
    }
  });
};

const getTravelById = async (req,res)=>{
  await countryModel.findById(req.params.id).then(countryId => {
    if (!countryId) {
      return res.json({success:false,message:'country not found'})
    }
    return res.status(200).json({success:true,countryId})
  })
   .catch(error => res.status(400).json({success:false, error}))
}

const createTravelById = async (req,res)=>{
  await countryModel.insertMany(req.body.data)
  .then(()=> res.status(200).json({success:true,message:'country added'}))
  .catch(error => res.status(400).json({success:false,error}))
}

const deleteTravel =async (req, res) => {
  await countryModel.findByIdAndDelete()
};
const updateTravel = async(req, res) => {
  await countryModel.findByIdAndUpdate(req.params.id,req.body.data)
  .then((result)=>res.status(200).json({success:true,result}))
  .catch(err=> res.status(400).json({success:false,message:err}))
};

module.exports = {
  getTravel,
  createTravelById,
  getTravelById,
  deleteTravel,
  updateTravel,
  getIndex,
};
