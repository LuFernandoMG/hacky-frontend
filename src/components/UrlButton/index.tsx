import Link from "next/link";
import styles from "./styles.module.css";
import { FaLink } from "react-icons/fa";

interface UrlButtonProps {
    url: string;
}

const UrlButton: React.FC<UrlButtonProps> = ({ url }) => {
    return (
        <Link href={url} className={styles.urlButton} target="_blank" rel="noopener noreferrer">
            <FaLink />
        </Link>
    );
};

export default UrlButton;