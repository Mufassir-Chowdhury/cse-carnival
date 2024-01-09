//App.jsx

import Navbar from "./components/Navbar";
import SponsoredBy from "./components/SponsoredBy";
import Footer from "./components/Footer";

import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import IUPC from "./pages/IUPC";
import Hackathon from "./pages/Hackathon";
import DLSprint from "./pages/DLSprint";
import CodeBattle from "./pages/CodeBattle";
import IUPCRegistraion from "./pages/Registration/IUPCRegistration";
import HackathonRegistration from "./pages/Registration/HackathonRegistration";
// import DLSprintRegistration from "./pages/Registration/DLSprintRegistration";
import CodeBattleRegistration from "./pages/Registration/CodeBattleRegistration";
import { organizers, poweredby } from "./data/data";
import ContactUs from "./pages/ContactUs";
import DLSprintRegistration from "./pages/Registration/DLSprintAnnouncement";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <main className="bg-body">

      <Navbar />
      <section className="">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/iupc" element={<IUPC />}></Route>
          <Route path="/hackathon" element={<Hackathon />}></Route>
          <Route path="/dlenigma" element={<DLSprint />}></Route>
          <Route path="/codebattle" element={<CodeBattle />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>

          <Route path="/iupc/registration" element={<IUPCRegistraion />}></Route>
          <Route path="/hackathon/registration" element={<HackathonRegistration />}></Route>
          <Route path="/dlenigma/registration" element={<DLSprintRegistration />}></Route>
          <Route path="/codebattle/registration" element={<CodeBattleRegistration />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
      {/* <SponsoredBy/> */}
      {window.location.pathname !== '*' && (
        <div className="lg:mx-0 z-10 relative px-4  pb-0 lg:px-28">
          <>
            <SponsoredBy title={"Powered By"} list={""} sponsors={poweredby} />
            <SponsoredBy title={"Organized By"} list={"list"} sponsors={organizers} />
          </>
        </div>
      )}
      
      <Footer />

    </main>
  );
};

export default App;
