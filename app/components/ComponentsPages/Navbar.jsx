import { Button } from "../ui/button"
const Navbar = () => {
  return (
    <div className="flex justify-between bg-secondary align-middle px-4 py-3">
        <div className="flex items-center">
            <h5 className="font-bold text-xl">Grand Valley College</h5>
        </div>
        <div className="w-[25%]">
            <ul className="flex justify-between items-center">
                <li className="cursor-pointer font-medium">About</li>
                <li className="cursor-pointer font-medium">Academics</li>
                <li className="cursor-pointer font-medium">Apply Now</li>
                <li><Button className="px-6 cursor-pointer">Login</Button></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar