import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import 'react-toastify/ReactToastify.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
