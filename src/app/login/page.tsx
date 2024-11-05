"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Input from "@/components/Input";
import Button from "@/components/Button";
import styles from "./styles.module.css";
import Image from "next/image";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    const userAgent = navigator.userAgent;
    let device = "Desktop";
    if (/Mobi|Android/i.test(userAgent)) {
      device = "Mobile";
    } else if (/Tablet|iPad/i.test(userAgent)) {
      device = "Tablet";
    }

    event.preventDefault(); // Evita que la página se recargue
    try {
      fetch("https://asterion.casa/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.toLowerCase(),
          password,
          name: device,
        }),
      }).then((response) => {
        const data = response.json();
        data.then((result) => {
          localStorage.setItem("token", result.token);
          router.push("/");
        });
      });
    } catch (error) {
      console.error("Error al iniciar sesión: ", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/hacky.svg" alt="Logo de Hacky" width={300} height={100} />
      </div>
      <h2 className={styles.title}>Bienvenido!</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
          type="email"
          id="email"
        />
        {email && (
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            type="password"
            id="password"
          />
        )}
        <Button
          disabled={email.length <= 0 || password.length <= 0}
          value="Continuar →"
          type="submit"
          role="primary"
        />
      </form>
      <p className={styles.signupLink}>
        No tienes una cuenta aún? <Link href="/signup">Regístrate aquí</Link>
      </p>
    </div>
  );
}

export default LoginForm;
