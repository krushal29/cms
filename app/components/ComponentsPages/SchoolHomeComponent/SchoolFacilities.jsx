

const data=[
  {
    title:"Advance Computer Labs",
    desc:"Our advanced computer labs are equipped with the latest hardware and industry-standard software.Designed to support hands-on learning, they offer an ideal environment for coding, simulation, and research."
  },
  {
    title:"IOT Labs",
    desc:"Our IoT Lab offers a cutting-edge environment for exploring smart technologies and connected devices.Students gain hands-on experience with sensors, microcontrollers, and real-time data systems."
  },
  {
    title:"Robotic Labs",
    desc:"Our Robotics Lab empowers students to design, build, and program intelligent robotic systems. Equipped with advanced kits, sensors, and simulation tools, it bridges theory and real-world application."
  },
  {
    title:"Industry Partnership  Centre",
    desc:"Our Industry Partnership Centre connects students and faculty with leading organizations across sectors.It facilitates internships, collaborative projects, and skill-building initiatives aligned with industry needs."
  }
]
const SchoolFacilities = () => {
  return (
    <div className="flex justify-center pt-8 py-8 bg-secondary">
      <div className="w-[60%] text-center">
        <h1 className="text-2xl underline font-medium">Facilities</h1>
        <p className="pt-2 w-[70%] mx-auto">Explore our state-of-the-art facilities designed to support holistic learning, creativity, and all-round development</p>
        <div className='grid grid-cols-2 gap-12 py-8'>
          {data.map((data, index) => (
            <div key={index} className='bg-background rounded-2xl shadow-2xl'>
              <div className='bg-[#d4d4d8] rounded-tr-2xl rounded-tl-2xl py-3 font-bold'>
                <h4>{data.title}</h4>
              </div>
              <div className='p-3 text-start'>
                <p>{data.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SchoolFacilities