import Footer from "./Footer";
import MainPage from "./MainPage";
import Navbar from "./Navbar";
import "swiper/css";
import Services from "./Services";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <MainPage />
      <Services />
      <Footer />
    </>
  );
}

export default App;
