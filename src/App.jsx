import './App.css'
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router";
import Signup from './components/Signup';
import ShowTasks from './components/ShowTasks';
import MainLayout from './components/MainLayout';
import AddTasks from './components/AddTask';
import Edit from './components/EditTask';

function App() {

  return (
    <div class='bg-sky-50 w-screen h-screen m-0 p-3'>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/" element={
            <MainLayout>
              <ShowTasks />
            </MainLayout>
          } />
          <Route path="/add" element={
            <MainLayout>
              <AddTasks />
            </MainLayout>
          } />

          <Route path="/edit/:id/:title/:progress/:priority" element={
            <MainLayout>
              <Edit />
            </MainLayout>
          } />

          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
