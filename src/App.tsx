import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Root from './Components/Root'
import About from './Container/About'
import Home from './Container/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
