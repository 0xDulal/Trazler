import jwt from "jsonwebtoken";

const userAuth = (req, res, next) => {
      const token = req.cookies.token;

      if (!token) {
            return res.json({
                  success: false,
                  message: "Unauthorized access, please login",
            });
      }

      try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            if (decoded && decoded.id) {
                  req.userId = decoded.id;
            } else {
                  return res.status(403).json({
                        success: false,
                        message: "Invalid token, please login again",
                  });
            }
            next();
      } catch (error) {
            return res.status(403).json({
                  success: false,
                  message: "Invalid token, please login again",
            });
      }
};
export default userAuth;
