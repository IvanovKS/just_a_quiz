import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Winners from './pages/Winners';
import NotFound from './pages/NotFound';
import MainLayout from './layouts/MainLayout';
import { ThemeContext } from './context/ThemeContext';
import { useContext } from 'react';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <BrowserRouter>
        <div className={`app ${theme}`}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="quiz" element={<Quiz />} />
              <Route path="winners" element={<Winners />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
