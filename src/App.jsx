import { Outlet } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/header/Header";

import { FavouriteProvider } from "./providers";

function App() {
  return (
    <FavouriteProvider>
      <Header />
      <Outlet />
      <Footer />
    </FavouriteProvider>
  );
}

export default App;
