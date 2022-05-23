import { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal } from "antd";
import Link from "next/link";
import AuthForm from "../components/forms/AuthForm";
import { useRouter } from "next/router";
import { UserContext } from "../context";
import { SecurityScanTwoTone } from "@ant-design/icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [state, setState] = useContext(UserContext);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(`/login`, {
        email: email,
        password: password,
      });
      if (data.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        //update context
        setState({
          user: data.user,
          token: data.token,
        });
        //save in local storage
        window.localStorage.setItem("auth", JSON.stringify(data));
        router.push("/");
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
          <h1 style={{ color: "#000000" }}>Autentificare</h1>
        </div>
      </div>

      <div className="row py-5">
        <div className="col-md-6 offset-md-3">
          <AuthForm
            handleSubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            loading={loading}
            page="login"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="text-center">
            Nu aveti inca un cont?{" "}
            <Link href="/register">
              <a className="text-center">Inregistrare</a>
            </Link>
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p className="text-center">
            Ati uitat parola?{" "}
            <Link href="/resetpassword">
              <a className="text-center text-danger">Resetare parola</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
