import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthContextProvider } from './context/AuthContextProvider.jsx'
import { TasksContextProvider } from './context/TasksContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <TasksContextProvider>
      <App />
    </TasksContextProvider>
  </AuthContextProvider>
)
