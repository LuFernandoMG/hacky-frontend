import styles from "./styles.module.css";

const latinAmericanCountries = [
  "Argentina",
  "Bolivia",
  "Brazil",
  "Chile",
  "Colombia",
  "Costa Rica",
  "Cuba",
  "Dominican Republic",
  "Ecuador",
  "El Salvador",
  "Guatemala",
  "Honduras",
  "Mexico",
  "Nicaragua",
  "Panama",
  "Paraguay",
  "Peru",
  "Puerto Rico",
  "Uruguay",
  "Venezuela",
];

interface CountrySelectInterface {
  value: string;
  onChange?: (value: string) => void;
  title: string;
}

const CountrySelect: React.FC<CountrySelectInterface> = ({
  value,
  title,
  onChange,
}) => {
  return (
    <div>
      {title && <label className={styles.label}>{title}</label>}
      <select
        className={styles.select}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      >
        {latinAmericanCountries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelect;
