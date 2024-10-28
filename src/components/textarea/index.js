import React from "react";

import style from "./textarea.module.scss";

const TextArea = ({
  label,
  name,
  register,
  placeholder,
  errorMessage,
  isDisable,
  onChange,
  height,
  value,
}) => {
  return (
    <>
      <div className={style.note}>
        {label && (
          <label
            style={{ color: errorMessage ? "#ff5050" : "#2d2d32" }}
            className={style.lbl}
          >
            {label}
          </label>
        )}
        <textarea
          value={value}
          style={{
            // backgroundColor: "#F4F5FA",
            border: errorMessage
              ? "1.2px solid #ff5050"
              : " 1.2px solid #e2e2ea",
            height: height,
          }}
          className={style.inputField}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          rows={6}
          {...(register && register(name))}
          disabled={isDisable || false}
        ></textarea>
        {errorMessage ? (
          <span className={style.errorMessage}>{errorMessage}</span>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default TextArea;
