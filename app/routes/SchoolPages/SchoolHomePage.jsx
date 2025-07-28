import { useRef } from "react"
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
  const aboutRef = useRef(null);
  const PlacementRef = useRef(null);
  const ProgramsRef=useRef(null);

  const onClickAboutScroll = () => {
    aboutRef?.current.scrollIntoView({ behavior: "smooth", inline: "nearest" })
  }

  const onClickPlacementScroll=()=>{
    PlacementRef?.current.scrollIntoView({ behavior: "smooth", inline: "nearest" })
  }

  const onClickProgramScroll=()=>{
    ProgramsRef?.current.scrollIntoView({behavior:'smooth',inline:'nearest'})
  }



  return (
    <SchoolLayout onClickAboutScroll={onClickAboutScroll} onClickPlacementScroll={onClickPlacementScroll} onClickProgramScroll={onClickProgramScroll}>
      <SchoolHeroSection />
      <SchoolAboutUs aboutRef={aboutRef}/>
      <SchoolPrograms ProgramsRef={ProgramsRef}/>
      <SchoolFacilities />
      <SchoolClubs />
      <SchoolAchivements />
      <SchoolPlacements PlacementRef={PlacementRef}/>
      <SchoolNews />
      <SchoolEvent />
    </SchoolLayout>
  )
}

export default SchoolHomePage