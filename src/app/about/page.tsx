"use client";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  const token = localStorage.getItem("token");
  if (!token || token === "null" || token === "undefined") {
    router.push("/login");

    return null;
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Presentamos Hacky: Revolucionando la Educación en Equipo</h1>

        <p>¡Hola, comunidad de Platzi!</p>
        <p>
          Estamos emocionados de presentarles Hacky, nuestro proyecto en la
          Hackatón de Platzi que busca transformar la forma en que aprendemos y
          colaboramos. Si alguna vez has sentido que aprender en solitario no es
          suficiente, ¡Hacky es para ti!
        </p>

        <h2>¿Qué es Hacky?</h2>
        <p>
          Hacky es una plataforma innovadora que convierte la educación en un
          proceso de creación de conocimiento en equipos de alto rendimiento.
          Creemos que las personas aprenden mejor haciendo y, sobre todo,
          haciendo en equipo. Nuestro objetivo es revolucionar el aprendizaje en
          áreas como: Inteligencia Artificial, Ciberseguridad, Inglés y
          fortalecer las habilidades blandas de cada participante.
        </p>

        <h2>¿Cómo funciona?</h2>
        <ol>
          <li>
            <strong>Regístrate y crea tu perfil:</strong> Cuéntanos sobre tus
            habilidades, intereses y objetivos de aprendizaje.
          </li>
          <li>
            <strong>Conéctate con la comunidad:</strong> Hacky utiliza
            inteligencia artificial para emparejarte con otros estudiantes con
            habilidades complementarias.
          </li>
          <li>
            <strong>Participa en proyectos reales:</strong> Forma equipos para
            resolver desafíos prácticos y aprende mientras creas soluciones
            innovadoras.
          </li>
          <li>
            <strong>Desarrolla habilidades blandas:</strong> Mejora tu
            comunicación, liderazgo y trabajo en equipo al colaborar con otros.
          </li>
        </ol>

        <h2>¿Por qué Hacky es diferente?</h2>
        <ul>
          <li>
            <strong>Aprendizaje Colaborativo:</strong> Fomentamos la creación de
            equipos competitivos que potencian el aprendizaje colectivo.
          </li>
          <li>
            <strong>Enfoque en Habilidades Blandas:</strong> Más allá de los
            conocimientos técnicos, fortalecemos competencias esenciales para el
            mundo laboral actual.
          </li>
          <li>
            <strong>Proyectos Reales:</strong> Trabaja en desafíos auténticos
            que te preparan para situaciones del mundo real.
          </li>
        </ul>

        <h2>Conoce al Equipo Hacky</h2>
        <p>
          Somos un grupo de entusiastas de la tecnología y la educación
          comprometidos con transformar la forma en que aprendemos:
        </p>
        <ul>
          <li>
            <strong>Harby:</strong> Nuestro Project Manager, apasionado por
            conectar ideas y personas para lograr grandes cosas.
          </li>
          <li>
            <strong>Sebastián:</strong> Experto en backend, constructor de las
            bases sólidas de Hacky.
          </li>
          <li>
            <strong>Luis:</strong> Mago del frontend, crea interfaces que
            encantan a los usuarios.
          </li>
          <li>
            <strong>Mauricio:</strong> Diseñador UX/UI, enfocado en brindar la
            mejor experiencia de usuario.
          </li>
          <li>
            <strong>Eduardo:</strong> Especialista en Inteligencia Artificial,
            da vida a los agentes inteligentes de Hacky.
          </li>
        </ul>

        <h2>¿Cómo puedes apoyarnos?</h2>
        <ul>
          <li>
            Vota por Hacky en la Hackatón de Platzi y ayúdanos a llevar este
            proyecto al siguiente nivel.
          </li>
          <li>
            Comparte nuestro proyecto en tus redes sociales y con tus amigos
            para que más personas conozcan Hacky.
          </li>
          <li>
            Únete a nuestra comunidad y sé parte de la transformación educativa.
          </li>
        </ul>

        <h2>Conclusión</h2>
        <p>
          Hacky es más que una plataforma; es una comunidad que cree en el poder
          del aprendizaje colaborativo. Juntos, podemos revolucionar la
          educación y crear un futuro donde aprendamos haciendo y creciendo en
          equipo.
        </p>
        <p>¡Gracias por tu apoyo y por ser parte de esta aventura!</p>
      </main>
    </div>
  );
}
