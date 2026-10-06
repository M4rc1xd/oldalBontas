interface BevezetoProps {
  szoveg: string[];
}

export default function Bevezeto(props: BevezetoProps) {
  return (
    <div className="row mb-2">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-header">
            Mit érdemes tudni az állatkerti állatokról?
          </div>
          <div className="card-body">
            {props.szoveg.map((sor) => (
              <p>
                {sor}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
