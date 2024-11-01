'use client';

import React, { useState } from 'react';
import styles from './styles.module.css';


function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault(); // Evita que la página se recargue
    // Aquí iría la lógica para enviar los datos al backend
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className={styles.container}>   
      <div className={styles.logo}>
      <img src="/hacky.svg" alt="Logo de Hacky" width={100} height={100}/> 
      </div>
      <h2 className={styles.title}>Ingresar o crear una cuenta con:</h2>
      <form className={styles.form} onSubmit={handleSubmit}> {/* Agrega onSubmit aquí */}
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Correo electrónico</label> <br /> <br />
          <input type="email" id="email" className={styles.input} />
        </div>
        <button type="submit" className={styles.button}>Continuar →</button>
      </form>
      <div className={styles.socialLogin}>
        <p>Con Google, Apple o Facebook</p>
      </div>
    </div>
  );
}

export default LoginForm;