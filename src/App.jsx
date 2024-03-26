import { useState } from "react";
import Sidenav from "./components/sidenav";
import Main from "./components/main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
