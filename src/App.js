import SignUp from './sign_up.js';
import Login from './Login.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
