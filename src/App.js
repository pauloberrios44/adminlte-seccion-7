import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import ListadoUsuarios from './pages/usuarios/usuarios';
import Profile from './pages/usuarios/profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/usuarios' element={<ListadoUsuarios/>}></Route>
        <Route path='/usuarios/:id' element={<Profile/>}></Route>
      </Routes>
    </Router>    
  );
}

export default App;
