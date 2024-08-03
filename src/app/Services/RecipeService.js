// import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
// import {
//   ChatPromptTemplate,
//   SystemMessagePromptTemplate,
//   HumanMessagePromptTemplate,
// } from "@langchain/core/prompts";

// // Your RecipeService function
// export const RecipeService = async (inputValueRecipe) => {
//   // Access the API key from environment variables
//   //   const SECRET_KEY = process.env.GEMINI_API_KEY;
//   const SECRET_KEY = AIzaSyBKydN1c17UL0PShV8c3jGEC0h5CRmE-KU;

//   // Log the API key to verify it's being read
//   //   console.log("GEMINI_API_KEY:", process.env.GEMINI_API_KEY);

//   if (!SECRET_KEY) {
//     throw new Error("API key is not defined in environment variables.");
//   }

//   const chat = new ChatGoogleGenerativeAI({ apiKey: SECRET_KEY });

//   // Define your prompt templates
//   const systemMessagePrompt = SystemMessagePromptTemplate.fromTemplate(
//     "Your name is Aman. You are a master chef so First Introduce yourself as Aman The Master Chef. You can write any type of food recipe which can be cooked from the inventory in database with its quantity. You are only allowed to answer food related queries .If you don't know the answer then tell I don't know the answer."
//   );

//   const humanMessagePrompt =
//     HumanMessagePromptTemplate.fromTemplate("{asked_recipe}");

//   const chatPrompt = ChatPromptTemplate.fromMessages([
//     systemMessagePrompt,
//     humanMessagePrompt,
//   ]);

//   const formattedChatPrompt = await chatPrompt.formatMessages({
//     asked_recipe: inputValueRecipe, // Corrected the key name to 'asked_recipe'
//   });

//   const response = await chat.invoke(formattedChatPrompt);

//   return response.content;
// };

// import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
// import {
//   ChatPromptTemplate,
//   SystemMessagePromptTemplate,
//   HumanMessagePromptTemplate,
// } from "@langchain/core/prompts";

// // Replace with your actual API key
// const SECRET_KEY = "AIzaSyBKydN1c17UL0PShV8c3jGEC0h5CRmE-KU";

// export const RecipeService = async (inputValueRecipe) => {
//   // Log the API key to verify it's being used correctly
//   console.log("Using API Key:", SECRET_KEY);

//   if (!SECRET_KEY) {
//     throw new Error("API key is not defined.");
//   }

//   const chat = new ChatGoogleGenerativeAI({ apiKey: SECRET_KEY });

//   // Define your prompt templates
//   const systemMessagePrompt = SystemMessagePromptTemplate.fromTemplate(
//     "Your name is Aman. You are a master chef so First Introduce yourself as Aman The Master Chef. You can write any type of food recipe which can be cooked from the inventory in database with its quantity. You are only allowed to answer food related queries. If you don't know the answer, then tell I don't know the answer."
//   );

//   const humanMessagePrompt =
//     HumanMessagePromptTemplate.fromTemplate("{asked_recipe}");

//   const chatPrompt = ChatPromptTemplate.fromMessages([
//     systemMessagePrompt,
//     humanMessagePrompt,
//   ]);

//   const formattedChatPrompt = await chatPrompt.formatMessages({
//     asked_recipe: inputValueRecipe,
//   });

//   try {
//     const response = await chat.invoke(formattedChatPrompt);
//     return response.content;
//   } catch (error) {
//     console.error("Error invoking chat:", error);
//     throw error;
//   }
// };

// import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
// import {
//   ChatPromptTemplate,
//   SystemMessagePromptTemplate,
//   HumanMessagePromptTemplate,
// } from "@langchain/core/prompts";
// import { firestore } from "../../../firebase";
// import { collection, getDocs } from "firebase/firestore";

// // Replace with your actual API key
// const SECRET_KEY = "AIzaSyBKydN1c17UL0PShV8c3jGEC0h5CRmE-KU";

// // Function to fetch available items from Firestore
// const fetchAvailableItems = async () => {
//   try {
//     const itemsCollection = collection(firestore, "pantry");
//     const itemsSnapshot = await getDocs(itemsCollection);
//     const itemsList = itemsSnapshot.docs.map(doc => doc.data());
//     return itemsList;
//   } catch (error) {
//     console.error("Error fetching available items:", error);
//     throw error;
//   }
// };

// // Function to find recipes based on available ingredients
// const findPossibleRecipes = async (ingredients) => {
//   const chat = new ChatGoogleGenerativeAI({ apiKey: SECRET_KEY });

//   // Define your prompt templates
//   const systemMessagePrompt = SystemMessagePromptTemplate.fromTemplate(
//     "Your name is Aman. You are a master chef. Introduce yourself as Aman The Master Chef. You can provide recipes based on the following available ingredients. Please give 3 recipes that can be made with these ingredients."
//   );

