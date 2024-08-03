// import styles from "./page.module.css";

// export default function Home() {
//   return <main className={styles.main}></main>;
// }

"use client";

import React, { useState } from "react";
import SignUp from "./SignUp/page";
import LogIn from "./LogIn/page";

export default function Home() {
  const [showSignUp, setShowSignUp] = useState(true);

  const toggleForm = () => {
    setShowSignUp((prev) => !prev);
  };

  return (
    <>
      {showSignUp ? (
        <SignUp onSwitchToLogIn={toggleForm} />
      ) : (
        <LogIn onSwitchToSignUp={toggleForm} />
      )}
    </>
  );
}
