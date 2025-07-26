import Footer from "../../components/ComponentsPages/HomeComponent/Footer"
import AboutCollege from "../../components/ComponentsPages/HomeComponent/AboutCollege"
import AlumniStories from "../../components/ComponentsPages/HomeComponent/AlumniStories"
import CampusFacilities from "../../components/ComponentsPages/HomeComponent/CampusFacilities"
import Events from "../../components/ComponentsPages/HomeComponent/Events"
import HeroSection from "../../components/ComponentsPages/HomeComponent/HeroSection"
import News from "../../components/ComponentsPages/HomeComponent/News"
import ShowDepartment from "../../components/ComponentsPages/HomeComponent/ShowDepartment"
import Vision from "../../components/ComponentsPages/HomeComponent/Vision"
import Navbar from "../../components/ComponentsPages/HomeComponent/Navbar"
import { useRef } from "react"



const HomePage = () => {
  const ref=useRef(null);
  const AcaRef=useRef(null);

  const onHandleScroll=()=>{
    ref.current?.scrollIntoView({behavior:"smooth",inline:"nearest"});
  }

  const onAcaHandleScroll=()=>{
    AcaRef.current?.scrollIntoView({behavior:"smooth",inline:"nearest"});
  }


  return (
    <div>
        <Navbar onHandleScroll={onHandleScroll} onAcaHandleScroll={onAcaHandleScroll}/>
        <HeroSection/>
        <AboutCollege refe={ref}/>
        <Vision/>
        <ShowDepartment AcaRef={AcaRef}/>
        <News/>
        <Events/>
        <CampusFacilities/>
        <AlumniStories/>
        <Footer/>
    </div>
  )
}

export default HomePage