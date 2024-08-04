// import {
//   Box,
//   Divider,
//   Typography,
//   Button,
//   Popover,
//   TextField,
//   Stack,
// } from "@mui/material";
// import React, { useState } from "react";
// import DashboardPapers from "../components/DashboardPapers/DashboardPapers";
// import { RecipeService } from "../Services/RecipeService";

// export default function Page() {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [humanMessage, setHumanMessage] = useState("");
//   const [recipe, setRecipe] = useState("");

// const handleRecipeChange = (e) => {
//   setHumanMessage(e.target.value);
// };

// const handleAskRecipe = async (e) => {
//   e.preventDefault();
//   const res_recipe = await RecipeService(humanMessage);
//   setRecipe(res_recipe);
// };

// const handleClick = (event) => {
//   setAnchorEl(event.currentTarget);
// };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? "simple-popover" : undefined;

//   return (
//     <div>
//       <Typography
//         variant="h2"
//         sx={{
//           textAlign: "center",
//         }}
//       >
//         Dashboard
//       </Typography>
//       <Divider />

//       <Box
//         margin="80px 40px"
//         display="flex"
//         flexDirection="column"
//         alignItems="center" // Align items horizontally centered
//         justifyContent="center" // Align items vertically centered
//       >
//         <Typography
//           variant="body1"
//           sx={{
//             textAlign: "justify",
//             marginBottom: 2,
//           }}
// >
//   Welcome to the Smart Pantry Tracker, your ultimate tool for managing
//   pantry items efficiently. Our tracker helps you keep track of
//   inventory, manage quantities, and upload item images seamlessly. With
//   an intuitive interface and real-time updates, you can easily add new
//   items, monitor stock levels, and ensure your pantry is always
//   organized. The Smart Pantry Tracker is designed to make your life
//   easier by simplifying pantry management and providing valuable
//   insights at your fingertips.
//         </Typography>
//         <DashboardPapers />

//         <img
//           src="/Images/masterChefLogo.png"
//           style={{
//             position: "fixed",
//             bottom: 16,
//             right: 16,
//             borderRadius: "50%",
//             width: "150px",
//             height: "150px",
//             cursor: "pointer",
//           }}
//           onClick={handleClick}
//           alt="Master Chef Logo"
//         />

//         <Popover
//           id={id}
//           open={open}
//           anchorEl={anchorEl}
//           onClose={handleClose}
//           anchorOrigin={{
//             vertical: "bottom",
//             horizontal: "right",
//           }}
//           transformOrigin={{
//             vertical: "top",
//             horizontal: "right",
//           }}
//           PaperProps={{
//             sx: {
//               width: "30vw",
//               height: "80vh",
//               display: "flex",
//               flexDirection: "column",
//             },
//           }}
//         >
//           <Box
//             sx={{
//               padding: 2,
//               display: "flex",
//               flexDirection: "column",
//               height: "100%", // Ensure Box takes full height of Popover
//             }}
//           >
//             <Typography variant="h6" sx={{ textAlign: "center" }}>
//               Smart Pantry Tracker Details
//             </Typography>
//             <Divider />
//             <Box sx={{ flex: 1 }}>
//               {/* This box will take all the space except for the footer */}
//               <Stack>
//                 <pre>{recipe}</pre>
//               </Stack>
//             </Box>
//             <Divider />

//             <form onSubmit={handleAskRecipe}>
// <Stack
//   direction={"row"}
//   sx={{
//     justifyContent: "center",
//     alignItems: "center",
//     gap: "20px",
//     position: "sticky", // Use sticky to keep the footer at the bottom
//     bottom: 0,
//     marginTop: 2, // Add some space above the footer
//   }}
// >
// <TextField
//   type="text"
//   variant="outlined"
//   value={humanMessage}
//   onChange={handleRecipeChange}
//   placeholder="Ask Your Recipe"
//   fullWidth
// />
//                 <Button type="submit" variant="outlined">
//                   Ask
//                 </Button>
//               </Stack>
//             </form>
//           </Box>
//         </Popover>
//       </Box>
//     </div>
//   );
// // }
// "use client";

// import {
//   Box,
//   Divider,
//   Typography,
//   Button,
//   Popover,
//   Stack,
//   IconButton,
// } from "@mui/material";
// import React, { useState } from "react";
// import DashboardPapers from "../components/DashboardPapers/DashboardPapers";
// import styles from "../page.module.css";
// import { RecipeService } from "../Services/RecipeService";
// import { IoMdCloseCircle } from "react-icons/io";
// import { auth } from "../../../firebase";

