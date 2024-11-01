interface ButtonProps {
    placeholder: string;
    color: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ placeholder, color, onClick }) => {
    return (
        <button
            style={{
                backgroundColor: color,
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
            }}
            onClick={onClick}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#555')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = color)}
        >
            {placeholder}
        </button>
    );
};

export default Button;