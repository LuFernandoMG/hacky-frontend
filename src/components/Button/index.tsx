import styles from "./styles.module.css";

interface ButtonProps {
  value: string;
  type: "submit" | "button";
  onClick?: () => void;
  disabled?: boolean;
  role: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  value,
  onClick,
  type,
  disabled,
  role,
}) => {
  return (
    <button
      style={{
        backgroundColor: role === "primary" ? "#00c698" : "#9f9f9f",
        color: role === "primary" ? "#fff" : "#00c698",
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
