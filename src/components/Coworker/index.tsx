import Image from 'next/image';
import styles from './styles.module.css';

interface User {
    id: number;
    name: string;
    last_name: string;
    role: string;
    email: string;
    avatar: string;
}

interface CoworkerProps {
    users: User[];
}

const Coworker: React.FC<CoworkerProps> = ({ users }) => {
    return (
        <div className={styles.coworkersWrapper}>
            <h3>Compañeros</h3>
            {users.map(user => (
                <div key={user.id} className={styles.coworker}>
                    <Image src={user.avatar} alt={`${user.name} ${user.last_name}`} width={40} height={40} className={styles.coworkerImage} />
                    <div className={styles.coworkerInfo}>
                        <div className={styles.coworkerName}>{`${user.name} ${user.last_name}`}</div>
                        <div className={styles.coworkerRole}>{user.role}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Coworker;