import { useContext, useState } from "react";
import { UserContext } from "../context";
import Link from "next/link";
import PostForm from "../components/forms/PostForm";
import { useRouter } from "next/router";
import axios from "axios";
import UserRoute from "../components/routes/UserRoute";
import { toast } from "react-toastify";

const Home = () => {
  const [state, setState] = useContext(UserContext);
  //state
  const [content, setContent] = useState("");
  //route
  const router = useRouter();

  const postSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/create-question", { content });
      console.log("response ", data);
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("Intrebare postata");
        setContent("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-fluid py-5 bg-purplepage-color">
      <div className="row py-5 bg-default-image height-page">
        <div className="display-1 pt-5 text-center">
          <h1 style={{ color: "#000000" }}>Meriti sa fii fericit!</h1>
          <h3
            className="display-5 text-center fst-italic "
            style={{ color: "#291d2c" }}
          >
            Sa nu uiti niciodata asta!
          </h3>
        </div>
      </div>
      <div className="">
        {state === null && (
          <>
            <div className="offset-md-5 col-md-7 p-lg-5 mx-auto my-5 text-center lead">
              <div className="fw-bolder">
                MindHelper, o rețea de socializare pentru sănătatea ta mintala.
                <br />
                Daca doresti sa te alaturi comunitatii MindHelper
                <br />
              </div>
              <div className="btn btn-outline-secondary fw-semibold">
                <Link href="/register">Inregistreaza-te</Link>
              </div>
              <div className="py-3">
                Daca simti nevoie de a vorbi cu cineva sau ai nevoie de un sfat
                nu ezita sa ni te alaturi. In aceasta comunitate vei intalni
                oameni cu care poti impartasi orice problema legata de sanatatea
                ta.
              </div>
            </div>
          </>
        )}
      </div>
      <div class="row">
        <div class="col-xl-8 col-lg-9 mx-auto p-lg-5">
          <div class="rounded">
            <h2 className="display-5 text-center fst-italic ">
              Ce este sanatatea mintala?
            </h2>
            <p style={{ textAlign: "justify" }}>
              Sanatatea mintala este esentiala pentru starea de bine generala si
              este la fel de importanta ca sanatatea fizica. Sanatatea fizica si
              cea mintala sunt strans legate intre ele. Nu exista sanatate fara
              sanatate mintala.
            </p>
            <h2 className="display-5 text-center fst-italic py-3">
              Beneficiile unei sanatati mintale pozitive
            </h2>
            <p style={{ textAlign: "justify" }}>
              O sanatate mintala pozitiva permite oamenilor:
            </p>
            <ul>
              <li>Sa isi realizeze intregul lor potential</li>
              <li>Sa inteleaga scopul si sensul actiunilor lor</li>
              <li>Sa construiasca cu usurinta relatii sanatoase cu ceilalti</li>
              <li>Sa lucreze productiv si cu folos</li>
              <li>Sa mentina un echilibru intre munca si relaxare</li>
              <li>Sa aiba un sentiment de multumire si incredere in sine</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="offset-md-1">
        <div className="row">
          <h2 className="display-5 text-center fst-italic ">
            Cateva afectiuni care pot afecta viata oricui
          </h2>
          <div className="col py-3">
            <button className="btn bg-stress-image mx-3">
              <Link href="/info/stress">
                <a>
                  <div className="py-5 text-center text-color-square fw-bold fs-2">
                    Stres
                  </div>
                </a>
              </Link>
            </button>
          </div>
          <div className="col py-3">
            <button className="btn bg-depression-image mx-3">
              <Link href="/info/depression">
                <a>
                  <div className="col py-5 text-center text-color-square fw-bold fs-2">
                    Depresie
                  </div>
                </a>
              </Link>
            </button>
          </div>
          <div className="col py-3">
            <button className="btn bg-anxiety-image mx-3">
              <Link href="/info/anxiety">
                <a>
                  <div className=" py-5 text-center text-color-square fw-bold fs-2">
                    Anxietate
                  </div>
                </a>
              </Link>
            </button>
          </div>
          <div className="col py-3">
            <button className="btn bg-angry-image mx-3">
              <Link href="/info/angry">
                <a>
                  <div className=" py-5 text-center text-color-square fw-bold fs-2">
                    Furie
                  </div>
                </a>
              </Link>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col py-3">
            <button className="btn bg-bipolar-image  mx-3">
              <Link href="/info/bipolar">
                <a>
                  <div className="col py-5 text-center text-color-square fw-bold fs-2">
                    Bipolaritate
                  </div>
                </a>
              </Link>
            </button>
          </div>
          <div className="col py-3">
            <button className="btn bg-panic-image mx-3">
              <Link href="/info/panic">
                <a>
                  <div className=" py-3 text-center text-color-square fw-bold fs-2">
                    Atac de panica
                  </div>
                </a>
              </Link>
            </button>
          </div>
          <div className="col py-3">
            <button className="btn bg-bindge-image mx-3">
              <Link href="/info/binge">
                <a>
                  <div className=" py-3 text-center text-color-square fw-bold fs-2">
                    Mancat compulsiv
                  </div>
                </a>
              </Link>
            </button>
          </div>
          <div className="col py-3">
            <button className="btn bg-bulimia-image mx-3">
              <Link href="/info/bulimia">
                <a>
                  <div className="py-5 text-center text-color-square fw-bold fs-2">
                    Bulimie
                  </div>
                </a>
              </Link>
            </button>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Home;
