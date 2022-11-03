import './App.css';

// Router
import {BrowserRouter, Routes, Route} from "react-router-dom";

// Pages
import  Home from './Pages/Home/Home';
import Login from './Pages/Auth/Login/Login';
import Register from './Pages/Auth/Register/Register';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login></Login>} />
      <Route path='/home' element={<Home></Home>} />
      <Route path='/register' element={<Register></Register>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
