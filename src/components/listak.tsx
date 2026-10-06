interface ListakProps {
    elohelyek: string[];
    nepszeruAllatok: string[];
    taplalkozas: string[];
  }

export default function Listak(props: ListakProps) {
  return (
    <div className="row mb-2">
      <div className="col-sm-4 kartya">
        <h2>Élőhelyek</h2>
        <ul className="list-group">
          {props.elohelyek.map((elohely) => (
            <li className="list-group-item">
              {elohely}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-sm-4 kartya mb-2">
        <h2>Népszerű állatok</h2>
        <ol className="list-group list-group-numbered">
          {props.nepszeruAllatok.map((allat) => (
            <li className="list-group-item">
              {allat}
            </li>
          ))}
        </ol>
      </div>
      <div className="col-sm-4 kartya mb-2">
        <h2>Táplálkozás</h2>
        <ol className="list-group list-group-numbered">
            {props.taplalkozas.map((etel) => (
              <li className="list-group-item">
                {etel}
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
}
