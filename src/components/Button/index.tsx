import styles from "./styles.module.css";

interface ButtonProps {
  value: string;
  type: "submit" | "button";
  onClick?: () => void;
  disabled?: boolean;
  role: "primary" | "secondary";
  sm?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  value,
  onClick,
  type,
  disabled,
  role,
  sm
}) => {
  return (
    <button
      style={{
        backgroundColor: role === "primary" ? "#00c698" : "#9f9f9f",
        padding: sm ? '.5rem 1rem' : '1rem 2rem',
      }}
      type={type}
      className={styles.button}
      disabled={disabled}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
