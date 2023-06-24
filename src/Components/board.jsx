

import PropTypes from 'prop-types';

export default function Board({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

Board.propTypes = {
  value: PropTypes.string, // Tipo de dato esperado para la prop "value"
  onClick: PropTypes.func.isRequired, // Tipo de dato esperado para la prop "onClick"
};
