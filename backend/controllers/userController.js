import User from "../models/userModel.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    //The following command will make sure that we get all the users who have an account , and all the users will be fetched , the $ne part will make sure that we do not return the current loggedIn user as we do not want to get that as output

    //The select method will ensure that we dont return the password of the users as the part of the array
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in getUsersForSidebar in userController", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// export const getSenderUsername = async (req, res) => {
//   try {
//     const senderId = req.params.id; // Access senderId from params
//     const user = await User.findById(senderId).select("username"); // Select only the username field

//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     res.status(200).json({ username: user.username });
//   } catch (error) {
//     console.log("Error in getSenderUsername in userController", error.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };
