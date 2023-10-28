import HomePage from "./Pages/HomePage";
import BackgroundTheme from "./Utilities/BackgroundTheme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BackgroundTheme />

      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
