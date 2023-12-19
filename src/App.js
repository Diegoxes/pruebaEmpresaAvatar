import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import { useDispatch } from "react-redux";
import { loadingPokemons } from "./redux/actions";
import React, { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";


const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isRootPath = location.pathname === "/";

  const start = () => {
    navigate("/Home");
  };

  useEffect(() => {
    dispatch(loadingPokemons());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!isRootPath && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing start={start} />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Details/:id" element={<Detail />} />
      </Routes>
    </>
  );
};

export default App;
