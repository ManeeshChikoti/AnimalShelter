import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/contact",
    element: <Contact />
  },{
    path:"*",
    element:(
      <div  style={{display:"flex",flexDirection:"column",height:"100vh", alignItems:" center",padding:"20px"}}>
        <h2>404</h2>
        <h2>The Page you are looking for doesnot exist.</h2>
      </div>
    )
  }
])
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
