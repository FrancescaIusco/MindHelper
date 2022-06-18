import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context";
import PostForm from "../../components/forms/PostForm";
import { useRouter } from "next/router";
import axios from "axios";
import UserRoute from "../../components/routes/UserRoute";
import { toast } from "react-toastify";
import QuestionList from "../../components/cards/QuestionList";
import { Modal } from "antd";
import AnswerForm from "../../components/forms/AnswerForm";
import Question from "../../components/cards/Question";

const questionandanswer = () => {
  const [state, setState] = useContext(UserContext);
  //state
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);
  const [filterPosts, setfilterPosts] = useState([]);
  //answers
  const [answer, setAnswer] = useState("");
  const [visible, setVisible] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState({});

  const [query, setQuery] = useState("");
  //route
  const router = useRouter();

  useEffect(() => {
    if (state && state.token) {
      fetchUserPosts();
    }
  }, [state && state.token]);

  const fetchUserPosts = async () => {
    try {
      const { data } = await axios.get("/create-question");
      setPosts(data);
      setfilterPosts(data);
    } catch (err) {
      console.log(err);
    }
  };
  const postSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/create-question", { content });
      console.log("response ", data);
      if (data.error) {
        toast.error(data.error);
      } else {
        fetchUserPosts();
        toast.success("Intrebare postata");
        setContent("");
      }
    } catch (err) {
      console.log(err);
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
    <UserRoute>
      <div className="container-fluid py-5 bg-purplepage-color ">
        <div className="row py-5 bg-default-image height-page">
          <div className="display-1 py-5 text-center">
            <h1 style={{ color: "#000000" }}>Intrebari si raspunsuri</h1>
          </div>
        </div>
        <div className="row py-3">
          <div className="col-md-8 offset-md-2">
            <PostForm
              content={content}
              setContent={setContent}
              postSubmit={postSubmit}
            />
            <br />
            <input
              placeholder="Cautare"
              className="mb-2 form-control mr-sm-2"
              onChange={(event) => setQuery(event.target.value)}
            />
            {filterPosts
              .filter((post) => {
                if (query === "") {
                  console.log(post);
                  return post;
                } else if (
                  post.content.toLowerCase().includes(query.toLowerCase())
                ) {
                  console.log(post);
                  return post;
                }
              })
              .map((post, index) => (
                <div key={index}>
                  <Question
                    post={post}
                    handleDelete={handleDelete}
                    handleLike={handleLike}
                    handleUnlike={handleUnlike}
                    handleAnswer={handleAnswer}
                    addAnswer={addAnswer}
                    removeAnswer={removeAnswer}
                  />
                </div>
              ))}
          </div>
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
    </UserRoute>
  );
};

export default questionandanswer;
