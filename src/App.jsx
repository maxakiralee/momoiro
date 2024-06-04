import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Slides from './Slides';
import { AudioProvider } from './Audio';

function App() {

  return (
    <Router>
      <AudioProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/slides" element={<Slides />} />
        </Routes>
      </AudioProvider>
    </Router>
  );
}
export default App;
