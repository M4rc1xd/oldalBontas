import { cardData } from "../data/allatok";

export default function Allatok() {
  return (
    <div className="row mb-1">
      {cardData.map((allat) => (
        <div className="col-sm-3 col-md-6 col-lg-3 kartya mb-3 h-100">
          <h2>{allat.type}</h2>
          <div className="card">
            <div className="card-body">
              <h3>{allat.name}</h3>
              <p>
                {allat.name} egy {allat.age} éves {allat.type}. Súlya körülbelül{" "}
                {allat.weight} kg.
              </p>
              <p>
                <strong>Veszélyeztetett:</strong>{" "}
                {allat.endangered ? "Igen" : "Nem"}
              </p>
              <p className="mb-0">
                <strong>Kedvenc ételei:</strong> {allat.food.join(", ")}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
