import React from "react"
import styles from "./Footer.module.css"

export default () => (
  <footer className={styles.footer}>
    <div className="container">
      <span className="text-dark">
        {String.fromCharCode(169)} 2020 {String.fromCharCode(8213)}{" "}
        Gatsby-Boostrap Project
      </span>
    </div>
  </footer>
)
