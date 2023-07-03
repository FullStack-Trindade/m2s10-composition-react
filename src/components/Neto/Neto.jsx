import PropTypes from 'prop-types';

const Neto = ({ fruits }) => {
  const renderFruit = (fruit) => {
    return <li>{ fruit }</li>
  }
  return (
    <ul>
      { fruits.map(renderFruit) }
    </ul>
  )
}

Neto.propTypes = {
  fruits: PropTypes.arrayOf(PropTypes.string)
}

export default Neto