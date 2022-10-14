import PropTypes from 'prop-types'

function Patient({ patient, setPatientSelected }) {
  const { name, owner, email, dischargeDate, symptoms } = patient
  return (
    <article className="mx-3 my-8 px-5 py-10 rounded-xl bg-white shadow-md">
      <p className="mb-3 font-bold  text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{name}</span>
      </p>
      <p className="mb-3 font-bold  text-gray-700 uppercase">
        Propietario: <span className="font-normal normal-case">{owner}</span>
      </p>
      <p className="mb-3 font-bold  text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="mb-3 font-bold  text-gray-700 uppercase">
        Fecha de alta:{' '}
        <span className="font-normal normal-case">{dischargeDate}</span>
      </p>
      <p className="mb-3 font-bold  text-gray-700 uppercase">
        Síntomas: <span className="font-normal normal-case">{symptoms}</span>
      </p>
      <div className="flex justify-between mt-6">
        <button
          type="button"
          className="px-10 py-2 font-bold text-white uppercase rounded-lg bg-indigo-600 hover:bg-indigo-700"
          onClick={() => setPatientSelected(patient)}
        >
          Editar
        </button>
        <button
          type="button"
          className="px-10 py-2 font-bold text-white uppercase rounded-lg bg-red-600 hover:bg-red-700"
        >
          Eliminar
        </button>
      </div>
    </article>
  )
}

Patient.propTypes = {
  patient: PropTypes.shape({
    name: PropTypes.string,
    owner: PropTypes.string,
    email: PropTypes.string,
    dischargeDate: PropTypes.string,
    symptoms: PropTypes.string,
  }).isRequired,
  setPatientSelected: PropTypes.func.isRequired,
}

export default Patient
