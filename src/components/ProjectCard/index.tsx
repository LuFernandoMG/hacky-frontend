'use client'
import Button from "../Button";
import Coworker from "../Coworker";
import Pill from "../Pill";
import Tags from "../Tags";
import styles from "./styles.module.css";

type Project = {
  title: string;
  description: string;
  category: {
    id: number;
    name: string;
  };
  expiration_date: string;
  development_time: string;
  users: {
    id: number;
    name: string;
    last_name: string;
    role: string;
    email: string;
    avatar: string;
  }[];
  skills: {
    id: number;
    name: string;
  }[];
  difficulty: string;
  bounty?: number;
};

interface ProjectCardProps {
  project: Project;
}

const enterFunc = () => {
    console.log('I entered here')
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div onMouseEnter={enterFunc} className={styles.projectCard}>
      <div className={styles.leftColumn}>
        <h2>
          {project.title}
          <Pill color="#285c78" textColor="#fff" value={project.difficulty} />
          {project.bounty && (
            <Pill
              color="#d3ab26"
              textColor="#fff"
              value={`${project.bounty} USD`}
            />
          )}
        </h2>
        <Tags
          tags={project.skills.map((skill) => skill.name)}
          bubbleColor="#00c698"
        />
        <p>{project.description}</p>
        <div className={styles.projectButtons}>
          <Button sm type="button" value="Rechazar" role="secondary" />
          <Button sm type="button" value="Aceptar" role="primary" />
        </div>
      </div>
      <div className={styles.rightColumn}>
        <Pill
          big
          value={`Expected Duration: ${project.development_time}`}
          color="#285c78"
          textColor="#fff"
        />
        <Pill
          big
          value={`Expiration date: ${project.expiration_date}`}
          color="#285c78"
          textColor="#fff"
        />
        <Pill value={project.category.name} color="#377ea4" textColor="#fff" />
        {project.users && (
            <Coworker users={project.users} />
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
