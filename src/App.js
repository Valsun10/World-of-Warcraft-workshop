import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import HomePage from "./components/HomePage/HomePage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import DetailsPage from "./components/Details/DetailsPage";
import CreateHero from "./components/CreateHero/CreateHero";
import CreateClass from "./components/CreateClass/CreateClass";
import CreateRace from "./components/CreateRace/CreateRace";
import RequireAuth from "./guards/RequireAuth";
import RequireGuest from "./guards/RequireGuest";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { useEffect, useState } from "react";
import heroesService from "./services/HeroesService";
import TableUsersPage from "./components/TableUsersPage/TableUsersPage";

function App() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    heroesService.GetAllHeroes().then((res) => {
      setHeroes(res.payload.docs);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={<HomePage heroes={heroes} setHeroes={setHeroes} />}
          />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <ProfilePage />
              </RequireAuth>
            }
          />
          <Route
            path="/details/:heroId"
            element={
              <RequireAuth>
                <DetailsPage />
              </RequireAuth>
            }
          />
          <Route
            path="/create"
            element={
              <RequireAuth>
                <CreateHero setHeroes={setHeroes} />
              </RequireAuth>
            }
          />
          <Route
            path="/createClass"
            element={
              <RequireAuth>
                <CreateClass />
              </RequireAuth>
            }
          />
          <Route
            path="/createRace"
            element={
              <RequireAuth>
                <CreateRace />
              </RequireAuth>
            }
          />
          <Route
            path="/login"
            element={
              <RequireGuest>
                <LoginPage />
              </RequireGuest>
            }
          />
          <Route
            path="/register"
            element={
              <RequireGuest>
                <RegisterPage />
              </RequireGuest>
            }
          />
          <Route
            path="/usersTable"
            element={
              <RequireAuth>
                <TableUsersPage />
              </RequireAuth>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
