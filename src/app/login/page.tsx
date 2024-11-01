"use client";

import { useState } from "react";
import Link from "next/link";
import Input from "@/components/Input";
import Button from "@/components/Button";
import styles from "./styles.module.css";
import Image from "next/image";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault(); // Evita que la página se recargue
    // Aquí iría la lógica para enviar los datos al backend
    console.log("Email:", email);
    console.log("Password:", password);
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
        No tienes una cuenta aún? <Link href="/signup">Registrate aquí</Link>
      </p>
    </div>
  );
}

export default LoginForm;
