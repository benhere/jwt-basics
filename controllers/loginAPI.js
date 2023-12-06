// check username, password in post (login) request
// if exist create new JWT
// send back to front end

const CustomAPIError = require('../errors/custom-error')

const login = async (req,res) => {
    const { username,password } = req.body;
    
    if(!username || !password){
        throw new CustomAPIError('Please provide email and password', 400)
    }
    console.log(username,password);
    res.send('Fake Login/Register/Signup Route')
}

const dashboard = async (req,res) => {
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello User`, secret:`Your lucky number is: ${luckyNumber}`})
}

module.exports = {
    login,dashboard
}