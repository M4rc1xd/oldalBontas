import { Focim, Lablec } from "./components/focim-lablec";
import Bevezeto from "./components/bevezeto";
import Listak from "./components/listak";
import Tablazat from "./components/tablazat";
import Allatok from "./components/allatok";
import Tudnivalok from "./components/tudnivalok";

function App() {
  return (
    <>
      <div className="container">
        <Focim />
        <Bevezeto
          szoveg={[
            `Az állatkertekben különböző földrészekről származó állatokkal
                találkozhatunk. Az állatokat fajuknak és természetes élőhelyüknek
                megfelelő körülmények között gondozzák.`,
            `Az állatok életkora és testsúlya fajonként jelentősen eltérhet.
                Táplálkozásuk is különböző: vannak növényevők, húsevők és
                mindenevők.`,
            `Egyes állatfajok veszélyeztetettek, ezért az állatkertek a
                természetvédelmi szemléletformálásban és egyes fajok megőrzésében
                is szerepet vállalhatnak.`,
          ]}
        />
        <Listak 
        elohelyek={[
          "Afrikai szavanna",
          "Ázsiai esőerdő",
          "Dél-amerikai őserdő",
          "Sarki vidék",
          "Ausztráliai területek"
        ]}
        nepszeruAllatok={[
          "Oroszlán",
          "Elefánt",
          "Zsiráf",
          "Panda",
          "Pingvin"
        ]}
        taplalkozas={[
          "Növényevő",
          "Húsevő",
          "Mindenevő",
          "Gyümölcsevő",
          "Rovarokkal táplálkozó"
        ]}
        />
        <Tablazat />
        <Allatok />
        <Tudnivalok />
      </div>
      <Lablec />
    </>
  );
}

export default App;
