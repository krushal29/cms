import Navbar from "../../components/ComponentsPages/SchoolHomeComponent/Navbar"
import SchoolAboutUs from "../../components/ComponentsPages/SchoolHomeComponent/SchoolAboutUs"
import SchoolAchivements from "../../components/ComponentsPages/SchoolHomeComponent/SchoolAchivements"
import SchoolClubs from "../../components/ComponentsPages/SchoolHomeComponent/SchoolClubs"
import SchoolEvent from "../../components/ComponentsPages/SchoolHomeComponent/SchoolEvent"
import SchoolFacilities from "../../components/ComponentsPages/SchoolHomeComponent/SchoolFacilities"
import SchoolFooter from "../../components/ComponentsPages/SchoolHomeComponent/SchoolFooter"
import SchoolHeroSection from "../../components/ComponentsPages/SchoolHomeComponent/SchoolHeroSection"
import SchoolNews from "../../components/ComponentsPages/SchoolHomeComponent/SchoolNews"
import SchoolPlacements from "../../components/ComponentsPages/SchoolHomeComponent/SchoolPlacements"
import SchoolPrograms from "../../components/ComponentsPages/SchoolHomeComponent/SchoolPrograms"


const SchoolHomePage = () => {
  return (
    <div>
        <Navbar/>
        <SchoolHeroSection/>
        <SchoolAboutUs/>
        <SchoolPrograms/>
        <SchoolFacilities/>
        <SchoolClubs/>
        <SchoolAchivements/>
        <SchoolPlacements/>
        <SchoolNews/>
        <SchoolEvent/>
        <SchoolFooter/>
    </div>
  )
}

export default SchoolHomePage