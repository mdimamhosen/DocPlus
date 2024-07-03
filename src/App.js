import "./App.css";
import Navbar from "./components/Navbar";
import Statistics from "./components/Statistics";
import Banner from "./components/Banner";
import About from "./components/About";
import Service from "./components/Service";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" ">
      <div className="w-11/12 max-w-7xl mx-auto    lg:px-4 xl:px-0">
        <Navbar />
        <Banner />
        <Statistics />
        <About />
        <div className="bg-[#FFFFF5] my-4 border lg:my-8  rounded-2xl">
          <Service />
        </div>
        <Testimonials />
        <Faq />
        <Contact />
      </div>
      <div className="  bg-[#020043] min-w-screen    mx-auto flex ">
        {" "}
        <Footer />{" "}
      </div>
    </div>
  );
}

export default App;
