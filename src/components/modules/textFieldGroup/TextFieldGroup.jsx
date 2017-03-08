import React  from 'react';

const TextFieldGroup = ({field, value, label, error, type, onChange}) => {
  return (
    <div className="f-groups">
      <label className="f-label-control">{label}</label>
      <input className="f-input-control" name={field} onChange={onChange} type={type} value={value} />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
};

TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;
