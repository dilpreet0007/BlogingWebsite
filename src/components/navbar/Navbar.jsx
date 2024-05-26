import React from "react";
import {
    Navbar,
    Typography,
    IconButton,
    Avatar,
    Collapse,
} from "@material-tailwind/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShareAlt, AiOutlineSearch } from 'react-icons/ai'
import myContext from "../../context/data/myContext";
import SearchDialog from "../searchDialog/SearchDialog";
import ShareDialogBox from "../shareDialogBox/ShareDialogBox";


export default function Nav() {
    const [openNav, setOpenNav] = React.useState(false);

    const context = useContext(myContext);
    const { mode, toggleMode } = context;

    const admin = localStorage.getItem('admin');



    // All NavList 
    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
                style={{ color: mode === 'dark' ? 'white' : 'white' }}
            >
                <Link to={'/'} className="flex items-center">
                    Home
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
                style={{ color: mode === 'dark' ? 'white' : 'white' }}
            >
                <Link to={'/allblogs'} className="flex items-center">
                    Blogs
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
                style={{ color: mode === 'dark' ? 'white' : 'white' }}
            >
                <Link to={'/adminlogin'} className="flex items-center">
                    Admin Login
                </Link>
            </Typography>
        </ul>
    );

    return (
        <>
            {/* Navbar  */}
            <Navbar
                className="sticky inset-0 z-20 h-max max-w-full border-none rounded-none py-2 px-4 lg:px-8 lg:py-2"
                style={{ background: mode === 'dark' ? 'rgb(107, 48, 52)' : 'rgb(107, 48, 52)' }}>

                {/* Desktop View  */}
                <div className="flex items-center justify-between text-blue-gray-900">

                    {/* Home Page Link  */}
                    <Link to={'/'}>
                        <Typography
                            as="a"
                            className="mr-4 cursor-pointer py-1.5 text-xl font-bold flex gap-2 items-center"
                            style={{ color: mode === 'dark' ? 'white' : 'white' }}
                        >
                            {/* Logo Image  */}
                            <img
                                className=' w-10 h-10 '
                                src='https://www.freeiconspng.com/thumbs/blogger-logo-icon-png/blogger-logo-icon-png-22.png'
                            />
                            {/* Logo Text  */}
                            <span>
                                MyBlogs
                            </span>
                        </Typography>
                    </Link>

                    {/* All Items  */}
                    <div className="flex items-center gap-4">

                        {/* Navlist  */}
                        <div className="hidden lg:block">
                            {navList}
                        </div>

                        {/* Search Icon */}
                        <div>
                            {/* <AiOutlineSearch size={20} color="white" /> */}
                            <SearchDialog/>
                        </div>

                        

                        <div>
                            <ShareDialogBox/>
                        </div>

                        {/* Admin Profile Pic */}
                        <div>
                            {admin 
                            ? <Link to={'/dashboard'}>
                            <div className="">
                                <Avatar
                                    key={1}
                                    src={'https://static.vecteezy.com/system/resources/previews/021/548/095/non_2x/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg'}
                                    alt="avatar"
                                    withBorder={true}
                                    className="p-0.5 text-red-500 w-10 h-10"
                                    style={{
                                        border:
                                            mode === 'dark'
                                                ?
                                                '2px solid rgb(226, 232, 240)'
                                                :
                                                '2px solid rgb(107, 48, 52)'
                                    }}
                                />
                            </div>
                        </Link> 
                        : ""}
                        </div>

                       


                        {/* Mobile Toggle  */}
                        <div>
                            <IconButton
                                className="ml-auto h-10 w-10 text-inherit rounded-lg lg:hidden"
                                ripple={false}
                                onClick={() => setOpenNav(!openNav)}
                                style={{ background: mode === 'light' ? '#ced6e0' : '#57606f', color: mode === 'dark' ? 'white' : 'black' }}
                            >
                                {openNav ?
                                    (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            className="h-6 w-6"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    )
                                    :
                                    (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                            </IconButton>
                        </div>

                    </div>
                </div>

                {/* Mobile View */}
                <Collapse open={openNav}>
                    {/* NavList  */}
                    {navList}
                </Collapse>
            </Navbar>
        </>
    );
}