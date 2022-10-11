import { useState } from 'react'

function Form({ setPatients }) {
  const [patient, setPatient] = useState({
    name: '',
    owner: '',
    email: '',
    dischargeDate: '',
    symptoms: '',
  })
  const [error, setError] = useState(false)

  const { name, owner, email, dischargeDate, symptoms } = patient

  const handleChange = (e) => {
    setPatient({
      ...patient,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if ([name, owner, email, dischargeDate, symptoms].includes('')) {
      setError(true)
      return
    }

    setPatients((patients) => [...patients, patient])
    setPatient({
      name: '',
      owner: '',
      email: '',
      dischargeDate: '',
      symptoms: '',
    })
    setError(false)
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="text-3xl text-center font-black">Seguimiento Paciente</h2>
      <p className="mt-5 mb-10 text-lg text-center">
        Añade Pacientes y {}
        <span className="font-bold text-indigo-600">Administralos</span>
      </p>
      <form
        className="mx-3 mb-10 px-5 py-10 rounded-lg bg-white shadow-md"
        onSubmit={handleSubmit}
      >
        {error && (
          <div className="mb-3 p-3 text-center font-bold uppercase rounded-md bg-red-100 text-red-800">
            <p>Todos los campos son necesarios</p>
          </div>
        )}
        <fieldset className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 font-bold text-gray-700 uppercase"
          >
            Nombre de la Mascota
          </label>
          <input
            type="text"
            id="name"
            required
            placeholder="Ej. Coco"
            className="w-full p-2 border-2 rounded-md placeholder-gray-400"
            value={name}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset className="mb-5">
          <label
            htmlFor="owner"
            className="block mb-2 font-bold text-gray-700 uppercase"
          >
            Nombre del Propietarios
          </label>
          <input
            type="text"
            id="owner"
            required
            placeholder="Ej. Fulanito de Tal"
            className="w-full p-2 border-2 rounded-md placeholder-gray-400"
            value={owner}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 font-bold text-gray-700 uppercase"
          >
            Correo Electronico
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="Ej. fulanito@email.com"
            className="w-full p-2 border-2 rounded-md placeholder-gray-400"
            value={email}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset className="mb-5">
          <label
            htmlFor="dischargeDate"
            className="block mb-2 font-bold text-gray-700 uppercase"
          >
            Alta del Paciente
          </label>
          <input
            type="date"
            id="dischargeDate"
            required
            className="w-full p-2 border-2 rounded-md placeholder-gray-400"
            value={dischargeDate}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset className="mb-5">
          <label
            htmlFor="symptoms"
            className="block mb-2 font-bold text-gray-700 uppercase"
          >
            Síntomas
          </label>
          <textarea
            id="symptoms"
            placeholder="Ej. Se rasca mucho"
            required
            className="w-full p-2 border-2 rounded-md placeholder-gray-400"
            value={symptoms}
            onChange={handleChange}
          />
        </fieldset>
        <input
          type="submit"
          value="Agregar Paciente"
          className="w-full p-3 text-white font-bold uppercase bg-indigo-600 cursor-pointer hover:bg-indigo-700 transition-all"
        />
      </form>
    </div>
  )
}

export default Form
