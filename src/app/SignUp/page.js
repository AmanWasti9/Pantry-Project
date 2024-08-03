"use client";

import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, firestore } from "../../../firebase";
import { setDoc, doc } from "firebase/firestore";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {
  Button,
  Divider,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import NavBar from "../components/NavBar/NavBar";

export default function SignUp({ onSwitchToLogIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const handleSnackbarClose = () => setSnackbarOpen(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(firestore, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
        });
      }
      setEmail("");
      setPassword("");
      setFname("");
      setLname("");
      setSnackbarMessage("User Registered successfully!");
      setSnackbarOpen(true);

      // Delay the switch to login to allow Snackbar to display
      setTimeout(() => {
        setSnackbarOpen(false);
        onSwitchToLogIn();
      }, 3000); // Adjust the delay time as needed
    } catch (error) {
      console.log(error.message);
      setSnackbarMessage("Registration failed. Please try again.");
      setSnackbarOpen(true);
    }
  };

  return (
    <div>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          "& > :not(style)": {
            width: {
              xs: "70vw",
              md: "30vw",
            },
            p: 5,
          },
        }}
      >
        <Paper elevation={3}>
          <h2 style={{ textAlign: "center" }}>Sign Up</h2>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            autoHideDuration={6000} // Adjust the duration as needed
            open={snackbarOpen}
            onClose={handleSnackbarClose}
            message={snackbarMessage}
          />
          <form onSubmit={handleRegister}>
            <Stack
              direction={"column"}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <TextField
                type="text"
                variant="outlined"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                label="First name"
                fullWidth
              />
              <TextField
                type="text"
                variant="outlined"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                label="Last name"
                fullWidth
              />
              <TextField
                type="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email Address"
                fullWidth
              />
              <TextField
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                fullWidth
              />
              <Divider
                sx={{
                  bgColor: "black",
                  width: "100%",
                }}
              />
              <Typography variant="p">
                Already Registered?{" "}
                <Button onClick={onSwitchToLogIn}>Log In</Button>
              </Typography>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{
                  background: "#2a3c47",
                }}
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Paper>
      </Box>
    </div>
  );
}
