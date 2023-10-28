import Navbar from "./Components/CommonComponents/Navbar";
import HomePage from "./Pages/HomePage";
import NotFound404 from "./Pages/NotFound404";
import RoadMap from "./Pages/RoadMap";
import BackgroundTheme from "./Utilities/BackgroundTheme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BackgroundTheme />
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/roadmap" element={<RoadMap />} />
          <Route path="/*" element={<NotFound404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
