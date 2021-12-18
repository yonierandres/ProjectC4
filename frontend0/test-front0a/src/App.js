import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Usuarios from './pages/Usuarios';
import Avances from './pages/Avances';
import Index from './pages/Index';



function App() {
  return (    
      <Router>
        <Routes>
          <Route exact path="/usuarios" element={<Usuarios />}/>            
          <Route exact path="/avances" element={<Avances/>}/>
          <Route exact path="/" element={<Index />}/>            
        </Routes>
      </Router>
  );
}

export default App;
