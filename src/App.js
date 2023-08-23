import { Route, Routes } from "react-router-dom";
import { Footer, Home, Leader, Navbar, NotFound } from "./components/";
import "./index.css"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 400,
      offset: 0
  });
  }, [])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/leader" element={<Leader />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
