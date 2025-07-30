import { useState } from 'react'
import { Button } from '../../ui/button'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../ui/table"
import ApplyLeave from './ApplyLeave'

const data = [
    {
        id: 1,
        LeaveReasons: "Medical Emergency",
        From: "12/2/2025",
        To: "15/2/2025",
        Status: "Approved"
    },
    {
        id: 2,
        LeaveReasons: "Personal Reasons",
        From: "15/6/2025",
        To: "16/6/2025",
        Status: "Pending"
    },
    {
        id: 3,
        LeaveReasons: "Study Purpose",
        From: "16/8/2025",
        To: "18/8/2025",
        Status: "Rejected"
    }
]
const LeaveManagement = () => {
    const [LeavePopup, setLeavePopup] = useState(false);
    const [form, setForm] = useState({
        EnrollmentNumber: "",
        LeaveType: "",
        FromDate: "",
        ToDate: "",
        ProvideReason: "",
        UploadCertificate: ""
    })

    const onChangeHandle = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }
    
    const onSubmitHandle=(e)=>{
        e.preventDefault();
        try{
            console.log(form);
        }catch(e){
            console.log(e);
        }
    }

    const onCloseLeave = () => {
        setLeavePopup(false)
    }

    return (
        <div className='bg-background min-h-[50.8vh] flex justify-center py-10'>
            <div className="w-[80%]">
                <h1 className='font-bold text-4xl text-center underline'>Leave Management</h1>
                <div className='flex items-center py-10'>
                    <div>
                        <p className='text-[18px] font-semibold'>Apply for Leave :</p>
                    </div>
                    <div className='pl-5'>
                        <Button className='px-10 cursor-pointer' onClick={() => setLeavePopup(true)}>Apply</Button>
                    </div>
                </div>

                <div className='py-5'>
                    <Table className="bg-white rounded-[7px] shadow-2xl drop-shadow-secondary">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-semibold text-[17px]">Sr No.</TableHead>
                                <TableHead className="font-semibold text-[17px]">Leave Reasons</TableHead>
                                <TableHead className="font-semibold text-[17px]">From</TableHead>
                                <TableHead className="font-semibold text-[17px]">To</TableHead>
                                <TableHead className="font-semibold text-[17px]">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((val, index) => (
                                <TableRow key={index}>
                                    <TableCell className="py-3">{index + 1}</TableCell>
                                    <TableCell>{val.LeaveReasons}</TableCell>
                                    <TableCell>{val.From}</TableCell>
                                    <TableCell>{val.To}</TableCell>
                                    <TableCell><p className={`${val.Status == "Approved" ? 'bg-green-200 text-green-600' : val.Status == "Pending" ? 'bg-amber-200 text-amber-600' : val.Status == "Rejected" ? 'bg-rose-200 text-rose-600' : ''} py-1.5 px-5 rounded-2xl inline  font-semibold`}>{val.Status}</p></TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </div>
            </div>
            {
                LeavePopup && <div className='backdrop-blur-[3px] fixed inset-0 drop-shadow-lg shadow-ring'><ApplyLeave onCloseLeave={onCloseLeave} form={form} onChangeHandle={onChangeHandle} onSubmitHandle={onSubmitHandle}/></div>
            }
        </div>
    )
}

export default LeaveManagement