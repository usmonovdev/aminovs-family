import { Route, Routes } from "react-router-dom";
import { Home, Navbar, NotFound } from "./components/";
import "./index.css"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
