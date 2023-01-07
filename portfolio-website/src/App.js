import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import Home from "./components/Home";
import Nav from "./components/Nav";
import PortfolioPage from './components/PortfolioPage';
import ContactPage from './components/ContactPage';
import ResumePage from './components/ResumePage';

function App() {
  return (
    <div>
       <BrowserRouter>
       <div>
        <Nav />
        <Routes>
          <Route index element={<Home />}/>          

          <Route path='portfolio' element={<PortfolioPage />}>   
            <Route path='screen-logs' element={<Home />}/>
            <Route path='caravan-management' element={<ResumePage />}/>
            <Route path='noir-adventure' element={<Home />}/>
          </Route>

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
