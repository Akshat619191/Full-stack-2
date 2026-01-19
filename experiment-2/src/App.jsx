import { Routes, Route, Link } from "react-router-dom"
import Home from "./components/home"
import About from "./components/about"
import Contact from "./components/contact"

function App() {
  return (
    <div>
      <h1>Material UI Components Demo</h1>

      {/* Navigation */}
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
