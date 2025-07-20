import User from "../models/userModel.js";

export const getUserDetails = async (req, res) => {
      try {
            const userId = req.userId;
            const user = await User.findById(userId);
            if (!user) {
                  return res.json({
                        success: false,
                        message: "User not found",
                  });
            }
            res.status(200).json({
                  success: true,
                  user: {
                        name: user.name,
                        email: user.email,
                        isVerified: user.isVerified,
                  },
            });
      } catch (error) {
            return res.status(500).json({
                  success: false,
                  message: "Internal Server error",
            });
      }
};
