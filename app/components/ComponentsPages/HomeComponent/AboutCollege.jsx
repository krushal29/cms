

const AboutCollege = () => {
  return (
    <div className="flex w-full justify-center py-8">
        <div className="w-[90%]">
            <h1 className="text-center text-3xl font-bold">About Our College </h1>
            <p className="text-center pt-2">A distinguished institution with a rich history of academic excellence and innovation.</p>
            <div className="flex pt-8">
                <div className="bg-red-900 rounded-[10px] w-[100%]">
                    <img className=" w-full" src="image 2.png" alt="" />
                </div>
                <div className="flex flex-col  my-auto px-5">
                    <p className="text-[18px]">Founded in 1965, Grand Valley College has emerged as a premier institution dedicated to fostering intellectual growth, innovation, and community engagement. What began as a small college with just a few hundred students has grown into a comprehensive university serving thousands of students from across the globe.</p>
                    <p className="text-[18px] pt-2">Over the decades, we have built a strong foundation of academic excellence while continuously adapting to meet the evolving needs of our students and society. </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutCollege