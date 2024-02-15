import { GiHamburgerMenu } from "react-icons/gi";
import { logo, user_logo } from "../utils/constants";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineVideoCall } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toggleopen } from "../utils/appSlice";

const Navbar=()=>{
    const dispatch=useDispatch();
    const toggleMenu=()=>{
        dispatch(toggleopen());
    }
    return <>
    <div className="flex justify-between items-center bg-slate-300">
        <div className="flex items-center justify-between">
        <button  className="mx-4" onClick={toggleMenu}> <GiHamburgerMenu /> </button>
        <img src={logo} alt="company_logo" className="w-24 h-24"/>
        </div>
        <div className="">
            <input type="text" className=" border-2 border-slate-500 rounded-l-full w-96 h-10 outline-none" placeholder="Search" /> 
            <button className="bg-slate-500 rounded-r-full h-10 w-20">search</button>
        </div>
        <div className="flex justify-between items-center">
        <IoNotificationsOutline />
        <MdOutlineVideoCall className="ml-4" />
        <img src={user_logo} alt="user_logo" className="w-10 h-10 mx-4"/>
        </div>
        </div>

    </>
}
export default Navbar;