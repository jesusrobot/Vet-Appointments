function PatientList() {
  return (
    <section className="md:h-screen overflow-y-scroll md:w-1/2 lg:w-3/5 ">
      <h2 className="text-3xl text-center font-black">Listado Pacientes</h2>
      <p className="mt-5 mb-10 text-lg text-center">
        Administra tus {}
        <span className="font-bold text-indigo-600">Pacientes y Citas</span>
      </p>
    </section>
  )
}

export default PatientList
