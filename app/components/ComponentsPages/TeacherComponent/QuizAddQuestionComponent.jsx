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
import { LuImagePlus } from "react-icons/lu";

const Branch = ["Computer Engineering", "Electronics and Communication", "Mechanical Engineering", "Information Technology", "Electrical Engineering"];


const QuizAddQuestionComponent = () => {
    const [QuestionData, setQuestionData] = useState([
        {
            QuestionText: "",
            QuestionType: "",
            Marks: "",
            option: ["", "", "", ""],
            image: ""
        }
    ]);


    const AddQuestionHandle = () => {
        setQuestionData([
            ...QuestionData, {
                QuestionText: "",
                QuestionType: "",
                Marks: "",
                option: ["", "", "", ""],
                image: ""
            }
        ])
    }

    const onChangeHandle = (e, index) => {
        const { name, value } = e.target;
        const updated = [...QuestionData];
        updated[index][name] = value;
        setQuestionData(updated)
    }

    const onSelectHandle = (value, index) => {
        const updated = [...QuestionData];
        updated[index]["QuestionType"] = value;
        setQuestionData(updated);
    }

    const onOptionChangeHandle = (e, index, optIndex) => {
        console.log(e.target.value, index, optIndex);
        const { name, value } = e.target;
        const updated = [...QuestionData];
        updated[index][name][optIndex] = value;
        setQuestionData(updated)
    }

    const onCancelHandle = (index) => {
        console.log(index);
        let updated = [...QuestionData];
        let removedData = updated.splice(index, 1);
        console.log("updated", removedData);
        setQuestionData(updated)
    }

    console.log("QuestionData", QuestionData);
    return (
        <div className='bg-background min-h-[50.8vh] flex justify-center py-10'>
            <div className='w-[80%]'>

                <h1 className="font-bold text-4xl text-center underline">Quiz Section</h1>

                {/* Main Part */}
                <div className="my-10 drop-shadow-lg shadow-ring bg-white p-10 rounded-2xl">
                    <h2 className='font-semibold text-2xl'>Add New Questions</h2>

                    {QuestionData.map((q, index) => (
                        <div className='mt-8' key={index}>
                            {/* Question Text */}
                            <div>
                                <Label className='font-semibold text-[17px]'>Question Text: {index + 1}</Label>
                                <Textarea placeholder='Please Provide description of Event' className='mt-3 bg-primary-foreground border border-black shadow-2xl' name='QuestionText' value={QuestionData[index].QuestionText} onChange={(e) => onChangeHandle(e, index)} />
                            </div>

                            {/* Question type and marks */}
                            <div className='pt-4 grid grid-cols-2 gap-8 items-center'>
                                <div>
                                    <Label className='font-semibold text-[17px]'>Question Type</Label>
                                    <Select onValueChange={(e) => onSelectHandle(e, index)}>
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
                                    <Label className='font-semibold text-[17px]'>Marks</Label>
                                    <Input className='mt-3 bg-primary-foreground border border-black shadow-2xl outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black' placeholder='Enter mid-sem marks' type='text' name='Marks' value={QuestionData[index].Marks} onChange={(e) => onChangeHandle(e, index)} required />
                                </div>
                            </div>


                            {/* Answer Option */}

                            <div className='pt-4'>
                                <Label className='font-semibold text-[17px]'>Answer Options</Label>
                                {/* Option 1 */}
                                {q.option.map((_, optindex) => (
                                    <Input key={optindex} className='mt-3 bg-primary-foreground border border-black shadow-2xl outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black'
                                        placeholder={`Option ${optindex + 1}`} type='text' name='option' value={QuestionData[index].option[optindex]} onChange={(e) => onOptionChangeHandle(e, index, optindex)} required />
                                ))}
                            </div>
                            {/* upload Image */}
                            <div className='pt-4'>
                                <Label className='font-semibold text-[17px]'>Upload Question Image (Optional)</Label>
                                <div className='flex items-center gap-3 pt-3'>
                                    <div className='w-full'>
                                        <Input type='file' className='border border-black shadow-2xl'></Input>
                                    </div>
                                    <div>
                                        <Button className='bg-transparent hover:bg-transparent border border-black shadow-2xl'><LuImagePlus className='text-black'/></Button>
                                    </div>
                                </div>
                            </div>

                            {/* Add Question and cancel */}
                            <div className='flex items-center gap-5 pt-10'>
                                <Button className='text-[16px] py-5 px-10 cursor-pointer' onClick={AddQuestionHandle}>Add Question</Button>
                                <Button className='text-[16px] py-5 px-10 cursor-pointer bg-popover border border-black text-black hover:bg-popover' disabled={QuestionData.length <= 1} onClick={() => onCancelHandle(index)}>Cancel</Button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default QuizAddQuestionComponent