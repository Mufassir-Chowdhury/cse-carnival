//App.jsx

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import SponsoredBy from "./components/SponsoredBy";
import Footer from "./components/Footer";

import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import IUPC from "./pages/IUPC";
import Hackathon from "./pages/Hackathon";
import DLSprint from "./pages/DLSprint";
import CodeBattle from "./pages/CodeBattle";
import Organizer from "./components/Organizer";

const App = () => {
  return (
    <main className="bg-body ">

      <Navbar />
      {/* <Banner/> */}
      <section className="">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/iupc" element={<IUPC />}></Route>
          <Route path="/hackathon" element={<Hackathon />}></Route>
          <Route path="/dlsprint" element={<DLSprint />}></Route>
          <Route path="/codebattle" element={<CodeBattle />}></Route>
        </Routes>
      </section>
      {/* <SponsoredBy/> */}
      <Organizer/>
      <Footer />

    </main>
  );
};

export default App;
