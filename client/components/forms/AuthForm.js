import { SyncOutlined } from "@ant-design/icons";

const AuthForm = ({
  handleSubmit,
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  secret,
  setSecret,
  loading,
  page,
  about,
  setAbout,
}) => (
  <form onSubmit={handleSubmit}>
    {page !== "login" && (
      <div className="form-group p-2">
        <small>
          <label className="text-muted">Nume de utilizator</label>
        </small>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Introduceti numele de utilizator"
        />
      </div>
    )}

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
        disabled={page === "profile"}
      />
    </div>

    {page !== "profile" && (
      <div className="form-group p-2">
        <small>
          <label className="text-muted">Parola</label>
        </small>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
          placeholder="Introduceti parola"
        />
      </div>
    )}
    {page !== "login" && page !== "profile" && (
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

          <small className="form-text text-muted">
            Puteți folosi acest lucru pentru a vă reseta parola
          </small>
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
    )}
    {page === "profile" && (
      <div className="form-group p-2">
        <small>
          <label className="text-muted">Desspre tine</label>
        </small>
        <input
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Scrie ceva despre tine"
        />
      </div>
    )}

    {page !== "profile" && (
      <div className="form-group p-2">
        <button
          disabled={
            page === "login"
              ? !email || !password || loading
              : !username || !email || !password || !secret || loading
          }
          className="btn btn-primary col-12"
        >
          {loading ? <SyncOutlined spin className="py-1" /> : "Submit"}
        </button>
      </div>
    )}
    {page === "profile" && (
      <div className="form-group p-2">
        <button className="btn btn-primary col-12">
          {loading ? (
            <SyncOutlined spin className="py-1" />
          ) : (
            "Actualizeaza profilul"
          )}
        </button>
      </div>
    )}
  </form>
);

export default AuthForm;
