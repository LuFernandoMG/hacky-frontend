import Checkbox from "../Checkbox";
import styles from "./styles.module.css";
interface Step {
    step: string;
    done: boolean;
    id: number;
}

interface ProjectStepsProps {
    steps: Step[];
    handleChange: () => void;
}

const ProjectSteps: React.FC<ProjectStepsProps> = ({ steps, handleChange }) => {
    return (
        <div className={styles.steps}>
            <ul>
                {steps.map((step) => (
                    <li key={step.id} className={styles.listItem}>
                        <Checkbox checked={step.done} onChange={() => handleChange} />
                        <span>{step.step}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectSteps;