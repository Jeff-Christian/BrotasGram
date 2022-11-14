import './App.css';

// Router
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

// Hooks
import { useAuth } from './Hooks/UseAuth';

// Components
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';

// Pages
import  Home from './Pages/Home/Home';
import Login from './Pages/Auth/Login/Login';
import Register from './Pages/Auth/Register/Register';
import NotFound from './Pages/NotFound/NotFound';


function App() {

  const {auth, loading} = useAuth();

  if(loading){
    return <LoadingScreen></LoadingScreen>
  }

  return (
   <BrowserRouter>
    <Routes>
      <Route 
      path='/' 
      element={!auth ? <Login></Login> : <Navigate to="/home"/> } />

      <Route 
      path='/home' 
      element={auth ? <Home></Home> : <Navigate to="/" />} />

      <Route 
      path='/register' 
      element={!auth ? <Register></Register> : <Navigate to="/home"/>} />

      <Route 
      path='/*' 
      element={<NotFound></NotFound>} />

    </Routes>
   </BrowserRouter>
  );
}

export default App;
