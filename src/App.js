import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { updateCoreAreas, updateMandate, updateAboutWIPF, addStaff } from "./reduxStore/actionDispatches";
import { addPrograms } from "./reduxStore/actionDispatches";
import { addNewsUpdates } from "./reduxStore/actionDispatches";
import { getMultipleDocuments } from "./firestore/getFromFirestore.utils";

//Pages
import LandingPage from "./pages/landingPage/landingPage.component";
import ContactUsPage from "./pages/contactUs/contactUs.component";
import AboutUs from "./pages/aboutUs/aboutUs.component";
import Programs from "./pages/programs/programs.component";
import NavigationBar from "./components/navigationBar/navigationBar.components";
import Footer from "./components/footer/footer.component";
import ViewProgram from "./components/programs/viewProgram/viewProgram.component";
import ViewArea from "./components/coreAreas/viewArea/viewArea.component";
import NewsUpdatesCMS from "./cms/landingPage/newsUpdatesCMS.component";
import CoreAreasCMS from "./cms/landingPage/coreAreasCMS.components";
import ProgramsCMS from "./cms/programPage/programsCMS.component";
import MandateCMS from "./cms/aboutPage/mandateCMS.component";
import AboutCMS from "./cms/aboutPage/aboutCMS.component";
import StaffCMS from "./cms/aboutPage/staffCMS.component";
import CMSNav from "./cms/cmsNav.component";
import Authenticator from "./authenticator/signIn/authenticator.component";
import SignUp from "./authenticator/signUp/signUp.component";
import Authenticate from "./authenticator/authenticate.component";

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser.currentUser) || "";

  useEffect(() => {
    getMultipleDocuments("LandingPage").then((coreAreasDB) => dispatch(updateCoreAreas(coreAreasDB)));
  }, []);

  useEffect(() => {
    getMultipleDocuments("NewsUpdates").then((NewsUpdatesDB) => dispatch(addNewsUpdates(NewsUpdatesDB)));
  }, []);

  useEffect(() => {
    getMultipleDocuments("Programs").then((ProgramsDB) => dispatch(addPrograms(ProgramsDB)));
}, []);

  useEffect(()=> {
    getMultipleDocuments("aboutUs").then((MandateDB) => dispatch(updateMandate(MandateDB)));
  }, []);

  useEffect(()=>{
    getMultipleDocuments("aboutUs").then((AboutDB) => dispatch(updateAboutWIPF(AboutDB)));
  });

  useEffect(()=>{
    getMultipleDocuments("Staff").then((StaffDB) => dispatch(addStaff(StaffDB)));
  });

  return (
    <div className="App">
      <Routes>
        <Route path = "/" element={[<NavigationBar/>, <Footer/>]}>
          <Route index element={<LandingPage/>}></Route>
          <Route path="contactus" element={<ContactUsPage/>}></Route>
          <Route path="aboutus" element={<AboutUs/>}></Route>
          <Route path="aboutus/*" element={<ViewArea/>}></Route>
          <Route path="programs" element={<Programs/>}>
            <Route path="programs?" element={<Programs/>}></Route>
          </Route>
          <Route path="programs/*" element={<ViewProgram/>}></Route>

          {/* Rest Routes */}
          <Route path="admin" element={<Authenticator/>}></Route>
          <Route path="admin/cms" element={<Authenticate component = {CMSNav} user = {currentUser} />}></Route>
          <Route path="admin/signup" element={<Authenticate component = {SignUp} user = {currentUser} />}></Route>
        
          <Route path="admin/cms/coreareas/new" element={<Authenticate component = {CoreAreasCMS} user = {currentUser} />}></Route>
          <Route path="admin/cms/programs/new" element={<Authenticate component = {ProgramsCMS} user = {currentUser} />}></Route>
          <Route path="admin/cms/newsupdates/new" element={<Authenticate component = {NewsUpdatesCMS} user = {currentUser} />}></Route>
          <Route path="admin/cms/mandate/new" element={<Authenticate component = {MandateCMS} user = {currentUser} />}></Route>
          <Route path="admin/cms/staff/new" element={<Authenticate component = {StaffCMS} user = {currentUser} />}></Route>
          <Route path="admin/cms/about/new" element={<Authenticate component = {AboutCMS} user = {currentUser} />}></Route>
        </Route>
      </Routes>
        {/* <Footer/> */}
    </div>
  );
}

export default App;
