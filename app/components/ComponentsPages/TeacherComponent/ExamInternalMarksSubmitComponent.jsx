import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../ui/select"
import { Input } from '../../ui/input'
import { Button } from '../../ui/button'

const ExamInternalMarksSubmitComponent = () => {
    return (
        <div className="bg-background min-h-[50.8vh] flex justify-center py-10">
            <div className="w-[80%]">
                <h1 className="font-bold text-4xl text-center underline">Examination Details</h1>
                <div className="flex py-15 gap-5">
                    <div className="w-1/4 border border-black rounded-[12px]">
                        <Select>
                            <SelectTrigger className="w-full bg-secondary ">
                                <SelectValue placeholder="Select Sem" />
                            </SelectTrigger>
                            <SelectContent className="bg-secondary">
                                <SelectItem value="1">1</SelectItem>
                                <SelectItem value="2">2</SelectItem>
                                <SelectItem value="3">3</SelectItem>
                                <SelectItem value="3">4</SelectItem>
                                <SelectItem value="3">5</SelectItem>
                                <SelectItem value="3">6</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="w-1/4 border border-black rounded-[12px]">
                        <Select>
                            <SelectTrigger className="w-full bg-secondary">
                                <SelectValue placeholder="Select Exam Type" />
                            </SelectTrigger>
                            <SelectContent className="bg-secondary">
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="w-1/4 border border-black rounded-[12px]">
                        <Select>
                            <SelectTrigger className="w-full bg-secondary">
                                <SelectValue placeholder="Select Branch" />
                            </SelectTrigger>
                            <SelectContent className="bg-secondary">
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="w-1/4">
                        <Button>Add Marks</Button>
                    </div>
                </div>


                <div className="grid grid-cols-2 bg-card py-8 px-5 rounded-2xl drop-shadow-lg shadow-ring">
                    <div className="flex items-center">
                        <div>
                            <p>1.12302040501027 : </p>
                        </div>
                        <div>
                            <Input className="bg-white" />
                        </div>
                        <div>
                            <p>/20</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div>
                            <p>1.12302040501027 : </p>
                        </div>
                        <div>
                            <Input className="bg-white" />
                        </div>
                        <div>
                            <p>/20</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div>
                            <p>1.12302040501027 : </p>
                        </div>
                        <div>
                            <Input className="bg-white" />
                        </div>
                        <div>
                            <p>/20</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div>
                            <p>1.12302040501027 : </p>
                        </div>
                        <div>
                            <Input className="bg-white" />
                        </div>
                        <div>
                            <p>/20</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExamInternalMarksSubmitComponent