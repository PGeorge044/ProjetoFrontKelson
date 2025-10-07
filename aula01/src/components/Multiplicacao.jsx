import React from 'react'
import PropTypes from "prop-types"

const Multiplicacao = ({ num1, num2 }) => {
  return (
    <div>O resultado de {num1} × {num2} é {num1 * num2}</div>
  )
}

Multiplicacao.propTypes = {
  num1: PropTypes.number.isRequired,
  num2: PropTypes.number.isRequired,
}

export default Multiplicacao
