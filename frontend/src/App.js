import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

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
import ViewArea from "./components/coreAreas/viewArea.component.jsx.jsx";
import ViewPrograms from "./components/programs/viewPrograms.component";

import NewsUpdatesCMS from "./cms/landingPage/newsUpdatesCMS.component";
import CoreAreasCMS from "./cms/landingPage/coreAreasCMS.components";
import ProgramsCMS from "./cms/programPage/programsCMS.component";
import MandateCMS from "./cms/aboutPage/mandateCMS.component";
import AboutCMS from "./cms/aboutPage/aboutCMS.component";
import StaffCMS from "./cms/aboutPage/staffCMS.component";

function App() {

  const dispatch = useDispatch();

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
          <Route path="programs" element={<Programs/>}></Route>
          <Route path="programs/*" element={<ViewPrograms/>}></Route>
          <Route path="landingcms" element={<CoreAreasCMS/>}></Route>
          <Route path="newsupdatescms" element={<NewsUpdatesCMS/>}></Route>
          <Route path="programscms" element={<ProgramsCMS/>}></Route>
          <Route path="mandatecms" element={<MandateCMS/>}></Route>
          <Route path="aboutcms" element={<AboutCMS/>}></Route>
          <Route path="staffcms" element={<StaffCMS/>}></Route>
        </Route>
      </Routes>
        {/* <Footer/> */}
    </div>
  );
}

export default App;
