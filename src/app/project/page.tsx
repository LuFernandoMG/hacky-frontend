"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal";
import Pill from "@/components/Pill";
import Tags from "@/components/Tags";
import ProjectSteps from "@/components/ProjectSteps";
import styles from "./styles.module.css";
import Button from "@/components/Button";
import Message from "@/components/Message";
import { MdSend, MdChat, MdClose } from "react-icons/md";
import Image from "next/image";

const chatMessages = [
  {
    id: 1,
    user: {
      id: 1,
      name: "John",
      last_name: "Doe",
      role: "Frontend developer",
      email: "john.doe@example.com",
      avatar: "https://i.pravatar.cc/150?img=60",
    },
    message:
      "Oiga parce! Qué tal todo? Todo bien? Cómo nos ponemos con el proyecto?",
    timestamp: "2023-09-01T10:00:00Z",
  },
  {
    id: 2,
    user: {
      id: 2,
      name: "Jane",
      last_name: "Smith",
      role: "Backend developer",
      email: "jane.smith@example.com",
      avatar: "https://i.pravatar.cc/150?img=61",
    },
    message:
      "Yo estoy libre para que podamos ponernos a conversar de esto a las 4pm (GMT-3), te parece bien?",
    timestamp: "2023-09-01T10:05:00Z",
  },
  {
    id: 3,
    user: {
      id: 1,
      name: "John",
      last_name: "Doe",
      role: "Frontend developer",
      email: "john.doe@example.com",
      avatar: "https://i.pravatar.cc/150?img=60",
    },
    message: "De una! Nos vemos a esa hora",
    timestamp: "2023-09-01T10:10:00Z",
  },
  {
    id: 4,
    user: {
      id: 2,
      name: "Jane",
      last_name: "Smith",
      role: "Backend developer",
      email: "jane.smith@example.com",
      avatar: "https://i.pravatar.cc/150?img=61",
    },
    message:
      "Me libré un poco antes, quieres conversar ya y así distribuimos los puntos?",
    timestamp: "2023-09-01T10:15:00Z",
  },
  {
    id: 5,
    user: {
      id: 1,
      name: "John",
      last_name: "Doe",
      role: "Frontend developer",
      email: "john.doe@example.com",
      avatar: "https://i.pravatar.cc/150?img=60",
    },
    message: "Dale! Ya te paso el enlace de un google meets",
    timestamp: "2023-09-01T10:10:00Z",
  },
  {
    id: 6,
    user: {
      id: 2,
      name: "Jane",
      last_name: "Smith",
      role: "Backend developer",
      email: "jane.smith@example.com",
      avatar: "https://i.pravatar.cc/150?img=61",
    },
    message: "Vale, lo espero",
    timestamp: "2023-09-01T10:15:00Z",
  },
];

