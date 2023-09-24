import React from "react";
// import Disclaimer from './components/Disclaimer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
//   Navbar,
//   Hero,
  Csr,
//   Footer,
Flat,
  TulipCity,
  Profile,
  FuturePlan,
  Chyanir,
  History,
  Philosophy,
  Quality,
  Policies,
  Ad,
  Room,
  Press,
  News,
  Career,
  Current,
  Contact,
  Location,
  Login,
  Commercial,
  Residential,
  Duplex,
  Resident,
  ModernDuplex,
  ModernTriplex,
  Resturent,
  Consultancy,
  Interior,
  DuplexHouse,
  FairFaceWork,
  NeedShowRoom,
  SuperTechTrip,
  TvShowRoom,
  ModernKitchenCabinate,
  DuplexPlat,
  DuplexFlat,
  HotelSultan,
  Dcr,

  InteriorAndExterior,
  AzizSuperMarket,
  CorporateOffice,
  RestHouse,
  Mosque,
  B,
  SevenStoryResidential,
  SixStoryBuilding,
  SixStoryResidential,
  TenStoryBuilding,
  TenStoryCondoBuilding,
  TenStoryResidential,
  OfficeBuilding,
} from "./components";
import ProjectDetail from "./components/ProjectDetail";
import Mediadetail from "./components/Mediadetail";
import Carierdetail from "./components/Carierdetail";
import { Page,AddPage,Project,AddProject,Media,Carier } from "./Dashboard";
// import Profile from './components/AboutUs/Profile';
import Home from "./components/Home";
import DashBoardPage from "./Dashboard/DashboardPage";
import NoorChineseRestrant from "./components/Interior/MeetingRoom/NoorChineseResturant";
import BeingHouse from "./components/Interior/MeetingRoom/BingHouse";
const App = () => {
  return (
    <Router>
      <Routes>


      {/* Dynamic Pages here */}

      <Route exact path="/projects/:projectId" element={<ProjectDetail />} />
      <Route exact path="/media/:mediaId" element={<Mediadetail />} />
      <Route exact path="/carier/:carierId" element={<Carierdetail />} />


   


        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/csr" element={<Csr />} />
        <Route exact path="/futurePlan" element={<FuturePlan />} />
        <Route exact path="/history" element={<History />} />
        {/* <Route exact path="/policies" element={<Policies />} /> */}
        <Route exact path="/philosophy" element={<Philosophy />} />
        <Route exact path="/qualityPolicy" element={<Quality />} />
        <Route exact path="/whyWork" element={<Career />} />
        <Route exact path="/currentOpening" element={<Current />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/addCompagin" element={<Ad />} />
        <Route exact path="/businessQuery" element={<Contact />} />
        <Route exact path="/location" element={<Location />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/commercial" element={<Commercial />} />
        <Route exact path="/residential" element={<Residential />} />
        <Route exact path="/residential/chyanir" element={<Chyanir />} />
        <Route exact path="/residential/tulip" element={<TulipCity />} />
        <Route exact path="/residential/duplexHouse" element={<Duplex />} />
        <Route exact path="/residential/resident" element={<Resident />} />
        <Route exact path="/residential/mordenDuplex" element={<ModernDuplex />} />
        <Route exact path="/residential/mordenTriplex" element={<ModernTriplex />} />
        <Route exact path="/interior" element={<Interior />} />
        <Route exact path="/consultancy" element={<Consultancy />} />

        <Route exact path="/interior/resturent" element={<Resturent />} />
        <Route path="/pressCoverage" element={<Press />} />
        <Route exact path="/interior/room" element={<Room />} />
        <Route exact path="/interior/duplexHouse" element={<DuplexHouse />} />
        <Route exact path="/interior/fareFaceWork" element={<FairFaceWork />} />
        <Route exact path="/interior/needShowroom" element={<NeedShowRoom />} />
        <Route exact path="/interior/duplexFlat" element={<DuplexFlat />} />
        <Route exact path="/interior/duplexPlat" element={<DuplexPlat />} />
        <Route exact path="/interior/residentialInterior" element={<Resident />} />
        <Route exact path="/interior/mkc" element={<ModernKitchenCabinate />} />
        <Route exact path="/interior/tvShowroom" element={<TvShowRoom />} />
        <Route exact path="/interior/supertechTrip" element={<SuperTechTrip />} />
        <Route exact path="/interior/ncr" element={<NoorChineseRestrant />} />
        <Route exact path="/interior/bingHouse" element={<BeingHouse />} />
        <Route exact path="/interior/flat" element={<Flat />} />
        <Route exact path="/interior/needSowroom" element={<NeedShowRoom />} />
        <Route exact path="/interior/hotelSultan" element={<HotelSultan />} />
        <Route exact path="/interior/resturant" element={<Resturent />} />
        <Route exact path="/consultancy/dcr" element={< Dcr />} />
        <Route exact path="/consultancy/sixStoryBuilding" element={< Dcr />} />
        <Route exact path="/consultancy/tenStoryBuilding" element={<TenStoryBuilding />} />
        <Route exact path="/consultancy/officeBuilding" element={<OfficeBuilding />} />
        <Route exact path="/consultancy/tenStoryResidential" element={< TenStoryResidential />} />
        <Route exact path="/consultancy/tenStoryCondoBuilding" element={<TenStoryCondoBuilding />} />
        <Route exact path="/consultancy/sixStoryResidential" element={<SixStoryResidential />} />
        <Route exact path="/consultancy/sevenStoryResidential" element={<SevenStoryResidential />} />
        <Route exact path="/consultancy/b" element={<B />} />
        <Route exact path="/consultancy/mosque" element={<Mosque />} />
        <Route exact path="/consultancy/restHouse" element={< RestHouse />} />
        <Route exact path="/consultancy/coorporateOffice" element={<CorporateOffice />} />
        <Route exact path="/consultancy/asm" element={<AzizSuperMarket />} />
        <Route exact path="/consultancy/interiorAndExterior" element={<InteriorAndExterior />} />












{/* Dashboard Working*/}


        <Route exact path="/dashboard" element={<DashBoardPage />} />
        <Route exact path="/dashboard/page" element={<Page />} />
        <Route exact path="/dashboard/page/addPage" element={<AddPage />} />
        <Route exact path="/dashboard/project" element={<Project />} />
        <Route exact path="/dashboard/project/addproject" element={<AddProject />} />
        <Route exact path="/dashboard/media" element={<Media />} />
        <Route exact path="/dashboard/carier" element={<Carier />} />


        

      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;