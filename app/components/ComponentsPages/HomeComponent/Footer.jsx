import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-foreground text-white py-4">
            <div className="flex justify-center">
                <div className="w-[96%] flex justify-between border-b-2 py-5">
                    <div className="flex flex-col justify-between">
                        <div>
                            <h1 className="text-2xl font-bold">Grand Valley College</h1>
                        </div>
                        <div>
                            <p>1234 College Avenue Grand Valley, CA 91234 United States</p>
                        </div>
                        <div>
                            <p>Phone: (123) 456-7890</p>
                            <p>Email: info@grandvalleycollege.edu</p>
                        </div>
                    </div>
                    <div className="">
                        <div>
                            <h4 className="text-2xl pb-3">Resources</h4>
                        </div>
                        <div>
                            <ul className="space-y-2">
                                <li className="cursor-pointer">Student Portal</li>
                                <li className="cursor-pointer">Library</li>
                                <li className="cursor-pointer">Carreer Service</li>
                                <li className="cursor-pointer">Research</li>
                                <li className="cursor-pointer">Campus Map</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h4 className="text-2xl">connect with us </h4>
                        </div>
                        <div className="flex justify-between pt-4 text-2xl">
                            <div className="cursor-pointer">
                                <FaFacebookF />
                            </div>
                            <div className="cursor-pointer">
                                <FaTwitter />
                            </div>
                            <div className="cursor-pointer">
                                <FaInstagram />
                            </div>
                            <div className="cursor-pointer">
                                <FaLinkedinIn />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-3">
            <div className="w-[96%] flex justify-between ">
                <div>
                    <p>©2025 Grand Valley College. All rights reserved.</p>
                </div>
                <div className=" w-xs">
                    <ul className="flex justify-between">
                        <li className="cursor-pointer">Terms of Use</li>
                        <li className="cursor-pointer">Privacy Policy</li>
                        <li className="cursor-pointer">Accessibility</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer