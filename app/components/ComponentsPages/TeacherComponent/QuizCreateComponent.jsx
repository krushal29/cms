import { Label } from '../../ui/label'
import { Input } from '../../ui/input'
import { Textarea } from '../../ui/textarea'
import { Button } from '../../ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../ui/select"
import { useState } from 'react'
import { useNavigate } from 'react-router'



const Branch = ["Computer Engineering", "Electronics and Communication", "Mechanical Engineering", "Information Technology", "Electrical Engineering"];

const QuizCreateComponent = () => {
    const navigate=useNavigate();
    const [QuizData, setQuizData] = useState({
        QuizTitle: "",
        SelectBranch: "",
        SelectSem: "",
        Date: '',
        Duration: '',
        Description: ''
    })


    const onChangehandle = (e) => {
        const { name, value } = e.target;
        setQuizData({ ...QuizData, [name]: value });
    }



    const onCreateQuiz = () => {
        console.log(QuizData);
        navigate('/quiz-add-question');
    }

    return (
        <div className='bg-background min-h-[50.8vh] flex justify-center py-10'>
            <div className='w-[75%]'>
                <h1 className="font-bold text-4xl text-center underline">Quiz Section</h1>

                <form action="" method='post'>
                    <div className="my-10 drop-shadow-lg shadow-ring bg-white p-10 rounded-2xl">
                        {/* Quiz Title */}
                        <div>
                            <Label className='font-semibold text-[17px]'>Quiz Title</Label>
                            <Input className='mt-3 bg-primary-foreground border border-black shadow-2xl outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black' placeholder='Enter Quiz Title (i.e DBMS - Quiz 1)' type='text' name='QuizTitle' value={QuizData.QuizTitle} onChange={onChangehandle} required />
                        </div>

                        {/* Select Branch and Select sem */}
                        <div className='pt-4 grid grid-cols-2 gap-8 items-center'>
                            <div>
                                <Label className='font-semibold text-[17px]'>Select Branch</Label>
                                <Select onValueChange={(e) => onChangehandle({ target: { 'name': "SelectBranch", value: e } })}>
                                    <SelectTrigger style={{ border: '1px solid black' }} className="w-full shadow-2xl mt-3">
                                        <SelectValue placeholder="Select Branch" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Branch.map((val, index) => (
                                            <SelectItem key={index} value={val}>{val}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label className='font-semibold text-[17px]'>Select Sem</Label>
                                <Select onValueChange={(e) => onChangehandle({
                                    target: {
                                        'name': 'SelectSem',
                                        value: e
                                    }
                                })}>
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
                                    name='Date' value={QuizData} onChange={onChangehandle} />

                            </div>
                            <div>
                                <Label className='font-semibold text-[17px]'>Duration</Label>
                                <Input className='mt-3 bg-primary-foreground border border-black shadow-2xl outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black' placeholder='Enter mid-sem marks' type='text' name='Duration' value={QuizData.Duration} onChange={onChangehandle} required />
                            </div>
                        </div>
                        {/*Description  */}
                        <div className='pt-4'>
                            <Label className='font-semibold text-[17px]'>Description</Label>
                            <Textarea placeholder='Please Provide description of Event' className='mt-3 bg-primary-foreground border border-black h-[150px] shadow-2xl' name='Description' value={QuizData.Description} onChange={onChangehandle} required />
                        </div>

                        {/* Create Quiz Button */}
                        <div className='text-center pt-15'>
                            <Button className='text-[17px] py-5 px-10 cursor-pointer' onClick={onCreateQuiz}>Create Quiz</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default QuizCreateComponent