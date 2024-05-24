import React from 'react';
import Image from 'next/image';
import {ProfileInfoData} from "@/data/profile-info.data";
import {Button} from "@/components/ui/button";
import { GrDocumentPdf } from "react-icons/gr";

const ProfileHeaderComponent = () => {
    return (
        <div className="flex flex-col items-center bg-gray-900 p-6 text-white gap-4 w-[37%]">
            <Image
                src="/profile-pic.png" // Replace with actual path
                alt="Profile Picture"
                width={250}
                height={250}
                className="rounded-full"
            />
            <div className={'text-start w-full'}>
                <h1 className="text-2xl font-bold">Hussain Saifuddin</h1>
                <p className="text-[#8d96a0]">Hussain Saifuddin • he/him</p>
            </div>
            <p className={'text-start'}>Web & Hybrid App Developer | 4 Years Experience | Passionate about crafting digital
                experiences. 🚀 #WebDev #MobileApps</p>
            <div className={'flex flex-col gap-1'}>
                {ProfileInfoData.map((info, key) => (
                    <div key={key} className={'flex gap-1 items-start'}>
                        {info.icon()}
                        <p className={'text-start w-11/12 break-all text-sm'}>{info.text}</p>
                    </div>
                ))}
            </div>
            <div className={'bg-border-color h-px w-full rounded-full '}/>
            <Image src={'/resume.png'} alt={'Resume'} width={200} height={350}/>
            <Button variant={'outline'} className={'w-full gap-2'}>
                <GrDocumentPdf /> Download
            </Button>
        </div>
    );
};

export default ProfileHeaderComponent;
