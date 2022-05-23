import Post from "../models/question";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const createQuestion = async (req, res) => {
  const { content } = req.body;
  if (!content.length) {
    return res.json({
      error: "Content is required",
    });
  }
  try {
    const post = new Post({ content, postedBy: req.user._id });
    post.save();
    res.json(post);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

export const userQuestions = async (req, res) => {
  try {
    //const posts = await Post.find({ postedBy: req.user._id })

    const posts = await Post.find()
      .populate("postedBy", "_id username image")
      .populate("answers.postedBy", "_id username image")
      .sort({ createdAt: -1 })
      .limit(10);
    res.json(posts);
  } catch (err) {
    console.log(err);
  }
};

export const editUserQuestion = async (req, res) => {
  try {
    const post = await Post.findById(req.params._id)
      .populate("postedBy", "_id username image")
      .populate("answers.postedBy", "_id username image");
    res.json(post);
  } catch (err) {
    console.log(err);
  }
};

export const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params._id, req.body, {
      new: true,
    });
    res.json(post);
  } catch (err) {
    console.log(err);
  }
};

export const deleteQuestion = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params._id);
    res.json({ ok: true });
  } catch (err) {
    console.log(err);
  }
};
export const uploadImage = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.files.image.path);
    res.json({
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (err) {
    console.log(err);
  }
};

export const likePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.body._id,
      {
        $addToSet: { likes: req.user._id },
      },
      { new: true }
    );
    res.json(post);
  } catch (err) {
    console.log(err);
  }
};

export const unlikePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.body._id,
      {
        $pull: { likes: req.user._id },
      },
      { new: true }
    );
    res.json(post);
  } catch (err) {
    console.log(err);
  }
};

export const addAnswer = async (req, res) => {
  try {
    const { postId, answer } = req.body;
    const result = await Post.findByIdAndUpdate(
      postId,
      {
        $push: { answers: { text: answer, postedBy: req.user._id } },
      },
      { new: true }
    )
      .populate("postedBy", "_id username image")
      .populate("answers.postedBy", "_id username image");
    res.json(result);
  } catch (err) {
    console.log(err);
  }
};

export const deleteAnswer = async (req, res) => {
  try {
    const { postId, answer } = req.body;
    const result = await Post.findByIdAndUpdate(
      postId,
      {
        $pull: { answers: { _id: answer._id } },
      },
      { new: true }
    );
    res.json(result);
  } catch (err) {
    console.log(err);
  }
};
