import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import HeroSection from "./components/homePage/HeroSection";
import Content from "./components/pages/Content";
import { FavouriteProvider } from "./providers";

function App() {
  return (
    <FavouriteProvider>
      <Header />
      <HeroSection />
      <Content />
      <Footer />
    </FavouriteProvider>
  );
}

export default App;
