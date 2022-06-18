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
            MANCAT COMPULSIV
          </h1>
        </div>
      </div>
      <br></br>
      <div class="about-heading-content lh-base">
        <div class="row">
          <div class="col-xl-8 col-lg-9 mx-auto">
            <div class="rounded p-5">
              <h1 className="display-5 text-center fst-italic ">
                Ce este mancatul compulsiv?
              </h1>
              <p style={{ textAlign: "justify" }}>
                Mancatul compulsiv este o tulburare caracterizata prin consumul
                incontrolabil de hrana prin care bolnavul incearca sa faca fata
                stresului si altor emotii negative, ca apoi sa fie cuprins de un
                sentiment profund de vinovatie.
              </p>
              <p style={{ textAlign: "justify" }}>
                Mâncatul compulsiv este cel mai întâlnit tip de tulburare de
                alimentație și afectează aproape 2% din populația întregii lumi,
                mai ales tinerii, deși rămâne o boală prea puțin recunoscută.
              </p>
              <h1 className="display-5 text-center fst-italic py-3">
                Cauzele mancatului compulsiv
              </h1>
              <p style={{ textAlign: "justify" }}>
                Cauzele mâncatului compulsiv nu sunt pe deplin înțelese, dar
                tulburarea este foarte probabilă din cauza unor factori de risc
                variați.
                <br />
                Factorii genetici - există dovezi solide care arată că
                tulburarea este moștenită în familie.
                <br />
                Sexul - mâncatul compulsiv este mai frecvent întâlnit la femei
                decât la bărbați.
                <br />
                Modificările apărute în creier - persoanele care suferă de binge
                eating ar putea avea anumite modificări în structura creierului,
                care rezultă într-un grad redus de autocontrol.
                <br />
                Dimensiunea corpului - aproape 50% dintre persoanele cu această
                tulburare sunt obeze, iar 25-50% dintre pacienții care optează
                pentru chirurgie pentru a slăbi întrunesc criteriile pentru
                mâncatul compulsiv.
                <br />
                Traume emoționale - s-a descoperit că evenimentele stresante din
                viață precum abuzul, decesul, separarea de un membru al familiei
                sau un accident rutier ar fi factori de risc pentru mâncatul
                compulsiv.
              </p>
              <h1 className="display-5 text-center fst-italic py-3">
                Impactul mancatului compulsiv asupra noastra
              </h1>
              <p style={{ textAlign: "justify" }}>
                Mancatul emotional poate fi debutul unor tulburari alimentare,
                cum sunt anorexia (refuzul patologic de a manca) si bulimia
                (stare manifestata prin foame excesiva, continua), care apar
                tocmai in contextul acestui sentiment de vinovatie pe fondul
                excesului alimentar.
                <br />
                Alimentatia nesanatoasa favorizeaza aparitia diabetului de tip
                II si a presiunii arteriale crescute. De asemenea, poate avea ca
                rezultat cresterea nivelului seric al colesterolului si/sau a
                glicemiei.
                <br />
                Nu in cele din urma, pe lista complicatiilor se mai afla
                manifestari intestinale si probleme legate de tranzitul
                intestinal, dar si manifestari hepatice si biliare, tocmai ca
                urmare a unei alimentatii inadecvate, bogate in calorii si
                lipsite de nutrienti.
                <br />
                Consumul de alimente nesanatoase conduce la perturbarea
                sistemului imunitar, la aparitia anemiei, a oboselii permanente,
                insomniei, deficitului de vitamine si minerale.
              </p>

              <h1 className="display-5 text-center fst-italic py-3">
                Simptomele mancatului compulsiv
              </h1>
              <p style={{ textAlign: "justify" }}>
                În principiu, se poate vorbi despre existența tulburării
                mâncatului compulsiv în cazul în care episoadele se repetă cel
                puțin o dată pe săptămână, pe durata a minimum trei luni.
              </p>
              <p style={{ textAlign: "justify" }}>
                Semnele specifice mâncatului compulsiv:
              </p>
              <ul>
                <li>
                  episoadele de mâncat compulsiv se repetă de-a lungului unui
                  interval relativ scurt de timp
                </li>
                <li>
                  persoana mănâncă lacom, mult mai repede decât ar mânca în mod
                  normal
                </li>
                <li>
                  persoana mănâncă mult, până când intervine o senzație de
                  disconfort, din cauza preaplinului
                </li>
                <li>
                  persoana afectată mănâncă mult chiar și atunci când nu îi este
                  foame
                </li>
                <li>
                  în timpul mâncatului compulsiv, persoana resimte plăcere,
                  siguranță, se simte alinată
                </li>
                <li>
                  în urma episoadelor de mâncat compulsiv, apare un sentiment de
                  vinovăție și autodispreț
                </li>
                <li>
                  persoana se simte constant tristă și deprimată din cauza
                  abuzurilor alimentare
                </li>
              </ul>
              <h1 className="display-5 text-center fst-italic py-3">
                Modalitati de a combate mancatul compulsiv
              </h1>
              <div class="container-fluid">
                <div class="row py-3">
                  <div class="rounded p-5 border border-dark bg-square-purple-color">
                    <p style={{ textAlign: "justify" }}>
                      <b>Adoptarea unor mese regulate și organizate</b> -
                      omiterea unei mese contribuie la creșterea senzației de
                      foame de-a lungul zilei, existând riscul unui episod de
                      mâncat compulsiv cu prima ocazie în care vine ora mesei.
                    </p>
                  </div>
                </div>
                <div class="row py-3">
                  <div class="rounded p-5 border border-dark bg-square-purple-color">
                    <p style={{ textAlign: "justify" }}>
                      <b>Inlăturarea tentațiilor</b> - e necesar ca ispitele
                      alimentare să fie ascunse vederii, în locuri mai greu
                      accesibile, astfel încât să uitați de ele.
                    </p>
                  </div>
                </div>
                <div className="row py-3">
                  <div class="rounded p-5 border border-dark bg-square-purple-color">
                    <p style={{ textAlign: "justify" }}>
                      <b>Evitarea cu orice preț dietele</b> - ideea de dietă
                      este strâns legată de cea de restricție. Restricțiile
                      generează frustrări și pofte intense ce pot regula în
                      episoade de mâncat compulsiv.
                    </p>
                  </div>
                </div>
                <div class="row py-3">
                  <div class="rounded p-5 border border-dark bg-square-purple-color">
                    <p style={{ textAlign: "justify" }}>
                      <b>Planificarea cumpărăturilor și a meselor</b> - ideea
                      este de a cumpăra conștient, odată pe săptămână,
                      alimentele necesare și de a planifica în avans mesele
                      pentru a doua zi, pentru a nu exista tendința de a recurge
                      la soluții rapide și nesănătoase, dar foarte gustoase și
                      tentante.
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
