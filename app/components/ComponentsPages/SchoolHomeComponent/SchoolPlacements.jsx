import { MdKeyboardArrowLeft,MdOutlineKeyboardArrowRight  } from "react-icons/md";

const SchoolPlacements = ({PlacementRef}) => {
  return (
    <div className="bg-background flex justify-center pt-8 py-8" ref={PlacementRef}>
      <div className="w-[75%] text-center">
        <h1 className="text-[28px] font-bold underline text-center underline-offset-4">Placements</h1>
        <p className="pt-2 w-[70%] mx-auto font-medium">Experience the success of our top placements launching students into prestigious universities and leading global careers.</p>

        <div className="flex items-center">
      <div className="text-5xl pr-3 cursor-pointer"><MdKeyboardArrowLeft /></div>
          <div className='grid grid-cols-3 gap-10 py-8'>
            {[0, 1, 2].map((data, index) => {
              return (
                <div className='h-full rounded-3xl shadow-2xl bg-secondary drop-shadow-lg shadow-ring' key={index}>
                  <div className='rounded-tl-3xl rounded-tr-3xl'>
                    <img src="image 6.png" className='w-full h-full' alt="" />
                  </div>
                  <div className='px-4 py-3 text-start'>
                    <h4 className='font-bold text-xl'>Main Library</h4>
                    <p className="py-3">Class of 2005</p>
                    <p>My experience in the computer science program provided the foundation for my career in technology. The hands-on projects and internship opportunities were invaluable."</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="text-5xl pl-3 cursor-pointer"><MdOutlineKeyboardArrowRight  /></div>
        </div>
      </div>
    </div>
  )
}

export default SchoolPlacements