import { IoClose } from "react-icons/io5";
import { Input } from "../../ui/input";
import { MdOutlineFileUpload } from "react-icons/md";
import { Label } from "@radix-ui/react-label";
import { Button } from "../../ui/button";

const ApplyUploadDocumentPopup = ({closeUploadHandle,PrevUploadHandle}) => {
    return (
        <div className=" flex justify-center align-middle relative">
            <div className="w-[35%] my-7 h-[85vh] overflow-y-scroll rounded-bl-[10px] rounded-br-[10px] drop-shadow-lg shadow-ring">
                <div className="flex justify-between items-center bg-[#d4d4d8] py-2 px-4 rounded-tl-[10px] rounded-tr-[10px]">
                    <h3 className="font-semibold">Apply to Grand Valley College </h3>
                    <p><IoClose onClick={closeUploadHandle} className="text-2xl cursor-pointer" /></p>
                </div>

                <div className=" bg-secondary py-8 px-5 rounded-bl-[10px] rounded-br-[10px]">
                    <div className="flex justify-between">
                        <div>
                            <div className="border-4 border-border rounded-3xl"></div>
                            <p className="pt-1">Personal Information</p>
                        </div>
                        <div>
                            <div className="border-4 border-border rounded-3xl"></div>
                            <p className="pt-1">Academic Information</p>
                        </div>
                        <div>
                            <div className="border-4 border-black rounded-3xl"></div>
                            <p className="pt-1">Upload Document</p>
                        </div>
                    </div>
                    <div className="pt-3">
                        <p className="text-[13.5px] font-semibold"><span className="text-[#DE0D0D] font-semibold">*</span> Please Upload the Following Documents in Jpg or Pdf format(Max size 500 Mb) </p>
                    </div>

                    <div className="pt-8">
                        <p className="font-semibold">12th Marksheet <span className="text-[#DE0D0D] font-semibold">*</span></p>
                        <Input type="file" id="Mark12Upload" hidden />
                        <Label htmlFor="Mark12Upload">
                            <div className="border-1 border-dotted border-destructive text-center rounded-[5px] py-3 cursor-pointer mt-1">
                                <div className="mx-auto text-2xl flex justify-center">
                                    <MdOutlineFileUpload />
                                </div>
                                <div>
                                    <p className="text-xs pt-2">Drag and Drop your file here or browse</p>
                                </div>
                            </div>
                        </Label>
                    </div>


                    <div className="pt-3">
                        <p className="font-semibold">Gujcet Marksheet <span className="text-[#DE0D0D] font-semibold">*</span></p>
                        <Input type="file" id="GujcetUpload" hidden />
                        <Label htmlFor="GujcetUpload">
                            <div className="border-1 border-dotted border-destructive text-center rounded-[5px] py-3 cursor-pointer mt-1">
                                <div className="mx-auto text-2xl flex justify-center">
                                    <MdOutlineFileUpload />
                                </div>
                                <div>
                                    <p className="text-xs pt-2">Drag and Drop your file here or browse</p>
                                </div>
                            </div>
                        </Label>
                    </div>



                    <div className="pt-3">
                        <p className="font-semibold">Jee Marksheet <span className="text-[#DE0D0D] font-semibold">*</span></p>
                        <Input type="file" id="JEEUpload" hidden />
                        <Label htmlFor="JEEUpload">
                            <div className="border-1 border-dotted border-destructive text-center rounded-[5px] py-3 cursor-pointer mt-1">
                                <div className="mx-auto text-2xl flex justify-center">
                                    <MdOutlineFileUpload />
                                </div>
                                <div>
                                    <p className="text-xs pt-2">Drag and Drop your file here or browse</p>
                                </div>
                            </div>
                        </Label>
                    </div>


                    <div className="pt-3">
                        <p className="font-semibold">Adhar Card <span className="text-[#DE0D0D] font-semibold">*</span></p>
                        <Input type="file" id="AdharUpload" hidden />
                        <Label htmlFor="AdharUpload">
                            <div className="border-1 border-dotted border-destructive text-center rounded-[5px] py-3 cursor-pointer mt-1">
                                <div className="mx-auto text-2xl flex justify-center">
                                    <MdOutlineFileUpload />
                                </div>
                                <div>
                                    <p className="text-xs pt-2">Drag and Drop your file here or browse</p>
                                </div>
                            </div>
                        </Label>
                    </div>


                    <div className="pt-3">
                        <p className="font-semibold">Admission letter of Acpc <span className="text-[#DE0D0D] font-semibold">*</span></p>
                        <Input type="file" id="AdmissionUpload" hidden />
                        <Label htmlFor="AdmissionUpload">
                            <div className="border-1 border-dotted border-destructive text-center rounded-[5px] py-3 cursor-pointer mt-1">
                                <div className="mx-auto text-2xl flex justify-center">
                                    <MdOutlineFileUpload />
                                </div>
                                <div>
                                    <p className="text-xs pt-2">Drag and Drop your file here or browse</p>
                                </div>
                            </div>
                        </Label>
                    </div>


                    <div className="pt-3">
                        <p className="font-semibold">Income certificate <span className="text-[#DE0D0D] font-semibold">*</span></p>
                        <Input type="file" id="IncomeUpload" hidden />
                        <Label htmlFor="IncomeUpload">
                            <div className="border-1 border-dotted border-destructive text-center rounded-[5px] py-3 cursor-pointer mt-1">
                                <div className="mx-auto text-2xl flex justify-center">
                                    <MdOutlineFileUpload />
                                </div>
                                <div>
                                    <p className="text-xs pt-2">Drag and Drop your file here or browse</p>
                                </div>
                            </div>
                        </Label>
                    </div>

                <div className="pt-3">
                        <p className="font-semibold">Photograph <span className="text-[#DE0D0D] font-semibold">*</span></p>
                        <Input type="file" id="PhotographUpload" hidden />
                        <Label htmlFor="PhotographUpload">
                            <div className="border-1 border-dotted border-destructive text-center rounded-[5px] py-3 cursor-pointer mt-1">
                                <div className="mx-auto text-2xl flex justify-center">
                                    <MdOutlineFileUpload />
                                </div>
                                <div>
                                    <p className="text-xs pt-2">Drag and Drop your file here or browse</p>
                                </div>
                            </div>
                        </Label>
                    </div>


                    <div className="pt-3">
                        <Button className="px-7 cursor-pointer" onClick={PrevUploadHandle}>Back</Button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ApplyUploadDocumentPopup