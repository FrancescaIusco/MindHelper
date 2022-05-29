import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal } from "antd";
import Link from "next/link";
import ResetPasswordForm from "../../components/forms/ResetPasswordForm";
import { UserContext } from "../../context";
import { useRouter } from "next/router";

const ResetPasswordProfile = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secret, setSecret] = useState("");
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [state, setState] = useContext(UserContext);

  useEffect(() => {
    if (state && state.user) {
      setEmail(state.user.email);
    }
  }, [state && state.user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(`/resetpassword`, {
        email: email,
        password: password,
        secret: secret,
      });

      if (data.error) {
        toast.error(data.error);
        setLoading(false);
      }

      if (data.success) {
        setEmail("");
        setPassword("");
        setSecret("");
        setOk(true);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  const logout = () => {
    window.localStorage.removeItem("auth");
    setState(null);
    router.push("/login");
  };

  return (
    <div className="container-fluid py-5 ">
      <div className="row py-5 bg-default-image height-page">
        <div className="display-1 py-5 text-center">
          <h1 style={{ color: "#000000" }}>Resetare parola</h1>
        </div>
      </div>

      <div className="row py-5">
        <div className="col-md-6 offset-md-3">
          <ResetPasswordForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            secret={secret}
            setSecret={setSecret}
            loading={loading}
            handleSubmit={handleSubmit}
            page="resetpasswordprofile"
            logout={logout}
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
            <p>Parola schimbata cu success!</p>
            {/* <Link href="/login">
              <a className="btn btn-primary btn-sm">Login</a>
            </Link> */}
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordProfile;
