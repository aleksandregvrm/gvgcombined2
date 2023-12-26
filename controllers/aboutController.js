const About = require("../models/AboutModel");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const getAboutStats = async (req,res) => {
    const stats = await About.find({});
    res.status(StatusCodes.OK).json({aboutStats:stats})
}
const editAboutStats = async (req,res) => {
  const {id} = req.params;
  const stats = await About.findOneAndUpdate({_id:id}, req.body, {
    runValidators: true,
  });
  console.log(stats);
  if(!stats){
    throw new CustomError.BadRequestError('There are no stats, please provide the stats first');
  }
  res.status(StatusCodes.OK).json({aboutStats:stats});
}
const setAboutStats = async (req,res) => {
  const {machines,partners,cities} = req.body;
  if(!machines || !partners || !cities){
    throw new CustomError.BadRequestError("You haven't provided the stats correctly");
  }
  const stats = About.create({machines,partners,cities});
  res.status(StatusCodes.CREATED).json({msg:'created'});
}
module.exports = {
    getAboutStats,
    editAboutStats,
    setAboutStats
} 