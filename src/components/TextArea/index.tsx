import styles from "./styles.module.css";

interface InputTextArea {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  id?: string;
  title?: string;
}

const TextArea: React.FC<InputTextArea> = ({
  value,
  onChange,
  title,
  placeholder,
  id = "",
}) => {
  return (
    <div className={styles.wrapper}>
      {title && <label className={styles.label} htmlFor={id}>{title}</label>}
      <textarea
        maxLength={500}
        rows={5}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
};

export default TextArea;
