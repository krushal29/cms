import { IoClose } from "react-icons/io5";
import { Label } from "../../../ui/label";
import { Input } from "../../../ui/input";
import { Button } from "../../../ui/button";

const generateEnrollment = () => {
  return (
   <div className="shadow-2xl flex justify-center h-screen items-center relative">
              <div className="bg-card px-10 pt-7 rounded-[10px] w-[27%] relative">
                  <div className="flex justify-between">
                      <h1 className='font-semibold text-2xl'>Generate Enrollment</h1>
                      <p><IoClose className='cursor-pointer text-2xl absolute right-3 top-4' /></p>
                  </div>
  
  
                  {/* start form */}
                  <form action="#">
                      {/* Branch Name */}
                      <div className="pt-4">
                          <Label className='font-semibold text-[17px]'>Enter Batch</Label>
                          <Input className='mt-3 bg-primary-foreground border border-black shadow-2xl outline-none focus:outline-none focus:ring-0 focus:border-black focus-visible:ring-0 hover:border-black data-[state=open]:border-black' placeholder='Batch' name="Batch"  type='text' required />
                      </div>
  
  
                      <div className='py-8'>
                          <Button className='w-1/2 cursor-pointer'>Generate</Button>
                      </div> 
                  </form>
              </div>
          </div>
  )
}

export default generateEnrollment