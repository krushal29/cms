import { IoClose } from "react-icons/io5";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { Button } from "../../ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../ui/select"


const ApplyNowPopup = ({ closeApplyHandle,nextHandle }) => {

    return (
        <div className=" flex justify-center align-middle relative">
            <div className="w-[35%] my-7 h-[93vh] overflow-y-scroll rounded-bl-[10px] rounded-br-[10px] drop-shadow-2xl shadow-ring scrollbar-thin">
                <div className="flex justify-between items-center bg-[#d4d4d8] py-2 px-4 rounded-tl-[10px] rounded-tr-[10px]">
                    <h3 className="font-semibold">Apply to Grand Valley College </h3>
                    <p><IoClose onClick={closeApplyHandle} className="text-2xl cursor-pointer" /></p>
                </div>
                <div className=" bg-secondary py-8 px-5 rounded-bl-[10px] rounded-br-[10px]">
                    <div className="flex justify-between">
                        <div>
                            <div className="border-4 border-black rounded-3xl"></div>
                            <p className="pt-1">Personal Information</p>
                        </div>
                        <div>
                            <div className="border-4 border-border rounded-3xl"></div>
                            <p className="pt-1">Academic Information</p>
                        </div>
                        <div>
                            <div className="border-4 border-border rounded-3xl"></div>
                            <p className="pt-1">Upload Document</p>
                        </div>
                    </div>

                    <div className="flex pt-7 gap-2">
                        <div>
                            <p>First Name <span className="text-[#DE0D0D] font-semibold">*</span></p>
                            <Input className="bg-primary-foreground mt-1 outline-none " />
                        </div>
                        <div>
                            <p>Middle Name</p>
                            <Input className="bg-primary-foreground mt-1" />
                        </div>
                        <div>
                            <p>Last Name <span className="text-[#DE0D0D] font-semibold">*</span></p>
                            <Input className="bg-primary-foreground mt-1" />
                        </div>
                    </div>

                    <div className="pt-3">
                        <p>DOB <span className="text-[#DE0D0D] font-semibold">*</span></p>
                        <input
                        type="date"
                        className="w-full pl-3 mt-1 pr-4 py-2 bg-primary-foreground border border-gray-300 rounded-md text-right placeholder:text-left"
                        placeholder="dd/mm/yyyy"
                        name='Date'
                    />
                    </div>

                    <div className="pt-3">
                        <p>Current Address</p>
                        <Textarea className="bg-primary-foreground mt-1" />
                    </div>

                    <div className="pt-3">
                        <p>Permanent Address</p>
                        <Textarea className="bg-primary-foreground mt-1" />
                    </div>

                    <div className="flex gap-3 pt-3">
                        <div className="w-full">
                            <p>Country</p>
                            <Input className="mt-1 bg-primary-foreground" />
                        </div>
                        <div className="w-full">
                            <p>State</p>
                            <Input className="mt-1 bg-primary-foreground" />
                        </div>
                    </div>


                    <div className="flex gap-3 pt-3">
                        <div className="w-full">
                            <p>City</p>
                            <Input className="mt-1 bg-primary-foreground" />
                        </div>
                        <div className="w-full">
                            <p>Pincode</p>
                            <Input className="mt-1 bg-primary-foreground" />
                        </div>
                    </div>


                    <div className="flex gap-3 pt-3">
                        <div className="w-full">
                            <p>Father Name</p>
                            <Input className="mt-1 bg-primary-foreground" />
                        </div>
                        <div className="w-full">
                            <p>Mother’s Name</p>
                            <Input className="mt-1 bg-primary-foreground" />
                        </div>
                    </div>


                    <div className="flex gap-3 pt-3">
                        <div className="w-full">
                            <p>Parents Email id <span className="text-[#DE0D0D] font-semibold">*</span></p>
                            <Input className="mt-1 bg-primary-foreground" />
                        </div>
                        <div className="w-full">
                            <p>Parent’s Phone Number <span className="text-[#DE0D0D] font-semibold">*</span></p>
                            <Input className="mt-1 bg-primary-foreground" />
                        </div>
                    </div>


                    <div className="flex gap-3 pt-3">
                        <div className="w-full">
                            <p>Annual Income<span className="text-[#DE0D0D] font-semibold">*</span></p>
                            <Input className="mt-1 bg-primary-foreground" />
                        </div>
                        <div className="w-full">
                            <p>Category<span className="text-[#DE0D0D] font-semibold">*</span></p>
                            <Select >
                                <SelectTrigger className="mt-1 bg-primary-foreground w-full">
                                    <SelectValue placeholder="Theme" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                            </Select>

                        </div>
                    </div>


                    <div className="flex justify-between pt-8 items-center">
                        <Button className="px-6 cursor-pointer" onClick={closeApplyHandle}>Cancel</Button>
                        <Button className="px-6 cursor-pointer" onClick={nextHandle}>Next</Button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ApplyNowPopup