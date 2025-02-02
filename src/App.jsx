import Navbar1 from "./components/Navbar1";
import Navbar2 from "./components/Navbar2";
import Hero from "./components/Hero";
import Frame from "./components/Frame";
import Services from './components/Services';
import About from "./components/About";
import Why from "./components/Why";
import VideoInstructions from "./components/VideoInstructions";
import HappyClients from './components/HappyClients'
import Blogs from "./components/Blogs";
import SayAbout from "./components/SayAbout";
import ManageServices from "./components/ManageServices";
import Achievements from "./components/Achievements";
import Form from "./components/Form";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import Faq from './components/Faq'



function App() {
  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <Hero />
      <Services/>
      <About/>
      <Why/>
      <VideoInstructions/>
      <HappyClients/>
      <Frame />
      <Blogs/>
      < SayAbout />
      <Faq/>
      <ManageServices/>
      <Achievements/>
      <Form/>
      <Partners/>
      <Footer />
    </>
  );
}

export default App;
