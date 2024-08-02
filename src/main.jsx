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
import AnimatedCursor from 'react-animated-cursor';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <AnimatedCursor
          innerSize={9}
          outerSize={24}
          innerScale={1}
          outerScale={1.7}
          outerAlpha={0}
          outerStyle={{
            border: '4px solid #A855F7',
          }}
          innerStyle={{
            backgroundColor: '#FF6AC2'
          }}
        />
      </AuthProvider>
      <ToastContainer />
    </HelmetProvider>
  </div>,
)
