import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Question from "../../../components/cards/Question";

const AnswersPost = () => {
  const [post, setPost] = useState({});
  const [content, setContent] = useState("");
  const router = useRouter();
  const _id = router.query._id;
  useEffect(() => {
    if (_id) fetchPost();
  }, [_id]);

  const fetchPost = async () => {
    try {
      const { data } = await axios.get(`/create-question/${_id}`);
      setPost(data);
      setContent(data.content);
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
      fetchPost();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-fluid py-5 bg-purplepage-color ">
      <div className="row py-5 bg-default-image height-page">
        <div className="display-1 py-5 text-center">
          <h1 style={{ color: "#000000" }}>Raspunsuri</h1>
        </div>
      </div>
      <div className="row py-3">
        <div className="col-md-8 offset-md-2">
          <Question
            post={post}
            numberOfAnswers={100}
            removeAnswer={removeAnswer}
          />
        </div>
      </div>
    </div>
  );
};
export default AnswersPost;
