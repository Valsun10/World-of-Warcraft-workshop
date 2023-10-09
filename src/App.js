import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import HomePage from "./components/HomePage/HomePage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import { AuthProvider } from "./context/authContext";
import DetailsPage from "./components/Details/DetailsPage";
import CreateHero from "./components/CreateHero/CreateHero";
import CreateClass from "./components/CreateClass/CreateClass";
import CreateRace from "./components/CreateRace/CreateRace";
import RequireAuth from "./guards/RequireAuth";
import RequireGuest from "./guards/RequireGuest";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
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
                  <CreateHero />
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
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
