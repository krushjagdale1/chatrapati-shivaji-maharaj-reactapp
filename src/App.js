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
import Telugu from './components/Telugu';
import Kannada from './components/Kannada';
import Sansrit from './components/Sansrit';
import Sitemap from './Sitemap/Sitemap';

function App() {
  return (
    <>
      <Router>
        <Routes>
                <Route exact path="/" element={<English />} />
                <Route exact path="/hindi" element={<Hindi />} />
                <Route exact path="/marathi" element={<Marathi />} />
                <Route exact path="/telugu" element={<Telugu />} />
                <Route exact path="/kannada" element={<Kannada />} />
                <Route exact path="/sanskrit" element={<Sansrit />} />
                <Route exact path="/sitemap" element={<Sitemap />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
