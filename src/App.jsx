import './App.css';
import { Route, Routes } from 'react-router';
import Main from './componebts/Mainn';
import Home from './pages/Home';
import About from './pages/About';
import Explore from './pages/Explore';
import Trending from './pages/Trending';
import Contact from './pages/Contact';
import Nopage from './pages/nopage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="explore" element={<Explore />} />
          <Route path="trending" element={<Trending />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Nopage />} />
      </Routes>
    </div>
  );
}

export default App;
