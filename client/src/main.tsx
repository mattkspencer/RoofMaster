import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Initialize Tailwind CSS
import 'tailwindcss/tailwind.css';

createRoot(document.getElementById("root")!).render(<App />);
