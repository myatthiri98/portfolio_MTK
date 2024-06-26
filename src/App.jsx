import { useState } from "react";
import Sidenav from "./components/Sidenav.jsx";
import Main from "./components/Main.jsx";
import Work from "./components/Work.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Resume from "./components/Resume.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Resume/>
      <Contact />
    </div>
  );
}

export default App;
