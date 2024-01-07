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
import IUPCRegistraion from "./pages/Registration/IUPCRegistration";
import HackathonRegistration from "./pages/Registration/HackathonRegistration";
import DLSprintRegistration from "./pages/Registration/DLSprintRegistration";
import CodeBattleRegistration from "./pages/Registration/CodeBattleRegistration";
import { organizers } from "./data/data";

const App = () => {
  return (
    <main className="bg-body">

      <Navbar />
      {/* <Banner/> */}
      <section className="">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/iupc" element={<IUPC />}></Route>
          <Route path="/hackathon" element={<Hackathon />}></Route>
          <Route path="/dlsprint" element={<DLSprint />}></Route>
          <Route path="/codebattle" element={<CodeBattle />}></Route>

          <Route path="/iupc/registration" element={<IUPCRegistraion />}></Route>
          <Route path="/hackathon/registration" element={<HackathonRegistration />}></Route>
          <Route path="/dlsprint/registration" element={<DLSprintRegistration />}></Route>
          <Route path="/codebattle/registration" element={<CodeBattleRegistration />}></Route>
        </Routes>
      </section>
      {/* <SponsoredBy/> */}
      <Organizer organizers={organizers} />
      <Footer />

    </main>
  );
};

export default App;
