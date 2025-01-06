import PropTypes from 'prop-types';
import '../style/index.css';

const BaseNumberInput = ({ value, onChangeBase, placeholder }) => {
  const handleChange = (e) => {
    onChangeBase(e.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className="base-input"
    />
  );
};

BaseNumberInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeBase: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default BaseNumberInput;
