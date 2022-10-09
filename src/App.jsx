import Form from './components/Form'
import Header from './components/Header'
import PatientList from './components/PatientList'

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <main className="mt-12 md:flex">
        <Form />
        <PatientList />
      </main>
    </div>
  )
}

export default App
