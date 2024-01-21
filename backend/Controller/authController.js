import User from "../Model/user.js";
import bcrypt from "bcrypt";

export const register = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hash,
  });

  try {
    await newUser.save();
    res.status(200).send("User has been created");
  } catch (error) {
    next(error);
  }
};
