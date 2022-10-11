import PropTypes from 'prop-types'

function Error({ children }) {
  return (
    <div className="mb-3 p-3 text-center font-bold uppercase rounded-md bg-red-100 text-red-800">
      {children}
    </div>
  )
}

Error.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Error
