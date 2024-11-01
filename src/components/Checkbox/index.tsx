import styles from "./styles.module.css";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <div
      onClick={() => onChange(!checked)}
      style={{
        backgroundColor: checked ? "#50a78d" : "#FFFFFF",
      }}
      className={styles.checkbox}
    >
      {checked && (
        <svg viewBox="0 0 24 24" className={styles.svg}>
          <path d="M20.285 6.708l-11.4 11.4-5.657-5.657 1.414-1.414 4.243 4.243 10-10z" />
        </svg>
      )}
    </div>
  );
};

export default Checkbox;
