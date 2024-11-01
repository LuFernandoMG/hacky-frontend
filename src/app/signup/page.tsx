'use client';

import React, { useState } from 'react';
import styles from './styles.module.css';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // Aquí iría la lógica para enviar los datos al backend
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <div className={styles.container}>   
      <div className={styles.logo}>
        <img src="/hacky.svg" alt="Logo de Hacky" width={100} height={100}/> 
      </div>
      <h2 className={styles.title}>Crea una contraseña</h2>
      <p className={styles.subtitle}>Debe tener al menos 10 caracteres.</p><br /> {/* Agrega la descripción */}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>Contraseña</label> <br /> <br />
          <input type="password" id="password" className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="confirmPassword" className={styles.label}>Confirmar contraseña</label> <br /> <br />
          <input type="password" id="confirmPassword" className={styles.input} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <button type="submit" className={styles.button}>Continuar →</button>
        <br />
        <p className={styles.terms}>Al crear una cuenta en Hacky, aceptas los Términos de Servicio y Políticas de privacidad.</p> {/* Agrega los términos */}
      </form>
    </div>
  );
}

export default SignupForm;