import React from "react";

const Input = ({
  value,
  onChange,
  style,
  type,
  placeholder,
  readonly,
  name,
  inputDOM,
}) => {
  return (
    <input
      className={style}
      type={type}
      placeholder={placeholder ? placeholder : null}
      value={value}
      onInput={onChange}
      readOnly={readonly}
      name={name}
      ref={inputDOM}
    />
  );
};

export default Input;
