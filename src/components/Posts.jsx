import React from "react";
import styles from "../styling/Posts.module.css"

export default function Posts({name, email, title, entry}) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.name}>{name}</p>
      <p className={styles.email}>{email}</p>
      <p className={styles.entry}>{entry}</p>
    </div>
  );
}