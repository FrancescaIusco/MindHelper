import User from "../models/user";
import { hashPassword, comparePassword } from "../helpers/auth";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { username, email, password, secret } = req.body;
  //validations
  if (!username) {
    return res.json({
      error: "username is required",
    });
  }
  if (!password || password.lenght < 6) {
    return res.json({
      error: "Password is required and should be 6 caracters long",
    });
  }
  if (!secret) {
    return res.json({
      error: "Answer is required",
    });
  }

  const existUsername = await User.findOne({ username });
  if (existUsername) {
    return res.json({
      error: "Username is taken",
    });
  }

  const exist = await User.findOne({ email });
  if (exist) {
    return res.json({
      error: "Email is taken",
    });
  }

  //hash the password
  const hashedPassword = await hashPassword(password);

  const user = new User({ username, email, password: hashedPassword, secret });
  try {
    await user.save();
    return res.json({
      ok: true,
    });
  } catch (err) {
    console.log("Register failed=>", err);
    return res.json({
      error: "Error.Try again.",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //check if our db has user with that email
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "No user found!",
      });
    }
    //check password
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.json({
        error: "Wrong password",
      });
    }
    //create signed token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    user.password = undefined;
    user.secret = undefined;
    res.json({ token, user });
  } catch (err) {
    console.log(err);
    return res.json({
      error: "Error. Try Again",
    });
  }
};

export const currentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.json({ ok: true });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

export const resetPassword = async (req, res) => {
  //validation
  const { email, password, secret } = req.body;
  if (!password || password < 6) {
    return res.json({
      error:
        "Este necesară o parolă nouă și ar trebui să aibă minim 6 caractere",
    });
  }
  if (!secret) {
    return res.json({
      error: "Este necesar raspunsul la intrebare.",
    });
  }
  const user = await User.findOne({ email, secret });
  if (!user) {
    return res.json({
      error: "Utilizatorul nu a fost gasit.",
    });
  }

  try {
    const hashed = await hashPassword(password);
    await User.findByIdAndUpdate(user._id, { password: hashed });
    return res.json({
      success: "Parola modificata cu success.",
    });
  } catch (error) {
    console.log(error);
    return res.json({
      error: "Incercati din nou.",
    });
  }
};

export const profile = async (req, res) => {
  try {
    const data = {};

    if (req.body.username) {
      data.username = req.body.username;
    }
    if (req.body.about) {
      data.about = req.body.about;
    }
    if (req.body.image) {
      data.image = req.body.image;
    }
    let user = await User.findByIdAndUpdate(req.user._id, data, { new: true });
    res.json(user);
  } catch (err) {
    if (err.code === 11000) {
      return res.json({ error: "Username-ul este folosit deja." });
    }
  }
};

export const getusers = async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (err) {
    res.json(err);
  }
};
