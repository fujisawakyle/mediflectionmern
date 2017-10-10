import React from 'react';

export default ({ input, value, label, type, meta: { touched, error } }) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={value} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );
};
