

const AboutCollege = ({refe}) => {
  return (
    <div className="flex w-full justify-center py-8 bg-secondary" ref={refe}>
        <div className="w-[95%]">
            <h1 className="text-center text-[33px] font-bold">About Our College</h1>
            <p className="text-center pt-4 text-[17.5px] font-medium">A distinguished institution with a rich history of academic excellence and innovation.</p>
            <div className="flex pt-10">
                <div className="bg-red-900 rounded-[10px] w-[80%]">
                    <img className=" w-full" src="image 2.png" alt="" />
                </div>
                <div className="flex flex-col px-8">
                    <p className="text-[18px]">Founded in 1965, Grand Valley College has emerged as a premier institution dedicated to fostering intellectual growth, innovation, and community engagement. What began as a small college with just a few hundred students has grown into a comprehensive university serving thousands of students from across the globe.</p>
                    <p className="text-[18px] pt-3">Over the decades, we have built a strong foundation of academic excellence while continuously adapting to meet the evolving needs of our students and society. </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutCollege