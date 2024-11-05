"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ProjectCard from "@/components/ProjectCard";
import styles from "./styles.module.css";

export default function Invites() {
  const router = useRouter();
  const data = [
    {
      id: 1,
      title: "Project Alpha",
      submission_date: "2023-09-30",
      description:
        "A project to develop an alpha version of our new product. This project aims to create the initial version of our innovative product, focusing on core functionalities and foundational features. The team will work closely to ensure the product meets the initial requirements and sets the stage for future development. This phase is crucial for identifying potential challenges and opportunities for improvement.",
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
      urls: [],
    },
    {
      id: 2,
      title: "Project Beta",
      submission_date: "2024-01-15",
      description:
        "A project to develop a beta version of our new product. This project focuses on testing and refining the features developed in the alpha phase. The goal is to identify and fix bugs, improve performance, and ensure the product is ready for a wider audience. This phase is essential for validating the product's functionality and usability.",
      category: {
        id: 2,
        name: "Testing",
      },
      expiration_date: "2024-01-15",
      development_time: "2 months",
      users: [
        {
          id: 2,
          name: "Jane",
          role: "Backend developer",
          last_name: "Smith",
          email: "jane.smith@example.com",
          avatar: "https://i.pravatar.cc/150?img=41",
          communication: 3,
          team_work: 3,
          execution: 4,
        },
      ],
      skills: [
        {
          id: 3,
          name: "Python",
        },
        {
          id: 4,
          name: "Django",
        },
      ],
      difficulty: "Hard",
      urls: [],
    },
    {
      id: 3,
      title: "Project Gamma",
      submission_date: "2024-02-28",
      description:
        "A project to develop a gamma version of our new product. This phase involves conducting extensive research to explore new features and improvements. The team will analyze data, gather insights, and experiment with innovative ideas to enhance the product. This phase is critical for ensuring the product remains competitive and meets the evolving needs of users.",
      category: {
        id: 3,
        name: "Research",
      },
      expiration_date: "2024-02-28",
      development_time: "1 month",
      users: [
        {
          id: 3,
          name: "Alice",
          role: "Data scientist",
          last_name: "Johnson",
          email: "alice.johnson@example.com",
          avatar: "https://i.pravatar.cc/150?img=38",
          communication: 4,
          team_work: 5,
          execution: 4,
        },
      ],
      skills: [
        {
          id: 5,
          name: "Machine Learning",
        },
        {
          id: 6,
          name: "Data Science",
        },
      ],
      difficulty: "Easy",
      bounty: 500,
      urls: [],
    },
  ];

  useEffect(() => {
    fetch("https://asterion.casa/api/v1/projects", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (!token || token === "null" || token === "undefined") {
      router.push("/login");

      return null;
    }
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Invitaciones</h1>
        {data.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        {/* {inviteModal && (
          <InviteModal 
        )} */}
      </main>
    </div>
  );
}
