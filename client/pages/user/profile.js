import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal, Avatar } from "antd";
import Link from "next/link";
import AuthForm from "../../components/forms/AuthForm";
import { UserContext } from "../../context";
import { useRouter } from "next/router";
import { LoadingOutlined, CameraOutlined } from "@ant-design/icons";
import QuestionList from "../../components/cards/QuestionList";
import moment from "moment";
import {
  LikeOutlined,
  LikeFilled,
  CommentOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import AnswerForm from "../../components/forms/AnswerForm";

const Profile = ({ numberOfAnswers = 2 }) => {
  const [about, setAbout] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);
  //profile picture
  const [image, setImage] = useState({});
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  const [posts, setPosts] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [answer, setAnswer] = useState("");
  const [visible, setVisible] = useState(false);

  const [state, setState] = useContext(UserContext);

  useEffect(() => {
    if (state && state.user) {
      setUsername(state.user.username);
      setEmail(state.user.email);
      setAbout(state.user.about);
      setImage(state.user.image);
    }
  }, [state && state.user]);

  useEffect(() => {
    if (state && state.token) fetchUserPosts();
  }, [state && state.token]);

  const fetchUserPosts = async () => {
    try {
      const { data } = await axios.get("/create-question");
      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.put(`/profile`, {
        username: username,
        about: about,
        email: email,
        image: image,
      });

      if (data.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        //update local storage
        let auth = JSON.parse(localStorage.getItem("auth"));
        auth.user = data;
        localStorage.setItem("auth", JSON.stringify(auth));
        //update context
        setState({ ...state, user: data });

        setOk(true);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  const imageSource = (user) => {
    if (user.image) {
      return user.image.url;
    } else {
      return;
    }
  };

  const handleImage = async (e) => {
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("image", file);
    setUploading(true);
    try {
      const { data } = await axios.post("/uploadprofileimage", formData);
      setImage({
        url: data.url,
        public_id: data.public_id,
      });
      setUploading(false);
    } catch (err) {
      console.log(err);
      setUploading(false);
    }
  };
  const handleDelete = async (post) => {
    try {
      const deleteAnswer = window.confirm("Esti sigur?");
      if (!deleteAnswer) return;
      const { data } = await axios.delete(`/delete-question/${post._id}`);
      toast.error("Intrebarea a fost stearsa");
      fetchUserPosts();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLike = async (_id) => {
    try {
      const { data } = await axios.put("/like-question", { _id });
      fetchUserPosts();
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async (_id) => {
    try {
      const { data } = await axios.put("/unlike-question", { _id });
      fetchUserPosts();
    } catch (err) {
      console.log(err);
    }
  };

  const handleAnswer = (post) => {
    setCurrentQuestion(post);
    setVisible(true);
  };
  const addAnswer = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("/add-answer", {
        postId: currentQuestion._id,
        answer,
      });
      setAnswer("");
      setVisible(false);
      fetchUserPosts();
    } catch (err) {
      console.log(err);
    }
  };
  const removeAnswer = async (postId, answer) => {
    let confirm = window.confirm("Sunteti sigur?");
    if (!confirm) return;
    try {
      const { data } = await axios.put("/delete-answer", {
        postId,
        answer,
      });
      fetchUserPosts();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-fluid py-5 ">
      <div className="row py-5 bg-default-image height-page">
        <div className="display-1 py-5 text-center">
          <h1 style={{ color: "#000000" }}>Profil</h1>
        </div>
      </div>

      <div className="row py-5">
        <div className="col-md-3">
          <label className="d-flex justify-content-center h5">
            {image && image.url ? (
              <Avatar size={100} src={image.url} className="mt-5" />
            ) : uploading ? (
              <LoadingOutlined size={100} className="mt-5" />
            ) : (
              <CameraOutlined size={100} className="mt-5" />
            )}
            <input
              onChange={handleImage}
              type="file"
              accept="images/*"
              hidden
            />
          </label>
          <div className="d-flex justify-content-center text-muted">
            Poza de profil
          </div>
        </div>
        <div className="col-md-4">
          <AuthForm
            about={about}
            setAbout={setAbout}
            handleSubmit={handleSubmit}
            username={username}
            setUsername={setUsername}
            email={email}
            setEmail={setEmail}
            loading={loading}
            page="profile"
          />
        </div>
      </div>
      <div>
        <p className="text-center">
          Daca doriti sa va schimbati parola, apasati
          <Link href="/user/resetpasswordprofile">
            <a className="text-center text-danger">aici</a>
          </Link>
        </p>
      </div>
      <div className="row">
        <div className="col">
          <Modal
            title="Congratulations!"
            visible={ok}
            onCancel={() => setOk(false)}
            footer={null}
          >
            <p>Profilul tau a fost actualizat</p>
          </Modal>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 ">
          <div className="h5 pb-3">Intrebarile mele:</div>
          {posts &&
            posts.map((post) => (
              <>
                {state && state.user && state.user._id === post.postedBy._id && (
                  <>
                    {post && post.postedBy && (
                      <div className=" card mb-5" key={post._id}>
                        <div className="card-header">
                          <div>
                            <Avatar size={40} src={imageSource(post.postedBy)}>
                              {post.postedBy.username[0]}
                            </Avatar>
                            <span className="pt-2 mx-2">
                              {post.postedBy.username}
                            </span>
                            <span className="pt-2 mx-2">
                              {moment(post.createdAt).fromNow()}
                            </span>
                          </div>
                        </div>

                        <div className="card-body">{post.content}</div>

                        <div className="card-footer d-flex">
                          {state &&
                          state.user &&
                          post.likes &&
                          post.likes.includes(state.user._id) ? (
                            <LikeFilled
                              onClick={() => handleUnlike(post._id)}
                              className="pt-2 h5"
                            />
                          ) : (
                            <LikeOutlined
                              onClick={() => handleLike(post._id)}
                              className="pt-2 h5"
                            />
                          )}
                          <div className="pt-2 pe-5 ">
                            {" "}
                            {post.likes.length} likes
                          </div>

                          <CommentOutlined
                            onClick={() => handleAnswer(post)}
                            className="pt-2 h5"
                          />
                          <div className="pt-2">
                            <Link href={`/user/answers/${post._id}`}>
                              <a>{post.answers.length} answers</a>
                            </Link>
                          </div>

                          {state &&
                            state.user &&
                            state.user._id === post.postedBy._id && (
                              <>
                                <EditOutlined
                                  onClick={() =>
                                    router.push(
                                      `/user/editQuestion/${post._id}`
                                    )
                                  }
                                  className="pt-2 h5 px-2 ms-auto"
                                />
                                <DeleteOutlined
                                  onClick={() => handleDelete(post)}
                                  className="pt-2 h5 px-2"
                                />
                              </>
                            )}
                        </div>
                        {post.answers && post.answers.length > 0 && (
                          <>
                            <ol class="list-group list-group">
                              {post.answers
                                .slice(0, numberOfAnswers)
                                .map((a) => (
                                  <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="ms-2 me-auto">
                                      <div class="fw-bold">
                                        <Avatar
                                          size={20}
                                          className="mb-1 mr-3"
                                          src={imageSource(a.postedBy)}
                                        >
                                          {a.postedBy.username[0]}
                                        </Avatar>
                                        {a.postedBy.username}
                                      </div>
                                      <div className="text-muted">{a.text}</div>
                                    </div>
                                    <span class="badge rounded-pill text-muted">
                                      {moment(a.created).fromNow()}
                                      {state &&
                                        state.user &&
                                        state.user._id === a.postedBy._id && (
                                          <div className="me-auto mt-1">
                                            <DeleteOutlined
                                              onClick={() =>
                                                removeAnswer(post._id, a)
                                              }
                                              className="pt-2"
                                            />
                                          </div>
                                        )}
                                    </span>
                                  </li>
                                ))}
                            </ol>
                          </>
                        )}
                      </div>
                    )}
                  </>
                )}
              </>
            ))}
        </div>
        <Modal
          visible={visible}
          onCancel={() => setVisible(false)}
          title="Answer"
          footer={null}
        >
          <AnswerForm
            answer={answer}
            setAnswer={setAnswer}
            addAnswer={addAnswer}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Profile;
