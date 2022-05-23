import moment from "moment";
import { Avatar } from "antd";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context";
import axios from "axios";

const Message = ({ message, own }) => {
  const [state, setState] = useContext(UserContext);
  const [user, setUser] = useState("");

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios("/users?_id=" + message.sender);
        setUser(data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [message]);

  const imageSource = (imageuser) => {
    if (imageuser.image) {
      return imageuser.image.url;
    } else {
      return;
    }
  };

  return (
    <>
      {own ? (
        <div className="pt-2">
          <div className="d-flex flex-row-reverse">
            <Avatar size={40} src={imageSource(user)}></Avatar>
            <span className="chatText chatColorOwn mx-1">{message.text}</span>
          </div>
          <small>
            <div className="text-muted text-end">
              {moment(message.createdAt).fromNow()}
            </div>
          </small>
        </div>
      ) : (
        <div className="pt-2">
          <div className="d-flex">
            <Avatar size={40} src={imageSource(user)}></Avatar>
            <span className="chatText chatColor mx-1">{message.text}</span>
          </div>
          <small>
            <div className="text-muted">
              {moment(message.createdAt).fromNow()}
            </div>
          </small>
        </div>
      )}
    </>
  );
};

export default Message;
