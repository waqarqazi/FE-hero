import style from "./input.module.scss";

const TextField = ({
  label,
  onChange,
  value,
  defaultValue,
  name,
  register,
  onClick,
  type,
  id,
  className,
  wraperClass,
  placeholder,
  errorMessage,
  icon,
  onClickhandle,
  readOnly,
  isDisable,
  iconClass,
  ref,
  width,
  ...restOfProps
}) => {
  return (
    <>
      <div className={`${style.inputContainer} ${wraperClass} `}>
        {label && <label style={{ fontSize: 12 }}>{label}</label>}
        <div
          style={{ position: "relative", width: width }}
          className={className}
          onClick={onClickhandle}
        >
          <input
            ref={ref}
            style={{
              border: errorMessage ? "1px solid #ff5050" : " 1px solid #E6E7E8",
              backgroundColor: readOnly || isDisable ? "#ddd" : "#fff",
            }}
            id={id}
            name={name}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            {...(register && register(name))}
            readOnly={readOnly || false}
            disabled={isDisable || false}
            {...restOfProps}
          />

          {icon && (
            <img
              className={`${style.icon} ${iconClass}`}
              style={{ cursor: "pointer" }}
              src={icon}
              alt=""
              onClick={onClick}
            />
          )}
        </div>
        {errorMessage && (
          <span className={style.errorMessage}>{errorMessage}</span>
        )}
      </div>
    </>
  );
};

export default TextField;
