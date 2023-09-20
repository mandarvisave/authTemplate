const User = require('../models/user')

exports.findUser = async (req, res) => {
    try {
        console.log(req.body);
        console.log('FindOne Entered')
        User.findOne({
            email : req.email,
            password : req.password
        })
        .then(()=>{
            console.log('User Found');
        })
    } catch (error) {
        res.status(400).json('Some error occured')
    }
}