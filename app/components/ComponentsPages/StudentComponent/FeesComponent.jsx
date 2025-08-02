import { useState } from 'react';
import { Button } from '../../ui/button'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../ui/table"
import { MdOutlineFileDownload } from "react-icons/md";

const FeesComponent = () => {
    return (
        <div className='bg-background min-h-[50.8vh] flex justify-center py-8'>
            <div className='w-[80%]'>
                <h1 className='font-bold text-4xl text-center underline'>Fees Management</h1>

                <div className="py-15 drop-shadow-lg shadow-ring">
                    <Table className="bg-white rounded-[7px]">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-semibold text-[17px]">Sr No.</TableHead>
                                <TableHead className="font-semibold text-[17px]">Total fees</TableHead>
                                <TableHead className="font-semibold text-[17px]">Semester</TableHead>
                                <TableHead className="font-semibold text-[17px]">Date</TableHead>
                                <TableHead className="font-semibold text-[17px]">Payment Type</TableHead>
                                <TableHead className="font-semibold text-[17px]">Download </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((val, index) => (
                                <TableRow key={index}>
                                    <TableCell className="py-3">1</TableCell>
                                    <TableCell>65250 /-</TableCell>
                                    <TableCell>2</TableCell>
                                    <TableCell>5/2/2025</TableCell>
                                    <TableCell>NEFT</TableCell>
                                    <TableCell className='flex items-center cursor-pointer'><span className='font-semibold underline'>Download Receipt</span><span className='pl-2'><MdOutlineFileDownload className='text-xl' /></span></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default FeesComponent