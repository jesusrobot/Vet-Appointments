function Form() {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="text-3xl text-center font-black">Seguimiento Paciente</h2>
      <p className="mt-5 mb-10 text-lg text-center">
        Añade Pacientes y {}{' '}
        <span className="font-bold text-indigo-600">Administralos</span>
      </p>
      <form className="mx-3 mb-10 px-5 py-10 rounded-lg bg-white shadow-md">
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
            placeholder="Ej. Coco"
            className="w-full p-2 border-2 rounded-md placeholder-gray-400"
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
            placeholder="Ej. Fulanito de Tal"
            className="w-full p-2 border-2 rounded-md placeholder-gray-400"
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
            placeholder="Ej. fulanito@email.com"
            className="w-full p-2 border-2 rounded-md placeholder-gray-400"
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
            className="w-full p-2 border-2 rounded-md placeholder-gray-400"
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
            className="w-full p-2 border-2 rounded-md placeholder-gray-400"
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
