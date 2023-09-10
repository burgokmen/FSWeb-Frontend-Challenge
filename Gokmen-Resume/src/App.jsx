import Footer from "./components/Footer";

import Hero from "./components/Hero";

import Profile from "./components/Profile";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="border-solid shadow-xl rounded ">
      <Hero />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
