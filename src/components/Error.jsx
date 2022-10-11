import PropTypes from 'prop-types'

function Error({ message }) {
  return (
    <div className="mb-3 p-3 text-center font-bold uppercase rounded-md bg-red-100 text-red-800">
      <p>{message}</p>
    </div>
  )
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Error
