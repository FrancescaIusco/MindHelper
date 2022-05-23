import moment from "moment";
import { Avatar } from "antd";
import {
  LikeOutlined,
  LikeFilled,
  CommentOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { UserContext } from "../../context";
import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Question = ({
  post,
  handleDelete,
  handleLike,
  handleUnlike,
  handleAnswer,
  removeAnswer,
  numberOfAnswers = 2,
}) => {
  const [state] = useContext(UserContext);
  const router = useRouter();

  const imageSource = (user) => {
    if (user.image) {
      return user.image.url;
    } else {
      return;
    }
  };

  return (
    <>
      {post && post.postedBy && (
        <div className=" card mb-5" key={post._id}>
          <div className="card-header">
            <div>
              <Avatar size={40} src={imageSource(post.postedBy)}>
                {post.postedBy.username[0]}
              </Avatar>
              <span className="pt-2 mx-2">{post.postedBy.username}</span>
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
            <div className="pt-2 pe-5 "> {post.likes.length} likes</div>

            <CommentOutlined
              onClick={() => handleAnswer(post)}
              className="pt-2 h5"
            />
            <div className="pt-2">
              <Link href={`/user/answers/${post._id}`}>
                <a>{post.answers.length} answers</a>
              </Link>
            </div>

            {state && state.user && state.user._id === post.postedBy._id && (
              <>
                <EditOutlined
                  onClick={() => router.push(`/user/editQuestion/${post._id}`)}
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
                {post.answers.slice(0, numberOfAnswers).map((a) => (
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
                              onClick={() => removeAnswer(post._id, a)}
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
  );
};

export default Question;
