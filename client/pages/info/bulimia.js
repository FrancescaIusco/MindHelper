import { useContext } from "react";
import { UserContext } from "../../context";
import heart from "../../node_modules/bootstrap-icons/icons/heart.svg";

const Stress = () => {
  const [state, setState] = useContext(UserContext);

  return (
    <div className="container-fluid py-5 bg-purplepage-color">
      <div className="row py-5 bg-default-image height-page">
        <div className="display-1 py-5 text-center">
          <h1 className="padding-page" style={{ color: "#000000" }}>
            BULIMIA
          </h1>
        </div>
      </div>
      <br></br>
      <div class="about-heading-content lh-base">
        <div class="row">
          <div class="col-xl-8 col-lg-9 mx-auto">
            <div class="rounded p-5">
              <h1 className="display-5 text-center fst-italic ">
                Ce este bulimia?
              </h1>
              <p style={{ textAlign: "justify" }}>
                Bulimia nervoasa, denumita frecvent bulimie, este o tulburare de
                alimentatie serioasa, potential fatala. Persoanele care sufera
                de bulimie pot sa manance, de obicei pe ascuns, in mod
                compulsiv, cantitati mari de mancare, pierzand controlul asupra
                alimentelor ingerate, pentru ca ulterior sa incerce sa scape de
                caloriile in exces in moduri nesanatoase. Pentru a scapa de
                calorii si a preveni ingrasarea, persoanele cu bulimie apeleaza
                la diferite metode. De exemplu, isi pot induce regulat voma sau
                pot folosi intr-un mod inadecvat laxative, suplimente de slabit,
                diuretice sau clisme.
              </p>
              <h1 className="display-5 text-center fst-italic py-3">
                Cauzele bulimiei
              </h1>
              <p style={{ textAlign: "justify" }}>
                Nu se cunoaste cauza exacta a bulimiei. Exista numerosi factori
                care pot sa aiba un rol in dezvoltarea tulburarilor alimentare,
                intre care cei genetici, biologici, sanatatea emotionala,
                asteptarile societatii si alte aspecte.
              </p>
              <h1 className="display-5 text-center fst-italic py-3">
                Impactul bulimiei asupra noastra
              </h1>
              <p style={{ textAlign: "justify" }}>
                Bulimia poate afecta mai multe parti ale corpului, poate afecta
                dintii deoarece acizii puternici din stomac pot dauna gingiilor
                si smaltului dentar cu timpul, ceea ce poate duce la
                sensitivitatea dintiilor si aparitia cariilor. Poate afecta si
                tractul digestiv deoarece varsaturile autoprovocate pot dauna
                intregului sistem digestiv. Poate afecta si sanatatea
                cardiovasculara si endocrina printr-un ritm cardiac scazut,
                presiune vasculara scazuta, dificultati in reglarea temperaturii
                corpului si multe altele.
              </p>

              <h1 className="display-5 text-center fst-italic py-3">
                Simptomele bulimiei
              </h1>
              <p style={{ textAlign: "justify" }}>
                Semnele si simptomele bulimiei pot sa includa:
              </p>
              <ul>
                <li>Esti preocupat de forma corpului si de greutate</li>
                <li>Traiesti cu teama de a te ingrasa</li>
                <li>
                  Ai episoade repetate in care mananci cantitati mari de mancare
                  la o singura masa
                </li>
                <li>
                  Simti ca pierzi controlul in timpul alimentatiei – nu te poti
                  opri sau nu poti controla ceea ce mananci
                </li>
                <li>
                  Te fortezi sa vomiti sau faci sport in exces pentru a nu te
                  ingrasa dupa ce mananci abuziv
                </li>
                <li>
                  Folosesti laxative, diuretice sau clisme dupa ce mananci si
                  cand nu sunt necesare
                </li>
              </ul>
              <h1 className="display-5 text-center fst-italic py-3">
                Modalitati de a combate bulimia
              </h1>
              <div class="container-fluid">
                <div class="row py-3">
                  <div class="rounded p-5 border border-dark bg-square-purple-color">
                    <p style={{ textAlign: "justify" }}>
                      <b>Descurajeaza dietele</b> - mai ales daca implica un
                      comportament nesanatos, precum postul, folosirea
                      suplimentelor de slabit, laxativele sau voma autoindusa.
                    </p>
                  </div>
                </div>
                <div class="row py-3">
                  <div class="rounded p-5 border border-dark bg-square-purple-color">
                    <p style={{ textAlign: "justify" }}>
                      <b>Tine-te de planul de tratamen</b> - nu sari peste
                      sedintele de terapie si nici peste mese, chiar daca te fac
                      sa resimti un disconfort.
                    </p>
                  </div>
                </div>
                <div className="row py-3">
                  <div class="rounded p-5 border border-dark bg-square-purple-color">
                    <p style={{ textAlign: "justify" }}>
                      <b>Fii prudenta in privinta exercitiilor fizice</b> - cere
                      sfatul specialistului privind activitatea fizica potrivita
                      pentru tine.
                    </p>
                  </div>
                </div>
                <div class="row py-3">
                  <div class="rounded p-5 border border-dark bg-square-purple-color">
                    <p style={{ textAlign: "justify" }}>
                      <b>Alimenteaza-te adecvat</b> - vorbeste cu medicul
                      nutritionist in legatura cu suplimentele potrivite de
                      vitamine si minerale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stress;