// const parseBoldText = (text) => {
//   const parts = text.split(/\*\*/);

//   return parts.map((part, index) => {
//     if (index % 2 === 1) {
//       return <strong key={index}>{part}</strong>;
//     }
//     return part;
//   });
// };

// export default function Page() {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [recipe, setRecipe] = useState("");

//   async function handleLogOut() {
//     try {
//       await auth.signOut();
//       window.location.href = "/";
//       console.log("user logeed out successfully");
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   const handleAskRecipe = async () => {
//     try {
//       const res_recipe = await RecipeService();
//       setRecipe(res_recipe);
//     } catch (error) {
//       console.error("Error fetching recipes:", error);
//     }
//   };

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? "simple-popover" : undefined;

//   return (
//     <div>
//       <Stack
//         direction={"row"}
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//         }}
//       >
//         <Typography variant="h2">Dashboard</Typography>
//         <Button variant="outlined" onClick={handleLogOut}>
//           Logout
//         </Button>
//       </Stack>

//       <Divider />

//       <Box
//         margin="80px 40px"
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         justifyContent="center"
//       >
//         <Typography
//           variant="body1"
//           sx={{
//             textAlign: "justify",
//             marginBottom: 2,
//           }}
//         >
//           Welcome to the Smart Pantry Tracker, your ultimate tool for managing
//           pantry items efficiently. Our tracker helps you keep track of
//           inventory, manage quantities, and upload item images seamlessly. With
//           an intuitive interface and real-time updates, you can easily add new
//           items, monitor stock levels, and ensure your pantry is always
//           organized. The Smart Pantry Tracker is designed to make your life
//           easier by simplifying pantry management and providing valuable
//           insights at your fingertips.
//         </Typography>
//         <DashboardPapers />

//         <img
//           src="/Images/masterChefLogo.png"
//           style={{
//             position: "fixed",
//             bottom: 16,
//             right: 16,
//             borderRadius: "50%",
//             width: "150px",
//             height: "150px",
//             cursor: "pointer",
//           }}
//           onClick={handleClick}
//           alt="Master Chef Logo"
//         />

//         <Popover
//           id={id}
//           open={open}
//           anchorEl={anchorEl}
//           onClose={handleClose}
//           anchorOrigin={{
//             vertical: "bottom",
//             horizontal: "right",
//           }}
//           transformOrigin={{
//             vertical: "top",
//             horizontal: "right",
//           }}
//           PaperProps={{
//             sx: {
//               width: {
//                 xs: "80vw",
//                 sm: "50vw",
//               },
//               height: "80vh",
//               display: "flex",
//               flexDirection: "column",
//             },
//           }}
//         >
//           <IconButton
//             edge="end"
//             color="inherit"
//             onClick={handleClose}
//             sx={{
//               position: "absolute",
//               top: 8,
//               right: 8,
//             }}
//           >
//             <IoMdCloseCircle />
//           </IconButton>
//           <Box
//             sx={{
//               padding: 2,
//               display: "flex",
//               flexDirection: "column",
//               height: "100%",
//             }}
//           >
//             <Typography variant="h6" sx={{ textAlign: "center" }}>
//               Smart Pantry Tracker Details
//             </Typography>
//             <Divider />
//             <Box sx={{ flex: 1 }}>
//               <Stack>
//                 <pre className={styles.pre}> {parseBoldText(recipe)}</pre>
//               </Stack>
//             </Box>
//             <Divider />

//             <Stack
//               direction={"row"}
//               sx={{
//                 justifyContent: "center",
//                 alignItems: "center",
//                 gap: "20px",
//                 position: "sticky",
//                 bottom: 5,
//                 marginTop: 2,
//               }}
//             >
//               <Button variant="outlined" onClick={handleAskRecipe}>
//                 Ask
//               </Button>
//             </Stack>
//           </Box>
//         </Popover>
//       </Box>
//     </div>
//   );
// }
"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Divider,
  Typography,
  Button,
  Popover,
  Stack,
  IconButton,
} from "@mui/material";
import DashboardPapers from "../components/DashboardPapers/DashboardPapers";
import styles from "../page.module.css";
import { RecipeService } from "../Services/RecipeService";
import { IoMdCloseCircle } from "react-icons/io";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../../firebase";
import { GiKnifeFork } from "react-icons/gi";

const parseBoldText = (text) => {
  const parts = text.split(/\*\*/);

  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return <strong key={index}>{part}</strong>;
    }
    return part;
  });
};

export default function UserDashboard({ userFirstName }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [recipe, setRecipe] = useState("");
  const [pantryItems, setPantryItems] = useState([]);
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      console.log("User UID:", user.uid); // Log the UID to verify

      const fetchPantryItems = async () => {
        try {
          // Reference to the user's document in the pantry collection
          const docRef = doc(firestore, "pantry", user.uid);

          console.log("Document reference:", docRef.path);

          // Fetch the document
          const docSnapshot = await getDoc(docRef);

          if (docSnapshot.exists()) {
            console.log("Document data:", docSnapshot.data());

            // Access the 'items' field
            const items = docSnapshot.get("items");

            if (items) {
              // Convert the items object to an array of item names
              const itemNames = Object.keys(items).map(
                (key) => items[key].name || key
              );
              console.log("Items field data:", itemNames);
              setPantryItems(itemNames);
            } else {
              console.log("No 'items' field found in the document.");
              setPantryItems([]);
            }
          } else {
            console.log("No document found with the specified UID.");
            setPantryItems([]);
          }
        } catch (error) {
          console.error("Error fetching data from Firestore:", error);
        }
      };

      fetchPantryItems();
    } else {
      console.warn("No user is logged in");
    }
  }, [user]);

  const handleLogOut = async () => {
    try {
      await auth.signOut();
      window.location.href = "/";
      console.log("User logged out successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const handleAskRecipe = async () => {
    try {
      // Send pantryItems to the RecipeService
      const res_recipe = await RecipeService(pantryItems);
      setRecipe(res_recipe);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box>
      <Stack
        direction={"row"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h2">Dashboard</Typography>
        <Button variant="standard" onClick={handleLogOut}>
          Logout
        </Button>
      </Stack>

      <Divider />

      <Box
        margin="40px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h4">
          Welcome to Smart Pantry Tracker, {userFirstName}!
        </Typography>
        <br />
        <Typography
          variant="body1"
          sx={{
            textAlign: "justify",
            marginBottom: 2,
          }}
        >
          We&apos;re excited to have you on board as you manage and explore your
          pantry like never before. With our intuitive platform, you can
          effortlessly store and organize your pantry items, and thanks to our
          integration with Gemini AI, you can now get personalized recipe
          suggestions based on the ingredients you have. Dive in and let us help
          you make the most out of your pantry!
        </Typography>

        <DashboardPapers />

        {/* <img
          src="/Images/masterChefLogo.png"
          style={{
            position: "fixed",
            bottom: 16,
            right: 16,
            borderRadius: "50%",
            width: "150px",
            height: "150px",
            cursor: "pointer",
          }}
          onClick={handleClick}
          alt="Master Chef Logo"
        /> */}
        <GiKnifeFork
          style={{
            position: "fixed",
            bottom: 16,
            right: 16,
            borderRadius: "50%",
            width: "100px",
            height: "100px",
            cursor: "pointer",
            background: "black",
            color: "white",
          }}
          onClick={handleClick}
          alt="Master Chef Logo"
        />

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          PaperProps={{
            sx: {
              width: {
                xs: "80vw",
                sm: "50vw",
              },
              height: "80vh",
              display: "flex",
              flexDirection: "column",
              bgColor: "#FFFFFF",
              color: "#212121",
            },
          }}
        >
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
            }}
          >
            <IoMdCloseCircle />
          </IconButton>
          <Box
            sx={{
              padding: 2,
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              Smart Pantry Tracker Details
            </Typography>
            <Divider
              sx={{
                bgColor: "#E0E0E0",
              }}
            />
            <Box sx={{ flex: 1, padding: 2 }}>
              <Stack>
                <pre className={styles.pre}>{parseBoldText(recipe)}</pre>
              </Stack>
            </Box>

            <Stack
              direction={"column"}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                position: "sticky",
                bottom: 5,
                backgroundColor: "#E0E0E0",
              }}
            >
              <Button variant="outlined" onClick={handleAskRecipe} fullWidth>
                Ask
              </Button>
            </Stack>
          </Box>
        </Popover>
      </Box>
    </Box>
  );
}