//   const humanMessagePrompt =
//     HumanMessagePromptTemplate.fromTemplate(
//       `Available ingredients are: ${ingredients.join(", ")}. Please provide 3 possible recipes that can be made with these ingredients.`
//     );

//   const chatPrompt = ChatPromptTemplate.fromMessages([
//     systemMessagePrompt,
//     humanMessagePrompt,
//   ]);

//   const formattedChatPrompt = await chatPrompt.formatMessages({
//     asked_recipe: "Please provide 3 possible recipes.",
//   });

//   try {
//     const response = await chat.invoke(formattedChatPrompt);
//     return response.content;
//   } catch (error) {
//     console.error("Error invoking chat:", error);
//     throw error;
//   }
// };

// export const RecipeService = async () => {
//   // Fetch available items from Firestore
//   let availableItems;
//   try {
//     availableItems = await fetchAvailableItems();
//   } catch (error) {
//     throw new Error("Could not fetch available items.");
//   }

//   // Extract ingredient names
//   const ingredients = availableItems.map(item => item.name);

//   // Find possible recipes
//   try {
//     const recipes = await findPossibleRecipes(ingredients);
//     return recipes;
//   } catch (error) {
//     console.error("Error finding recipes:", error);
//     throw error;
//   }
// };
// // fetch items from Firestore
// const fetchAvailableItems = async () => {
//   try {
//     const itemsCollection = collection(firestore, "pantry");
//     const itemsSnapshot = await getDocs(itemsCollection);
//     const itemsList = itemsSnapshot.docs.map(doc => doc.data());
//     return itemsList;
//   } catch (error) {
//     console.error("Error fetching available items:", error);
//     throw error;
//   }
// };

// // Function to find recipes based on available items
// const findPossibleRecipes = async (ingredients) => {
//   const chat = new ChatGoogleGenerativeAI({ apiKey: SECRET_KEY });

//   // My Prompt
//   const systemMessagePrompt = SystemMessagePromptTemplate.fromTemplate(
//     "Your name is Aman. You are a master chef. Introduce yourself as Aman The Master Chef. You can provide recipes based on the following available ingredients. Please give 3 recipes that can be made with these ingredients."
//   );

//   const humanMessagePrompt =
//     HumanMessagePromptTemplate.fromTemplate(
//       `Available ingredients are: ${ingredients.join(", ")}. Please provide 3 possible recipes that can be made with these ingredients.`
//     );

//   const chatPrompt = ChatPromptTemplate.fromMessages([
//     systemMessagePrompt,
//     humanMessagePrompt,
//   ]);

//   const formattedChatPrompt = await chatPrompt.formatMessages({
//     asked_recipe: "Please provide 3 possible recipes.",
//   });

//   try {
//     const response = await chat.invoke(formattedChatPrompt);
//     return response.content;
//   } catch (error) {
//     console.error("Error invoking chat:", error);
//     throw error;
//   }
// };

// // export const RecipeService = async () => {
// //   // Fetch available items from Firestore
// //   let availableItems;
// //   try {
// //     availableItems = await fetchAvailableItems();
// //   } catch (error) {
// //     throw new Error("Could not fetch available items.");
// //   }

// //   // Extract item names
// //   // const ingredients = availableItems.map(item => item.name);
// //   const ingredients = itemsSnapshot.docs.map(doc => doc.id);
// //   console.log("ingredients:", ingredients);
// //   // Find possible recipes
// //   try {
// //     const recipes = await findPossibleRecipes(ingredients);
// //     return recipes;
// //   } catch (error) {
// //     console.error("Error finding recipes:", error);
// //     throw error;
// //   }
// // };

// export const RecipeService = async () => {
//   // Fetch available items from Firestore
//   let availableItems;
//   try {
//     availableItems = await fetchAvailableItems();
//   } catch (error) {
//     throw new Error("Could not fetch available items.");
//   }

//   // Extract item IDs as ingredients
//   const ingredients = availableItems; // Since the list is already document IDs

//   // Log the ingredients
//   console.log("ingredients:", ingredients);

//   // Find possible recipes
//   try {
//     const recipes = await findPossibleRecipes(ingredients);
//     return recipes;
//   } catch (error) {
//     console.error("Error finding recipes:", error);
//     throw error;
//   }
// };

// import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
// import {
//   ChatPromptTemplate,
//   SystemMessagePromptTemplate,
//   HumanMessagePromptTemplate,
// } from "@langchain/core/prompts";
// import { firestore } from "../../../firebase";
// import { collection, getDocs } from "firebase/firestore";

// const SECRET_KEY = "AIzaSyBKydN1c17UL0PShV8c3jGEC0h5CRmE-KU";

// // Fetch items from Firestore
// const fetchAvailableItems = async () => {
//   try {
//     const itemsCollection = collection(firestore, "pantry");
//     const itemsSnapshot = await getDocs(itemsCollection);

//     // Extract document IDs (consider these as ingredient names)
//     const ingredientsList = itemsSnapshot.docs.map((doc) => doc.id);

//     // Debugging information
//     console.log("Fetched items from Firestore:", ingredientsList);

//     return ingredientsList;
//   } catch (error) {
//     console.error("Error fetching available items:", error);
//     throw error;
//   }
// };

// export const RecipeService = async () => {
//   // Fetch available items from Firestore
//   let availableItems;
//   try {
//     availableItems = await fetchAvailableItems();
//   } catch (error) {
//     throw new Error("Could not fetch available items.");
//   }

//   // Extract item IDs as ingredients
//   const ingredients = availableItems; // List of document IDs (ingredient names)

//   // Log the ingredients
//   console.log("ingredients:", ingredients);

//   // Find possible recipes
//   try {
//     const recipes = await findPossibleRecipes(ingredients);
//     return recipes;
//   } catch (error) {
//     console.error("Error finding recipes:", error);
//     throw error;
//   }
// };

// const findPossibleRecipes = async (ingredients) => {
//   const chat = new ChatGoogleGenerativeAI({ apiKey: SECRET_KEY });

//   // My Prompt
//   const systemMessagePrompt = SystemMessagePromptTemplate.fromTemplate(
//     "Your name is Aman. You are a master chef. Introduce yourself as Aman The Master Chef. You can provide recipes based on the following available ingredients. Please give 3 recipes that can be made with these ingredients."
//   );

//   const humanMessagePrompt = HumanMessagePromptTemplate.fromTemplate(
//     `Available ingredients are: ${ingredients.join(
//       ", "
//     )}. Please provide 3 possible recipes that can be made with these ingredients.`
//   );

//   const chatPrompt = ChatPromptTemplate.fromMessages([
//     systemMessagePrompt,
//     humanMessagePrompt,
//   ]);

//   const formattedChatPrompt = await chatPrompt.formatMessages({
//     asked_recipe: "Please provide 3 possible recipes.",
//   });

//   try {
//     const response = await chat.invoke(formattedChatPrompt);
//     return response.content;
//   } catch (error) {
//     console.error("Error invoking chat:", error);
//     throw error;
//   }
// };
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import {
  ChatPromptTemplate,
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
} from "@langchain/core/prompts";
import { firestore } from "../../../firebase"; // Assuming this is needed for fetching pantry items

const SECRET_KEY = "AIzaSyBKydN1c17UL0PShV8c3jGEC0h5CRmE-KU";

// Fetch items from Firestore for a specific user
const fetchAvailableItems = async (userId) => {
  if (typeof userId !== "string" || !userId) {
    throw new Error("Invalid userId provided.");
  }

  try {
    const docRef = doc(firestore, "pantry", userId);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const items = docSnapshot.data()?.items;

      if (items) {
        // Convert the items object to an array of item names
        const ingredientNames = Object.keys(items).map(
          (key) => items[key].name || key
        );
        console.log("Fetched items from Firestore:", ingredientNames);
        return ingredientNames;
      } else {
        console.log("No 'items' field found in the document.");
        return [];
      }
    } else {
      console.log("No document found for the specified user ID.");
      return [];
    }
  } catch (error) {
    console.error("Error fetching available items:", error);
    throw error;
  }
};

export const RecipeService = async (ingredients) => {
  if (!Array.isArray(ingredients) || ingredients.length === 0) {
    console.error("Invalid ingredients provided:", ingredients);
    throw new Error("Invalid ingredients provided.");
  }

  // Log the ingredients
  console.log("Ingredients:", ingredients);

  // Find possible recipes
  try {
    const recipes = await findPossibleRecipes(ingredients);
    return recipes;
  } catch (error) {
    console.error("Error finding recipes:", error);
    throw error;
  }
};

const findPossibleRecipes = async (ingredients) => {
  const chat = new ChatGoogleGenerativeAI({ apiKey: SECRET_KEY });

  // My Prompt
  const systemMessagePrompt = SystemMessagePromptTemplate.fromTemplate(
    "Your name is Aman. You are a master chef. Introduce yourself as Aman The Master Chef. You can provide recipes based on the following available ingredients. Please give 3 recipes that can be made with these ingredients."
  );

  const humanMessagePrompt = HumanMessagePromptTemplate.fromTemplate(
    `Available ingredients are: ${ingredients.join(
      ", "
    )}. Please provide 3 possible recipes that can be made with these ingredients.`
  );

  const chatPrompt = ChatPromptTemplate.fromMessages([
    systemMessagePrompt,
    humanMessagePrompt,
  ]);

  const formattedChatPrompt = await chatPrompt.formatMessages({
    asked_recipe: "Please provide 3 possible recipes.",
  });

  try {
    const response = await chat.invoke(formattedChatPrompt);
    return response.content;
  } catch (error) {
    console.error("Error invoking chat:", error);
    throw error;
  }
};
