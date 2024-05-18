import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import StudentListPage from './pages/StudentListPage';
import StudentDetailPage from './pages/StudentDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element=<StudentListPage /> />
        <Route path='/detail/:_id' element=<StudentDetailPage /> />
        <Route path='/add' element=<StudentDetailPage /> />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
