import React from "react";
import About from "./components/about";
import Header from "./components/header";
import Projects from "./components/Projects";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer";
const App = () =>{
  return(
    <div className="w-full overflow-hidden">
      <ToastContainer/>
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App