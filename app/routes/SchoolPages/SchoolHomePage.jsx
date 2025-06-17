import SchoolAboutUs from "../../components/ComponentsPages/SchoolHomeComponent/SchoolAboutUs"
import SchoolAchivements from "../../components/ComponentsPages/SchoolHomeComponent/SchoolAchivements"
import SchoolClubs from "../../components/ComponentsPages/SchoolHomeComponent/SchoolClubs"
import SchoolEvent from "../../components/ComponentsPages/SchoolHomeComponent/SchoolEvent"
import SchoolFacilities from "../../components/ComponentsPages/SchoolHomeComponent/SchoolFacilities"
import SchoolHeroSection from "../../components/ComponentsPages/SchoolHomeComponent/SchoolHeroSection"
import SchoolLayout from "../../components/ComponentsPages/SchoolHomeComponent/SchoolLayout"
import SchoolNews from "../../components/ComponentsPages/SchoolHomeComponent/SchoolNews"
import SchoolPlacements from "../../components/ComponentsPages/SchoolHomeComponent/SchoolPlacements"
import SchoolPrograms from "../../components/ComponentsPages/SchoolHomeComponent/SchoolPrograms"


const SchoolHomePage = () => {
  return (
    <SchoolLayout>
        <SchoolHeroSection/>
        <SchoolAboutUs/>
        <SchoolPrograms/>
        <SchoolFacilities/>
        <SchoolClubs/>
        <SchoolAchivements/>
        <SchoolPlacements/>
        <SchoolNews/>
        <SchoolEvent/>
    </SchoolLayout>
  )
}

export default SchoolHomePage