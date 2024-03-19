import logo from './logo.svg';
import Text from './components/Text';
import './App.css';
import Profile from './components/screens/Profile';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='flex justify-center items-center h-screen'>
      {/* <Login/> */}
      {/* <Register/> */}
      {/* route == /login <Login/> */}
      {/* route == /register <Register/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
        </Routes>
      </BrowserRouter>
      {/* <Login/>
      <Register/> */}

    </div>
  );
}

export default App;
