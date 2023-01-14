import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Booklist from './components/Booklist';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/books" >Booklist</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<Booklist />} />
        <Route />
      </Routes>
    </>
  );
}

export default App;
