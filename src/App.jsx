import { useState, useEffect } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import PatientList from './components/PatientList'

function App() {
  const initialState = JSON.parse(localStorage.getItem('patients')) ?? []
  // State donde se guardan las citas
  const [patients, setPatients] = useState(initialState)
  // State para guardar momentaneamente una cita seleccionada para editar
  const [patientSelected, setPatientSelected] = useState({})

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])

  const deletePatient = (idPatient) => {
    const updatedPatients = patients.filter(
      (patient) => patient.id !== idPatient
    )
    setPatients(updatedPatients)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <main className="mt-12 md:flex">
        <Form
          patientSelected={patientSelected}
          setPatients={setPatients}
          setPatientSelected={setPatientSelected}
        />
        <PatientList
          patients={patients}
          setPatientSelected={setPatientSelected}
          deletePatient={deletePatient}
        />
      </main>
    </div>
  )
}

export default App
