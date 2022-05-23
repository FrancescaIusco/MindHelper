import Conversation from "../models/conversation";
import User from "../models/user";

export const conversation = async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });
  try {
    const savedConversation = await newConversation.save();
    res.json(savedConversation);
  } catch (err) {
    console.log(err);
  }
};

export const userConversation = async (req, res) => {
  try {
    const userconv = await Conversation.find({
      members: { $in: [req.params._id] },
    });
    res.json(userconv);
  } catch (err) {
    console.log(err);
  }
};

export const users = async (req, res) => {
  const _id = req.query._id;
  const username = req.query.username;
  try {
    const user = _id
      ? await User.findById(_id)
      : await User.findOne({ username: username });
    const { password, updatedAt, ...other } = user._doc;
    res.json(other);
  } catch (err) {
    res.json(err);
  }
};
export const twoUserConversation = async (req, res) => {
  try {
    const conversation = await Conversation.findOne({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    });
    res.json(conversation);
  } catch (err) {
    console.log(err);
  }
};
