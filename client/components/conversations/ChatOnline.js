import { Avatar, List } from "antd";
import { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from "../../context";
import axios from "axios";

const ChatOnline = ({ users, setCurrentChat, currentUserId }) => {
  const [user, setUser] = useState("");
  const [state, setState] = useContext(UserContext);
  const [newConversations, setNewConversations] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await axios.get("/users?_id=" + currentUserId);
        setUser(data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, [currentUserId]);

  const handleClick = async (users) => {
    try {
      const res = await axios.get(
        `/conversation/find/${state.user._id}/${users._id}`
      );
      if (res.data != null) {
        setCurrentChat(res.data);
      } else {
        startConversations(users);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const imageSource = (imageuser) => {
    if (imageuser.image) {
      return imageuser.image.url;
    } else {
      return;
    }
  };

  const startConversations = async (userid) => {
    try {
      const { data } = await axios.post("/conversation", {
        senderId: state.user._id,
        receiverId: userid._id,
      });
      console.log(data);
      setNewConversations(data);
      setCurrentChat(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="d-flex mt-1">
        <div>
          <Avatar size={40} src={imageSource(users)}>
            {users.username[0]}
          </Avatar>
          <span className="pt-2 mx-2">{users.username}</span>
          {/* <List
            itemLayout="horizontal"
            dataSource={users}
            renderItem={(restuser) => (
              <>
                {restuser._id !== state.user._id && (
                  <div onClick={() => handleClick(restuser)}>
                    <List.Item>
                      <List.Item.Meta
                        avatar={
                          <Avatar size={40} src={imageSource(restuser)}>
                            {restuser.username[0]}
                          </Avatar>
                        }
                        title={
                          <div className="d-flex justify-content-between">
                            {restuser.username}
                          </div>
                        }
                      />
                    </List.Item>
                  </div>
                )}
              </>
            )}
          /> */}
        </div>
      </div>
    </>
  );
};

export default ChatOnline;
