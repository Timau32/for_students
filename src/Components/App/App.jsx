import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "../../pages";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default App;
