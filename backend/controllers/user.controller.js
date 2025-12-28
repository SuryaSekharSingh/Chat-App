import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) =>{
    try {
        const loggedIn = req.user._id;
        const filteredUsers = await User.find({_id : {$ne : loggedIn}}).select("-password");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.error("Error in getUsersForSidebar : ", error.message);
        res.status(400).json({error: "Internal Server Error"});
    }
}