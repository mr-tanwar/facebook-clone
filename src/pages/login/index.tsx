import React from "react";
import styles from "./login.module.css";

import Image from "next/image";
import LoginForm from "@/components/login/loginForm/LoginForm";
function LoginPage() {
  return (
    <div className="container">
      <div className={`grid gutter-lg ${styles.wrapper}`}>
        <div className={`col-4 col-sm-12 ${styles.logoContainer} `}>
          <div className={styles.logoContainer}>
            <Image
              src="/facebook_text_logo.svg"
              alt="fb logo"
              width={320}
              height={106}
            />
          </div>

          <h2 className={styles.header}>
            Facebook helps you connect and share with the people in your life.
          </h2>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
