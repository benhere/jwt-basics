const jwt = require('jsonwebtoken');
const { UnauthenticatedError } = require('../errors/index')

const authMiddleware = async (req,res,next) => {
    const authHeader = req.headers.authorization;
    
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new UnauthenticatedError('No token provided')
    }

    const token = authHeader.split(' ')[1];
    
    try {
        const decodedVal = jwt.verify(token, process.env.JWT_SECRET);
        const { id, username } = decodedVal;
        req.user = { id, username }
        next();
        // console.log(decodedVal);
        // console.log('Yout token:',token);
    } catch (error) {
        throw new UnauthenticatedError('Not authorized to access this route')        
    }
}

module.exports = authMiddleware;