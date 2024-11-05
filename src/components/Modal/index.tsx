import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css"; // Assuming you have some basic styles for the modal
import Button from "../Button";
import InputText from "../Input";
import Rating from "../Rating";
import TextArea from "../TextArea";

interface ModalProps {
  projectId: number;
  ready: boolean;
  onClose: () => void;
  getReady: () => void;
}

const Modal: React.FC<ModalProps> = ({ ready, getReady, projectId, onClose }) => {
  const [communication, setCommunication] = useState(0);
  const [teamWork, setTeamWork] = useState(0);
  const [execution, setExecution] = useState(0);
  const [leadership, setLeadership] = useState(0);
  const [timeMgt, setTimeMgt] = useState(0);
  const [url, setUrl] = useState("");
  const [commentFeedback, setCommentFeedback] = useState("");
  const [commentSubmission, setCommentSubmission] = useState("");

  const router = useRouter();

  const handleCommunication = (value: number) => {
    setCommunication(value);
  };
  const handleTeamWork = (value: number) => {
    setTeamWork(value);
  };
  const handleExecution = (value: number) => {
    setExecution(value);
  };
  const handleLeadership = (value: number) => {
    setLeadership(value);
  };
  const handleTimeMgt = (value: number) => {
    setTimeMgt(value);
  };
  const handleUrl = (e: { target: { value: string } }) => {
    setUrl(e.target.value);
  };
  const handleCommentFeedback = (e: { target: { value: string } }) => {
    setCommentFeedback(e.target.value);
  };
  const handleCommentSubmission = (e: { target: { value: string } }) => {
    setCommentSubmission(e.target.value);
  };

  const submit = () => {
    console.log('project id ', projectId)
    router.push('/history')
    onClose();
  }

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {ready ? (
          <div className={styles.modalBody}>
            <div className={styles.modalGrid}>
              <div className={styles.leftColumn}>
                <h2>Evalua a tu compañero</h2>
                <div className={styles.feedback}>
                  <Rating
                    value={communication}
                    setRating={handleCommunication}
                  />
                  <span>Comunicación</span>
                </div>
                <div className={styles.feedback}>
                  <Rating value={execution} setRating={handleExecution} />
                  <span>Ejecución del proyecto</span>
                </div>
                <div className={styles.feedback}>
                  <Rating value={teamWork} setRating={handleTeamWork} />
                  <span>Trabajo en equipo</span>
                </div>
                <div className={styles.feedback}>
                  <Rating value={leadership} setRating={handleLeadership} />
                  <span>Liderazgo</span>
                </div>
                <div className={styles.feedback}>
                  <Rating value={timeMgt} setRating={handleTimeMgt} />
                  <span>Gestión del tiempo</span>
                </div>
                <TextArea
                  value={commentFeedback}
                  onChange={handleCommentFeedback}
                  placeholder="Qué feedback darías a tu compañero?"
                />
              </div>
              <div className={styles.rightColumn}>
                <h2>Detalles de la entrega</h2>
                <InputText
                  title="Comparte lo que hiciste"
                  value={url}
                  onChange={handleUrl}
                  placeholder="URL del proyecto"
                  type="url"
                />
                <TextArea
                  title="Describe lo que hiciste"
                  value={commentSubmission}
                  onChange={handleCommentSubmission}
                  placeholder="Describe el proyecto"
                />
              </div>
            </div>
            <div className={styles.buttonDiv}>
              <Button
                type="button"
                value="Continuar trabajando"
                onClick={onClose}
                role="secondary"
                sm
              />
              <Button
                type="button"
                value="Entregar"
                onClick={submit}
                role="primary"
                sm
              />
            </div>
          </div>
        ) : (
          <div className={styles.notReady}>
            <h2>Ya quiere entregar el proyecto?</h2>
            <p>
              De esta forma, el proyecto concluirá y deberás hacer publicación
              del material creado durante el periodo por tu parte
            </p>
            <div className={styles.buttonDiv}>
              <Button
                type="button"
                value="Continuar trabajando"
                onClick={onClose}
                role="secondary"
                sm
              />
              <Button
                type="button"
                value="Entregar"
                onClick={getReady}
                role="primary"
                sm
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
