"use client";

import { useState } from "react";
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
  const [country, setCountry] = useState("");
  const [biography, setBiography] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkbox, setCheckbox] = useState<boolean>(false);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // Aquí iría la lógica para enviar los datos al backend
    console.log('name ', name);
    console.log('LastName ', lastName);
    console.log('country ', country);
    console.log('biography ', biography);
    console.log('interests ', interests);
    console.log('skills ', skills);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("checkbox:", checkbox);
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
            value="Continuar →"
            type="submit"
            role="primary"
          />
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
