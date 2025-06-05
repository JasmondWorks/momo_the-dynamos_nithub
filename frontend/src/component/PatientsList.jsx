import { Link } from "react-router-dom";
import PatientDetailsCard from "./PatientDetailsCard";

function PatientsList({ patients }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {patients.map((patient) => (
        <Link to={`/patients/${patient.id}`} key={patient.id}>
          <PatientDetailsCard {...patient} />
        </Link>
      ))}
    </div>
  );
}

export default PatientsList;
