import './App.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Usuarios from './pages/Usuarios';
import Avances from './pages/Avances';
import Index from './pages/Index';
import Usuarios2 from './pages/Usuarios2';
import Test from './pages/Test';





function App() {
  return (  
    <div>  
      <Router>
        <Routes>
          <Route exact path="/usuarios" element={<Usuarios />}/>    
          <Route exact path="/usuarios2" element={<Usuarios2 />}/>          
          <Route exact path="/avances" element={<Avances/>}/>
          <Route exact path="/test" element={<Test/>}/>
          <Route exact path="/" element={<Index />}/>            
        </Routes>
      </Router>            
      </div>
  );
}

export default App;
