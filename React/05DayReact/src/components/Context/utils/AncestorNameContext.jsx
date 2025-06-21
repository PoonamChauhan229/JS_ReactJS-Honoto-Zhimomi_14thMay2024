// Step 1: Create the context >>ContextNameContext.jsx

// Step 2: Export the context

// Step 3: Import the context in App.jsx

// We are going the Provide the Context

// Provide the value to the context.Provider

// Use the context without drilling through the props >>useContext Hook


import { createContext } from "react";

const AncestorNameContext=createContext()

export default AncestorNameContext


