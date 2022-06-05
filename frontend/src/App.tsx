import Head from "./main_component/Head";
import "bootstrap/dist/css/bootstrap.min.css";
import Foot from "./main_component/Foot";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main.pages";
import Login from "./pages/Login.pages";

function App() {
  return (
    <>
      <Head></Head>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      <Foot></Foot>
    </>
  );
}

export default App;
