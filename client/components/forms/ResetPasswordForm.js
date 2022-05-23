import { SyncOutlined } from "@ant-design/icons";

const ResetPasswordForm = ({
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
  secret,
  setSecret,
  loading,
  page,
  logout,
}) => (
  <form onSubmit={handleSubmit}>
    <div className="form-group p-2">
      <small>
        <label className="text-muted">Adresa de email</label>
      </small>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        className="form-control"
        placeholder="Introduceti adresa de email"
        disabled={page === "resetpasswordprofile"}
      />
    </div>

    <div className="form-group p-2">
      <small>
        <label className="text-muted">Parola noua</label>
      </small>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        className="form-control"
        placeholder="introduceti noua parola"
      />
    </div>
    <>
      <div className="form-group p-2">
        <small>
          <label className="text-muted">Alege o intrebare</label>
        </small>
        <select className="form-control">
          <option>Care este culoarea ta preferata?</option>
          <option>Care este numele mamei tale?</option>
          <option>Care este orasul tau natal?</option>
        </select>
      </div>
      <div className="form-group p-2">
        <input
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Introduceti raspunsul"
        />
      </div>
    </>

    {page !== "resetpasswordprofile" && (
      <div className="form-group p-2">
        <button
          disabled={!email || !password || !secret || loading}
          className="btn btn-primary col-12"
        >
          {loading ? <SyncOutlined spin className="py-1" /> : "Submit"}
        </button>
      </div>
    )}
    {page === "resetpasswordprofile" && (
      <div className="form-group p-2">
        <button
          disabled={!email || !password || !secret || loading}
          className="btn btn-primary col-12"
          onClick={logout}
        >
          {loading ? <SyncOutlined spin className="py-1" /> : "Submit"}
        </button>
      </div>
    )}
  </form>
);

export default ResetPasswordForm;
