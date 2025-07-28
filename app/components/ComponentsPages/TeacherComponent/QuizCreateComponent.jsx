import { Label } from '../../ui/label'
import { Input } from '../../ui/input'
import { Textarea } from '../../ui/textarea'
import {Button} from '../../ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../ui/select"



const Branch = ["Computer Engineering", "Electronics and Communication", "Mechanical Engineering", "Information Technology", "Electrical Engineering"];

const QuizCreateComponent = () => {
    
    return (
        <div className='bg-background min-h-[50.8vh] flex justify-center py-10'>
            <div className='w-[80%]'>
                <h1 className="font-bold text-4xl text-center underline">Quiz Section</h1>


                <div className="my-10 drop-shadow-lg shadow-ring bg-white p-10 rounded-2xl">
                    {/* Quiz Title */}
                    <div>
                        <Label className='font-semibold text-[17px]'>Quiz Title</Label>
                        <Input className='mt-3 bg-primary-foreground border border-black shadow-2xl outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black' placeholder='Enter Quiz Title (i.e DBMS - Quiz 1)' type='text' name='FileMarks' required />
                    </div>

                    {/* Select Branch and Select sem */}
                    <div className='pt-4 grid grid-cols-2 gap-8 items-center'>
                        <div>
                            <Label className='font-semibold text-[17px]'>Select Branch</Label>
                            <Select>
                                <SelectTrigger style={{ border: '1px solid black' }} className="w-full shadow-2xl mt-3">
                                    <SelectValue placeholder="Select Branch" />
                                </SelectTrigger>
                                <SelectContent>
                                    {Branch.map((val, index) => (
                                        <SelectItem value={val}>{val}</SelectItem>

                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label className='font-semibold text-[17px]'>Select Sem</Label>
                            <Select>
                                <SelectTrigger style={{ border: '1px solid black' }} className="w-full shadow-2xl mt-3">
                                    <SelectValue placeholder="Select Sem" />
                                </SelectTrigger>
                                <SelectContent className="bg-secondary">
                                    <SelectItem value="1">1</SelectItem>
                                    <SelectItem value="2">2</SelectItem>
                                    <SelectItem value="3">3</SelectItem>
                                    <SelectItem value="4">4</SelectItem>
                                    <SelectItem value="5">5</SelectItem>
                                    <SelectItem value="6">6</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    {/* select date and Duration */}
                    <div className='pt-4 grid grid-cols-2 gap-8 items-center'>
                        <div>
                            <Label className='text-[17px] font-semibold'>Select Date</Label>
                            <input
                                type="date"
                                className="w-full pl-3 mt-3 pr-4 py-1.5 bg-primary-foreground border border-black shadow-2xl rounded-md text-right placeholder:text-left"
                                placeholder="Select date"
                                name='Date' value="2017-06-01" />
                        </div>
                        <div>
                            <Label className='font-semibold text-[17px]'>Duration</Label>
                            <Input className='mt-3 bg-primary-foreground border border-black shadow-2xl outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black' placeholder='Enter mid-sem marks' type='text' name='FileMarks' required />
                        </div>
                    </div>
                    {/*Description  */}
                    <div className='pt-4'>
                        <Label className='font-semibold text-[17px]'>Description</Label>
                        <Textarea placeholder='Please Provide description of Event' className='mt-3 bg-primary-foreground border border-black h-[150px] shadow-2xl' />
                    </div>

                    {/* Create Quiz Button */}
                    <div className='text-center pt-15'>
                        <Button className='text-[17px] py-5 px-10 cursor-pointer'>Create Quiz</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizCreateComponent