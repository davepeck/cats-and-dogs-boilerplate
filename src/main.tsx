import { createRoot } from "react-dom/client";
import { App } from "./App";

// use the modern react 18 api
const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);
root.render(<App />);
