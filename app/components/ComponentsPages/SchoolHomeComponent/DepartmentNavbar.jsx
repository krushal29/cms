import { useNavigate } from "react-router";

const DepartmentNavbar = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-secondary flex justify-center">
            <div className="flex justify-between align-middle w-[95%] py-3">
                <div className="flex items-center">
                    <h5 className="font-bold text-xl cursor-pointer" onClick={()=>navigate('/SchoolPage')}>Grand Valley College</h5>
                </div>
                <div className="w-[35%]">
                    <ul className="flex justify-between items-center">
                        <li className="cursor-pointer font-medium" onClick={() => navigate('/DepartmentStaff')}>Staff</li>
                        <li className="cursor-pointer font-medium" onClick={() => navigate('/DepartmentAcademic')}>Academic Programs</li>
                        <li className="cursor-pointer font-medium" onClick={() => navigate('/DepartmentAchivements')}>Achivements</li>
                        <li className="cursor-pointer font-medium">News</li>
                        <li className="cursor-pointer font-medium" onClick={()=>navigate('/Placement')}>Placement</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DepartmentNavbar