import PropTypes from 'prop-types'

function Patient({ patient: { name, owner, email, dischargeDate, symptoms } }) {
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
}

export default Patient
