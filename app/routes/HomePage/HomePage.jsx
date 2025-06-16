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
import ApplyUploadDocumentPopup from "../../components/ComponentsPages/HomeComponent/ApplyUploadDocumentPopup"



const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <AboutCollege/>
        <Vision/>
        <ShowDepartment/>
        <News/>
        <Events/>
        <CampusFacilities/>
        <AlumniStories/>
        <Footer/>
    </div>
  )
}

export default HomePage