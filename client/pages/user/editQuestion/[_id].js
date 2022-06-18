import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import PostForm from "../../../components/forms/PostForm";
import UserRoute from "../../../components/routes/UserRoute";
import { toast } from "react-toastify";

const EditPost = () => {
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
  const postSubmit = async (e) => {
    e.preventDefault();
    console.log("submit post to update ", content);
    try {
      const { data } = await axios.put(`/update-question/${_id}`, { content });
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("Posare modificata cu succes");
        router.push("/user/questionandanswer");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <UserRoute>
      <div className="container-fluid py-5 ">
        <div className="row py-5 bg-default-image height-page">
          <div className="display-1 py-5 text-center">
            <h1 style={{ color: "#000000" }}>Editare intrebare</h1>
          </div>
        </div>
        <div className="row py-3">
          <div className="col-md-8 offset-md-2">
            <PostForm
              content={content}
              setContent={setContent}
              postSubmit={postSubmit}
            />
          </div>
        </div>
      </div>
    </UserRoute>
  );
};
export default EditPost;
