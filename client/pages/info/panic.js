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
            ATAC DE PANICA
          </h1>
        </div>
      </div>
      <br></br>
      <div class="about-heading-content lh-base">
        <div class="row">
          <div class="col-xl-8 col-lg-9 mx-auto">
            <div class="rounded p-5">
              <h1 className="display-5 text-center fst-italic ">
                Ce este atacul de panica?
              </h1>
              <p style={{ textAlign: "justify" }}>
                Atacul de panica este un episod de anxietate aparut brusc, in
                care simtiti teama intensa si disconfort fizic accentuat, desi
                nu sunteti expus niciunui pericol real sau nu exista o cauza
                evidenta. Un atac de panica poate fi infricosator, deoarece in
                momentele respective, puteti crede ca va pierdeti autocontrolul,
                iar unele simptome pot fi percepute drept un atac de cord sau
                deces iminent.
              </p>
              <p style={{ textAlign: "justify" }}>
                Multe persoane au unul-doua atacuri de panica de-a lungul
                vietii, iar problema dispare, probabil cand situatia stresanta
                se incheie. Insa, daca te confrunti cu atacuri de panica
                recurente, neasteptate si ai perioade lungi de teama constanta
                sau de teama a unui alt atac, probabil ca ai afectiunea denumita
                tulburare de panica.
              </p>
              <h1 className="display-5 text-center fst-italic py-3">
                Cauzele atacurilor de panica
              </h1>
              <p style={{ textAlign: "justify" }}>
                Factorii de risc pot sa aiba legatura cu temperamentul (de
                exemplu, neuroticism si sensibilitate la anxietate), mediul
                inconjurator (abuzurile din copilarie etc.) sau poate fi vorba
                despre factori genetici si fiziologici. Cauza exacta a
                tulburarii de panica este necunoscuta, dar la fel ca in cazul
                multor tulburari de anxietate, aceasta se mosteneste. De fapt,
                este deseori intalnita in combinatie cu alte tulburari
                ereditare, cum ar fi tulburarea bipolara si alcoolismul.
              </p>
              <h1 className="display-5 text-center fst-italic py-3">
                Impactul atacurilor de panica asupra noastra
              </h1>
              <p style={{ textAlign: "justify" }}>
                Daca nu sunt tratate, aceste episoade si tulburarea de panica
                pot afecta aproape toate aspectele vietii. Puteti sfarsi prin a
                va teme atat de mult de perspectiva unui atac de panica iminent,
                incat sa traiti intr-o stare de frica permanenta, ceea ce va
                poate ruina viata.
              </p>
              <p style={{ textAlign: "justify" }}>
                La unele persoane, tulburarea de panica se poate manifesta prin
                agorafobie (teama de spatii deschise), acestea evitand locurile
                sau situatiile care le provoaca anxietate, deoarece se tem ca nu
                vor putea sa gestioneze un eventual atac de panica sau sa
                primeasca ajutor in cazul aparitiei unui astfel de episod, ori
                pot sa devina dependente de altii pentru a putea iesi din casa.
              </p>
              <h1 className="display-5 text-center fst-italic py-3">
                Simptomele atacului de panica
              </h1>
              <p style={{ textAlign: "justify" }}>
                De obicei, un atac de panica incepe brusc, fara semnale de
                alarma. Se poate produce oricand – cand conduci, cand esti la
                mall, cand esti pe punctul de a adormi sau cand te afli intr-o
                intalnire de afaceri. Atacurile de panica pot fi ocazionale sau
                frecvente. Atacurile de panica pot avea multe variatii, insa
                simptomele pot atinge apogeul in decurs de cateva minute. Dupa
                un atac de panica, te poti simti obosit si epuizat.
              </p>
              <p style={{ textAlign: "justify" }}>
                In general, atacul de panica include unele semne sau simptome.
                Acestea pot fi:
              </p>
              <ul>
                <li>Senzatia de pericol iminent</li>
                <li>Teama de a pierde controlul sau teama de moarte</li>
                <li>
                  Palpitatii, ritm cardiac rapid (inima bate repede, sau cu un
                  ritm alterat)
                </li>
                <li>Transpiratie</li>
                <li>Tremuraturi</li>
                <li>Durere in piept</li>
                <li>Dificultati in respiratie </li>
                <li>Senzatia de detasare de realitate</li>
              </ul>
              <h1 className="display-5 text-center fst-italic py-3">
                Modalitati de a combate furia
              </h1>
              <div class="container-fluid">
                <div class="row py-3">
                  <div class="rounded p-5 border border-dark bg-square-purple-color">
                    <p style={{ textAlign: "justify" }}>
                      <b>Inspirati profund si lent</b> - cand respiratia vi se
                      intensifica, incercati sa va concentrati asupra fiecarei
                      inspiratii si expiratii. Pe masura ce expirati, numarati
                      inapoi de la 4 la 1. Repetati pana cand respiratia revine
                      treptat la normal.
                    </p>
                  </div>
                </div>
                <div className="row py-3">
                  <div class="rounded p-5 border border-dark bg-square-purple-color">
                    <p style={{ textAlign: "justify" }}>
                      <b>Identificati simptomele si acceptati-le ca atare</b> -
                      daca treceti deja printr-un episod de anxietate sau atac
                      de panica, stiti ca este deosebit de dificil. Amintiti-va
                      ca simptomele vor trece si ca in curand va veti simti bine
                      din nou.
                    </p>
                  </div>
                </div>
                <div class="row py-3">
                  <div class="rounded p-5 border border-dark bg-square-purple-color">
                    <p style={{ textAlign: "justify" }}>
                      <b>Apelati la tehnici de relaxare</b> - printre acestea,
                      se numara imaginile terapeutice ghidate, aromoterapia si
                      relaxarea musculara. Daca aveti simptome de anxietate sau
                      un atac de panica, incercati sa desfasurati o activitate
                      pe care o considerati relaxanta. Inchideti ochii, faceti o
                      baie sau folositi ulei esential de lavanda, care poate
                      avea efecte linistitoare.
                    </p>
                  </div>
                </div>
                <div class="row py-3">
                  <div class="rounded p-5 border border-dark bg-square-purple-color">
                    <p style={{ textAlign: "justify" }}>
                      <b>Consiliere si psihoterapie</b> - cand vine vorba despre
                      terapii pentru anxietate si tulburari de panica, printre
                      acestea se numara urmatoarele variante: Terapie cognitiv
                      comportamentala, Terapie cognitiva, Terapie prin expunere,
                      Tehnici de relaxare.
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
