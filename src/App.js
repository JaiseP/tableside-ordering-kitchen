import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginScreen from './pages/login/login';
import MainScreen from './pages/main/main';
import "./App.css";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<LoginScreen />} path = "/" />
    </Routes>
    <Routes>
      <Route element={<MainScreen />} path = "/orders" />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
