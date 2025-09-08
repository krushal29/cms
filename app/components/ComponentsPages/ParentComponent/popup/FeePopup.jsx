import { IoClose } from "react-icons/io5";
import { FiCreditCard } from "react-icons/fi";
import { BiQrScan } from "react-icons/bi";
import { FiSmartphone } from "react-icons/fi";
import { Label } from "../../../ui/label";
import { Input } from "../../../ui/input";
import { Button } from "../../../ui/button";
import { RadioGroup, RadioGroupItem } from "../../../ui/radio-group";

const FeePopup = ({onClosePayPopup}) => {
  return (
        <div className="flex justify-center h-screen items-center relative">
            <div className="bg-card px-10 pt-7 rounded-[10px] w-[34%] relative h-[90%] overflow-y-scroll drop-shadow-2xl shadow-ring">
                <div className='flex justify-between'>
                    <h1 className='font-semibold text-2xl'>Pay Fees</h1>
                    <p><IoClose className='cursor-pointer text-2xl absolute right-3 top-4' onClick={onClosePayPopup} /></p>
                </div>


                <div className="bg-secondary rounded-[10px] drop-shadow-lg shadow-ring flex justify-between px-5 py-3 mt-5">
                    <div><p className="font-semibold text-[16px]">Amount to Pay :  </p></div>
                    <div>
                        <p className="font-semibold text-[16px]">65252/-</p>
                    </div>
                </div>

                <div className="pt-5">
                    <p className="font-semibold">Select Payment Type :</p>
                </div>

                <RadioGroup className="">
                    <div className="flex items-center bg-secondary border border-black drop-shadow-lg shadow-ring mt-5 rounded-[10px] px-5 py-3 space-x-3 w-full">
                        <div className="flex items-center space-x-2 text-[15px]">
                            <RadioGroupItem className="border-black bg-background" value="Undergraduate (Ug)" id="Undergraduate" /><span className="flex items-center"><FiCreditCard className="text-[#0A0DC2]" /> <span className="pl-2">Credit Card</span></span>
                        </div>
                    </div>
                    <div className="flex items-center bg-secondary drop-shadow-lg shadow-ring mt-1 rounded-[10px] px-5 py-3 space-x-3">
                        <div className="flex items-center space-x-2 text-[15px]">
                            <RadioGroupItem className="border-black bg-background" value="Ute (Ug)" id="Undergraduate" /><span className="flex items-center"><FiCreditCard className="text-[#1AB127]" /> <span className="pl-2">Debit Card</span></span>
                        </div>
                    </div>


                    <div className="flex items-center bg-secondary drop-shadow-lg shadow-ring mt-1 rounded-[10px] px-5 py-3 space-x-3">
                        <div className="flex items-center space-x-2 text-[15px]">
                            <RadioGroupItem className="border-black bg-background" value="Ute (g)" id="Undergraduate" /><span className="flex items-center"><BiQrScan className="text-[#F81B1B]" /> <span className="pl-2">Qr</span></span>
                        </div>
                    </div>


                    <div className="flex items-center bg-secondary drop-shadow-lg shadow-ring mt-1 rounded-[10px] px-5 py-3 space-x-3">
                        <div className="flex items-center space-x-2 text-[15px]">
                            <RadioGroupItem className="border-black bg-background" value="Ut(Ug)" id="Undergraduate" /><span className="flex items-center"><FiSmartphone className="text-[#5B21B6]" /> <span className="pl-2">Upi</span></span>
                        </div>
                    </div>

                    <div className="flex items-center bg-secondary drop-shadow-lg shadow-ring mt-1 rounded-[10px] px-5 py-3 space-x-3">
                        <div className="flex items-center space-x-2 text-[15px]">
                            <RadioGroupItem className="border-black bg-background" value="te (Ug)" id="Undergraduate" /><span className="flex items-center"><FiCreditCard className="text-[#F81B1B]" /> <span className="pl-2">Net Banking</span></span>
                        </div>
                    </div>

                </RadioGroup>



                <div className="border bg-secondary mt-8 py-2 px-5">
                    <h1 className="font-semibold text-[18px]">Card Details</h1>

                    <div className="pt-5">
                        <Label className="font-medium">CardHolder Name</Label>
                        <Input placeholder="Enter Name" className="mt-2 bg-background border-none" />
                    </div>


                    <div className="pt-5">
                        <Label className="font-medium">Card Number</Label>
                        <Input className="mt-2 bg-background border-none" />
                    </div>


                    <div className="flex gap-2 pt-5">
                        <div>
                            <Label className="font-medium">Expiry Date</Label>
                            <Input className="mt-2 bg-background border-none" placeholder="MM/YY" />
                        </div>
                        <div>
                            <Label className="font-medium">CVV</Label>
                            <Input className="mt-2 bg-background border-none" placeholder="Enter Cvv" />
                        </div>
                    </div>
                </div>

                <div className="py-8">
                    <Button className="w-full text-[17px] py-5 cursor-pointer">Pay</Button>
                </div>
            </div>
        </div>
    )
}

export default FeePopup