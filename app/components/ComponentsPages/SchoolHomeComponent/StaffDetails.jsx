import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import profile from '../../../../public/image 14.png'
import { useParams } from "react-router";



const StaffDetails = () => {
    const {id: staffID}=useParams();
    console.log(staffID);
    return (
        <div className="flex justify-center py-10 bg-background">
            <div className="w-[70%]">
                {/* staff profile */}
                <div className="flex ">
                    <div className="w-[200px] h-[200px] rounded-2xl">
                        <img src={profile} className="w-full h-full rounded-2xl" alt="" />
                    </div>
                    <div className="pl-6">
                        <h2 className="text-lg font-semibold">Dr. Sarah Johnson</h2>
                        <p className="py-3 font-medium">Department Head & Professor</p>
                        <p className="flex items-center font-medium "><span><LuPhone /></span><span className="pl-3">(555) 123-4567</span></p>
                        <p className="flex items-center font-medium py-3"><span><MdOutlineMail /></span><span className="pl-3">sarah.johnson@gvc.edu</span></p>
                    </div>
                </div>

                {/* staff details(Professional Biography) */}
                <div className="pt-7">
                    <h1 className="text-lg font-bold">Professional Biography</h1>
                    <div className="text-justify">
                        <p className="pt-4">Dr. Sarah Johnson is a distinguished professor with over 15 years of experience in computer science education and research. She specializes in machine learning, artificial intelligence, and data science, with particular expertise in educational technology and ethical AI applications.</p>
                        <p className="pt-4">Her research focuses on developing AI-powered learning systems that personalize education while maintaining ethical standards and promoting inclusivity. She has pioneered several innovative approaches to adaptive learning technologies and has been instrumental in establishing best practices for AI ethics in educational settings.</p>
                        <p className="pt-4">Dr. Sarah Johnson is a distinguished professor with over 15 years of experience in computer science education and research. She specializes in machine learning, artificial intelligence, and data science, with particular expertise in educational technology and ethical AI applications.

                            Her research focuses on developing AI-powered learning systems that personalize education while maintaining ethical standards and promoting inclusivity. She has pioneered several innovative approaches to adaptive learning technologies and has been instrumental in establishing best practices for AI ethics in educational settings.

                            Dr. Johnson holds a Ph.D. in Computer Science from MIT (2009), an M.S. in Computer Science from Stanford University (2005), and a B.S. in Computer Science magna cum laude from UC Berkeley (2003). She has been with Grand Valley College since 2010, where she has built a world-class research program and mentored over 50 graduate students.
                            She is passionate about inspiring the next generation of computer scientists, promoting diversity in STEM fields, and bridging the gap between cutting-edge research and practical applications in education.</p>
                    </div>
                </div>

                {/* Staff Details(Area of Expertise) */}
                <div className="pt-7">
                    <h1 className="text-lg font-bold">Area of Expertise</h1>
                    <div className="text-justify">
                        <p className="pt-3">Machine Learning , Artificial Intelligence , Data Science , Web Development ,Deep Learning , Pytorch</p>
                    </div>
                </div>

                {/* Staff Details(Projects) */}
                <div className="pt-7">
                    <h1 className="text-lg font-bold">Projects</h1>
                    <div className="text-justify pt-4">
                       <p className="font-medium text-md">1. AI-Powered Learning Analytics Platform</p>
                       <p className="pt-1">Developed a machine learning system to analyze student learning patterns and provide personalized    recommendations.</p>
                    </div>
                     <div className="text-justify pt-4">
                       <p className="font-medium text-md">2. Smart Campus Initiative</p>
                       <p className="pt-1">Developed a machine learning system to analyze student learning patterns and provide personalized    recommendations.</p>
                    </div>
                </div>


            {/* Staff Details(Publications) */}
            <div className="pt-7">
                <h1 className="text-lg font-bold">Publications</h1>
                <div className="pt-3">
                    <p>"Deep Learning Approaches for Personalized Education: A Comprehensive Review"</p>
                    <p>Journal of Educational Technology Research, Vol. 45, Issue 3, 2024</p>
                    <p>Co-authored with Dr. Michael Chen and Dr. Lisa Wang</p>
                    <p>Citations: 127 | Impact Factor: 3.2</p>
                </div>
            </div>


            {/* Certifications and Awards */}
            <div className="pt-7">
                <h1 className="text-lg font-bold">Certifications and Awards</h1>
                <div className="py-2">
                    <p className="font-medium">1. Outstanding Faculty Award</p>
                    <p>Recognized for excellence in teaching, research, and service to the academic community.</p>
                </div>
                <div className="py-2">
                    <p className="font-medium">2. Best Paper Award</p>
                    <p>Awarded for the best paper at the International Conference on Machine Learning, 2023.</p>
                </div>
            </div>

            </div>
        </div>
    )
}

export default StaffDetails