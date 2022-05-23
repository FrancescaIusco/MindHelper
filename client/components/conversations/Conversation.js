import moment from "moment";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context";
import { Avatar } from "antd";
import axios from "axios";

const Conversation = ({ conversations }) => {
  const [user, setUser] = useState("");
  const [state, setState] = useContext(UserContext);

  useEffect(() => {
    const friendId = conversations.members.find((m) => m !== state.user._id);
    const getUser = async () => {
      try {
        const { data } = await axios("/users?_id=" + friendId);
        setUser(data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [conversations]);

  const imageSource = (imageuser) => {
    if (imageuser.image) {
      return imageuser.image.url;
    } else {
      return;
    }
  };
  return (
    <>
      <div className="clickable">
        <div>
          <div>
            {/* <pre>{JSON.stringify(user._id, null, 4)}</pre> */}
            <Avatar size={40} src={imageSource(user)}></Avatar>
            <span className="pt-2 mx-2">{user.username}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conversation;
