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
            FURIE
          </h1>
        </div>
      </div>
      <br></br>
      <div class="about-heading-content lh-base">
        <div class="row">
          <div class="col-xl-8 col-lg-9 mx-auto">
            <div class="rounded p-5">
              <h1 className="display-5 text-center fst-italic ">
                Ce este furia?
              </h1>
              <p style={{ textAlign: "justify" }}>
                Furia este una dintre emoţiile de bază şi este o emotie
                frecventă in viata oamenilor. Poate fi definica ca un puternic
                sentiment de supărare, nemulțumire sau ostilitate. Furia este
                este o emoție umană normală, universală dar care poate fi
                scapata de sub control si ne poate conduce intr-un labirint al
                problemelor, atat in relatiile interpersonale, cat si la locul
                de munca.
              </p>
              <h1 className="display-5 text-center fst-italic py-3">
                Cauzele furiei
              </h1>
              <p style={{ textAlign: "justify" }}>
                Furia apare atunci când ne simtim nedreptățiți, cand apar
                dificultati in relatiile cu alte persoane, cand apar probleme
                neprevazute in viata de zi cu zi, la locul de munca, probleme
                financiare sau administrative. In multe situatii oamenii
                apelează la furie pentru a ascunde anumite emoții care îi fac să
                se simtă mai vulnerabili, precum tristețe, gelozie sau
                dezamăgire. În alte situatii, furia poate fi manifestarea unei
                probleme de bază de mult timp în urmă sau chiar din copilărie.
              </p>
              <h1 className="display-5 text-center fst-italic py-3">
                Impactul furiei asupra noastra
              </h1>
              <p style={{ textAlign: "justify" }}>
                Furia este unul dintrele cele mai dăunătoare emoții pentru corp,
                minte și inimă. Furia are impact și asupra problemelor de
                sănătate, în special în bolile cardiovasculare, deoarece atunci
                când ne enervăm, mușchii și articulațiile se încordează,
                circulația sanguină încetinește, iar activitatea cerebrală -
                precum și echilibrul la nivelul sistemului nervos, hormonal și
                cardiovascular - are de suferit.
              </p>
              <p style={{ textAlign: "justify" }}>
                Pe langa efectele pe care furia le poate avea asupra corpului
                uman, aceasta poate avea un efect si asupra persoanelor din jur
                deeoarece furia intensă exprimată agresiv se regăseşte în
                violenţa domestică, în stilurile de parentaj abuzive si în
                mediul familial disfuncţional.
              </p>
              <h1 className="display-5 text-center fst-italic py-3">
                Simptomele furiei
              </h1>
              <p style={{ textAlign: "justify" }}>
                In ceea ce priveste furia nu putem vorbi de simtome ci mai
                degraba de situatii care pot conduce la furie.
              </p>
              <p style={{ textAlign: "justify" }}>
                Cateva din aceste situatii sunt:
              </p>
              <ul>
                <li>Frustrarea</li>
                <li>Sentimentul de lipsa de putere</li>
                <li>Durerea atat sentimentala, cat si durerea fizica</li>
                <li>Hartuirea si bullying-ul</li>
                <li>Nedreptatea</li>
                <li>Epuizarea</li>
                <li>Ameninatrile</li>
                <li>Cererile sau criticile pe care nu le dorim</li>
              </ul>
              <h1 className="display-5 text-center fst-italic py-3">
                Modalitati de a combate furia
              </h1>
              <div class="container-fluid">
                <div class="row py-3">
                  <div class="rounded p-5 border border-dark bg-square-bluepage-color">
                    <p style={{ textAlign: "justify" }}>
                      <b>Relaxarea</b> - practicarea tehnicilor de relaxare sau
                      antrenamentul autogen pot ajuta la relexare si sunt o
                      modalitate de a face mai bine furiei.
                    </p>
                  </div>
                </div>
                <div class="row py-3">
                  <div class="rounded p-5 border border-dark bg-square-bluepage-color">
                    <p style={{ textAlign: "justify" }}>
                      <b>Practicarea regulata a exercitiilor fizice</b> -
                      exercițiile fizice determină eliberarea de
                      neurotransmițători cum ar fi dopamina și serotonina care
                      pot îmbunătăți starea de bine.
                    </p>
                  </div>
                </div>
                <div className="row py-3">
                  <div class="rounded p-5 border border-dark bg-square-bluepage-color">
                    <p style={{ textAlign: "justify" }}>
                      <b>Exprimarea emotiilor</b> - exprimarea emotiilor si
                      vorbitul liber despre ceea ce simtim cu prietenii, cei
                      dragi sau un specialist pot ajuta la calitatea vietii.
                    </p>
                  </div>
                </div>
                <div class="row py-3">
                  <div class="rounded p-5 border border-dark bg-square-bluepage-color">
                    <p style={{ textAlign: "justify" }}>
                      <b>Asertivitatea</b> -asertivitatea înseamnă
                      non-agresivitate. Exprimarea frustrarii intr-un mod
                      direct, insa neagresiv si formularea preocuparilor si
                      nevoilor clar si direct, fara sa ii ranim pe cei din jur
                      si fara sa sa ii controlam este o abordare mult mai buna
                      decat expremarea agresiva .
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
