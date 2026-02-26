import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ROUTES } from "./constants/Routes.jsx";
import FavouritesPage from "./pages/FavouritesPage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={ROUTES.home} element={<HomePage />} />
        <Route path={ROUTES.favourites} element={<FavouritesPage />} />
        <Route path="/meal-details/:mealID" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
