interface PillProps {
    color: string;
    value: string;
    textColor: string;
    icon?: React.ReactNode;
}

const Pill: React.FC<PillProps> = ({ color, value, textColor, icon }) => {
    return (
        <div style={{ backgroundColor: color, color: textColor, display: 'inline-flex', alignItems: 'center', padding: '0.5em 1em', borderRadius: '999px' }}>
            {icon && <span style={{ marginRight: '0.5em' }}>{icon}</span>}
            <span>{value}</span>
        </div>
    );
};

export default Pill;