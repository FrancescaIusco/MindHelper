import { useContext } from "react";
import { UserContext } from "../../context";

const Stress = () => {
  const [state, setState] = useContext(UserContext);

  return (
    <div className="container-fluid py-5 bg-purplepage-color">
      <div className="row py-5 bg-default-image height-page">
        <div className="display-1 py-5 text-center">
          <h1 className="padding-page" style={{ color: "#000000" }}>
            DEPRESIE
          </h1>
        </div>
      </div>
      <br></br>
      <div class="about-heading-content lh-base">
        <div class="row">
          <div class="col-xl-8 col-lg-9 mx-auto">
            <div class="rounded p-5">
              <h1 className="display-5 text-center fst-italic ">
                Ce este depresia?
              </h1>
              <p style={{ textAlign: "justify" }}>
                Depresia (tulburarea depresivă majoră) este o boală medicală
                comună, gravă, care afectează negativ modul în care vă simțiți,
                modul în care gândiți și cum acționați. Din fericire, este
                tratabilă. Depresia provoacă sentimente de tristețe și / sau
                pierderea interesului față de activitățile care vă bucurau
                cândva. Aceasta poate duce la o varietate de probleme emoționale
                și fizice. Totodată, poate reduce capacitatea unei persoane de a
                funcționa la locul de muncă, cât și acasă. Este foarte normal sa
                vă întrebați ce este depresia, pentru că doar așa puteți
                înțelege mai multe despre ce simțiți.
              </p>
              <h1 className="display-5 text-center fst-italic py-3">
                Cauzele depresiei
              </h1>
              <p style={{ textAlign: "justify" }}>
                Nu se stie care este cauza depresiei. Psihiatrii cred ca sunt
                implicati mai multi factori biologici, psihologici si sociali.
                Se crede ca depresia apare atunci cand exista o vulnerabilitate
                preexistenta care este activata de unul mai multe evenimente
                care apar in decursul vietii. In aproape un sfert din cazuri,
                primul episod depresiv se produce ca o reactie la un eveniment
                de viata negativ. Ulterior insa, episoadele se pot repeta fara
                nicio cauza aparenta.
              </p>
              <h1 className="display-5 text-center fst-italic py-3">
                Impactul depresiei asupra noastra
              </h1>
              <p style={{ textAlign: "justify" }}>
                Depresia poate afecta si sănătatea fizică. Un exemplu în acest
                sens este cresterea/pierderea in greutate, problemele
                gastrointestinale, dureri inexplicabile, inclusiv dureri
                articulare, musculare sau dureri de cap. Aceasta poate reduce
                motivația unei persoane de a face alegeri pozitive în ceea ce
                privește stilul de viață, ceea ce crește riscul apariției
                bolilor cardiovasculare (prin existența unei alimentații
                nesănătoase și a sedentarismului).
              </p>
              <h1 className="display-5 text-center fst-italic py-3">
                Simptomele depresiei
              </h1>
              <p style={{ textAlign: "justify" }}>
                Simptomele depresiei pot varia de la ușoare la severe și pot
                include:
              </p>
              <ul>
                <li>Stima de sine scazuta</li>
                <li>Intoleranta fata de ceilalti</li>
                <li>Lipsa motivatiei</li>
                <li>Dificultatea de a lua decizii</li>
                <li>Absenta bucuriei fata de viata</li>
                <li>O stare de spirit proasta, in mod continuu</li>
                <li>Pierderea interesului fata de activități cândva plăcute</li>
                <li>Insomnii sau prea mult somn</li>
                <li>Pierdere de energie sau oboseală crescută</li>
                <li>Senzația de lipsă de valoare</li>
                <li>Senzația de vinovăție</li>
                <li>
                  Dificultate în gândire, concentrare sau luare a deciziilor
                </li>
                <li>Ganduri suicidale si de vatamare fizica</li>
              </ul>
              <p style={{ textAlign: "justify" }}>
                Simptomele trebuie să dureze cel puțin două săptămâni pentru a
                defini o depresie. De asemenea, anumite afecțiuni medicale cum
                ar fi: probleme tiroidiene, o tumoare pe creier sau deficiență
                de vitamine, pot avea aceleasi simptome, de aceea trebuie sa
                excludem cauzele medicale generale, iar diagnosticul depresiei
                se poate pune numai de catre un psihiatru.
              </p>
              <h1 className="display-5 text-center fst-italic py-3">
                Modalitati de a combate depresia
              </h1>
              <div class="about-heading-content lh-base">
                <div class="row py-3">
                  <div class="rounded p-5 border border-dark bg-square-bluepage-color">
                    <p style={{ textAlign: "justify" }}>
                      <b>Modificarea stilului de viata</b> - exercitiile fizice
                      ajuta la reducerea moderata a simptomelor, dieta
                      sanatoasa, echilibrata si variata contribuie la
                      ameliorarea simptomelor. Similar, in cazul somnului de 8-9
                      ore pe noapte.
                    </p>
                  </div>
                </div>
                <div class="row py-3">
                  <div class="rounded p-5 border border-dark bg-square-bluepage-color">
                    <p style={{ textAlign: "justify" }}>
                      <b>Psihoterapia</b> - psihoterapia sau terapia prin
                      vorbire poate ajuta la ameliorarea unor simptome asociate
                      depresiei, mai ales in cazul unei imagini distorsionate
                      asupra lumii. Pentru formele usoare de depresie sunt
                      suficiente schimbarea stilului de viata si psihoterapia.
                    </p>
                  </div>
                </div>
                <div class="row py-3">
                  <div class="rounded p-5 border border-dark bg-square-bluepage-color">
                    <p style={{ textAlign: "justify" }}>
                      <b>Tratament medicamentos</b> - cele mai folosite
                      medicamente pentru tratarea depresiei sunt
                      antidepresivele. In general, medicatia este recomandata
                      pentru cazurile de depresie severa si cronica.
                    </p>
                  </div>
                </div>
                <div class="row py-3">
                  <div class="rounded p-5 border border-dark bg-square-bluepage-color">
                    <p style={{ textAlign: "justify" }}>
                      <b>Terapia cognitiv-comportamentala</b> - prin terapia
                      cognitiv-comportamentala se doreste schimbarea modului de
                      gandire autodistructiva, precum si a comportamentelor;
                      aceasta forma de terapie are la baza ideea ca gandurile ne
                      influenteaza comportamentul si ca schimbarea lor ajuta si
                      la modificarea comportamentului.
                    </p>
                  </div>
                </div>

                <div class="row py-3">
                  <div class="rounded p-5 border border-dark bg-square-bluepage-color">
                    <p style={{ textAlign: "justify" }}>
                      <b>Remedii naturiste</b> - sunatoarea si substantele
                      extrase din aceasta pot ajuta la ameliorarea simptomelor
                      depresiei, avand efecte asemanatoare antidepresivelor
                      usoare. De asemenea, frunzele de busuioc contin camfor si
                      uleiuri volatile si pot fi folosite pentru a atenua
                      depresia usoara.
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
