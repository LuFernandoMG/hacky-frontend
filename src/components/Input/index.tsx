import styles from "./styles.module.css";

interface InputTextProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  id?: string;
}

const InputText: React.FC<InputTextProps> = ({
  value,
  onChange,
  placeholder,
  type = "text",
  id = "",
}) => {
  return (
    <div className={styles.wrapper}>
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
