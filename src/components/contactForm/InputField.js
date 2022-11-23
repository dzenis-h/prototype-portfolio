import React from 'react';

const InputField = ({
  className,
  label,
  type,
  name,
  value,
  onChange,
  isRequired,
  placeholder,
  rows,
  textarea,
}) => {

  if (!textarea) {
    return (
      <div className={className}>
        <label>{label}</label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={isRequired}
          placeholder={placeholder}
        />
      </div>
    );
  } else {
    return (
      <div className={className}>
        <label>{label}</label>
        <textarea
          name={name}
          rows={rows}
          value={value}
          onChange={onChange}
          required={isRequired}
          placeholder={placeholder}
        ></textarea>
      </div>
    );
  }
};

export default InputField;
