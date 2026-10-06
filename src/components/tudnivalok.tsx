import { fontosData } from "../data/tudnivalok";

export default function Tudnivalok() {
  return (
    <div className="row">
      <div className="col-sm-12 kartya mb-3">
        <div className="card">
          <div className="card-header">Amit érdemes megjegyezni</div>
          <div className="card-body">
            <ul>
              {fontosData.map((tudnivalo) => (
                <li>{tudnivalo}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
