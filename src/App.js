import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home.js';
import Projects from './components/Projects.js'
import './styles/App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
      
    </Router>
  );
}

export default App;
