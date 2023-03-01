const moment = require('moment')

//POST request to /fetchTimeSheet
exports.fetchTImeSheet = (req, res) => {

  const timeZoneOffset = req.body.timeZone
  const startDate = req.body.startDateTime 
  const endDate = req.body.endDateTime 

  console.log(moment(startDate))

  // write logic here
};