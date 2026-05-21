const jwt = require('jsonwebtoken');

async function authArtist(req, res, next) {//middleware always has 3 parameters, req, res and next. Next is a function that we call when we want to pass the control to the next middleware or the controller

  const token = req.cookies.token;

  if(!token){
    return res.status(401).json({
      message: 'Unauthorized'
    })
  }

  try{

    const decoded = jwt.verify(token,process.env.JWT_SECRET);

    if(decoded.role != 'artist'){
      return res.status(403).json({
        message: "You don't have an access to perform this action!"
      })
    }

    req.user = decoded;// we can access the decoded token in the controller by req.user

    next();

  }catch(err){

    console.error(err);
    return res.status(401).json({
      message: 'Unauthorized'

    })
  }
}

async function authUser(req, res, next) {//middleware always has 3 parameters, req, res and next. Next is a function that we call when we want to pass the control to the next middleware or the controller

  const token = req.cookies.token;

  if(!token){
    return res.status(401).json({
      message: 'Unauthorized'
    })
  }

  try{

    const decoded = jwt.verify(token,process.env.JWT_SECRET);

    if(decoded.role !== 'user'){
      return res.status(403).json({
        message: "You don't have an access to perform this action!"
      })
    }

    req.user = decoded;// we can access the decoded token in the controller by req.user
    
    next();

  }catch(err){

    console.error(err);
    return res.status(401).json({
      message: 'Unauthorized'

    })
  }
}

module.exports = {authArtist, authUser};