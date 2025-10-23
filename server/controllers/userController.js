import { generateToken } from "../lib/utils.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import cloudinary from "../lib/cloudinary.js";

// 🟢 Signup Controller
export const signup = async (req, res) => {
  const { fullname, email, password, bio } = req.body;

  try {
    if (!fullname || !email || !password || !bio) {
      return res.json({ success: false, message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      fullname,
      email,
      password: hashedPassword,
      bio,
    });

    const token = generateToken(newUser._id);

    const userWithoutPassword = newUser.toObject();
    delete userWithoutPassword.password;

    res.json({
      success: true,
      userData: userWithoutPassword,
      token,
      message: "User created successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// 🟢 Login Controller
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    const token = generateToken(user._id);

    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.password;

    res.json({
      success: true,
      userData: userWithoutPassword,
      token,
      message: "Login successful",
    });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// 🟢 Auth Check Controller
export const checkAuth = (req, res) => {
  res.json({ success: true, user: req.user });
};

// 🟢 Update Profile Controller
export const updateProfile = async (req, res) => {
  try {
    const { profilePic, fullname, bio } = req.body;
    const userId = req.user._id;
    let updatedUser;

    if (!profilePic) {
      updatedUser = await User.findByIdAndUpdate(
        userId,
        { fullname, bio },
        { new: true }
      );
    } else {
      const upload = await cloudinary.uploader.upload(profilePic);
      updatedUser = await User.findByIdAndUpdate(
        userId,
        {
          profilepic: upload.secure_url,
          fullname,
          bio,
        },
        { new: true }
      );
    }

    const userWithoutPassword = updatedUser.toObject();
    delete userWithoutPassword.password;

    res.json({ success: true, user: userWithoutPassword });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
