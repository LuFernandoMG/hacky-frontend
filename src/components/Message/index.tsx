import React from 'react';
import styles from "./styles.module.css";

interface User {
    id: number;
    name: string;
    last_name: string;
    role: string;
    email: string;
    avatar: string;
}

interface MessageProps {
    user: User;
    message: string;
    timestamp: string;
}

const Message: React.FC<MessageProps> = ({ user, message, timestamp}) => {
    const isCurrentUser = user.id === 1;

    return (
        <div className={isCurrentUser ? styles.messageContainerUser : styles.messageContainerOther}>
            <div className={styles.avatar}>
                <img src={user.avatar} alt={`${user.name} ${user.last_name}`} />
            </div>
            <div className={styles.messageContent}>
                <div className={styles.messageHeader}>
                    <span className={styles.userName}>{user.name} {user.last_name}</span>
                    <span className={styles.timestamp}>{new Date(timestamp).toLocaleTimeString()}</span>
                </div>
                <div className={styles.message}>{message}</div>
            </div>
        </div>
    );
};

export default Message;