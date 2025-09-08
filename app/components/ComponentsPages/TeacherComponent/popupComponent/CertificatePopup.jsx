import certificate20 from './certificate20.pdf'
import { IoClose } from "react-icons/io5";

const CertificatePopup = ({onCloseEvent,certificate}) => {
    return (
        <div className='flex justify-center h-full items-center'>
            <div className='bg-white p-5 rounded-[10px] '>
                <div className='flex justify-end pb-5'>
                    <IoClose className='cursor-pointer text-2xl' onClick={onCloseEvent} />
                </div>
                <div className='border rounded-xl overflow-hidden shadow-md'>
                    <object data={certificate20} width={800} height={550} ></object>
                </div>
            </div>
        </div>
    )
}

export default CertificatePopup