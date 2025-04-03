import './App.css'
import { BaseRoutes } from './routes/BaseRoutes'
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

function App() {

  return (
      <>
      <Navbar />
      <BaseRoutes />
      <Footer />
      </>
  );
}

export default App;
