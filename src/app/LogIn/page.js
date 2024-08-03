// "use client";

// import { signInWithEmailAndPassword } from "firebase/auth";
// import React, { useState } from "react";
// import { auth } from "../../../firebase";
// import { Stack, TextField, Button } from "@mui/material";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import { useRouter } from "next/navigation";

// export default function LogIn({ onSwitchToSignUp }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       console.log("User Logged In successfully");
//       router.push("/Dashboard");
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   return (
//     <div>
//       <Box
//         sx={{
//           display: "flex",
//           flexWrap: "wrap",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "100vh",
//           "& > :not(style)": {
//             m: 2,
//             width: {
//               xs: "80vw",
//               md: "50vw",
//             },
//             p: 5,
//           },
//         }}
//       >
//         <Paper elevation={3}>
//           <h2>Log In</h2>
//           <br />

//           <form onSubmit={handleSubmit}>
//             <Stack
//               direction={"column"}
//               sx={{
//                 justifyContent: "center",
//                 alignItems: "center",
//                 gap: "20px",
//               }}
//             >
//               <TextField
//                 type="email"
//                 variant="outlined"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 label="Email Address"
//                 fullWidth
//               />
//               <TextField
//                 type="password"
//                 variant="outlined"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 label="Password"
//                 fullWidth
//               />
//               <Button type="submit" variant="contained" fullWidth>
//                 Submit
//               </Button>
//               <Button onClick={onSwitchToSignUp}>
//                 Don't have an account? Sign Up
//               </Button>
//             </Stack>
//           </form>
//         </Paper>
//       </Box>
//     </div>
//   );
// }
// "use client";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
// import { auth, firestore } from "../../../firebase";
// import React, { useState } from "react";
// import { Stack, TextField, Button } from "@mui/material";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import { useRouter } from "next/navigation";
// import NavBar from "../components/NavBar/NavBar";

// export default function LogIn({ onSwitchToSignUp }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;

//       // Create a document for the user if it doesn't exist
//       await setDoc(
//         doc(firestore, "users", user.uid),
//         {
//           email: user.email,
//           pantryInitialized: false,
//         },
//         { merge: true }
//       );

//       console.log("User Logged In successfully");
//       router.push("/Dashboard");
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   return (
//     <div>
//       <NavBar />
//       <Box
//         sx={{
//           display: "flex",
//           flexWrap: "wrap",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "100vh",
//           "& > :not(style)": {
//             width: {
//               xs: "70vw",
//               md: "30vw",
//             },
//             p: 5,
//           },
//         }}
//       >
//         <Paper elevation={3}>
//           <h2
//             style={{
//               textAlign: "center",
//             }}
//           >
//             Log In
//           </h2>
//           <br />

//           <form onSubmit={handleSubmit}>
//             <Stack
//               direction={"column"}
//               sx={{
//                 justifyContent: "center",
//                 alignItems: "center",
//                 gap: "20px",
//               }}
//             >
//               <TextField
//                 type="email"
//                 variant="outlined"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 label="Email Address"
//                 fullWidth
//               />
//               <TextField
//                 type="password"
//                 variant="outlined"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 label="Password"
//                 fullWidth
//               />
//               <Button type="submit" variant="contained" fullWidth>
//                 Submit
//               </Button>
//               <Button onClick={onSwitchToSignUp}>
//                 Don't have an account? Sign Up
//               </Button>
//             </Stack>
//           </form>
//         </Paper>
//       </Box>
//     </div>
//   );
// }

// "use client";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
// import { auth, firestore } from "../../../firebase";
// import React, { useState } from "react";
// import { Stack, TextField, Button } from "@mui/material";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import { useRouter } from "next/navigation";
// import NavBar from "../components/NavBar/NavBar";

// export default function LogIn({ onSwitchToSignUp }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;

//       // Create a document for the user if it doesn't exist
//       await setDoc(
//         doc(firestore, "users", user.uid),
//         {
//           email: user.email,
//           pantryInitialized: false,
//         },
//         { merge: true }
//       );

//       console.log("User Logged In successfully");
//       router.push("/Dashboard");
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   return (
//     <div>
//       <NavBar />
//       <Box
//         sx={{
//           display: "flex",
//           flexWrap: "wrap",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "100vh",
//           "& > :not(style)": {
//             width: {
//               xs: "70vw",
//               md: "30vw",
//             },
//             p: 5,
//           },
//         }}
//       >
//         <Paper elevation={3}>
//           <h2
//             style={{
//               textAlign: "center",
//             }}
//           >
//             Log In
//           </h2>
//           <br />

//           <form onSubmit={handleSubmit}>
//             <Stack
//               direction={"column"}
//               sx={{
//                 justifyContent: "center",
//                 alignItems: "center",
//                 gap: "20px",
//               }}
//             >
//               <TextField
//                 type="email"
//                 variant="outlined"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 label="Email Address"
//                 fullWidth
//               />
//               <TextField
//                 type="password"
//                 variant="outlined"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 label="Password"
//                 fullWidth
//               />
//               <Button type="submit" variant="contained" fullWidth>
//                 Submit
//               </Button>
//               <Button onClick={onSwitchToSignUp}>
//                 Don't have an account? Sign Up
//               </Button>
//             </Stack>
//           </form>
//         </Paper>
//       </Box>
//     </div>
//   );
// }

// "use client";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
// import { auth, firestore } from "../../../firebase";
// import React, { useState } from "react";
// import { Stack, TextField, Button } from "@mui/material";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import { useRouter } from "next/navigation";
// import NavBar from "../components/NavBar/NavBar";
// import LinearProgress from "@mui/material/LinearProgress";

// export default function LogIn({ onSwitchToSignUp }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false); // Loading state
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Start loading

//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;

//       // Create a document for the user if it doesn't exist
//       await setDoc(
//         doc(firestore, "Users", user.uid),
//         {
//           email: user.email,
//           pantryInitialized: false,
//         },
//         { merge: true }
//       );

//       console.log("User Logged In successfully");
//       router.push("/Dashboard");
//     } catch (error) {
//       console.log(error.message);
//     } finally {
//       setLoading(false); // End loading
//     }
//   };

//   return (
//     <div>
//       <NavBar />
//       <Box
//         sx={{
//           display: "flex",
//           flexWrap: "wrap",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "100vh",
//           "& > :not(style)": {
//             width: {
//               xs: "70vw",
//               md: "30vw",
//             },
//             p: 5,
//           },
//         }}
//       >
//         <Paper elevation={3}>
//           {loading && <LinearProgress />} {/* Show loader when loading */}
//           <h2 style={{ textAlign: "center" }}>Log In</h2>
//           <br />
//           <form onSubmit={handleSubmit}>
//             <Stack
//               direction={"column"}
//               sx={{
//                 justifyContent: "center",
//                 alignItems: "center",
//                 gap: "20px",
//               }}
//             >
//               <TextField
//                 type="email"
//                 variant="outlined"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 label="Email Address"
//                 fullWidth
//               />
//               <TextField
//                 type="password"
//                 variant="outlined"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 label="Password"
//                 fullWidth
//               />
//               <Button
//                 type="submit"
//                 variant="contained"
//                 fullWidth
//                 sx={{
//                   background: "#2a3c47",
//                 }}
//               >
//                 Submit
//               </Button>
//               <Button onClick={onSwitchToSignUp}>
//                 Don't have an account? Sign Up
//               </Button>
//             </Stack>
//           </form>
//         </Paper>
//       </Box>
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, firestore } from "../../../firebase";
import { Stack, TextField, Button, Snackbar, Alert } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useRouter } from "next/navigation";
import NavBar from "../components/NavBar/NavBar";
import LinearProgress from "@mui/material/LinearProgress";

export default function LogIn({ onSwitchToSignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const [openSnackbar, setOpenSnackbar] = useState(false); // Snackbar open state
  const [snackbarMessage, setSnackbarMessage] = useState(""); // Snackbar message
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Create a document for the user if it doesn't exist
      await setDoc(
        doc(firestore, "Users", user.uid),
        {
          email: user.email,
          pantryInitialized: false,
        },
        { merge: true }
      );

      console.log("User Logged In successfully");
      router.push("/Dashboard");
    } catch (error) {
      console.log(error.message);
      setSnackbarMessage("Invalid User Details");
      setOpenSnackbar(true); // Open Snackbar on error
    } finally {
      setLoading(false); // End loading
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false); // Close Snackbar
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
          {loading && <LinearProgress />} {/* Show loader when loading */}
          <h2 style={{ textAlign: "center" }}>Log In</h2>
          <br />
          <form onSubmit={handleSubmit}>
            <Stack
              direction={"column"}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
            >
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
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  background: "#2a3c47",
                }}
              >
                Submit
              </Button>
              <Button onClick={onSwitchToSignUp}>
                Don't have an account? Sign Up
              </Button>
            </Stack>
          </form>
        </Paper>
      </Box>

      {/* Snackbar for error messages */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="error">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
