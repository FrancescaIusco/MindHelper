import Message from "../models/message";

export const message = async (req, res) => {
  const newMessage = new Message(req.body);
  try {
    const savedMessage = await newMessage.save();
    res.json(savedMessage);
  } catch (err) {
    console.log(err);
  }
};

export const convMessages = async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.json(messages);
  } catch (err) {
    console.log(err);
  }
};
