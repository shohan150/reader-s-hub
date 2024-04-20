import Footer from "./components/common/Footer";
import Header from "./components/header/Header";

import HomePage from "./components/pages/HomePage";
import { FavouriteProvider } from "./providers";

function App() {
  return (
    <FavouriteProvider>
      <Header />
      <HomePage />
      <Footer />
    </FavouriteProvider>
  );
}

export default App;
