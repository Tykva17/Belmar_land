import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './normalize.css';
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer/Footer";
import { LanguageProvider } from './LanguageContext/LanguageContext';

import SvgMap from "./components/Map/SvgMap";


function App() {
  return (
    <div className="App">
        <LanguageProvider>
          <Router>
              <Header/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about_us" element={<AboutUs />} />
              <Route path="/events" element={<Events />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/cirkle" element={<SvgMap />} />
            </Routes>
              <Footer/>
          </Router>
        </LanguageProvider>
    </div>
  );
}

export default App;
