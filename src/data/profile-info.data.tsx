import { GoOrganization } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io";
import { HiMiniLink } from "react-icons/hi2";

export const ProfileInfoData = [
    {
        icon: () => <GoOrganization className={'text-[#8d96a0] h-5 w-5 mt-0.5'}/>,
        text: 'TwoPugs'
    },
    {
        icon: () => <IoLocationOutline className={'text-[#8d96a0] h-5 w-5 mt-0.5'}/>,
        text: 'Saddar, Karachi, Pakistan'
    },
    {
        icon: () => <MdOutlineMail className={'text-[#8d96a0] h-5 w-5 mt-0.5'}/>,
        text: 'hussainquetta53@gmail.com'
    },
    {
        icon: () => <IoLogoLinkedin className={'text-[#8d96a0] h-5 w-5 mt-0.5'}/>,
        text: 'in/hussain-saifuddin786'
    },
    {
        icon: () => <HiMiniLink className={'text-[#8d96a0] h-5 w-5 mt-0.5'}/>,
        text: 'https://www.upwork.com/freelancers/~0163135a837eb80c9c?mp_source=share'
    }
]
