import { StrictMode } from 'react'
import './index.css'
import App from './App.tsx'
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <h1>TESTE hhh</h1>
            <App />
        </BrowserRouter>
    </StrictMode>
);