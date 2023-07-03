import PropTypes from 'prop-types';

const Filho = ({ title, neto }) => {
  return (
    <>
      <h2>{ title }</h2>
      
      { neto }
    </>
  )
}

Filho.propTypes = {
  title: PropTypes.string.isRequired,
  neto: PropTypes.node.isRequired,
}

export default Filho