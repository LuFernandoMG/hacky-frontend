import styles from "./styles.module.css";

interface InputTextProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  id?: string;
  title?: string;
}

const InputText: React.FC<InputTextProps> = ({
  value,
  onChange,
  title,
  placeholder,
  type = "text",
  id = "",
}) => {
  return (
    <div className={styles.wrapper}>
      {title && <label className={styles.label} htmlFor={id}>{title}</label>}
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
};

export default InputText;
