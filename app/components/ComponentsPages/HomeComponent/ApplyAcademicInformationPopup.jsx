import { IoClose } from "react-icons/io5";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../ui/select"
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

const ApplyAcademicInformationPopup = ({ closeAcaHandle, PrevHandle, nextUploadHandle }) => {
    return (
        <div className=" flex justify-center align-middle relative">
            <div className="w-[35%] my-7 rounded-bl-[10px] rounded-br-[10px] drop-shadow-2xl shadow-ring">
                <div className="flex justify-between items-center bg-[#d4d4d8] py-2 px-4 rounded-tl-[10px] rounded-tr-[10px]">
                    <h3 className="font-semibold">Apply to Grand Valley College </h3>
                    <p><IoClose onClick={closeAcaHandle} className="text-2xl cursor-pointer" /></p>
                </div>
                <div className=" bg-secondary py-8 px-5 rounded-bl-[10px] rounded-br-[10px]">
                    <div className="flex justify-between">
                        <div>
                            <div className="border-4 border-border rounded-3xl"></div>
                            <p className="pt-1">Personal Information</p>
                        </div>
                        <div>
                            <div className="border-4 border-black rounded-3xl"></div>
                            <p className="pt-1">Academic Information</p>
                        </div>
                        <div>
                            <div className="border-4 border-border rounded-3xl"></div>
                            <p className="pt-1">Upload Document</p>
                        </div>
                    </div>

                    <div className="pt-3">
                        <p>Select Program type <span className="text-[#DE0D0D] font-semibold">*</span></p>
                        <RadioGroup className="flex pt-1 gap-3">
                            <div className="flex items-center space-x-2 text-[15px]">
                                <RadioGroupItem className="border-black bg-background" value="Undergraduate (Ug)" id="Undergraduate" /><span>Undergraduate (Ug)</span>
                            </div>
                            <div className="flex items-center space-x-2 text-[15px]">
                                <RadioGroupItem className="border-black bg-background" value="Postgraduate (Pg)" id="Postgraduate" /><span>Postgraduate (Pg)</span>
                            </div>
                            <div className="flex items-center space-x-2 text-[15px]">
                                <RadioGroupItem className="border-black bg-background" value="Diploma" id="Diploma" /><span>Diploma</span>
                            </div>
                            <div className="flex items-center space-x-2 text-[15px]">
                                <RadioGroupItem className="border-black bg-background" value="P.h.d" id="P.h.d" /><span>P.h.d</span>
                            </div>
                        </RadioGroup>
                    </div>

                    <div className="pt-3">
                        <p>Select Branch <span className="text-[#DE0D0D] font-semibold">*</span></p>
                        <Select>
                            <SelectTrigger className="mt-1 bg-primary-foreground w-full">
                                <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent className="bg-primary-foreground">
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="pt-3">
                        <p>Select Board <span className="text-[#DE0D0D] font-semibold">*</span></p>
                        <Select>
                            <SelectTrigger className="mt-1 bg-primary-foreground w-full">
                                <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent className="bg-primary-foreground">
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>


                    <div className="pt-3 flex gap-3">
                        <div className="w-full">
                            <p>12th Percentile Rank <span className="text-[#DE0D0D] font-semibold">*</span></p>
                            <Input className="bg-primary-foreground mt-1 outline-none " />
                        </div>
                        <div className="w-full">
                            <p>Gujcet Marks <span className="text-[#DE0D0D] font-semibold">*</span></p>
                            <Input className="bg-primary-foreground mt-1 outline-none " />
                        </div>
                    </div>

                    <div className="pt-3 flex gap-3">
                        <div className="w-full">
                            <p>ACPC Rank <span className="text-[#DE0D0D] font-semibold">*</span></p>
                            <Input className="bg-primary-foreground mt-1 outline-none " />
                        </div>
                        <div className="w-full">
                            <p>Jee Mains Rank <span className="text-[#DE0D0D] font-semibold">*</span></p>
                            <Input className="bg-primary-foreground mt-1 outline-none " />
                        </div>
                    </div>

                    <div className="flex justify-between pt-8 items-center">
                        <Button className="px-6 cursor-pointer" onClick={PrevHandle}>Back</Button>
                        <Button className="px-6 cursor-pointer" onClick={nextUploadHandle}>Next</Button>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default ApplyAcademicInformationPopup