import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const token = req.headers.token;

  if (!token) {
    return res.json({
      success: false,
      message: "Not authorized, login again",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    
    req.user = { id: decoded.id };

    next(); // move to controller

  } catch (err) {
    console.log(err);
    return res.json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

export default authMiddleware;
