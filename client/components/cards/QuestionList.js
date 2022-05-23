import { UserContext } from "../../context";
import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Question from "../../components/cards/Question";

const QuestionList = ({
  posts,
  handleDelete,
  handleLike,
  handleUnlike,
  handleAnswer,
  removeAnswer,
}) => {
  const [state] = useContext(UserContext);
  const router = useRouter();

  return (
    <>
      {posts &&
        posts.map((post) => (
          <Question
            post={post}
            handleDelete={handleDelete}
            handleLike={handleLike}
            handleUnlike={handleUnlike}
            handleAnswer={handleAnswer}
            removeAnswer={removeAnswer}
          />
        ))}
    </>
  );
};

export default QuestionList;
