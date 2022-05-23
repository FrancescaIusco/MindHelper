import { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from "../../context";
import Conversation from "../../components/conversations/Conversation";
import ChatOnline from "../../components/conversations/ChatOnline";
import Message from "../../components/conversations/Message";
import axios from "axios";
import UserRoute from "../../components/routes/UserRoute";
import { io } from "socket.io-client";

const Chat = () => {
  const [user] = useContext(UserContext);
  const [users, setUsers] = useState("");
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState("");
  const [onlineUsers, setOnlineUsers] = useState("");
  const socket = useRef();
  const scrollRef = useRef();
  const a = 4;

  useEffect(() => {
    if (user && user.token) {
      getUsers();
    }
  }, [user && user.token]);

  useEffect(() => {
    socket.current = io("ws://localhost:8010");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);
  <pre>{JSON.stringify(arrivalMessage, null, 4)}</pre>;

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    if (user && user.token) {
      getConversations();
      getMessages();
    }
  }, [user && user.token && currentChat]);

  useEffect(() => {
    if (user && user.token) {
      socket.current.emit("addUser", user.user._id);
      socket.current.on("getUsers", (users) => {
        setOnlineUsers(users);
      });
    }
  }, [user && user.token && user.user]);

  const getConversations = async () => {
    try {
      const { data } = await axios.get("/conversation/" + user.user._id);
      setConversations(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getMessages = async () => {
    try {
      const { data } = await axios.get("/messages/" + currentChat._id);
      setMessages(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getUsers = async () => {
    try {
      const { data } = await axios.get("/getusers");
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user.user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member != user.user._id
    );

    socket.current.emit("sendMessage", {
      senderId: user.user._id,
      receiverId,
      text: newMessage,
    });

    try {
      const { data } = await axios.post("/messages", message);
      setMessages([...messages, data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <UserRoute>
      <div className="container-fluid py-5 ">
        <div className="row py-5 bg-default-image height-chat-page">
          <div className="display-1 py-5 text-center">
            <h1 style={{ color: "#000000" }}>CHAT</h1>
          </div>
        </div>
        <div className="row d-flex py-5">
          <div className="col-md-3">
            <div className="py-2">
              <div className="text-muted">Conversatiile mele:</div>
              {conversations.map((c) => (
                <div onClick={() => setCurrentChat(c)}>
                  <Conversation conversations={c} />
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-6">
            {currentChat && (
              <>
                <div className="overflow-scroll chatBox">
                  {messages.map((m) => (
                    <div ref={scrollRef}>
                      <Message
                        message={m}
                        own={m.sender === user.user._id}
                        ownImage={user.user}
                      />
                    </div>
                  ))}
                </div>
                <div className="d-flex pt-4">
                  <textarea
                    placeholder="Aa"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="chatTextBox"
                  ></textarea>
                  <button
                    disabled={!newMessage}
                    onClick={handleSubmit}
                    className="btn btn-dark ms-2 col-2"
                  >
                    Send
                  </button>
                </div>
              </>
            )}
          </div>
          <div className="col-md-3">
            <input
              placeholder="Cautare"
              className="border-0 border-bottom border-dark chatWidth"
            />
            <ChatOnline users={users} setCurrentChat={setCurrentChat} />
          </div>
        </div>
      </div>
    </UserRoute>
  );
};

export default Chat;
