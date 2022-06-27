import React from 'react';
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as BiIcons from "react-icons/bi"

export const SidebarData = [
    {
        title:"Tasks",
        path:'/tasks',
        icon: <BiIcons.BiTask />,
        cName: 'nav-text'
    },
    {
        title:"Meetings",
        path:'/meetings',
        icon:<IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title:"Meeting rooms",
        path:'/meetingroom',
        icon:<IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title:"User Profile",
        path:'/userprofile',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    }
]