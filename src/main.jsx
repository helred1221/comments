import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import App from './App.jsx'
import PaginaLogin from './components/PaginaLogin.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<PaginaLogin />} />
      <Route path='home' element={<App />} />
    </Routes>
  </BrowserRouter>
)
