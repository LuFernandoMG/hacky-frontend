import styles from "./styles.module.css";

interface PillProps {
    color: string;
    value: string;
    textColor: string;
    big?: boolean;
    icon?: React.ReactNode;
}

const Pill: React.FC<PillProps> = ({ color, value, textColor, icon, big }) => {
    return (
        <div className={big ? styles.pillWrapperBig : styles.pillWrapper} style={{ backgroundColor: color, color: textColor }}>
            {icon && <span style={{ marginRight: '0.5em' }}>{icon}</span>}
            <span>{value}</span>
        </div>
    );
};

export default Pill;