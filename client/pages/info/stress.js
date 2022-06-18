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
            STRES
          </h1>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-8 col-lg-9 mx-auto">
          <div class="rounded p-5">
            <h1 className="display-5 text-center fst-italic ">
              Ce este stresul?
            </h1>
            <p style={{ textAlign: "justify" }}>
              Stresul este modul prin care creierul și corpul nostru răspund
              cerințelor. Orice tip de eveniment poate provoca stres, indiferent
              dacă evenimentul este pozitiv sau negativ. Aceste este o
              componenta inevitabila a vietii. Daca invatam cum sa-l gestionezam
              cu succes, ne poate imbunatati in mod semnificativ sanatatea
              mentala si fizica.
            </p>
            <h1 className="display-5 text-center fst-italic py-3">
              Cauzele stresului
            </h1>
            <p style={{ textAlign: "justify" }}>
              Fiecare din noi ne confruntam cu situatii de stres, insa fiecare
              foloseste exemple diferite pentru a-l descrie. O persoana poate
              defininii stresul ca fiind traficul bara la bara, un termen strans
              de executie a unui proiect, o boala care iti provoaca griji sau o
              cearta cu partenerul. O alta persoana il poate defini intr-un alt
              mod: o relatie care se degradeaza, necesitatea de a ingriji o
              persoana in suferinta sau o atentionare prin e-mail care anunta
              inca o factura neplatita. Insa toate aceste exemple pot fi
              etichetate drept factori de stres - adica diverse tipuri de
              evenimente si circumstante stresante.
            </p>
            <h1 className="display-5 text-center fst-italic py-3">
              Impactul stresului asupra noastra
            </h1>
            <p style={{ textAlign: "justify" }}>
              Stresul afectează mult mai mult decât felul în care ne simțim. Ne
              poate afecta și sănătatea fizică. Un exemplu în acest sens sunt
              migrenele sau „durerile de cap de stres”. Stresul ne poate afecta,
              de asemenea, apetitul, somnul, creșterea tensiunii arteriale și
              multe altele. Stresul pe termen lung sau cronic poate afecta
              sistemul nostru cardiovascular, imunitar, digestiv și
              gastro-intestinal.
            </p>
            <h1 className="display-5 text-center fst-italic py-3">
              Simptomele stresului
            </h1>
            <p style={{ textAlign: "justify" }}>
              Stresul afectează mult mai mult decât felul în care ne simțim. Ne
              poate afecta și sănătatea fizică, drept urmare stresul se
              manifesta atat prin simptome fizice, cat si psihologice.
            </p>
            <p style={{ textAlign: "justify" }}>
              Simptomele stresului pot varia în severitate, iar unele dintre
              cele mai frecvente includ:
            </p>
            <ul>
              <li>Energie scazuta</li>
              <li>Probleme de concentrare</li>
              <li>Oboseala</li>
              <li>Dureri generale</li>
              <li>Iritabilitate</li>
              <li>Sentimente de neputinta</li>
              <li>Dureri de cap</li>
              <li>Probleme digestive</li>
            </ul>
            <h1 className="display-5 text-center fst-italic py-3">
              Modalitati de a combate stresul
            </h1>
            <div class="container-fluid">
              <div class="row py-3">
                <div class="rounded p-5 border border-dark bg-square-purple-color">
                  <p style={{ textAlign: "justify" }}>
                    <b>Identificarea factorului stresor</b> - este foarte
                    important să conştientizăm care este de fapt problema care
                    ne determină starea de stres.
                  </p>
                </div>
              </div>
              <div class="row py-3">
                <div class="rounded p-5 border border-dark bg-square-purple-color">
                  <p style={{ textAlign: "justify" }}>
                    <b>Timp dedicat hobbyurilor noastre</b> - alocarea moment în
                    care ne facem o mică bucurie, plăcere sau facem o activitate
                    care ne aduce satisfacţii.
                  </p>
                </div>
              </div>
              <div className="row py-3">
                <div class="rounded p-5 border border-dark bg-square-purple-color">
                  <p style={{ textAlign: "justify" }}>
                    <b>Practicarea regulata a unui sport</b> - plimbările în aer
                    liber, mersul cu bicicleta, frecventarea unui săli, dansul,
                    orice formă de mişcare are un efect benefic asupra stării
                    noastre psihice.
                  </p>
                </div>
              </div>
              <div class="row py-3">
                <div class="rounded p-5 border border-dark bg-square-purple-color">
                  <p style={{ textAlign: "justify" }}>
                    <b>Conectarea emotionala cu familia si prietenii</b> -
                    susţinerea afectivă din partea cuiva drag este de mare
                    ajutor atunci când ne confruntăm cu situaţii dificile.
                  </p>
                </div>
              </div>
              <div className="row py-3">
                <div class="rounded p-5 border border-dark bg-square-purple-color">
                  <p style={{ textAlign: "justify" }}>
                    <b>Planificarea eficienta a timpului</b> - deseori stresul
                    este determinat de multitudinea de sarcini pe care o avem de
                    făcut. Prioritizarea şi planificarea lor conduc la
                    diminuarea stresului.
                  </p>
                </div>
              </div>
              <div class="row py-3">
                <div class="rounded p-5 border border-dark bg-square-purple-color">
                  <p style={{ textAlign: "justify" }}>
                    <b>Dezoltarea comunicarii asertive</b> - exprimarea într-o
                    manieră directă, nonagresivă a nevoilor şi dorinţelor
                    noastre. Să învăţăm să spunem „Nu!”, atunci când sarcinile
                    ne copleşesc sau nu suntem confortabili cu situaţia
                    respectivă.
                  </p>
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
