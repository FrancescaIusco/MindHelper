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
            BIPOLARITATE
          </h1>
        </div>
      </div>
      <br></br>
      <div class="about-heading-content lh-base">
        <div class="row">
          <div class="col-xl-8 col-lg-9 mx-auto">
            <div class="rounded p-5">
              <h1 className="display-5 text-center fst-italic ">
                Ce este bipolaritatea?
              </h1>
              <p style={{ textAlign: "justify" }}>
                Tulburarea bipolara este o afectiune mintala ce se manifesta
                prin schimbarea brusca a dispozitiei, de aici si denumirea de
                "bipolar". Persoana afectata oscileaza intre manie si depresie,
                iar ambele stari au durate variabile. In intervale scurte de
                timp, persoanele care dezvolta tulburare bipolara, trec de la
                lipsa de energie la un nivel ridical al energiei, de la letargie
                la euforie, de la stima de sine scazuta la grandomanie,
                penduland intre doua extreme.
              </p>
              <p style={{ textAlign: "justify" }}>
                In functie de gradul de severitate si de durata episoadelor
                maniacale-depresive, se disting mai multe tipuri de tulburare
                bipolara: tulburare bipolara de tip I, tip II, ciclotimica (cea
                mai putin severa forma de tulburare bipolara), rapid cycling si
                mixta.
              </p>
              <h1 className="display-5 text-center fst-italic py-3">
                Cauzele bipolaritatii
              </h1>
              <p style={{ textAlign: "justify" }}>
                Cauzele responsabile de aparitia tulburarii bipolare nu au fost
                explicate pe deplin, insa este considerat faptul ca factorii
                genetici si dezechilibrele chimice care includ activitatea
                serotoninei, dopaminei si noradrenalinei la nivel cerebral,
                favorizeaza aparitia simptomatologiei specifice bolii. Cauzele
                genetice si biologice ale tulburarii bipolare pot fi activate de
                factori declansatori precum: Traume psihice si emotionale:
                decesul unei persoane apropiate, conflicte armate in zone de
                razboi, abuzul fizic, sexual sau emotional, stresul profesional.
              </p>
              <h1 className="display-5 text-center fst-italic py-3">
                Impactul furiei asupra noastra
              </h1>
              <p style={{ textAlign: "justify" }}>
                Netratata, tulburarea bipolara se poate complica cu probleme
                grave care afecteaza orice domeniu al vietii, cum ar fi: Abuzul
                de droguri sau alcool, ganduri suicidare si tentative de
                sinucidere, probleme cauzate de incalcarea legii, probleme
                financiare, performanta scazuta la scoala sau locul de munca,
                deteriorarea relatiilor cu ceilalti
              </p>

              <h1 className="display-5 text-center fst-italic py-3">
                Simptomele bipolaritatii
              </h1>
              <p style={{ textAlign: "justify" }}>
                Tabloul clinic al pacientilor cu tulburare bipolara este
                alcatuit din simptome care variaza in functie de fazele bolii
                depresive, respectiv maniacale, dupa cum urmeaza:
              </p>
              <p style={{ textAlign: "justify" }}>
                Faza depresiva este caracterizata de:
              </p>
              <ul>
                <li>Scaderea interesului sau placerii</li>
                <li>Stare de tristete profunda</li>
                <li>Oboseala persistenta</li>
                <li>Lipsa poftei de mancare</li>
                <li>Tulburari de somn</li>
                <li>Pierdere neintentionata in greutate</li>
                <li>Dificultate de concentrare si de rationare</li>
                <li>Tendinte suicidare in faza depresiva majora.</li>
              </ul>
              <p style={{ textAlign: "justify" }}>
                Faza maniacala se manifesta prin:
              </p>
              <ul>
                <li>Nivel ridicat de energie</li>
                <li>Agitatie extrema</li>
                <li>Nivel ridicat al stimei de sine</li>
                <li>Diminuarea nevoii de somn fara aparitia oboselii</li>
                <li>Tulburari de somn</li>
                <li>
                  Implicarea in numeroase activitati fara capacitatea de
                  finalizare a acestora
                </li>
              </ul>
              <p style={{ textAlign: "justify" }}>
                Faza mixta reprezinta episoade de schimbare a dispozitiei care
                includ atat simptome maniacale, cat si depresive.
              </p>

              <h1 className="display-5 text-center fst-italic py-3">
                Modalitati de a combate furia
              </h1>
              <div class="container-fluid">
                <div class="row py-3">
                  <div class="rounded p-5 border border-dark bg-square-bluepage-color">
                    <p style={{ textAlign: "justify" }}>
                      Tulburarea bipolara nu poate fi prevenita, insa
                      tratamentul initiat cat mai precoce poate preveni
                      agravarea simptomelor.
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
