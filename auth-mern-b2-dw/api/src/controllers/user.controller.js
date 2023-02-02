const bcrypt = require("bcryptjs");
const User = require("../models/user.model");

const UserController = {
    update: async (req, res) => {
        const { firstName, lastName, password, email } = req.body;
        let { user } = req;
        user = await User.findById(user._id);
        

        if (password) {

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
        }

        if (email !== req.user.email) {
            return res.status(400).send({ error: "Email can't be modified" });
        }


        user.firstName = firstName;
        user.lastName = lastName;

       
        await user.save();
        
        return res.json({
            success: true,
            message: "User updated successfully."
        });
    },
 
    getAll: async (req, res) => {
        const users = await User.find();
        res.json({ success: true, data: users });
    },
  

};

module.exports = UserController;