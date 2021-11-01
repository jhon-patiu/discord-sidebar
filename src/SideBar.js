import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

function SideBar() {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white">
            <SideBarIcon icon={<FaFire size="28" />} />

            <SideBarIcon icon={<BsPlus size="42" />} />

            <SideBarIcon icon={<BsFillLightningFill size="26" />} />

            <SideBarIcon icon={<FaPoo size="26" />} />
        </div>
    );
}

const SideBarIcon = ({ icon, text = "tooltip" }) => (
    <div className="sidebar-icon group">
        {icon}

        <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
);

export default SideBar;
