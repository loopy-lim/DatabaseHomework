import Head from "./main_component/Head";
import "bootstrap/dist/css/bootstrap.min.css";
import Foot from "./main_component/Foot";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main.pages";

function App() {
  return (
    <>
      <Head></Head>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/login" element="asdf"></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Foot></Foot>
    </>
  );
}

export default App;
