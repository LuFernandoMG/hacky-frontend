"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import InputTags from "@/components/InputTags";
import CountrySelect from "@/components/Country";
import TextArea from "@/components/TextArea";
import styles from "./styles.module.css";

function SignupForm() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("Argentina");
  const [biography, setBiography] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkbox, setCheckbox] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // Aquí iría la lógica para enviar los datos al backend
    try {
      fetch("https://asterion.casa/api/v1/learners/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          last_name: lastName,
          country,
          biography,
          interests,
          skills,
          email,
          password,
          password_confirmation: confirmPassword,
          experience_level: "beginner",
        }),
      }).then((response) => {
        const data = response.json();
        data.then(() => {
          router.push("/login");
        });
      });
    } catch (error) {
      console.error("Error al registrar el usuario: ", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/hacky.svg" alt="Logo de Hacky" width={300} height={100} />
      </div>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Regístrate</h1>
        <p className={styles.signupLink}>
          Ya tienes una cuenta? <Link href="/signup">Inicia sesión aquí</Link>
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            title="Nombre"
            type="text"
            placeholder="I.E. Juan"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            title="Apellido"
            type="text"
            placeholder="I.E. Pérez"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <CountrySelect
            title="País"
            value={country}
            onChange={(value: string) => setCountry(value)}
          />
          <TextArea
            title="Biografía"
            placeholder="I.E. Soy un desarrollador web con 5 años de experiencia...  (Max: 500 caracteres)"
            value={biography}
            onChange={(e) => setBiography(e.target.value)}
          />
          <InputTags
            title="Intereses"
            limit={5}
            placeholder="I.E. Programación, Diseño, Marketing"
            tags={interests}
            setTags={setInterests}
          />
          <InputTags
            title="Habilidades"
            limit={15}
            tags={skills}
            setTags={setSkills}
            placeholder="I.E. JavaScript, React, Node.js"
          />
          <Input
            title="Correo electrónico"
            type="email"
            placeholder="I.E. juan@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            title="Contraseña"
            type="password"
            placeholder="************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            title="Confirmar contraseña"
            type="password"
            placeholder="************"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className={styles.agreements}>
            <Checkbox
              checked={checkbox}
              onChange={() => setCheckbox(!checkbox)}
            />
            <p>
              Al ingresar en la plataforma aceptas nuestras políticas de uso y
              privacidad
            </p>
          </div>
          <Button
            disabled={
              email.length <= 0 ||
              password.length <= 0 ||
              confirmPassword !== password ||
              name.length <= 0 ||
              lastName.length <= 0 ||
              country.length <= 0 ||
              skills.length <= 0 ||
              interests.length <= 0 ||
              biography.length <= 0 ||
              !checkbox
            }
            value="Registrar →"
            type="submit"
            role="primary"
          />
          {email.length <= 0 && <span>Email debe ser válido</span>}
          {password.length <= 0 && <span>Debes agregar una contraseña</span>}
          {(confirmPassword.length <= 0 || confirmPassword !== password) && <span>Debes confirmar tu contraseña correctamente</span>}
          {name.length <= 0 && <span>Nombre debe ser válido</span>}
          {lastName.length <= 0 && <span>Apellido debe ser válido</span>}
          {country.length <= 0 && <span>País debe ser válido</span>}
          {biography.length <= 0 && <span>Debes incluir una biografía</span>}
          {skills.length <= 0 && <span>Debes incluir al menos una habilidad</span>}
          {interests.length <= 0 && <span>Debes incluir al menos un interés</span>}
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
