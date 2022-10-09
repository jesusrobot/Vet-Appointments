import Form from './components/Form'
import Header from './components/Header'

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <main className="mt-12 md:flex">
        <Form />
        <h2>Appointments</h2>
      </main>
    </div>
  )
}

export default App
