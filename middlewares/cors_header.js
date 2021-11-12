const corsHeader = (req, res, next) => {
  //to accept connect to server from other domain (CORS)

  res.setHeader('Access-Control-Allow-Origin', '*'); // disable CROS for all websites
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST , PUT, DELETE'); //  Specify which methods allowed
  res.setHeader('Access-Control-Allow-Headers', 'Content-type , Authorization');

  if (req.method.toString().toLowerCase() === 'options') {
    //fix issue with modern browser
    //first browser options request to check server status
    return res.sendStatus(200);
  }

  return next();
};
module.exports = corsHeader;
