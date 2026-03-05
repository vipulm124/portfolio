import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-primary text-color-primary">
      <Navigation />
      <main className="flex-1 w-full max-w-[1100px] mx-auto py-12 px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
