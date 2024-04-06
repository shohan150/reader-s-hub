import { useState } from "react";
import Header from "./components/common/Header";
import HeroSection from "./components/homePage/HeroSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <HeroSection />
    </div>
  );
}

export default App;
