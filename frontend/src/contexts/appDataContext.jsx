import { createContext, useContext, useState } from "react";

const AppDataContext = createContext();

const mockPatients = [
  {
    id: "p1",
    name: "Jane Doe",
    illness: "Hypertension",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: "p2",
    name: "John Smith",
    illness: "Diabetes",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    id: "p3",
    name: "Mary Johnson",
    illness: "Asthma",
    avatar: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    id: "p4",
    name: "James Brown",
    illness: "Arthritis",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    id: "p5",
    name: "Patricia Davis",
    illness: "Chronic Migraines",
    avatar: "https://randomuser.me/api/portraits/women/61.jpg",
  },
];
function AppDataProvider({ children }) {
  const [patients, setPatients] = useState(mockPatients);
  const [medications, setMedications] = useState([]);

  function addPatient(newPatient) {
    setPatients((patients) => [...patients, newPatient]);
  }
  function addMedication(newMedication) {
    setMedications((medications) => [...medications, newMedication]);
  }

  return (
    <AppDataContext.Provider
      value={{
        patients,
        medications,
        addMedication,
        addPatient,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
}

function useAppData() {
  const context = useContext(AppDataContext);

  if (!context)
    throw new Error(
      "You tried to use AppDataContext outside of the AuthProvider"
    );

  return context;
}

export { AppDataProvider, useAppData };
