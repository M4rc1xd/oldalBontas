import {kepekData} from '../data/kepek'

export default function Kepek() {
    return(
        <div className="row">
            {kepekData.map((kep) => (
                <div className="col-sm-4 mb-3">
                    <div className="card">
                        <img src={kep.src} className="card-img-top" alt={kep.name} />
                        <div className="card-body">
                            <h5 className="card-title">{kep.name}</h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}