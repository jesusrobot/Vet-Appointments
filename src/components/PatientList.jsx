import PropTypes from 'prop-types'
import Patient from './Patient'

function PatientList({ patients }) {
  return (
    <section className="md:h-screen overflow-y-scroll md:w-1/2 lg:w-3/5 ">
      <h2 className="text-3xl text-center font-black">Listado Pacientes</h2>
      <p className="mt-5 mb-10 text-lg text-center">
        Administra tus {}
        <span className="font-bold text-indigo-600">Pacientes y Citas</span>
      </p>
      {patients.map((patient) => (
        <Patient key={patient.id} patient={patient} />
      ))}
    </section>
  )
}

PatientList.propTypes = {
  patients: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      owner: PropTypes.string,
      email: PropTypes.string,
      dischargeDate: PropTypes.string,
      symptoms: PropTypes.string,
    })
  ).isRequired,
}

export default PatientList
