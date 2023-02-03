import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { updateCoreAreas } from "./reduxStore/actionDispatches";
import { addPrograms } from "./reduxStore/actionDispatches";
import { addNewsUpdates } from "./reduxStore/actionDispatches";
import { getMultipleDocuments } from "./firestore/getFromFirestore.utils";

//Pages
import LandingPage from "./pages/landingPage/landingPage.component";
import ContactUs from "./pages/contactUs/contactUs.component";
import AboutUs from "./pages/aboutUs/aboutUs.component";
import Programs from "./pages/programs/programs.component";
import NavigationBar from "./components/navigationBar/navigationBar.components";
import Footer from "./components/footer/footer.component";
import ViewArea from "./components/coreAreas/viewArea.component.jsx";
import ViewPrograms from "./components/programs/viewPrograms.component";

import NewsUpdatesCMS from "./cms/landingPage/newsUpdatesCMS.component";
import CoreAreasCMS from "./cms/landingPage/coreAreasCMS.components";
import ProgramsCMS from "./cms/programPage/programsCMS.component";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    getMultipleDocuments("LandingPage").then((coreAreasDB) => dispatch(updateCoreAreas(coreAreasDB)));
  }, []);

  useEffect(() => {
    getMultipleDocuments("NewsUpdates").then((NewsUpdatesDB) => dispatch(addNewsUpdates(NewsUpdatesDB)));
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path = "/" element={[<NavigationBar/>, <Footer/>]}>
          <Route index element={<LandingPage/>}></Route>
          <Route path="contactus" element={<ContactUs/>}></Route>
          <Route path="aboutus" element={<AboutUs/>}></Route>
          <Route path="aboutus/*" element={<ViewArea/>}></Route>
          <Route path="programs" element={<Programs/>}></Route>
          <Route path="programs/*" element={<ViewPrograms/>}></Route>
          <Route path="landingcms" element={<CoreAreasCMS/>}></Route>
          <Route path="newsupdatescms" element={<NewsUpdatesCMS/>}></Route>
          <Route path="programscms" element={<ProgramsCMS/>}></Route>
        </Route>
      </Routes>
        {/* <Footer/> */}
    </div>
  );
}

export default App;
