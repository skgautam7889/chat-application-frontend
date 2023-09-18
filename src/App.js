import './App.css';
import { UserAuthProvider } from './Auth/UserAuthProvider';
import {Navigate, Routes, Route } from "react-router-dom"
import Login from './pages/auth/user/Login';
import Signup from './pages/auth/user/Signup';

function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Navigate to="/auth/login" />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/signup' element={<Signup />} />
      </Routes>
      <UserAuthProvider>
        {/* <MainLayout >
          <Routes>
            <Route path='/' element={<Navigate to="/dashboard" />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/messages' element={<Message />} />
            <Route path='/notes' element={<Note />} />
          </Routes>
        </MainLayout> */}
      </UserAuthProvider>
    </>
  );
}

export default App;
