import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

function SideBar() {
    return (
        <div className="sidebar">
            <SideBarIcon icon={<FaFire size="28" />} />

            <SideBarIcon icon={<BsPlus size="42" />} />

            <SideBarIcon icon={<BsFillLightningFill size="24" />} />

            <SideBarIcon icon={<FaPoo size="21" />} />

            <SideBarIcon icon={<BsGearFill size="26" />} />
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
