import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./style.css";

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import GetQuote from './pages/GetQuote';

import Layout from './components/Layout';


function App() {
  const router = createBrowserRouter([
     {
      path: "/",
      element: <Layout />,
      children: [
        {path: "/", element: <Home/>},
        {path: "services", element: <Services />},
        {path: "about", element: <About />},
        {path: "contact", element: <Contact />},
        {path: "get-a-quote", element: <GetQuote />},
      ],
     },
       
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
