import profile from '../../../../public/Avatar.png'
import { Button } from '../../ui/button'
import { useState } from 'react';
import { FaBook, FaHourglassHalf, FaFileAlt } from "react-icons/fa";
import { RiUserAddFill } from "react-icons/ri";
import { Label } from '../../ui/label'
import { Input } from '../../ui/input'
import TeacherPersonalDetails from './TeacherPersonalDetails';


const TeacherDashboardComponent = () => {
    const [EditProfile, setEditProfile] = useState(false);

    const [FilePhoto, setFilePhoto] = useState(profile);

    const onFileHandle = (e) => {
        console.log("click");
        const file = e.target.files[0];
        console.log(file);
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setFilePhoto(imageUrl);
            setEditProfile(false);
        }
    }
    console.log(FilePhoto);


    return (
        <div className="bg-background min-h-[50.8vh] flex justify-center py-8">
            <div className='w-[72%]'>
                <div className='bg-secondary flex items-center justify-between rounded-2xl py-3 px-10 drop-shadow-lg shadow-ring'>
                    <div className='flex items-center w-[40%] justify-between'>
                        <div className='w-[32%]'>
                            {EditProfile ? <div>
                                <Label htmlFor="uploadImage" className='cursor-pointer'>
                                    <div id='AddProfile' className='border-2 border-dashed w-full aspect-square bg-gray-100 border-gray-400 flex items-center justify-center rounded-[50%] transition hover:border-blue-500 hover:bg-blue-50'>
                                        <RiUserAddFill className='text-5xl text-gray-500' />
                                    </div>
                                </Label>
                                <Input type="file" hidden id='uploadImage' accept='.jpg' onChange={onFileHandle} />
                            </div> : <img src={FilePhoto} alt="" className='w-[100%] h-[129.91px] rounded-[50%]' />}


                        </div>
                        <div>
                            <h1 className='text-3xl font-bold'>John Doe !</h1>
                            <p className='pt-1'>Computer Science and Engineering</p>
                        </div>
                    </div>
                    <div>
                        <Button className='px-10 py-5 text-[18px] cursor-pointer' onClick={() => setEditProfile(true)}>edit</Button>
                    </div>
                </div>



                <div className='flex justify-between mt-10 gap-3'>
                    {/* CGPA Card */}
                    <div className='bg-green-200 w-[28%] border py-4 px-4 border-green-800 rounded-2xl text-green-800'>
                        <div className="flex items-center justify-between">
                            <h1 className='text-[17px] font-semibold'>Total course Teaching</h1>
                            <FaBook className="text-[18px]" />
                        </div>
                        <p className='pt-2 text-[16px] font-semibold'>7</p>
                    </div>

                    {/* Semester Card */}
                    <div className='w-[28%] bg-cyan-200 border py-4 px-4 border-cyan-800 rounded-2xl text-cyan-800'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-[17px] font-semibold'>Years of Experince</h1>
                            <FaHourglassHalf className="text-[18px]" />
                        </div>
                        <p className='pt-2 text-[16px] font-semibold'>8</p>
                    </div>

                    {/* Achievements Card */}
                    <div className='bg-pink-200 w-[28%] border py-4 px-4 border-pink-800 rounded-2xl text-pink-800'>
                        <div className="flex items-center justify-between">
                            <h1 className='text-[17px] font-semibold'>Research Publications</h1>
                            <FaFileAlt className="text-[18px]" />
                        </div>
                        <p className='pt-2 text-[16px] font-semibold'>10</p>
                    </div>
                </div>


                {/* Personal Details */}
                <div className='bg-secondary my-10 p-5 rounded-2xl shadow-2xl'>
                    <TeacherPersonalDetails />
                </div>
            </div>
        </div>
    )
}

export default TeacherDashboardComponent
