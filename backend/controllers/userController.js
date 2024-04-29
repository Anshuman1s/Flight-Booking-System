const User = require('../models/userModel')



const loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.login(email, password)
        let { _id } = user
        res.status(200).json({_id,email})
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const signupUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await User.signup(username, email, password);
        res.status(201).json({ email });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}




module.exports = {
    loginUser,
    signupUser
}