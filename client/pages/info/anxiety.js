import { useContext } from "react";
import { UserContext } from "../../context";

const Stress = () => {
  const [state, setState] = useContext(UserContext);

  return (
    <div className="container-fluid py-5 bg-purplepage-color">
      <div className="row py-5 bg-default-image height-page">
        <div className="display-1 py-5 text-center">
          <h1 className="padding-page" style={{ color: "#000000" }}>
            ANXIETATE
          </h1>
        </div>
      </div>
      <br></br>
      <div class="about-heading-content lh-base">
        <div class="row">
          <div class="col-xl-8 col-lg-9 mx-auto">
            <div class="rounded p-5">
              <h1 className="display-5 text-center fst-italic ">
                Ce este anxietatea?
              </h1>
              <p style={{ textAlign: "justify" }}>
                Anxietatea este o emotie de baza, necesara supravietuirii, pe
                care fiecare dintre noi o experimenteaza de multe ori in viata.
                Este asociata cu reactia automata fight or flight (lupta sau
                fugi), care produce in organism schimbarile necesare pentru a
                putea lupta sau a fugi in cazul unui atac sau al unui pericol
                iminent. Insa atunci cand aceasta emotie se intensifica,
                atasandu-se de situatii sau persoane care nu prezinta un pericol
                real, sau cand devine omniprezenta, poate afecta puterea de
                concentrare, apetitul, somnul, relatiile sociale si calitatea
                vietii in general.
              </p>
              <p style={{ textAlign: "justify" }}>
                Putem descrie anxietatea ca fiind o stare de neliniste pe care o
                resimtim in tot corpul si care ne umple mintea cu indoieli,
                ingrijorari, obsesii si presupuneri negative referitoare la
                evenimente din viitor.{" "}
              </p>
              <h1 className="display-5 text-center fst-italic py-3">
                Cauzele anxietatii
              </h1>
              <p style={{ textAlign: "justify" }}>
                Anxietatea poate aparea la orice varsta si, de cele mai multe
                ori, este determinata de o combinatie de factori. Printre
                cauzele cele mai frecvente se numara predispozitia genetica,
                diverse dezechilibre in chimia creierului, istoricul familial,
                influenta sociala si experientele de viata precum schimbarile
                majore, depresia (inclusiv cea postnatala) sau bolile majore.
              </p>
              <p style={{ textAlign: "justify" }}>
                Un mediu de lucru stresant, un eveniment traumatizant,
                singuratatea, posibile abuzuri in copilarie, divortul
                parintilor, viata alaturi de un parinte alcoolic, toate acestea
                pot contribui la dezvoltarea unei tulburari de anxietate.{" "}
              </p>
              <h1 className="display-5 text-center fst-italic py-3">
                Impactul anxietatii asupra noastra
              </h1>
              <p style={{ textAlign: "justify" }}>
                Anxietatea poate avea efecte negative asupra sistemului
                imunitar, metabolic si cardiovascular si poate conduce la
                atrofia hipocampului – o structura a creierului implicata in
                memoria de lunga durata si in orientarea spatiala. De asemenea,
                tulburarile de anxietate elibereaza hormoni de stres precum
                cortizolul sau adrenalina in exces, iar expunerea pe termen lung
                la aceasta secretie crescuta de hormoni de stres poate fi
                daunatoare, atat asupra creierului, cat si asupra altor organe
                sau sisteme.
              </p>
              <h1 className="display-5 text-center fst-italic py-3">
                Simptomele anxietatii
              </h1>
              <p style={{ textAlign: "justify" }}>
                O stare anxioasa poate fi definita in mai multe feluri, astfel
                incat aceasta poate fi diferita de la o persoana la alta.
                Totusi, printre manifestarile care pot fi intalnite in anxietate
                se intalnesc:
              </p>
              <ul>
                <li>Transpiratii</li>
                <li>Palpitatii</li>
                <li>Hiperventilatie</li>
                <li>Stare de rau si tremurat</li>
                <li>Teama ca se va intampla ceva rau</li>
                <li>Senzatia ca esti coplesit</li>
                <li>
                  Senzatie de moarte iminenta - apare in timpul atacurilor de
                  panica
                </li>
                <li>Senzatie de lesin</li>
                <li>Tulburari de somn</li>
                <li>Cosmaruri</li>
                <li>Tulburari digestive - greata, varsaturi</li>
                <li>Tulburari de atentie si concentrare</li>
                <li>Lipsa de energie</li>
              </ul>
              <p style={{ textAlign: "justify" }}>
                Manifestarile sunt extrem de variate, iar combinatia a cat mai
                multe dintre ele creste suspiciunea de anxietate.
              </p>
              <h1 className="display-5 text-center fst-italic py-3">
                Modalitati de a combate anxietatea
              </h1>
              <div class="about-heading-content lh-base">
                <div class="row py-3">
                  <div class="rounded p-5 border border-dark bg-square-purple-color">
                    <p style={{ textAlign: "justify" }}>
                      <b>Identificarea cauzei anxietății</b> - există o mulțime
                      de motive pentru care cineva se poate simți anxios,
                      inclusiv: stres legat de muncă, probleme financiare,
                      probleme de sănătate, consumul de droguri, relații
                      sociale, traume.
                    </p>
                  </div>
                </div>
                <div class="row py-3">
                  <div class="rounded p-5 border border-dark bg-square-purple-color">
                    <p style={{ textAlign: "justify" }}>
                      <b>Alimentatia</b> - concentrarea asupra unei alimentatii
                      sanatoase este extrem de importanta. Aceasta cuprinde
                      utilizarea legumelor, fructelor, cerealelor si pestilor.
                    </p>
                  </div>
                </div>
                <div class="row py-3">
                  <div class="rounded p-5 border border-dark bg-square-purple-color">
                    <p style={{ textAlign: "justify" }}>
                      <b>Practicarea exercitiilor fizice in mod regulat</b> -
                      activitatea fizica imbunatateste starea de spirit,
                      promoveaza sanatatea si reduce stresul.
                    </p>
                  </div>
                </div>
                <div class="row py-3">
                  <div class="rounded p-5 border border-dark bg-square-purple-color">
                    <p style={{ textAlign: "justify" }}>
                      <b>Urmarea unui plan de somn optim</b> -somnul trebuie sa
                      fie o prioritate, iar acesta trebuie sa aiba o durata de
                      aproximativ 8 ore pe noapte.
                    </p>
                  </div>
                </div>
                <div class="row py-3">
                  <div class="rounded p-5 border border-dark bg-square-purple-color">
                    <p style={{ textAlign: "justify" }}>
                      <b>Reducerea stresului</b> - anumite tehnici de gestionare
                      a stresului si de relaxare pot fi extrem de folositoare.
                      Dintre exemple fac parte meditatia si yoga.
                    </p>
                  </div>
                </div>
                <div class="row py-3">
                  <div class="rounded p-5 border border-dark bg-square-purple-color">
                    <p style={{ textAlign: "justify" }}>
                      <b>Psihoterapia</b> - terapia cognitiv-comportamentala
                      este cea mai eficienta forma de psihoterapie pentru
                      tratarea anxietatii. In general, terapia cognitiv
                      comportamentala este un tratament pe termen scurt ce se
                      concentreaza pe invatarea abilitatilor specifice prin care
                      simptomele se pot imbunatati.
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