export default function Project() {
  const [activeChat, setActiveChat] = useState<boolean>(false);
  const [messages, setMessages] = useState(chatMessages);
  const [inputValue, setInputValue] = useState("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [ready, setReady] = useState<boolean>(false);

  const router = useRouter();

  const project = {
    id: 1,
    title: "Project Alpha",
    submission_date: "2023-09-30",
    description:
      "Project Alpha is an ambitious initiative aimed at developing the alpha version of our groundbreaking new product. This project is designed to lay the foundation for a revolutionary product that promises to transform the industry. The primary objective is to create a robust and functional initial version that encapsulates the core features and functionalities envisioned for the final product. The development team will engage in rigorous planning, coding, and testing to ensure that the product meets the high standards set by our organization. Throughout this phase, the team will focus on identifying and addressing potential challenges, optimizing performance, and ensuring scalability. The project will also involve close collaboration with stakeholders to gather feedback and make necessary adjustments. This phase is critical as it sets the stage for subsequent development phases, providing valuable insights and paving the way for future enhancements. By the end of this phase, we aim to have a solid alpha version that not only meets the initial requirements but also serves as a strong foundation for future iterations. The success of Project Alpha will be measured by its ability to deliver a functional and reliable product that aligns with our strategic goals and exceeds user expectations.",
    category: {
      id: 1,
      name: "Development",
    },
    expiration_date: "2023-12-31",
    development_time: "3 months",
    users: [
      {
        id: 1,
        name: "John",
        last_name: "Doe",
        role: "Frontend developer",
        email: "john.doe@example.com",
        avatar: "https://i.pravatar.cc/150?img=60",
        communication: 5,
        team_work: 5,
        execution: 4,
      },
    ],
    skills: [
      {
        id: 1,
        name: "JavaScript",
      },
      {
        id: 2,
        name: "React",
      },
    ],
    difficulty: "Medium",
    bounty: 500,
    urls: ["https://www.google.com", "https://www.google.com"],
    steps: [
      {
        id: 1,
        done: false,
        step: "Initial planning and requirement gathering",
      },
      {
        id: 2,
        done: false,
        step: "Designing the architecture and user interface",
      },
      {
        id: 3,
        done: false,
        step: "Setting up the development environment",
      },
      {
        id: 4,
        done: false,
        step: "Implementing core functionalities",
      },
      {
        id: 5,
        done: false,
        step: "Conducting initial testing and debugging",
      },
      {
        id: 6,
        done: false,
        step: "Gathering feedback from stakeholders",
      },
      {
        id: 7,
        done: false,
        step: "Making necessary adjustments based on feedback",
      },
      {
        id: 8,
        done: false,
        step: "Final testing and quality assurance",
      },
      {
        id: 9,
        done: false,
        step: "Preparing for the alpha release",
      },
      {
        id: 10,
        done: false,
        step: "Releasing the alpha version to selected users",
      },
    ],
  };

  const onCheckboxChange = () => {};
  const submitMessage = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const date = new Date();
    const timestamp = date.toISOString();
    setMessages([
      ...messages,
      {
        id: messages[messages.length - 1].id + 1,
        user: {
          id: 2,
          name: "John",
          last_name: "Doe",
          role: "Frontend developer",
          email: "john.doe@example.com",
          avatar: "https://i.pravatar.cc/150?img=60",
        },
        message: inputValue,
        timestamp,
      },
    ]);
    setInputValue("");
  };

  const submitProject = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setReady(false);
  };

  const handleReady = () => {
    setReady(true);
  };

  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (!token || token === "null" || token === "undefined") {
      router.push("/login");

      return null;
    }
  }

  const handleChat = () => {
    setActiveChat(!activeChat);
  }

  const isMobile = (typeof window !== "undefined") && window.innerWidth < 768;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
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
          <ProjectSteps steps={project.steps} handleChange={onCheckboxChange} />
          <div className={styles.submission}>
            {isMobile && (
              <button onClick={handleChat} className={activeChat ? styles.chatButtonActive : styles.chatButton} type="button">
                {activeChat ? <MdClose /> : <MdChat />}
              </button>
            )}
            <Button
              value="Enviar project"
              onClick={submitProject}
              role="primary"
              type="button"
            />
          </div>
        </div>
        <div className={activeChat ? styles.rightColumnActive : styles.rightColumn}>
          <div className={styles.chatWindow}>
            <div className={styles.chatContainer}>
              <div className={styles.chatHeader}>
                <Image
                  src={project.users[0].avatar}
                  alt={`${project.users[0].name} ${project.users[0].last_name}`}
                  width={40}
                  height={40}
                />
                <div>
                  <strong>
                    {project.users[0].name} {project.users[0].last_name}
                  </strong>
                  <p>{project.users[0].role}</p>
                </div>
              </div>
              <div className={styles.chatMessages}>
                {messages.map((message) => (
                  <Message
                    key={message.id}
                    user={message.user}
                    message={message.message}
                    timestamp={message.timestamp}
                  />
                ))}
              </div>
              <form onSubmit={submitMessage}>
                <div className={styles.chatInput}>
                  <input
                    value={inputValue}
                    type="text"
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type a message..."
                  />
                  <button type="submit">
                    <MdSend />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      {showModal && (
        <Modal
          onClose={handleClose}
          getReady={handleReady}
          ready={ready}
          projectId={project.id}
        />
      )}
    </div>
  );
}
