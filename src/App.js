import { Routes, Route } from "react-router-dom";

//Pages
import LandingPage from "./pages/landingPage/landingPage.component";
import ContactUs from "./pages/contactUs/contactUs.component";
import AboutUs from "./pages/aboutUs/aboutUs.component";
import Programs from "./pages/programs/programs.component";
import NavigationBar from "./components/navigationBar/navigationBar.components";
import Footer from "./components/footer/footer.component";
import ProgramsUpload from "./components/programsUpload/programsUpload.component";
import ViewOne from "./components/viewOne/viewOne.component";

import CoreAreasCMS from "./cms/landingPage/coreAreasCMS.components";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element={[<NavigationBar/>, <Footer/>]}>
          <Route path="landingcms" element={<CoreAreasCMS/>}></Route>
          <Route path="programsupload" element={<ProgramsUpload/>}></Route>
          <Route index element={<LandingPage/>}></Route>
          <Route path="contactus" element={<ContactUs/>}></Route>
          <Route path="aboutus" element={<AboutUs/>}></Route>
          <Route path="programs" element={<Programs/>}></Route>
          <Route path="content" element={<ViewOne></ViewOne>}></Route>
        </Route>
      </Routes>
        {/* <Footer/> */}
    </div>
  );
}

export default App;
