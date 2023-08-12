import React from "react";

const TextArea = ({
  label,
  name,
  id,
  className,
  cols,
  rows,
  onChange,
  placeholder,
  isRequired,
  inputGroupClass,
  disabled,
}) => {
  return (
    <>
      <div className={`input_group ${inputGroupClass}`}>
        {label && (
          <label htmlFor={label}>
            {label} {isRequired && <span style={{ color: "red" }}>*</span>}{" "}
          </label>
        )}
        <textarea
          name={name}
          id={id}
          cols={cols}
          rows={rows}
          onChange={onChange}
          className={className}
          placeholder={placeholder}
          disabled={disabled}
        ></textarea>
      </div>
    </>
  );
};

export default TextArea;
