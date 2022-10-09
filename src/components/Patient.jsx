function Patient() {
  return (
    <article className="mx-3 my-8 px-5 py-10 rounded-xl bg-white shadow-md">
      <p className="mb-3 font-bold  text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">Panchita</span>
      </p>
      <p className="mb-3 font-bold  text-gray-700 uppercase">
        Propietario:{' '}
        <span className="font-normal normal-case">Jesus Velasco</span>
      </p>
      <p className="mb-3 font-bold  text-gray-700 uppercase">
        Email:{' '}
        <span className="font-normal normal-case">
          jesusrobot9000@gmail.com
        </span>
      </p>
      <p className="mb-3 font-bold  text-gray-700 uppercase">
        Fecha de alta:{' '}
        <span className="font-normal normal-case">5 de Octubre 2022</span>
      </p>
      <p className="mb-3 font-bold  text-gray-700 uppercase">
        Síntomas:{' '}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          corporis a dolores fugiat maiores ea, aut accusamus perferendis vero
          adipisci!
        </span>
      </p>
    </article>
  )
}

export default Patient
