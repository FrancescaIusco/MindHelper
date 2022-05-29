import { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal } from "antd";
import Link from "next/link";
import AuthForm from "../components/forms/AuthForm";
import { UserContext } from "../context";
import { useRouter } from "next/router";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secret, setSecret] = useState("");
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [state] = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(`/register`, {
        username: username,
        email: email,
        password: password,
        secret: secret,
      });

      if (data.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        setUsername("");
        setEmail("");
        setPassword("");
        setSecret("");
        setOk(data.ok);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  if (state && state.token) router.push("/");

  return (
    <div className="container-fluid py-5 ">
      <div className="row py-5 bg-default-image height-page">
        <div className="display-1 py-5 text-center">
          <h1 style={{ color: "#000000" }}>Inregistrare</h1>
        </div>
      </div>

      <div className="row py-5">
        <div className="col-md-6 offset-md-3">
          <AuthForm
            handleSubmit={handleSubmit}
            username={username}
            setUsername={setUsername}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            secret={secret}
            setSecret={setSecret}
            loading={loading}
            page="register"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Modal
            title="Felicitari!"
            visible={ok}
            onCancel={() => setOk(false)}
            footer={null}
          >
            <p>Te-ai inregistrat cu succes.</p>
            <Link href="/login">
              <a className="btn btn-primary btn-sm">Login</a>
            </Link>
          </Modal>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="text-center">
            Aveti deja un cont?{" "}
            <Link href="/login">
              <a className="text-center">Autentificare</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
