import { Routes, Route } from "react-router-dom";

//Pages
import LandingPage from "./pages/landingPage/landingPage.component";
import ContactUs from "./pages/contactUs/contactUs.component";
import AboutUs from "./pages/aboutUs/aboutUs.component";
import Programs from "./pages/programs/programs.component";
import NavigationBar from "./components/navigationBar/navigationBar.components";
import Footer from "./components/footer/footer.component";
import ProgramsUpload from "./components/programsUpload/programsUpload.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element={[<NavigationBar/>, <Footer/>]}>
          <Route index element={<LandingPage/>}/>
          <Route path="contactus" element={<ContactUs/>}/>
          <Route path="aboutus" element={<AboutUs/>}/>
          <Route path="programs" element={<Programs/>}></Route>
          <Route path="programsupload" element={<ProgramsUpload/>}></Route>
        </Route>
      </Routes>
        {/* <Footer/> */}
    </div>
  );
}

export default App;
