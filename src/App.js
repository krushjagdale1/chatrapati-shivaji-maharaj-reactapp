import './App.css';
import './style.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import English from './components/English';
import Hindi from './components/Hindi';
import Marathi from './components/Marathi';

function App() {
  return (
    <>
      <Router>
        <Routes>
                <Route exact path="/" element={<English />} />
                <Route exact path="/hindi" element={<Hindi />} />
                <Route exact path="/marathi" element={<Marathi />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
