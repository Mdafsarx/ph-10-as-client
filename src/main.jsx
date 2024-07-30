import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/routes';
import AuthProvider from './Auth/AuthProvider';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
// AOS.init();
// import 'animate.css';
import 'react-tooltip/dist/react-tooltip.css'
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <ToastContainer />  
    </HelmetProvider>
  </React.StrictMode>,
)
