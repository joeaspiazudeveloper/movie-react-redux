import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import Movie from './pages/Movie'
import Header from './components/Header'
import About from './pages/About';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
            <Route path='/not-found' Component={NotFound} />
            <Route path='/about' Component={About} />
            <Route path='/' Component={Movie} />
            <Route path="*" element={<Navigate to ="/not-found" />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
