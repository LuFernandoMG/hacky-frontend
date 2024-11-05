'use client'
import Checkbox from "../Checkbox";
import { useState } from "react";
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
    const [checkboxArr, setCheckboxArr] = useState<number[]>([]);
    
    const changeValue = (idx: number) => {
        handleChange()
        if (checkboxArr.includes(idx)) {
            const newArr = checkboxArr.filter(id => id !== idx);
            setCheckboxArr(newArr);
        } else {
            const newArr = [...checkboxArr, idx];
            setCheckboxArr(newArr);
        }
    }
    return (
        <div className={styles.steps}>
            <ul>
                {steps.map((step, idx) => (
                    <li key={step.id} className={styles.listItem}>
                        <Checkbox checked={checkboxArr.includes(idx)} onChange={() => changeValue(idx)} />
                        <span>{step.step}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectSteps;