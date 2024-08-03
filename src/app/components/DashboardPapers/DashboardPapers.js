// "use client";

// import React, { useEffect, useState } from "react";
// import { Box, Typography } from "@mui/material";
// import Paper from "@mui/material/Paper";
// import { collection, onSnapshot } from "firebase/firestore";
// import { firestore } from "../../../../firebase";
// import CountUp from 'react-countup';

// export default function DashboardPapers() {
//   const [totalDocuments, setTotalDocuments] = useState(0);
//   const [startAnimation, setStartAnimation] = useState(false);

//   useEffect(() => {
//     setStartAnimation(true);

//     const snapshot = collection(firestore, "pantry");

//     const unsubscribe = onSnapshot(
//       snapshot,
//       (snapshot) => {
//         let papersList = [];

//         console.log("Snapshot size:", snapshot.size);

//         snapshot.forEach((doc) => {
//           papersList.push({ id: doc.id, ...doc.data() });
//         });

//         console.log("Documents:", papersList);

//         // Update the total document count
//         setTotalDocuments(papersList.length);
//       },
//       (error) => {
//         console.error("Error fetching data from Firestore:", error);
//       }
//     );

//     return () => unsubscribe();
//   }, []);

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexWrap: "wrap",
//         alignItems: "center",
//         justifyContent: "center",
//         "& > :not(style)": {
//           m: 1,
//           p: 5,
//         },
//       }}
//     >
//       <Paper
//         elevation={3}
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           lineHeight: "10px",
//         }}
//       >
//         <Typography fontSize={"40px"}><CountUp start={0} end={totalDocuments} duration={2.5} /></Typography>
//         <Typography>Total Inventory</Typography>
//       </Paper>
//     </Box>
//   );
// }

// "use client";
// import React, { useEffect, useState } from "react";
// import { Box, Typography } from "@mui/material";
// import Paper from "@mui/material/Paper";
// import { doc, getDoc } from "firebase/firestore";
// import { firestore } from "../../../../firebase";
// import CountUp from "react-countup";
// import { getAuth } from "firebase/auth";

// export default function DashboardPapers() {
//   const [totalItems, setTotalItems] = useState(0);
//   const auth = getAuth();
//   const user = auth.currentUser;

//   useEffect(() => {
//     if (user) {
//       console.log("User UID:", user.uid); // Log the UID to verify
//       const fetchPantryItemsCount = async () => {
//         try {
//           // Reference to the user's document in the pantry collection
//           const docRef = doc(firestore, "pantry", user.uid);

//           console.log("Document reference:", docRef.path);

//           // Fetch the document
//           const docSnapshot = await getDoc(docRef);

//           if (docSnapshot.exists()) {
//             console.log("Document data:", docSnapshot.data());

//             // Access the 'items' field
//             const items = docSnapshot.get("items");

//             if (items) {
//               // Count the number of items in the 'items' field
//               const itemCount = Object.keys(items).length;
//               console.log("Items field data:", items);
//               console.log("Total items count:", itemCount);

//               setTotalItems(itemCount);
//             } else {
//               console.log("No 'items' field found in the document.");
//               setTotalItems(0);
//             }
//           } else {
//             console.log("No document found with the specified UID.");
//             setTotalItems(0);
//           }
//         } catch (error) {
//           console.error("Error fetching data from Firestore:", error);
//         }
//       };

//       fetchPantryItemsCount();
//     } else {
//       console.warn("No user is logged in");
//     }
//   }, [user]);

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexWrap: "wrap",
//         alignItems: "center",
//         justifyContent: "center",
//         "& > :not(style)": {
//           m: 1,
//           p: 5,
//         },
//       }}
//     >
//       <Paper
//         elevation={3}
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           lineHeight: "10px",
//         }}
//       >
//         <Typography fontSize={"40px"}>
//           {/* <CountUp start={0} end={totalItems} duration={2.5} /> */}
//           {totalItems}
//         </Typography>
//         <Typography>Total Pantry Items</Typography>
//       </Paper>
//     </Box>
//   );
// }

// "use client";
// import React, { useEffect, useState } from "react";
// import { Box, Typography } from "@mui/material";
// import Paper from "@mui/material/Paper";
// import { doc, onSnapshot } from "firebase/firestore";
// import { firestore } from "../../../../firebase";
// import CountUp from "react-countup";
// import { getAuth } from "firebase/auth";

// export default function DashboardPapers() {
//   const [totalItems, setTotalItems] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);

//   const auth = getAuth();
//   const user = auth.currentUser;

//   useEffect(() => {
//     if (user) {
//       console.log("User UID:", user.uid); // Log the UID to verify

//       // Reference to the user's document in the pantry collection
//       const docRef = doc(firestore, "pantry", user.uid);

//       const unsubscribe = onSnapshot(docRef, (docSnapshot) => {
//         if (docSnapshot.exists()) {
//           console.log("Document data:", docSnapshot.data());

//           // Access the 'items' field
//           const items = docSnapshot.get("items");
//           if (items) {
//             // Count the number of items and calculate total price
//             const itemKeys = Object.keys(items);
//             const itemCount = itemKeys.length;
//             const total = itemKeys.reduce((sum, key) => {
//               const item = items[key];
//               const price = parseFloat(item.price) || 0; // Convert price to number
//               return sum + price;
//             }, 0);

//             console.log("Items field data:", items);
//             console.log("Total items count:", itemCount);
//             console.log("Total price:", total);

//             setTotalItems(itemCount);
//             setTotalPrice(total);
//           } else {
//             console.log("No 'items' field found in the document.");
//             setTotalItems(0);
//             setTotalPrice(0);
//           }
//         } else {
//           console.log("No document found with the specified UID.");
//           setTotalItems(0);
//           setTotalPrice(0);
//         }
//       });

//       // Cleanup function to unsubscribe from the listener
//       return () => unsubscribe();
//     } else {
//       console.warn("No user is logged in");
//     }
//   }, [user]);

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexWrap: "wrap",
//         alignItems: "center",
//         justifyContent: "center",
//         "& > :not(style)": {
//           m: 1,
//           p: 5,
//         },
//       }}
//     >
//       <Paper
//         elevation={3}
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           lineHeight: "10px",
//         }}
//       >
//         <Typography fontSize={"40px"}>
//           <CountUp start={0} end={totalItems} duration={2.5} />
//         </Typography>
//         <Typography>Total Pantry Items</Typography>
//       </Paper>
//       <Paper
//         elevation={3}
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           lineHeight: "10px",
//         }}
//       >
//         <Typography fontSize={"40px"}>
//           <CountUp start={0} end={totalPrice} duration={2.5} />
//         </Typography>
//         <Typography>Total Price</Typography>
//       </Paper>
//     </Box>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { Box, Typography } from "@mui/material";
// import Paper from "@mui/material/Paper";
// import { doc, onSnapshot } from "firebase/firestore";
// import { firestore } from "../../../../firebase";
// import CountUp from "react-countup";
// import { getAuth } from "firebase/auth";

// // Define a function to determine the border color based on the number of items
// const getBorderColor = (value) => {
//   if (value < 10) return "#4caf50"; // Green for low count
//   if (value < 50) return "#ffeb3b"; // Yellow for moderate count
//   return "#f44336"; // Red for high count
// };

// export default function DashboardPapers() {
//   const [totalItems, setTotalItems] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [nearExpiryCount, setNearExpiryCount] = useState(0);
//   const [expiredCount, setExpiredCount] = useState(0);
//   const auth = getAuth();
//   const user = auth.currentUser;

//   // Helper functions
//   const isNearExpiry = (expiryDate) => {
//     const nearExpiryThreshold = 7; // days
//     const today = new Date();
//     const expiry = new Date(expiryDate);
//     const differenceInDays = (expiry - today) / (1000 * 60 * 60 * 24);
//     return differenceInDays <= nearExpiryThreshold && differenceInDays >= 0;
//   };

//   const isExpired = (expiryDate) => {
//     const today = new Date();
//     const expiry = new Date(expiryDate);
//     return expiry < today;
//   };

//   useEffect(() => {
//     if (user) {
//       console.log("User UID:", user.uid); // Log the UID to verify

//       // Reference to the user's document in the pantry collection
//       const docRef = doc(firestore, "pantry", user.uid);

//       const unsubscribe = onSnapshot(docRef, (docSnapshot) => {
//         if (docSnapshot.exists()) {
//           console.log("Document data:", docSnapshot.data());

//           // Access the 'items' field
//           const items = docSnapshot.get("items");

//           if (items) {
//             // Count the number of items and calculate total price
//             const itemKeys = Object.keys(items);
//             const itemCount = itemKeys.length;
//             const total = itemKeys.reduce((sum, key) => {
//               const item = items[key];
//               const price = parseFloat(item.price) || 0; // Convert price to number
//               return sum + price;
//             }, 0);

//             // Calculate near expiry and expired items
//             let nearExpiryCount = 0;
//             let expiredCount = 0;

//             itemKeys.forEach((key) => {
//               const item = items[key];
//               const expiryDate = item.expiryDate;
//               if (expiryDate) {
//                 if (isExpired(expiryDate)) {
//                   expiredCount += 1;
//                 } else if (isNearExpiry(expiryDate)) {
//                   nearExpiryCount += 1;
//                 }
//               }
//             });

//             console.log("Items field data:", items);
//             console.log("Total items count:", itemCount);
//             console.log("Total price:", total);
//             console.log("Near expiry items count:", nearExpiryCount);
//             console.log("Expired items count:", expiredCount);

//             setTotalItems(itemCount);
//             setTotalPrice(total);
//             setNearExpiryCount(nearExpiryCount);
//             setExpiredCount(expiredCount);
//           } else {
//             console.log("No 'items' field found in the document.");
//             setTotalItems(0);
//             setTotalPrice(0);
//             setNearExpiryCount(0);
//             setExpiredCount(0);
//           }
//         } else {
//           console.log("No document found with the specified UID.");
//           setTotalItems(0);
//           setTotalPrice(0);
//           setNearExpiryCount(0);
//           setExpiredCount(0);
//         }
//       });

//       // Cleanup function to unsubscribe from the listener
//       return () => unsubscribe();
//     } else {
//       console.warn("No user is logged in");
//     }
//   }, [user]);

//   const CircleSVG = ({ value }) => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       version="1.1"
//       width="160"
//       height="160"
//     >
//       <defs>
//         <linearGradient id="GradientColor">
//           <stop offset="0%" stopColor="#e91e63" />
//           <stop offset="100%" stopColor="#673ab7" />
//         </linearGradient>
//       </defs>
//       <circle
//         cx="80"
//         cy="80"
//         r="70"
//         stroke="url(#GradientColor)"
//         strokeWidth="10"
//         fill="none"
//       />
//       <text
//         x="50%"
//         y="50%"
//         alignmentBaseline="middle"
//         textAnchor="middle"
//         fontSize="40px"
//         fill="#000"
//       >
//         {value}
//       </text>
//     </svg>
//   );

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexWrap: "wrap",
//         alignItems: "center",
//         justifyContent: "center",
//         "& > :not(style)": {
//           m: 1,
//           p: 5,
//           width: "250px",
//         },
//       }}
//     >
//       <Paper
//         elevation={3}
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           lineHeight: "10px",
//           position: "relative",
//         }}
//       >
//         <Typography fontSize={"40px"}>
//           <CircleSVG
//             value={<CountUp start={0} end={totalItems} duration={2.5} />}
//           />
//         </Typography>

//         <Typography>Total Pantry Items</Typography>
//       </Paper>
//       <Paper
//         elevation={3}
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           lineHeight: "10px",
//           position: "relative",
//         }}
//       >
//         <Typography fontSize={"40px"}>
//           <CircleSVG
//             value={<CountUp start={0} end={totalPrice} duration={2.5} />}
//           />
//         </Typography>
//         <Typography>Total Price</Typography>
//       </Paper>
//       <Paper
//         elevation={3}
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           lineHeight: "10px",
//           position: "relative",
//         }}
//       >
//         <Typography fontSize={"40px"}>
//           <CircleSVG
//             value={<CountUp start={0} end={nearExpiryCount} duration={2.5} />}
//           />
//         </Typography>
//         <Typography>Near Expiry Items</Typography>
//       </Paper>
//       <Paper
//         elevation={3}
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           lineHeight: "10px",
//           position: "relative",
//         }}
//       >
//         <Typography fontSize={"40px"}>
//           <CircleSVG
//             value={<CountUp start={0} end={expiredCount} duration={2.5} />}
//           />
//         </Typography>
//         <Typography>Expired Items</Typography>
//       </Paper>
//     </Box>
//   );
// }

// "use client";
// import React, { useEffect, useState } from "react";
// import { Box, Typography } from "@mui/material";
// import Paper from "@mui/material/Paper";
// import { doc, onSnapshot } from "firebase/firestore";
// import { firestore } from "../../../../firebase";
// import CountUp from "react-countup";
// import { getAuth } from "firebase/auth";

// // Define a function to determine the border color based on the number of items
// const getBorderColor = (value) => {
//   if (value < 10) return "#4caf50"; // Green for low count
//   if (value < 50) return "#ffeb3b"; // Yellow for moderate count
//   return "#f44336"; // Red for high count
// };

// export default function DashboardPapers() {
//   const [totalItems, setTotalItems] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [nearExpiryCount, setNearExpiryCount] = useState(0);
//   const [expiredCount, setExpiredCount] = useState(0);
//   const auth = getAuth();
//   const user = auth.currentUser;

//   const CircleSVG = ({ value, color }) => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       version="1.1"
//       width="160"
//       height="160"
//     >
//       <defs>
//         <linearGradient id="GradientColor">
//           <stop offset="0%" stopColor="#e91e63" />
//           <stop offset="100%" stopColor="#673ab7" />
//         </linearGradient>
//       </defs>
//       <circle
//         cx="80"
//         cy="80"
//         r="70"
//         stroke={color || "url(#GradientColor)"}
//         strokeWidth="10"
//         fill="none"
//       />
//       <text
//         x="50%"
//         y="50%"
//         alignmentBaseline="middle"
//         textAnchor="middle"
//         fontSize="40px"
//         fill="#000"
//       >
//         {value}
//       </text>
//     </svg>
//   );

//   // Helper functions
//   const isNearExpiry = (expiryDate) => {
//     const nearExpiryThreshold = 7; // days
//     const today = new Date();
//     const expiry = new Date(expiryDate);
//     const differenceInDays = (expiry - today) / (1000 * 60 * 60 * 24);
//     return differenceInDays <= nearExpiryThreshold && differenceInDays >= 0;
//   };

//   const isExpired = (expiryDate) => {
//     const today = new Date();
//     const expiry = new Date(expiryDate);
//     return expiry < today;
//   };

//   useEffect(() => {
//     if (user) {
//       console.log("User UID:", user.uid); // Log the UID to verify

//       // Reference to the user's document in the pantry collection
//       const docRef = doc(firestore, "pantry", user.uid);

//       const unsubscribe = onSnapshot(docRef, (docSnapshot) => {
//         if (docSnapshot.exists()) {
//           console.log("Document data:", docSnapshot.data());

//           // Access the 'items' field
//           const items = docSnapshot.get("items");

//           if (items) {
//             // Count the number of items and calculate total price
//             const itemKeys = Object.keys(items);
//             const itemCount = itemKeys.length;
//             const total = itemKeys.reduce((sum, key) => {
//               const item = items[key];
//               const price = parseFloat(item.price) || 0; // Convert price to number
//               return sum + price;
//             }, 0);

//             // Calculate near expiry and expired items
//             let nearExpiryCount = 0;
//             let expiredCount = 0;

//             itemKeys.forEach((key) => {
//               const item = items[key];
//               const expiryDate = item.expiryDate;
//               if (expiryDate) {
//                 if (isExpired(expiryDate)) {
//                   expiredCount += 1;
//                 } else if (isNearExpiry(expiryDate)) {
//                   nearExpiryCount += 1;
//                 }
//               }
//             });

//             console.log("Items field data:", items);
//             console.log("Total items count:", itemCount);
//             console.log("Total price:", total);
//             console.log("Near expiry items count:", nearExpiryCount);
//             console.log("Expired items count:", expiredCount);

//             setTotalItems(itemCount);
//             setTotalPrice(total);
//             setNearExpiryCount(nearExpiryCount);
//             setExpiredCount(expiredCount);
//           } else {
//             console.log("No 'items' field found in the document.");
//             setTotalItems(0);
//             setTotalPrice(0);
//             setNearExpiryCount(0);
//             setExpiredCount(0);
//           }
//         } else {
//           console.log("No document found with the specified UID.");
//           setTotalItems(0);
//           setTotalPrice(0);
//           setNearExpiryCount(0);
//           setExpiredCount(0);
//         }
//       });

//       // Cleanup function to unsubscribe from the listener
//       return () => unsubscribe();
//     } else {
//       console.warn("No user is logged in");
//     }
//   }, [user]);

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexWrap: "wrap",
//         alignItems: "center",
//         justifyContent: "center",
//         "& > :not(style)": {
//           m: 1,
//           p: 5,
//           width: "250px",
//         },
//       }}
//     >
//       <Paper
//         elevation={3}
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           lineHeight: "10px",
//           position: "relative",
//         }}
//       >
//         <CircleSVG
//           value={totalItems.toFixed(0)}
//           color={getBorderColor(totalItems)}
//         />
//         <Typography>Total Pantry Items</Typography>
//       </Paper>
//       <Paper
//         elevation={3}
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           lineHeight: "10px",
//           position: "relative",
//         }}
//       >
//         <CircleSVG
//           value={totalPrice.toFixed(2)}
//           color={getBorderColor(totalPrice)}
//         />
//         <Typography>Total Price</Typography>
//       </Paper>
//       <Paper
//         elevation={3}
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           lineHeight: "10px",
//           position: "relative",
//         }}
//       >
//         <CircleSVG
//           value={nearExpiryCount.toFixed(0)}
//           color={getBorderColor(nearExpiryCount)}
//         />
//         <Typography>Near Expiry Items</Typography>
//       </Paper>
//       <Paper
//         elevation={3}
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           lineHeight: "10px",
//           position: "relative",
//         }}
//       >
//         <CircleSVG
//           value={expiredCount.toFixed(0)}
//           color={getBorderColor(expiredCount)}
//         />
//         <Typography>Expired Items</Typography>
//       </Paper>
//     </Box>
//   );
// }

// "use client";
// import React, { useEffect, useState } from "react";
// import { Box, Typography } from "@mui/material";
// import Paper from "@mui/material/Paper";
// import { doc, onSnapshot } from "firebase/firestore";
// import { firestore } from "../../../../firebase";
// import CountUp from "react-countup";
// import { getAuth } from "firebase/auth";

// export default function DashboardPapers() {
//   const [totalItems, setTotalItems] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [nearExpiryCount, setNearExpiryCount] = useState(0);
//   const [expiredCount, setExpiredCount] = useState(0);
//   const auth = getAuth();
//   const user = auth.currentUser;

//   // Helper functions
//   const isNearExpiry = (expiryDate) => {
//     const nearExpiryThreshold = 7; // days
//     const today = new Date();
//     const expiry = new Date(expiryDate);
//     const differenceInDays = (expiry - today) / (1000 * 60 * 60 * 24);
//     return differenceInDays <= nearExpiryThreshold && differenceInDays >= 0;
//   };

//   const isExpired = (expiryDate) => {
//     const today = new Date();
//     const expiry = new Date(expiryDate);
//     return expiry < today;
//   };

//   useEffect(() => {
//     if (user) {
//       console.log("User UID:", user.uid); // Log the UID to verify

//       // Reference to the user's document in the pantry collection
//       const docRef = doc(firestore, "pantry", user.uid);

//       const unsubscribe = onSnapshot(docRef, (docSnapshot) => {
//         if (docSnapshot.exists()) {
//           console.log("Document data:", docSnapshot.data());

//           // Access the 'items' field
//           const items = docSnapshot.get("items");

//           if (items) {
//             // Count the number of items and calculate total price
//             const itemKeys = Object.keys(items);
//             const itemCount = itemKeys.length;
//             const total = itemKeys.reduce((sum, key) => {
//               const item = items[key];
//               const price = parseFloat(item.price) || 0; // Convert price to number
//               return sum + price;
//             }, 0);

//             // Calculate near expiry and expired items
//             let nearExpiryCount = 0;
//             let expiredCount = 0;

//             itemKeys.forEach((key) => {
//               const item = items[key];
//               const expiryDate = item.expiryDate;
//               if (expiryDate) {
//                 if (isExpired(expiryDate)) {
//                   expiredCount += 1;
//                 } else if (isNearExpiry(expiryDate)) {
//                   nearExpiryCount += 1;
//                 }
//               }
//             });

//             console.log("Items field data:", items);
//             console.log("Total items count:", itemCount);
//             console.log("Total price:", total);
//             console.log("Near expiry items count:", nearExpiryCount);
//             console.log("Expired items count:", expiredCount);

//             setTotalItems(itemCount);
//             setTotalPrice(total);
//             setNearExpiryCount(nearExpiryCount);
//             setExpiredCount(expiredCount);
//           } else {
//             console.log("No 'items' field found in the document.");
//             setTotalItems(0);
//             setTotalPrice(0);
//             setNearExpiryCount(0);
//             setExpiredCount(0);
//           }
//         } else {
//           console.log("No document found with the specified UID.");
//           setTotalItems(0);
//           setTotalPrice(0);
//           setNearExpiryCount(0);
//           setExpiredCount(0);
//         }
//       });

//       // Cleanup function to unsubscribe from the listener
//       return () => unsubscribe();
//     } else {
//       console.warn("No user is logged in");
//     }
//   }, [user]);

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexWrap: "wrap",
//         alignItems: "center",
//         justifyContent: "center",
//         "& > :not(style)": {
//           m: 1,
//           p: 5,
//           width: "250px",
//         },
//       }}
//     >
//       <Paper
//         elevation={3}
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           lineHeight: "10px",
//           position: "relative",
//         }}
//       >
//         <Typography fontSize={"40px"}>
//           <CountUp start={0} end={totalItems} duration={2.5} />
//         </Typography>
//         <Typography>Total Pantry Items</Typography>
//       </Paper>
//       <Paper
//         elevation={3}
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           lineHeight: "10px",
//           position: "relative",
//         }}
//       >
//         <Typography fontSize={"40px"}>
//           <CountUp start={0} end={totalPrice} duration={2.5} />
//         </Typography>
//         <Typography>Total Price</Typography>
//       </Paper>
//       <Paper
//         elevation={3}
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           lineHeight: "10px",
//           position: "relative",
//         }}
//       >
//         <Typography fontSize={"40px"}>
//           <CountUp start={0} end={nearExpiryCount} duration={2.5} />
//         </Typography>
//         <Typography>Near Expiry Items</Typography>
//       </Paper>
//       <Paper
//         elevation={3}
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           lineHeight: "10px",
//           position: "relative",
//         }}
//       >
//         <Typography fontSize={"40px"}>
//           <CountUp start={0} end={expiredCount} duration={2.5} />
//         </Typography>
//         <Typography>Expired Items</Typography>
//       </Paper>
//     </Box>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { doc, onSnapshot } from "firebase/firestore";
import { firestore } from "../../../../firebase";
import { getAuth } from "firebase/auth";
import CircleProgress from "../CircleProgress/CircleProgress"; // Import the new CircleProgress component

export default function DashboardPapers() {
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [nearExpiryCount, setNearExpiryCount] = useState(0);
  const [expiredCount, setExpiredCount] = useState(0);
  const auth = getAuth();
  const user = auth.currentUser;

  // Helper functions
  const isNearExpiry = (expiryDate) => {
    const nearExpiryThreshold = 7; // days
    const today = new Date();
    const expiry = new Date(expiryDate);
    const differenceInDays = (expiry - today) / (1000 * 60 * 60 * 24);
    return differenceInDays <= nearExpiryThreshold && differenceInDays >= 0;
  };

  const isExpired = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    return expiry < today;
  };

  useEffect(() => {
    if (user) {
      console.log("User UID:", user.uid); // Log the UID to verify

      // Reference to the user's document in the pantry collection
      const docRef = doc(firestore, "pantry", user.uid);

      const unsubscribe = onSnapshot(docRef, (docSnapshot) => {
        if (docSnapshot.exists()) {
          console.log("Document data:", docSnapshot.data());

          // Access the 'items' field
          const items = docSnapshot.get("items");

          if (items) {
            // Count the number of items and calculate total price
            const itemKeys = Object.keys(items);
            const itemCount = itemKeys.length;
            const total = itemKeys.reduce((sum, key) => {
              const item = items[key];
              const price = parseFloat(item.price) || 0; // Convert price to number
              return sum + price;
            }, 0);

            // Calculate near expiry and expired items
            let nearExpiryCount = 0;
            let expiredCount = 0;

            itemKeys.forEach((key) => {
              const item = items[key];
              const expiryDate = item.expiryDate;
              if (expiryDate) {
                if (isExpired(expiryDate)) {
                  expiredCount += 1;
                } else if (isNearExpiry(expiryDate)) {
                  nearExpiryCount += 1;
                }
              }
            });

            console.log("Items field data:", items);
            console.log("Total items count:", itemCount);
            console.log("Total price:", total);
            console.log("Near expiry items count:", nearExpiryCount);
            console.log("Expired items count:", expiredCount);

            setTotalItems(itemCount);
            setTotalPrice(total);
            setNearExpiryCount(nearExpiryCount);
            setExpiredCount(expiredCount);
          } else {
            console.log("No 'items' field found in the document.");
            setTotalItems(0);
            setTotalPrice(0);
            setNearExpiryCount(0);
            setExpiredCount(0);
          }
        } else {
          console.log("No document found with the specified UID.");
          setTotalItems(0);
          setTotalPrice(0);
          setNearExpiryCount(0);
          setExpiredCount(0);
        }
      });

      // Cleanup function to unsubscribe from the listener
      return () => unsubscribe();
    } else {
      console.warn("No user is logged in");
    }
  }, [user]);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        "& > :not(style)": {
          m: 1,
          p: 5,
          width: "250px",
        },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: "10px",
          position: "relative",
          borderRadius: "12px",
        }}
      >
        <Typography fontSize={"40px"}>
          <CircleProgress value={totalItems} max={100} />{" "}
          {/* Set max as needed */}
        </Typography>
        <Typography>Total Pantry Items</Typography>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: "10px",
          position: "relative",
          borderRadius: "12px",
        }}
      >
        <Typography fontSize={"40px"}>
          <CircleProgress value={totalPrice} max={1000} />{" "}
          {/* Set max as needed */}
        </Typography>
        <Typography>Total Price</Typography>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: "10px",
          position: "relative",
          borderRadius: "12px",
        }}
      >
        <Typography fontSize={"40px"}>
          <CircleProgress value={nearExpiryCount} max={100} />{" "}
          {/* Set max as needed */}
        </Typography>
        <Typography>Near Expiry Items</Typography>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: "10px",
          position: "relative",
          borderRadius: "12px",
        }}
      >
        <Typography fontSize={"40px"}>
          <CircleProgress value={expiredCount} max={100} />{" "}
          {/* Set max as needed */}
        </Typography>
        <Typography>Expired Items</Typography>
      </Paper>
    </Box>
  );
}
