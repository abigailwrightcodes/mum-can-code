import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import '../src/css/home.css'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/store">Store</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/community">Community</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          
          
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />

          
      
        </Routes>
      </div>
    </Router>
  )
}

export default App
