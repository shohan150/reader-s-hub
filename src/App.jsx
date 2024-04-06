import { useState } from "react";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import HeroSection from "./components/homePage/HeroSection";
import Content from "./components/pages/Content";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <HeroSection />
      <Content />

      <Footer />
    </div>
  );
}

export default App;
