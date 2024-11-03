"use client";
import Rating from "../Rating";
import Button from "../Button";
import Coworker from "../Coworker";
import Pill from "../Pill";
import UrlButton from "../UrlButton";
import Tags from "../Tags";
import styles from "./styles.module.css";

type Project = {
  title: string;
  description: string;
  submission_date: string;
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
    team_work: number;
    communication: number;
    execution: number;
  }[];
  skills: {
    id: number;
    name: string;
  }[];
  difficulty: string;
  bounty?: number;
  urls: string[];
};

interface ProjectCardProps {
  project: Project;
  old?: boolean;
}

const enterFunc = () => {
  console.log("I entered here");
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, old }) => {
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
        {old && (
          <>
            <h4>Calificación recibida</h4>
            <div className={styles.ratings}>
              <div className={styles.rating}>
                <span>Trabajo en equipo</span>
                <Rating value={project.users[0].team_work} readOnly />
              </div>
              <div className={styles.rating}>
                <span>Comunicación</span>
                <Rating value={project.users[0].communication} readOnly />
              </div>
              <div className={styles.rating}>
                <span>Ejecución</span>
                <Rating value={project.users[0].execution} readOnly />
              </div>
            </div>
          </>
        )}
        {!old && (
          <div className={styles.projectButtons}>
            <Button sm type="button" value="Rechazar" role="secondary" />
            <Button sm type="button" value="Aceptar" role="primary" />
          </div>
        )}
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
          value={
            old
              ? `Completed on ${project.submission_date}`
              : `Expiration date: ${project.expiration_date}`
          }
          color="#285c78"
          textColor="#fff"
        />
        <Pill value={project.category.name} color="#377ea4" textColor="#fff" />
        {project.users && <Coworker users={project.users} />}
        {old && (
          <>
            <h4>Trabajo realizado</h4>
            <div className={styles.urls}>
              {project.urls.map((url, idx) => (
                <UrlButton key={idx} url={url} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
