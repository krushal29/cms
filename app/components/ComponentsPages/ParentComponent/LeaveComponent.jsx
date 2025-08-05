import {  useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../../ui/pagination';

const data = [
  { id: 1, LeaveReasons: 'Medical Emergency', From: '12/2/2025', To: '15/2/2025', Status: 'Approved' },
  { id: 2, LeaveReasons: 'Personal Reasons', From: '15/6/2025', To: '16/6/2025', Status: 'Pending' },
  { id: 3, LeaveReasons: 'Study Purpose', From: '16/8/2025', To: '18/8/2025', Status: 'Rejected' },
  { id: 4, LeaveReasons: 'Family Function', From: '10/3/2025', To: '12/3/2025', Status: 'Approved' },
  { id: 5, LeaveReasons: 'Travel', From: '22/5/2025', To: '25/5/2025', Status: 'Pending' },
  { id: 6, LeaveReasons: 'Workshop Attendance', From: '5/4/2025', To: '7/4/2025', Status: 'Approved' },
  { id: 7, LeaveReasons: 'Health Checkup', From: '30/1/2025', To: '31/1/2025', Status: 'Rejected' },
  { id: 8, LeaveReasons: 'Exam Preparation', From: '1/7/2025', To: '5/7/2025', Status: 'Approved' },
  { id: 9, LeaveReasons: 'Family Emergency', From: '18/6/2025', To: '20/6/2025', Status: 'Pending' },
  { id: 10, LeaveReasons: 'Religious Event', From: '9/9/2025', To: '10/9/2025', Status: 'Approved' },
  { id: 11, LeaveReasons: 'Religious Event', From: '9/9/2025', To: '10/9/2025', Status: 'Approved' },
];

const LeaveComponent = () => {
      const [currentPage, setCurrentPage] = useState(1);
      const itemsPerPage = 10;
    
      const totalPages = Math.ceil(data.length / itemsPerPage);
      const paginatedLeave = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );
  return (
     <div className="bg-background min-h-[50.8vh] flex justify-center py-12">
      <div className="w-[80%]">
        <h1 className="font-bold text-4xl text-center underline">
          Leave Management
        </h1>

        <div className="pt-13">
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
              {paginatedLeave.map((val, index) => (
                <TableRow key={index}>
                  <TableCell className="py-3">{val.id}</TableCell>
                  <TableCell>{val.LeaveReasons}</TableCell>
                  <TableCell>{val.From}</TableCell>
                  <TableCell>{val.To}</TableCell>
                  <TableCell>
                    <p
                      className={`${
                        val.Status === 'Approved'
                          ? 'bg-green-200 text-green-600'
                          : val.Status === 'Pending'
                          ? 'bg-amber-200 text-amber-600'
                          : val.Status === 'Rejected'
                          ? 'bg-rose-200 text-rose-600'
                          : ''
                      } py-1.5 px-5 rounded-2xl inline font-semibold`}
                    >
                      {val.Status}
                    </p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <Pagination className="my-10 flex justify-center">
          <PaginationContent>
            {/* Previous */}
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) setCurrentPage(currentPage - 1);
                }}
                className="transition-all duration-200 text-foreground hover:bg-muted border border-border rounded-md px-3 py-2 text-[17px]"
              />
            </PaginationItem>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, idx) => (
              <PaginationItem key={idx}>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(idx + 1);
                  }}
                  className={`w-10 h-10 flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 border 
                  ${
                    currentPage === idx + 1
                      ? 'bg-primary text-primary-foreground border-primary shadow-2xl'
                      : 'bg-background text-foreground border-border hover:bg-muted text-[17px]'
                  }`}
                >
                  {idx + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            {/* Next */}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                }}
                className="transition-all duration-200 text-foreground hover:bg-muted border border-border rounded-md px-3 py-2 text-[17px]"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

export default LeaveComponent