import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
