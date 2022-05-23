import Link from "next/link";
import { UserContext } from "../context";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

const Nav = () => {
  const [currentUser, setCurrentUser] = useState("");
  const [state, setState] = useContext(UserContext);

  useEffect(() => {
    process.browser && setCurrentUser(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  const router = useRouter();

  const logout = () => {
    window.localStorage.removeItem("auth");
    setState(null);
    router.push("/login");
  };

  return (
    <nav>
      {state !== null ? (
        <nav className="nav p-2  d-flex justify-content-between fixed-top nav-bar-color">
          <Link href="/">
            <a
              className={`nav-link logo ${currentUser === "/" && "active"}`}
              style={{ color: "#f2ebe5" }}
            >
              Mind helper
            </a>
          </Link>
          <>
            <div className="dropdown ">
              <a
                className="btn dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "#f2ebe5" }}
              >
                {state && state.user && state.user.username}
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link href="/user/profile">
                    <a
                      className={`nav-link dropdown-item ${
                        currentUser === "/user/profile" && "active"
                      }`}
                      style={{ color: "#344648" }}
                    >
                      Profil
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/chat/chat">
                    <a
                      className={`nav-link dropdown-item ${
                        currentUser === "/chat/chat" && "active"
                      }`}
                      style={{ color: "#344648" }}
                    >
                      Chat
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/user/questionandanswer">
                    <a
                      className={`nav-link dropdown-item ${
                        currentUser === "/user/questionandanswer" && "active"
                      }`}
                      style={{ color: "#344648" }}
                    >
                      Intrebari si raspunsuri
                    </a>
                  </Link>
                </li>
                <li>
                  <a
                    onClick={logout}
                    className="nav-link dropdown-item"
                    style={{ color: "#344648" }}
                  >
                    Deconectare
                  </a>
                </li>
              </ul>
            </div>
          </>
        </nav>
      ) : (
        <>
          <nav className="nav p-2  d-flex justify-content-center fixed-top nav-bar-color">
            <Link href="/">
              <a
                className={`nav-link logo ${currentUser === "/" && "active"}`}
                style={{ color: "#f2ebe5" }}
              >
                Mind helper
              </a>
            </Link>
            <Link href="/login">
              <a
                className={`nav-link ${currentUser === "/login" && "active"}`}
                style={{ color: "#f2ebe5" }}
              >
                Autentificare
              </a>
            </Link>
            <Link href="/register">
              <a
                className={`nav-link  ${
                  currentUser === "/register" && "active"
                }`}
                style={{ color: "#f2ebe5" }}
              >
                Inregistrare
              </a>
            </Link>
          </nav>
        </>
      )}
    </nav>
  );
};

export default Nav;
