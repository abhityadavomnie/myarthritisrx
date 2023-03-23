import logo from './logo.svg';
import './App.css';
import Header from './Components/SiteComponents/Header';
import Banner from './Components/SiteComponents/Banner';
import PersonalTreatmentPlan from './Components/SiteComponents/PersonalTreatmentPlan';
import BenifitSection from './Components/SiteComponents/BenifitSection';
import WhiteBlock from './Components/SiteComponents/WhiteBlock';
import ManageExcercice from './Components/SiteComponents/ManageExcercice';
import Registration from './Components/SiteComponents/Registration';
import Footer from './Components/SiteComponents/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/SiteComponents/Home';
import ProgramIndex from './Components/SiteComponents/Program/ProgramIndex';
import AboutUsIndex from './Components/SiteComponents/AboutUs.js/AboutUsIndex';
import VideoIndex from './Components/SiteComponents/Videos.js/VideoIndex';
import BlogIndex from './Components/SiteComponents/Blog/BlogIndex';
import AboutArthritisIndex from './Components/SiteComponents/AboutArthritis/AboutArthritisIndex';
import Privacy from './Components/SiteComponents/Footers/Privacy';
import HippaComplience from './Components/SiteComponents/Footers/HippaComplience';
import TermsOfUse from './Components/SiteComponents/Footers/TermsOfUse';
import SiteMap from './Components/SiteComponents/Footers/SiteMap';
import ContactUsIndex from './Components/SiteComponents/ContactUs/ContactUsIndex';
import toast, { Toaster } from 'react-hot-toast';
import CoachIndex from './Components/CoachComponents/CoachIndex';
import NewUserList from './Components/CoachComponents/NewUserList';
import NotIntersted from './Components/CoachComponents/NotIntersted';
import ContactUsList from './Components/CoachComponents/ContactUsList';
import UserComponentIndex from './Components/UserComponents/UserComponentIndex';
import Referral from './Components/CoachComponents/Referral';
import Resource from './Components/CoachComponents/Resource';
import AddResource from './Components/CoachComponents/AddResource';
import CoachListing from './Components/CoachComponents/CoachListing';
import CreateCoach from './Components/CoachComponents/CreateCoach';
import GroupList from './Components/CoachComponents/GroupList';
import UpsertGroup from './Components/CoachComponents/UpsertGroup';
import RedFlagPatient from './Components/CoachComponents/RedFlagPatient';

function App() {

  const href= window.location.href;
  const isAccountHref= href.split('/')[3]==='MyAccount';
 


  return (
    isAccountHref ? (<div className="App">
      <UserComponentIndex></UserComponentIndex>
    </div>):( <div className="App">
    <Router>
      <Header />
      <main className="main fl-fix">
      <Routes>
         <Route exact path='/' element={<Home/>}></Route>
         <Route exact path='/OurProgram' element={<ProgramIndex/>}></Route>
         <Route exact path='/AboutUs' element={<AboutUsIndex/>}></Route>
         <Route exact path='/Videos' element={<VideoIndex/>}></Route>
         <Route exact path='/Blog' element={<BlogIndex/>}></Route>
         <Route exact path='/AboutArthritis' element={<AboutArthritisIndex/>}></Route>
         <Route exact path='/Privacy' element={<Privacy/>}></Route>
         <Route exact path='/HippaComplience' element={<HippaComplience/>}></Route>
         <Route exact path='/TermsOfUse' element={<TermsOfUse/>}></Route>
         <Route exact path='/SiteMap' element={<SiteMap/>}></Route>
         <Route exact path='/ContactUs' element={<ContactUsIndex/>}></Route>
         <Route exact path='/coach' element={<CoachIndex/>}>
          <Route  path='NewUsers' element={<NewUserList/>}></Route>
          <Route path='currently-not-intersted' element={<NotIntersted/>}></Route>
          <Route path='red-flagged' element={<RedFlagPatient/>}></Route>
          <Route  path='ContactUsList' element={<ContactUsList/>}></Route>
          <Route  path='Referral' element={<Referral/>}></Route>
          <Route  path='Resource' element={<Resource/>}></Route>
          <Route  path='AddResource' element={<AddResource/>}></Route>
          <Route  path='CoachList' element={<CoachListing/>}></Route>
          <Route  path='CreateCoach' element={<CreateCoach/>}></Route>
          <Route  path='GroupList' element={<GroupList/>}></Route>
          <Route  path='Group' element={<UpsertGroup/>}></Route>
         </Route>
         <Route exact path='/MyAccount' element={<UserComponentIndex/>}></Route>
        
      </Routes>
      </main>
      <Footer />
    </Router>
    <Toaster />
    
  </div>)
   
  );
}

export default App;
