import { useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import PatientList from './components/PatientList'

function App() {
  const [patients, setPatients] = useState([])

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <main className="mt-12 md:flex">
        <Form setPatients={setPatients} />
        <PatientList patients={patients} />
      </main>
    </div>
  )
}

export default App
