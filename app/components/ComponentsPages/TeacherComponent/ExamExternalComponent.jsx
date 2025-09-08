import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../ui/select"
import { Button } from '../../ui/button'
import { useState } from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";

const enrollmentNumbers = [
    '1230204050001',
    '1230204050002',
    '1230204050003',
    '1230204050004',
    '1230204050005',
    '1230204050006',
    '1230204050007',
    '1230204050008',
    '1230204050009',
    '1230204050010',
    '1230204050011',
    '1230204050012',
    '1230204050013',
    '1230204050014',
    '1230204050015',
    '1230204050016',
    '1230204050017',
    '1230204050018',
    '1230204050019',
    '1230204050020',
    '1230204050021',
    '1230204050022',
    '1230204050023',
    '1230204050024',
    '1230204050025',
    '1230204050026',
    '1230204050027',
    '1230204050028',
    '1230204050029',
    '1230204050030'
];




const ExamExternalComponent = () => {
    const [filterData, setFilterData] = useState({
        sem: '',
        selectBranch: ''
    })

    const onFilterHandle = (e) => {
        const { name, value } = e;
        setFilterData({ ...filterData, [name]: value })
    }
    console.log(filterData);



    // split enrollmentNumbers
    const columns = 4;
    const rowsPerColumn = Math.ceil(enrollmentNumbers.length / columns);


    const splitColumns = Array.from({ length: columns }, (_, colIndex) => enrollmentNumbers.slice(colIndex * rowsPerColumn, (colIndex + 1) * rowsPerColumn))


    return (
        <div className="bg-background min-h-[50.8vh] flex justify-center py-10">
            <div className="w-[80%]">
                <h1 className="font-bold text-4xl text-center underline">Examination Details</h1>

                <div className="flex mt-18 mb-10 gap-5">
                    <div className="w-1/4 border border-black rounded-[12px]">
                        <Select onValueChange={(e) => onFilterHandle({ name: 'sem', value: e })}>
                            <SelectTrigger className="w-full bg-secondary ">
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

                    <div className="w-1/4 border border-black rounded-[12px]">
                        <Select onValueChange={(e) => onFilterHandle({ name: "selectBranch", value: e })}>
                            <SelectTrigger className="w-full bg-secondary">
                                <SelectValue placeholder="Select Branch" />
                            </SelectTrigger>
                            <SelectContent className="bg-secondary">
                                <SelectItem value="ComputerEngineering">Computer Engineering</SelectItem>
                                <SelectItem value="InformationTechnology">Information Technology</SelectItem>
                                <SelectItem value="ElectricalEngineering">Electrical Engineering</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="w-1/6">
                        <Button className="w-full cursor-pointer px-7">Search</Button>
                    </div>
                </div>



                {/* File upload Section */}
                <div className="mb-8 border border-black rounded-2xl p-4 bg-card">
                        <Label className="font-semibold">File Upload</Label>

                        <Input type="file" className="bg-white mt-3 cursor-pointer"></Input>
                </div>


                {/* --- Enrollment Numbers Grid --- */}
                <div
                    className="grid gap-x-10 py-10 bg-card px-10 rounded-2xl drop-shadow-lg shadow-ring border border-black"
                    style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
                >
                    {splitColumns.map((col, colIndex) => (
                        <div key={colIndex} className="flex flex-col gap-y-4 ">
                            {col.map((val, index) => {
                                const number = colIndex * rowsPerColumn + index + 1;
                                return (
                                    <div key={index} className="flex items-center justify-between">
                                        <p className="text-lg font-medium">
                                            {number}. {val} :
                                        </p>
                                        <div className="w-[28%]">
                                            <Button
                                                className="cursor-pointer py-4 px-5 text-[15px]"
                                                onClick={() => setAddMarks(val)}
                                            >
                                                Upload
                                            </Button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}

                    <div className="w-full mt-10">
                        <Button className="w-full cursor-pointer px-7">Add Marks</Button>
                    </div>
                </div>

                {/* end of grid */}

            </div>
        </div>
    )
}

export default ExamExternalComponent