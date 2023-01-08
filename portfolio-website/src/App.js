import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import Home from "./components/Home";
import Nav from "./components/Nav";
import PortfolioPage from './components/PortfolioPage';
import ContactPage from './components/ContactPage';
import ResumePage from './components/ResumePage';
import Screenlogs from './components/Screenlogs';
import CaravanManagement from './components/CaravanManagement';

function App() {
  return (
    <div>
       <BrowserRouter>
       <div>
        <Nav />
        <Routes>
          <Route index element={<Home />}/>          

          <Route path='portfolio' element={<PortfolioPage />} />   
            <Route path='/portfolio/screen-logs' element={<Screenlogs />}/>
            <Route path='/portfolio/caravan-management' element={<CaravanManagement />}/>
            <Route path='noir-adventure' element={<Home />}/>
        

          <Route path='about' element={<AboutPage />}/>          
          <Route path='contact' element={<ContactPage />}/>          
          <Route path='resume' element={<ResumePage />}/>          
        </Routes>
        </div>
       </BrowserRouter>
    </div>
  );
}

export default App;
