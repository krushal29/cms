import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../ui/select"
import { Input } from '../../ui/input'
import { Button } from '../../ui/button'
import { useState } from "react";
import AddMarksInternalVivaPopup from "./popupComponent/AddMarksInternalVivaPopup";
import EditMarksInternalVivaPopup from "./popupComponent/EditMarksInternalVivaPopup";
import { FaEdit } from "react-icons/fa";

const enrollmentNumbers = [
    '1230204050001', '1230204050002', '1230204050003', '1230204050004', '1230204050005',
    '1230204050006', '1230204050007', '1230204050008', '1230204050009', '1230204050010',
    '1230204050011', '1230204050012', '1230204050013', '1230204050014', '1230204050015',
    '1230204050016', '1230204050017', '1230204050018', '1230204050019', '1230204050020',
    '1230204050021', '1230204050022', '1230204050023', '1230204050024', '1230204050025',
    '1230204050026', '1230204050027', '1230204050028', '1230204050029', '1230204050030',
    '1230204050031', '1230204050032', '1230204050033', '1230204050034', '1230204050035',
    '1230204050036', '1230204050037', '1230204050038', '1230204050039', '1230204050040',
    '1230204050041', '1230204050042', '1230204050043', '1230204050044', '1230204050045',
    '1230204050046', '1230204050047', '1230204050048', '1230204050049', '1230204050050',
    '1230204050051', '1230204050052', '1230204050053', '1230204050054', '1230204050055',
    '1230204050056', '1230204050057', '1230204050058', '1230204050059', '1230204050060',
    '1230204050061', '1230204050062', '1230204050063', '1230204050064', '1230204050065',
    '1230204050066', '1230204050067', '1230204050068', '1230204050069', '1230204050070',
    '1230204050071', '1230204050072', '1230204050073', '1230204050074', '1230204050075',
    '1230204050076', '1230204050077', '1230204050078', '1230204050079', '1230204050080',
    '1230204050081', '1230204050082', '1230204050083', '1230204050084', '1230204050085',
    '1230204050086', '1230204050087', '1230204050088', '1230204050089', '1230204050090',
];



const ExamInternalVivaAddComponent = () => {
    const [addMarks, setAddMarks] = useState("")
    const [EditOption, setEditOption] = useState("");
    const [filterData, setFilterData] = useState({
        sem: '',
        ExamType: '',
        SelectBranch: ''
    })
    const [ExamData, setExamData] = useState({});
    const [EditData, setEditData] = useState({});
    const [file, setFile] = useState(null);
    console.log(addMarks);



    const onMarksHandle = (e) => {
        console.log(e.target.name);
        const { name, value } = e.target;

        const updated = { ...ExamData };

        if (!updated[addMarks]) {
            updated[addMarks] = {};
        }

        updated[addMarks][name] = value;

        setExamData(updated)
    }
    console.log(ExamData);

    const SubmitHandle = (e) => {
        setAddMarks("");
    }

    const onCloseHandle = () => setAddMarks("");


    // filter Data
    const onFilterChange = (e) => {
        const { name, value } = e;
        setFilterData({ ...filterData, [name]: value });
    }
    console.log(filterData);


    // Edit Popup
    const EditHandle = (e, val) => {
        console.log(e + val);
        setEditOption(val);
        let updated = { ...ExamData };
        updated = ExamData[val];
        setEditData(updated);
    }

    const onCloseEditPopup = () => setEditOption("");
    console.log("dfgb" + addMarks);

    const onChangeEdit = (e) => {
        const { name, value } = e.target;
        console.log(name + value);
        let updated = { ...ExamData };
        console.log("updated", updated);
        console.log("Add", EditOption, updated[EditOption]);

        updated[EditOption][name] = value;
        console.log("updated", updated);

        setExamData(updated);
    }

    const onSubmitEditHandle = () => setEditOption("");




    // split enrollmentNumbers
    const columns = 4;
    const rowsPerColumn = Math.ceil(enrollmentNumbers.length / columns);


    const splitColumns = Array.from({ length: columns }, (_, colIndex) => enrollmentNumbers.slice(colIndex * rowsPerColumn, (colIndex + 1) * rowsPerColumn))
    return (
        <div className="bg-background min-h-[50.8vh] flex justify-center py-10">
            <div className="w-[80%]">
                <h1 className="font-bold text-4xl text-center underline">Examination Details</h1>

                <div className="flex mt-18 mb-10 gap-5">
                    <div className="w-1/3 border border-black rounded-[12px]">
                        <Select onValueChange={(e) => onFilterChange({ name: 'sem', value: e })}>
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

                    <div className="w-1/3 border border-black rounded-[12px]">
                        <Select onValueChange={(e) => onFilterChange({ name: 'ExamType', value: e })}>
                            <SelectTrigger className="w-full bg-secondary">
                                <SelectValue placeholder="Select Exam Type" />
                            </SelectTrigger>
                            <SelectContent className="bg-secondary">
                                <SelectItem value="Internal">Internal</SelectItem>
                                <SelectItem value="MidSem">Mid sem</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="w-1/3 border border-black rounded-[12px]">
                        <Select onValueChange={(e) => onFilterChange({ name: 'SelectBranch', value: e })}>
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



                {/* --- File Upload Section --- */}
                <div className="mb-8 border border-black rounded-[12px] p-4 bg-card">
                    <label className="block mb-2 font-semibold">Upload File</label>
                    <Input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        className="cursor-pointer bg-white"
                    />

                </div>

                {/* --- Enrollment Numbers Grid --- */}
                <div
                    className="grid gap-x-12 py-10 bg-card px-10 rounded-2xl drop-shadow-lg shadow-ring border border-black"
                    style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
                >
                    {splitColumns.map((col, colIndex) => (
                        <div key={colIndex} className="flex flex-col gap-y-4">
                            {col.map((val, index) => {
                                const number = colIndex * rowsPerColumn + index + 1;
                                return (
                                    <div key={index} className="flex items-center justify-between">
                                        <p className="text-lg font-medium">
                                            {number}. {val} :
                                        </p>
                                        <div className="w-[28%]">
                                            {
                                                ExamData[val]?.AttendanceMarks !== undefined && ExamData[val]?.FileMarks
                                                    !== undefined && ExamData[val]?.VivaMarks
                                                    !== undefined ? <div onClick={(e) => EditHandle(e, val)} className="flex items-center cursor-pointer"> <Button className="bg-white  border-1 border-black text-black hover:bg-white">{parseInt(ExamData[val]?.AttendanceMarks) + parseInt(ExamData[val]?.FileMarks) + parseInt(ExamData[val]?.VivaMarks)}/25</Button> <span className="pl-2"><FaEdit /></span> </div> : <Button
                                                        className="cursor-pointer py-4 px-6 text-[15px]"
                                                        onClick={() => setAddMarks(val)}
                                                    >
                                                    add
                                                </Button>
                                            }
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

            </div>


            {/* open popup */}
            {addMarks && <div className="inset-0 fixed backdrop-blur-[1px]"><AddMarksInternalVivaPopup onCloseEvent={onCloseHandle} ExamData={ExamData} onMarksHandle={onMarksHandle} SubmitHandle={SubmitHandle} /></div>}

            {EditOption && <div className="inset-0 fixed backdrop-blur-[1px]"><EditMarksInternalVivaPopup form={EditData} onCloseEvent={onCloseEditPopup} onSubmitEditHandle={onSubmitEditHandle} onChangeEdit={onChangeEdit} /></div>}
        </div>
    )
}

export default ExamInternalVivaAddComponent